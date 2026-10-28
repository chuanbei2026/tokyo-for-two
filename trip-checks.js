/* Wishlist checks ("想去").
   Without a share link they stay in this browser (localStorage, key tokyo-wishlist-v1).
   With the private share link (…#share=<passcode>) they sync through the trip's wishlist API:
   the passcode is kept in this browser and sent as the X-Trip-Key header, never in a URL. */
const TRIP_CHECKS_KEY='tokyo-wishlist-v1';
const TRIP_CLOUD_CACHE='tokyo-wishlist-cloud-v1';
const TRIP_SHARE_KEY='tokyo-share-key-v1';
const TRIP_MERGE_DONE='tokyo-wishlist-merge-done-v1';
const TRIP_API='https://x7igeq5xm4w3zkau7pufqedupu0zkpdb.lambda-url.us-west-2.on.aws';
const TRIP_POLL_MS=20000;

const tripStore={get(k){try{return localStorage.getItem(k);}catch{return null;}},set(k,v){try{localStorage.setItem(k,v);return true;}catch{return false;}},del(k){try{localStorage.removeItem(k);}catch{}}};
function tripReadMap(k){try{const v=JSON.parse(tripStore.get(k)||'{}');return v&&typeof v==='object'&&!Array.isArray(v)?v:{};}catch{return {};}}

/* Take the passcode out of the address bar before the page router reads location.hash. */
let tripShareKey=tripStore.get(TRIP_SHARE_KEY);
(()=>{const m=location.hash.match(/(?:^#|&)share=([A-Za-z0-9_-]{20,200})/);if(!m)return;tripShareKey=m[1];tripStore.set(TRIP_SHARE_KEY,m[1]);tripStore.del(TRIP_MERGE_DONE);const rest=location.hash.slice(1).split('&').filter(p=>!p.startsWith('share=')).join('&');history.replaceState(null,'',location.pathname+location.search+'#'+(rest||'overview'));})();

/* A share link opened in an already-open tab: store it and start over in shared mode. */
window.addEventListener('hashchange',()=>{if(/(?:^#|&)share=/.test(location.hash))location.reload();});

let tripMode=tripShareKey?'cloud':'local';          // 'local' | 'cloud'
let tripChecks=tripReadMap(TRIP_CHECKS_KEY);         // this browser only
let tripCloud=tripMode==='cloud'?tripReadMap(TRIP_CLOUD_CACHE):{}; // last list the server confirmed
const tripPending={};                                // id -> {checked, failed, inflight}
let tripSync={state:tripMode==='cloud'?'loading':'local',at:null,note:''};
let tripPulling=false;

function tripIsChecked(id){if(tripMode!=='cloud')return tripChecks[id]?.checked===true;return tripPending[id]?tripPending[id].checked:tripCloud[id]?.checked===true;}
function tripWantedLabel(){return tripMode==='cloud'?'已勾选想去（两人共享）':'已勾选想去（本机）';}
function tripCheckControl(p){return `<label class="trip-check"><input type="checkbox" data-trip-check="${esc(p.id)}" aria-label="想去：${esc(p.name)}" ${tripIsChecked(p.id)?'checked':''}><span>想去</span></label>`;}
function tripCheckedIds(){const ids=new Set([...Object.keys(tripMode==='cloud'?tripCloud:tripChecks),...Object.keys(tripPending)]);return [...ids].filter(tripIsChecked);}
function tripMergeCandidates(){if(tripMode!=='cloud'||tripStore.get(TRIP_MERGE_DONE))return [];return Object.keys(tripChecks).filter(id=>tripChecks[id]?.checked===true&&!tripIsChecked(id));}
const tripTime=iso=>iso?new Date(iso).toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'}):'';

function tripStatusHtml(){
  const count=tripCheckedIds().length;
  if(tripMode!=='cloud')return `${tripSync.note?`<b>${esc(tripSync.note)}</b> `:''}已勾选 ${count} 个 · 仅保存在本机浏览器，没有跨设备同步`;
  const pend=Object.values(tripPending),failed=pend.filter(p=>p.failed).length;
  let head;
  if(failed)head=`<b class="trip-sync-bad">⚠ ${failed} 处修改保存失败，还没有同步</b> <button type="button" data-trip-action="retry">重试</button>`;
  else if(pend.length)head='保存中…';
  else if(tripSync.state==='loading')head='正在读取两人共享的清单…';
  else if(tripSync.state==='offline')head=`<b class="trip-sync-bad">连不上云端</b> · 显示的是${tripSync.at?' '+tripTime(tripSync.at)+' ':'上次'}同步的清单`;
  else head=`已同步 · ${tripTime(tripSync.at)}`;
  const merge=tripMergeCandidates();
  const mergeHtml=merge.length?`<span class="trip-merge">这台设备以前在本机勾过 ${merge.length} 个地点，还不在共享清单里。<button type="button" data-trip-action="merge">合并本机勾选</button><button type="button" data-trip-action="skip-merge">不合并</button></span>`:'';
  return `${head} · 两人共享清单，已勾选 ${count} 个 <button type="button" class="trip-link" data-trip-action="leave">本机退出共享</button>${mergeHtml}`;
}
function syncCheckControls(){
  document.querySelectorAll('[data-trip-check]').forEach(el=>{const id=el.dataset.tripCheck;el.checked=tripIsChecked(id);el.closest('.trip-check')?.classList.toggle('unsynced',!!tripPending[id]?.failed);});
  const html=tripStatusHtml();document.querySelectorAll('.trip-save-status').forEach(el=>{if(el.innerHTML!==html)el.innerHTML=html;});
  document.querySelectorAll('#catalog-source option[value="wanted"]').forEach(el=>el.textContent=tripWantedLabel());
}
let tripLastWanted=tripCheckedIds().sort().join(',');
function tripRender(){syncCheckControls();const wanted=tripCheckedIds().sort().join(',');if(wanted!==tripLastWanted){tripLastWanted=wanted;if(typeof overviewSource!=='undefined'&&overviewSource==='wanted')refreshOverview(false);}}

async function tripFetch(path,init={}){
  const res=await fetch(TRIP_API+path,{...init,cache:'no-store',headers:{'content-type':'application/json','x-trip-key':tripShareKey,...(init.headers||{})}});
  if(res.status===401){tripDenied();throw new Error('denied');}
  if(!res.ok)throw new Error('http '+res.status);
  return res.json();
}
function tripAccept(items){let changed=false;for(const [id,v] of Object.entries(items||{})){const cur=tripCloud[id];if(!cur||!cur.updatedAt||v.updatedAt>=cur.updatedAt){tripCloud[id]={checked:v.checked===true,updatedAt:v.updatedAt};changed=true;}}if(changed)tripStore.set(TRIP_CLOUD_CACHE,JSON.stringify(tripCloud));}
function tripDenied(){tripMode='local';tripStore.del(TRIP_SHARE_KEY);tripStore.del(TRIP_CLOUD_CACHE);tripShareKey=null;tripCloud={};for(const id in tripPending)delete tripPending[id];tripSync={state:'local',at:null,note:'共享链接无效或已更换，现在只显示本机勾选。'};tripRender();}

async function tripPull(){
  if(tripMode!=='cloud'||tripPulling)return;tripPulling=true;
  try{const data=await tripFetch('/checks');tripAccept(data.items);tripSync={state:'synced',at:data.serverTime,note:''};}
  catch{if(tripMode==='cloud')tripSync={...tripSync,state:'offline'};}
  finally{tripPulling=false;tripRender();}
}
async function tripSave(id){
  const p=tripPending[id];if(!p||p.inflight||tripMode!=='cloud')return;
  const want=p.checked;p.inflight=true;p.failed=false;tripRender();
  try{const item=await tripFetch('/checks/'+encodeURIComponent(id),{method:'PUT',body:JSON.stringify({checked:want})});tripAccept({[id]:item});p.inflight=false;if(tripPending[id]===p&&p.checked===want)delete tripPending[id];else return tripSave(id);if(tripSync.state!=='offline')tripSync={...tripSync,state:'synced',at:item.updatedAt};}
  catch{p.inflight=false;if(tripPending[id]===p){if(p.checked!==want)return tripSave(id);p.failed=true;}}
  tripRender();
}
async function tripMerge(){
  const ids=tripMergeCandidates();if(!ids.length)return;
  for(const id of ids)tripPending[id]={checked:true,failed:false,inflight:true};tripRender();
  try{const data=await tripFetch('/checks/merge',{method:'POST',body:JSON.stringify({ids})});tripAccept(data.items);for(const id of ids)if(tripPending[id]?.checked)delete tripPending[id];tripStore.set(TRIP_MERGE_DONE,'1');}
  catch{for(const id of ids)if(tripPending[id]){tripPending[id].inflight=false;tripPending[id].failed=true;}}
  tripRender();
}

document.addEventListener('change',event=>{
  const el=event.target.closest('[data-trip-check]');if(!el)return;const id=el.dataset.tripCheck;
  if(tripMode==='cloud'){const p=tripPending[id];if(p)p.checked=el.checked;else tripPending[id]={checked:el.checked,failed:false,inflight:false};tripRender();tripSave(id);return;}
  const previous=tripChecks[id];tripChecks[id]={checked:el.checked,updatedAt:new Date().toISOString()};
  if(tripStore.set(TRIP_CHECKS_KEY,JSON.stringify(tripChecks)))tripRender();
  else{if(previous)tripChecks[id]=previous;else delete tripChecks[id];tripSync.note='浏览器未允许保存，刚才的勾选没有保存。';tripRender();tripSync.note='';}
});
document.addEventListener('click',event=>{
  const b=event.target.closest('[data-trip-action]');if(!b)return;const a=b.dataset.tripAction;
  if(a==='retry'){for(const id in tripPending)if(tripPending[id].failed)tripSave(id);tripPull();}
  else if(a==='merge')tripMerge();
  else if(a==='skip-merge'){tripStore.set(TRIP_MERGE_DONE,'1');tripRender();}
  else if(a==='leave'){tripStore.del(TRIP_SHARE_KEY);tripStore.del(TRIP_CLOUD_CACHE);tripShareKey=null;tripMode='local';tripCloud={};for(const id in tripPending)delete tripPending[id];tripSync={state:'local',at:null,note:'已在这台设备退出共享清单（云端记录不受影响，再次打开共享链接即可恢复）。'};tripRender();}
});
window.addEventListener('storage',event=>{
  if(event.key===TRIP_CHECKS_KEY&&tripMode!=='cloud'){tripChecks=tripReadMap(TRIP_CHECKS_KEY);tripRender();}
  if(event.key===TRIP_CLOUD_CACHE&&tripMode==='cloud'){tripAccept(tripReadMap(TRIP_CLOUD_CACHE));tripRender();}
});
if(tripMode==='cloud'){
  const refresh=()=>{if(document.visibilityState==='visible')tripPull();};
  window.addEventListener('focus',refresh);document.addEventListener('visibilitychange',refresh);window.addEventListener('online',refresh);
  setInterval(refresh,TRIP_POLL_MS);
  tripPull();
}

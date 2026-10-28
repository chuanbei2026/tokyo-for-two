/* Wishlist checks ("想去").
   Without a share link they stay in this browser (localStorage, key tokyo-wishlist-v1).
   With the private share link (…#share=<passcode>) they sync through the trip's wishlist API:
   the passcode is kept in this browser and sent as the X-Trip-Key header, never in a URL. */
const TRIP_CHECKS_KEY='tokyo-wishlist-person-v2';
const TRIP_CLOUD_CACHE='tokyo-wishlist-person-cloud-v2';
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

function tripRawChecked(id){if(tripMode!=='cloud')return tripChecks[id]?.checked===true;return tripPending[id]?tripPending[id].checked:tripCloud[id]?.checked===true;}
function tripWantedLabel(){return tripMode==='cloud'?'已勾选想去（两人共享）':'已勾选想去（本机）';}
const TRIP_PEOPLE={maomao:{name:'毛毛',gender:'♀',avatar:'https://c-ssl.duitang.com/uploads/blog/202305/04/20230504180243_fdcf2.jpeg'},beibei:{name:'贝贝',gender:'♂',avatar:'https://cdn.imweb.me/upload/S20231127834d8954cec9f/8024da3c9f937.png'}};
let tripPerson=null;
try{const id=sessionStorage.getItem('tokyo-voter');if(TRIP_PEOPLE[id])tripPerson=id;}catch{}
function personAvatar(id){const p=TRIP_PEOPLE[id];return `<img class="voter-avatar ${id}" src="${p.avatar}" alt="${p.name}${p.gender}" referrerpolicy="no-referrer">`;}
function tripVoteBadges(id){return Object.keys(TRIP_PEOPLE).map(who=>`<span class="vote-badge ${tripIsChecked(id,who)?'voted':'not-voted'}" title="${TRIP_PEOPLE[who].name}${tripIsChecked(id,who)?'想去':'未投票'}">${personAvatar(who)}<span>${TRIP_PEOPLE[who].name}${tripIsChecked(id,who)?' ✓':' ·'}</span></span>`).join('');}
function tripIdentityControl(){return `<section class="voter-picker" aria-label="选择投票身份"><strong>这次是谁在挑？</strong><div>${Object.entries(TRIP_PEOPLE).map(([id,p])=>`<button type="button" data-trip-person="${id}" aria-pressed="${tripPerson===id}">${personAvatar(id)}<span>${p.name} ${p.gender}</span></button>`).join('')}</div><small class="voter-hint">${tripPerson?'正在以'+TRIP_PEOPLE[tripPerson].name+'的身份选择，可随时切换':'先选毛毛或贝贝，再勾选想去的地方'}</small></section>`;}
function tripCheckControl(p){return `<label class="trip-check"><input type="checkbox" data-trip-check="${esc(p.id)}" aria-label="${tripPerson?TRIP_PEOPLE[tripPerson].name:'先选身份'}想去：${esc(p.name)}" ${!tripPerson?'disabled':''} ${tripPerson&&tripIsChecked(p.id,tripPerson)?'checked':''}><span>${tripPerson?TRIP_PEOPLE[tripPerson].name+'想去':'先选身份'}</span></label>`;}
function tripVoteKey(id,person){return "vote-"+person+"--"+id;}
function tripIsChecked(id,person){return person?tripRawChecked(tripVoteKey(id,person)):Object.keys(TRIP_PEOPLE).some(who=>tripRawChecked(tripVoteKey(id,who)));}
function tripCheckedIds(){const ids=new Set([...Object.keys(tripMode==='cloud'?tripCloud:tripChecks),...Object.keys(tripPending)]);return [...ids].filter(id=>/^vote-(maomao|beibei)--/.test(id)&&tripRawChecked(id));}
function tripMergeCandidates(){if(tripMode!=='cloud'||tripStore.get(TRIP_MERGE_DONE))return [];return Object.keys(tripChecks).filter(id=>tripChecks[id]?.checked===true&&!tripIsChecked(id));}
const tripTime=iso=>iso?new Date(iso).toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'}):'';

function tripStatusHtml(){
  const count=new Set(tripCheckedIds().map(id=>id.replace(/^vote-(maomao|beibei)--/,""))).size;
  if(tripMode!=='cloud')return `${tripSync.note?`<b>${esc(tripSync.note)}</b> `:''}已勾选 ${count} 个 · 仅保存在本机浏览器，没有跨设备同步`;
  const pend=Object.values(tripPending),failed=pend.filter(p=>p.failed).length;
  let head;
  if(failed)head=`<b class="trip-sync-bad">⚠ ${failed} 处修改保存失败，还没有同步</b> <button type="button" data-trip-action="retry">重试</button>`;
  else if(pend.length)head='保存中…';
  else if(tripSync.state==='loading')head='正在读取两人共享的清单…';
  else if(tripSync.state==='offline')head=`<b class="trip-sync-bad">连不上云端</b> · 显示的是${tripSync.at?' '+tripTime(tripSync.at)+' ':'上次'}同步的清单`;
  else head=`已同步 · ${tripTime(tripSync.at)}`;
  const merge=[];
  const mergeHtml=merge.length?`<span class="trip-merge">这台设备以前在本机勾过 ${merge.length} 个地点，还不在共享清单里。<button type="button" data-trip-action="merge">合并本机勾选</button><button type="button" data-trip-action="skip-merge">不合并</button></span>`:'';
  return `${head} · 两人共享清单，已勾选 ${count} 个 <button type="button" class="trip-link" data-trip-action="leave">本机退出共享</button>${mergeHtml}`;
}
function syncCheckControls(){
  document.querySelectorAll('[data-trip-check]').forEach(el=>{const id=el.dataset.tripCheck;el.checked=!!tripPerson&&tripIsChecked(id,tripPerson);el.disabled=!tripPerson;el.nextElementSibling.textContent=tripPerson?TRIP_PEOPLE[tripPerson].name+'想去':'先选身份';const p=typeof OVERVIEW_CATALOG!=='undefined'&&OVERVIEW_CATALOG.find(p=>p.id===id);if(p)el.setAttribute('aria-label',(tripPerson?TRIP_PEOPLE[tripPerson].name:'先选身份')+'想去：'+p.name);el.closest('.trip-check')?.classList.toggle('unsynced',!!tripPending[tripVoteKey(id,tripPerson)]?.failed);});
 document.querySelectorAll('[data-trip-votes]').forEach(el=>el.innerHTML=tripVoteBadges(el.dataset.tripVotes));
 document.querySelectorAll('[data-trip-person]').forEach(el=>el.setAttribute('aria-pressed',el.dataset.tripPerson===tripPerson));
 document.querySelectorAll('.voter-hint').forEach(el=>el.textContent=tripPerson?'正在以'+TRIP_PEOPLE[tripPerson].name+'的身份选择，可随时切换':'先选毛毛或贝贝，再勾选想去的地方');
  const votes=tripCheckedIds();const html=Object.entries(TRIP_PEOPLE).map(([id,p])=>p.name+' '+votes.filter(k=>k.startsWith('vote-'+id+'--')).length+'票').join(' · ')+'<br>'+tripStatusHtml()+legacyVoteControl();document.querySelectorAll('.trip-save-status').forEach(el=>{if(el.innerHTML!==html)el.innerHTML=html;});

}
let tripLastWanted=tripCheckedIds().sort().join(',');
function tripRender(){syncCheckControls();const wanted=tripCheckedIds().sort().join(',');if(wanted!==tripLastWanted){tripLastWanted=wanted;if(typeof overviewSource!=='undefined'&&['wanted','maomao','beibei','both'].includes(overviewSource))refreshOverview(false);}}

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
  try{const [data,legacy]=await Promise.all([tripFetch('/votes'),tripFetch('/checks')]);const items={...legacy.items};for(const [place,people] of Object.entries(data.votes||{}))for(const [person,vote] of Object.entries(people))if(TRIP_PEOPLE[person])items[tripVoteKey(place,person)]=vote;tripAccept(items);tripSync={state:'synced',at:data.serverTime,note:''};}
  catch{if(tripMode==='cloud')tripSync={...tripSync,state:'offline'};}
  finally{tripPulling=false;tripRender();}
}
async function tripSave(id){
  const p=tripPending[id];if(!p||p.inflight||tripMode!=='cloud')return;
  const want=p.checked;p.inflight=true;p.failed=false;tripRender();
  try{const parts=id.match(/^vote-(maomao|beibei)--(.+)$/);if(!parts)throw Error('invalid voter');const item=await tripFetch('/votes/'+encodeURIComponent(parts[2])+'/'+parts[1],{method:'PUT',body:JSON.stringify({checked:want})});tripAccept({[id]:item});p.inflight=false;if(tripPending[id]===p&&p.checked===want)delete tripPending[id];else return tripSave(id);if(tripSync.state!=='offline')tripSync={...tripSync,state:'synced',at:item.updatedAt};}
  catch{p.inflight=false;if(tripPending[id]===p){if(p.checked!==want)return tripSave(id);p.failed=true;}}
  tripRender();
}
document.addEventListener('change',event=>{
  const el=event.target.closest('[data-trip-check]');if(!el)return;if(!tripPerson){syncCheckControls();return;}const id=tripVoteKey(el.dataset.tripCheck,tripPerson);
  if(tripMode==='cloud'){const p=tripPending[id];if(p)p.checked=el.checked;else tripPending[id]={checked:el.checked,failed:false,inflight:false};tripRender();tripSave(id);return;}
  tripChecks=tripReadMap(TRIP_CHECKS_KEY);const previous=tripChecks[id];tripChecks[id]={checked:el.checked,updatedAt:new Date().toISOString()};
  if(tripStore.set(TRIP_CHECKS_KEY,JSON.stringify(tripChecks)))tripRender();
  else{if(previous)tripChecks[id]=previous;else delete tripChecks[id];tripSync.note='浏览器未允许保存，刚才的勾选没有保存。';tripRender();tripSync.note='';}
});
document.addEventListener('click',event=>{
  const b=event.target.closest('[data-trip-action]');if(!b)return;const a=b.dataset.tripAction;
  if(a==='retry'){for(const id in tripPending)if(tripPending[id].failed)tripSave(id);tripPull();}

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

function legacyTripVotes(){const old=tripReadMap('tokyo-wishlist-v1'),items=tripMode==='cloud'?{...old,...tripCloud}:old;return Object.keys(items).filter(id=>!id.startsWith('vote-')&&items[id]?.checked===true&&(!tripPerson||!tripIsChecked(id,tripPerson)));}
function legacyVoteControl(){const ids=legacyTripVotes();return ids.length?'<details class="legacy-votes"><summary>有 '+ids.length+' 个旧勾选尚未分配给当前身份</summary><p>旧记录未区分投票人，原记录会保留。选好身份后可复制。</p><button type="button" data-import-votes>复制旧勾选给当前身份</button><small class="legacy-feedback" role="status"></small></details>':'';}
document.addEventListener('click',event=>{const person=event.target.closest('[data-trip-person]');if(person){tripPerson=person.dataset.tripPerson;try{sessionStorage.setItem('tokyo-voter',tripPerson);}catch{}tripRender();return;}
if(event.target.closest('[data-import-votes]')){if(!tripPerson){document.querySelector('.legacy-feedback').textContent='请先选毛毛或贝贝';return;}const ids=legacyTripVotes();if(tripMode==='cloud'){for(const place of ids){const id=tripVoteKey(place,tripPerson);tripPending[id]={checked:true,failed:false,inflight:false};tripSave(id);}tripRender();}else{const next=tripReadMap(TRIP_CHECKS_KEY);ids.forEach(place=>next[tripVoteKey(place,tripPerson)]={checked:true,updatedAt:new Date().toISOString()});if(tripStore.set(TRIP_CHECKS_KEY,JSON.stringify(next))){tripChecks=next;tripRender();}else{tripSync.note='复制失败，请重试';tripRender();}}}});

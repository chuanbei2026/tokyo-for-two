/* Local-first selections. Cloud sharing is not enabled until an API is configured. */
const TRIP_CHECKS_KEY='tokyo-wishlist-v1';
let tripChecks={};
try{const saved=JSON.parse(localStorage.getItem(TRIP_CHECKS_KEY)||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved))tripChecks=saved;}catch{}
function tripIsChecked(id){return tripChecks[id]?.checked===true;}
function tripCheckControl(p){return `<label class="trip-check"><input type="checkbox" data-trip-check="${esc(p.id)}" aria-label="想去：${esc(p.name)}" ${tripIsChecked(p.id)?'checked':''}><span>想去</span></label>`;}
function syncCheckControls(message){document.querySelectorAll('[data-trip-check]').forEach(el=>el.checked=tripIsChecked(el.dataset.tripCheck));const count=Object.values(tripChecks).filter(v=>v?.checked===true).length;document.querySelectorAll('.trip-save-status').forEach(el=>el.textContent=message||`已勾选 ${count} 个 · 仅保存在本机浏览器，尚未跨设备同步`);}
document.addEventListener('change',event=>{const el=event.target.closest('[data-trip-check]');if(!el)return;const id=el.dataset.tripCheck,previous=tripChecks[id];tripChecks[id]={checked:el.checked,updatedAt:new Date().toISOString()};try{localStorage.setItem(TRIP_CHECKS_KEY,JSON.stringify(tripChecks));syncCheckControls();if(typeof overviewSource!=='undefined'&&overviewSource==='wanted')refreshOverview(false);}catch{if(previous)tripChecks[id]=previous;else delete tripChecks[id];syncCheckControls('浏览器未允许保存，刚才的勾选没有保存。');}});
window.addEventListener('storage',event=>{if(event.key!==TRIP_CHECKS_KEY)return;try{const next=JSON.parse(event.newValue||'{}');if(next&&typeof next==='object'&&!Array.isArray(next)){tripChecks=next;syncCheckControls();if(typeof overviewSource!=='undefined'&&overviewSource==='wanted')refreshOverview(false);}}catch{}});

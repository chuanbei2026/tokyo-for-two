/* Shared practical details and confirmed reservations. No preference records are mutated. */
for(const id of ['haneda-hotel','matsuzawa','takechan','fufu-ginza','courtyard-ginza','afuri','unagi','gonpachi','tabelog-hanayama']){
 const p=JOURNEY_POINTS[id],media=JOURNEY_MEDIA[id];let item=OVERVIEW_CATALOG.find(x=>x.id===id);
 if(!item){item={id,category:p.isHotel?'base':'food',region:'tokyo',origin:id==='matsuzawa'||id==='haneda-hotel'?'用户已订':'本次行程建议',days:[],photo:media?.src||'',photoLabel:media?.label||'地点参考',photoSource:media?.source||p.source};OVERVIEW_CATALOG.push(item);}
 Object.assign(item,{name:p.name,coord:p.coord,address:p.address||item.address,source:p.source||item.source,desc:p.desc||item.desc,query:p.query||p.name,notes:p.booking});
}
Object.assign(WISHLIST_BUDGETS,{
 takechan:{min:5000,max:8000,meal:'烧鸟晚餐',source:'https://tabelog.com/en/tokyo/A1301/A130101/13007710/',note:'规划估算，含适量饮品余量；现金支付，不接受预约。'},
 matsuzawa:{min:0,max:0,meal:'已订烧肉晚餐',note:'用户已预订两人，实际套餐与付款金额以订单为准。'},
 'friend-masuei':{min:500,max:1200,meal:'小吃',note:'少量关东煮的规划预算，非现行菜单报价。'},
 'friend-yanagiya':{min:200,max:600,meal:'小吃',note:'鲷鱼烧少量购买预算，实际单价现场确认。'},
 'friend-sokaya':{min:300,max:1000,meal:'小吃',note:'仙贝少量购买预算，按数量与包装变化。'},
 'friend-kikunoya':{min:2000,max:5000,meal:'伴手礼购买',note:'铁盒点心规划预算，礼盒大小不同，不是人均吃饭价格。'},
 'friend-yurakucho':{min:3000,max:6000,meal:'街区内晚餐',note:'居酒屋街区的预算范围，并非某一家店报价。'}
});
const TRIP_MEALS=[
 {day:2,id:'tabelog-hanayama',label:'24日午餐 · 两人',type:'宽乌冬',budget:'1,500–2,500 円 / 约 US$10–16',note:'推荐花山银座店，下午要入住、晚上吃烧肉，因此午餐不排大套餐。排队超过40分钟可改简餐。'},
 {day:3,id:'afuri',label:'25日午餐 · 与大熊',type:'拉面 ✓',budget:'1,500–2,500 円 / 约 US$10–16',note:'AFURI原宿店的柚子拉面；属于涩谷区。与大熊会合后也可由他选同片区拉面店。'},
 {day:3,id:'gonpachi',label:'25日晚餐 · 与大熊',type:'和食 / 荞麦面',budget:'5,000–8,000 円 / 约 US$32–51',note:'暂选权八涩谷，适合坐下来聊天。人数随大熊会合确认，尚未订位；不是西麻布店。'},
 {day:4,id:'unagi',label:'26日午餐 · 两人',type:'鳗鱼饭',budget:'4,000–7,000 円 / 约 US$25–45',note:'浅草鳗铁花川户本店，雷门、浅草寺之后顺路。保留60–90分钟，遇长队先问等候时间。'},
 {day:4,id:'takechan',label:'26日晚餐 · 两人',type:'烧鸟 ✓',budget:'5,000–8,000 円 / 约 US$32–51',note:'回银座吃武酱烧鸟，17:30左右到店。不接受预约、准备现金；早到比临近关门再去稳妥。'}
];
function mealPlan(day){const meals=TRIP_MEALS.filter(m=>!day||m.day===day);return `<section class="practical-meals"><h3>${day?'今天吃什么':'五顿待安排的饭'}</h3><p>以下为建议，均未预订；金额为每人规划预算，美元按 US$1 ≈ 157 円换算。24日晚烧肉已订，不计入这五顿。</p>${meals.map(m=>`<article><small>${m.label} · ${m.type}</small><button data-directory-place="${m.id}">${esc(JOURNEY_POINTS[m.id].name)} ↗</button><strong>${m.budget}</strong><p>${m.note}</p></article>`).join('')}</section>`;}
const DAY_FRIENDS={2:['friend-itoya','friend-kikunoya','friend-marunouchi','friend-yurakucho'],3:['friend-parco','friend-nintendo','friend-pokemon','friend-jump'],4:['friend-kappabashi']};
function dayExtras(d){if(!DAY_FRIENDS[d.id])return '';return mealPlan(d.id)+`<section class="day-friend-list"><h3>大熊推荐 · 当天顺路选逛</h3><p>看体力和用餐时间选择，不要求全部去。</p>${DAY_FRIENDS[d.id].map(id=>`<button data-directory-place="${id}">${esc(OVERVIEW_CATALOG.find(p=>p.id===id).name)} ↗</button>`).join('')}</section>`;}
Object.assign(TRAIN_PHOTOS,{
 A:{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Toei-Type5522-1.jpg/330px-Toei-Type5522-1.jpg',source:'https://commons.wikimedia.org/wiki/File:Toei-Type5522-1.jpg',label:'都营5500系 · Wikimedia Commons（作者与许可见原图页）'},
 NEX:{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Series-E259_NE018.jpg/330px-Series-E259_NE018.jpg',source:'https://commons.wikimedia.org/wiki/File:Series-E259_NE018.jpg',label:'N’EX E259系 · Wikimedia Commons（作者与许可见原图页）'},
 KK:{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Keikyu-Main-Line_Type1000-355_445.jpg/330px-Keikyu-Main-Line_Type1000-355_445.jpg',source:'https://commons.wikimedia.org/wiki/File:Keikyu-Main-Line_Type1000-355_445.jpg',label:'京急1000系 · Wikimedia Commons（作者与许可见原图页）'}
});
function trainReference(code){const t=TRAIN_PHOTOS[code];return t?`<figure class="train-reference"><img src="${esc(t.src)}" alt="${esc(t.label)}" loading="lazy" referrerpolicy="no-referrer"><figcaption>车辆长这样 · 参考照片，实际配车可能不同。认线路字母、方向和终点，别只认车身颜色。<a href="${t.source}" target="_blank" rel="noopener">${t.label} ↗</a></figcaption></figure>`:'';}
function transportLearning(){return `<details class="transit-learning"><summary>第一次坐车 · 看标志和车辆</summary><p>① 每人一张Suica／PASMO或单程票，进出站用同一张卡。② 找线路字母与颜色。③ 看终点和下一站确认方向。④ 换乘时先跟换乘箭头，不急着出闸。⑤ 下车后再找出口；带箱子优先电梯。</p><p><b>G 银座线</b>：橙色G，银座G09 → 表参道G02共7站；直接去涩谷G01共8站。<br><b>A 浅草线</b>：玫红色A，东银座A11 → 浅草A18共7站，往押上方向；回程往西马込／羽田方向并确认停东银座。<br><b>直通</b>：同一辆车跨公司继续开，通常不用下车；只有终到站或查询结果要求换车才下车。</p>${trainReference('G')}${trainReference('A')}<div class="detail-links"><a href="https://www.tokyometro.jp/en/subwaymap/index.html" target="_blank" rel="noopener">官方线路颜色与站号图 ↗</a><a href="https://www.kotsu.metro.tokyo.jp/eng/services/subway/stations/" target="_blank" rel="noopener">都营车站与出口图 ↗</a></div></details>`;}
document.addEventListener('click',e=>{const b=e.target.closest('[data-directory-place]');if(b){if(typeof selectOverviewPlace==='function')selectOverviewPlace(b.dataset.directoryPlace,true);}});
document.addEventListener('error',e=>{if(e.target.matches?.('.train-reference img')){e.target.hidden=true;}},true);

for(const id of ["tokyostation","imperial-palace-gaien"]){const p=OVERVIEW_CATALOG.find(p=>p.id===id);p.desc=id==="tokyostation"?"24日午餐后看丸之内红砖站舍与广场，15:30回馥府入住；不在这里另排一顿午餐。":"24日午餐后逛皇居外苑与二重桥；当天东御苑休园，外苑和东御苑不是同一区域。";}

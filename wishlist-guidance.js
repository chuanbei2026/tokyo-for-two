/* Editorial fit for this four-day Tokyo trip, not public review scores.
   Durations are planning estimates excluding queues and travel. */
const WISHLIST_GUIDANCE={
 'imperial-palace-gaien':[5,'45–60 分钟','先在护城河边散步，再到二重桥外侧拍合照，最后接丸之内街区。你已提出想去，值得优先留时间。'],
 'imperial-palace-east-gardens':[5,'60–90 分钟','适合慢慢看城墙、庭园和江户城遗迹；本次只考虑11月25或26日，别把它当成随时能进入的皇宫内部。'],
};
Object.assign(WISHLIST_GUIDANCE,{
 sensoji:[5,'60–90 分钟','从雷门走进寺院，再逛仲见世；比起一路赶拍照，留一点时间看参拜与老街日常。'],
 tsukiji:[5,'90–120 分钟','以两人分食的方式挑几样早餐和小吃，边吃边看食材店；不要在第一家就吃到太饱。'],
 yamacho:[4,'10–20 分钟','作为筑地散步中的小吃停靠点，两人分享一份，给后面的海鲜和甜点留胃口。'],
 oden:[5,'75–105 分钟','毛毛想吃关东煮，这一顿值得优先保留。慢慢分享几种食材，比把晚餐排成快速打卡更合适。'],
 nezu:[5,'45–60 分钟','慢走神社庭院与鸟居小径，再接谷中老街；适合想感受安静东京的两个人。'],
 yanaka:[5,'60–90 分钟','以小巷、老店和沿途小吃为主，看到喜欢的店再停；和根津一起安排更顺。'],
 meiji:[5,'60–90 分钟','从树林步道走到主要参拜区域，留出安静散步的时间；之后再转向原宿或表参道。'],
 crossing:[5,'20–30 分钟','走过路口、看八公，再站到街边观察人流；短时间就能感受东京最鲜明的城市节奏。'],
 sky:[5,'60–90 分钟','留出看景与合照时间，是否赶日落要结合预约时段；不要和其他远距离景点紧贴着排。'],
 tower:[4,'30–45 分钟','这个时长按塔下看外观、拍照估算；若决定登塔，需要另外留出参观与排队时间。'],
 tokyostation:[4,'30–45 分钟','看丸之内红砖站舍和广场，适合与皇居一带串联；购物和吃饭时间另算。'],
 nakameguro:[4,'45–75 分钟','沿河散步，途中挑一间咖啡店坐坐；11月不用按樱花季的期待安排这里。'],
 daikanyama:[4,'60–90 分钟','书店、建筑和小巷是重点，适合看设计与生活方式；不用为了购物逐店打卡。'],
 jiyugaoka:[4,'90–120 分钟','选几家杂货店，再留一段甜点休息时间；想去根津和谷中，就别在这里逛到太晚。'],
 gotokuji:[4,'45–60 分钟','慢慢看寺院建筑与招财猫区域，顺便感受住宅区氛围；来回交通不计入这个时长。'],
 shimokita:[4,'90–120 分钟','按兴趣挑古着、唱片或杂货，穿插咖啡休息；没有购物目标也可以以街区散步为主。'],
 kichijoji:[4,'90–120 分钟','商店街和街头小吃一起体验，喜欢哪家再停；若再去公园，需要额外增加时间。'],
 harmonica:[5,'60–90 分钟','用一顿小巷晚餐收尾，更贴近你们吃饭优先的偏好；是否入店以当天座位和菜单为准。'],
 sushi:[5,'90–120 分钟','适合把晚餐当成当天主体验，留出慢慢品尝与交流的时间，前一顿避免吃太满。'],
 ukai:[4,'90–120 分钟','作为精致晚餐候选，值得单独留一整个用餐时段；先比较菜单与预约情况再选。'],
 otako:[5,'60–90 分钟','想多试一家关东煮可以考虑这里，和银座的选择二选一或分不同晚餐体验。'],
 wellk:[4,'60 分钟','认真吃一顿早餐再出发，按实际预约时段安排；不要让后面的跨区交通挤掉用餐时间。'],
 titoten:[4,'45–60 分钟','适合慢节奏早餐，两个人坐下来商量当天的路线，再开始三轩茶屋散步。'],
 samurai:[5,'60–75 分钟','把汤咖喱当作下北泽的正餐，餐后步行消食；等位时间需要额外预留。'],
 carrot:[4,'20–30 分钟','作为三轩茶屋认方位的短停留，看过城市景色后继续当天路线。'],
 gorilla:[3,'10–15 分钟','街头趣味地标，顺路拍照就好，不需要为它单独跨区。'],
 ginza:[4,'60–90 分钟','把钟楼、街景和百货食品层串成轻松散步；购物放在顺路，不抢正餐时间。'],
 akihabara:[3,'60–90 分钟','如果喜欢动漫、游戏或电子产品会更有意思；兴趣不强时，选一两家店感受街区即可。'],
 shinjuku:[4,'60–90 分钟','先选一个明确的小片区走走，再接吃饭；新宿很大，不建议把整片区域当作一个短停靠点。']
});
function wishlistGuidance(p){
 const curated=WISHLIST_GUIDANCE[p.id];
 if(curated)return {score:curated[0],duration:curated[1],detail:curated[2],reason:p.videoSources?.length&&p.region!=='tokyo'?'周边备选，需另留交通时间':p.region!=='tokyo'?'本次东京行程不优先':p.id.startsWith('imperial-')?'你已提出想去':'适合你们的初访体验'};
 if(p.chefStatus)return {score:null,duration:'暂不安排',reason:'营业状态待复核',detail:'原清单标记为'+p.chefStatus+'。先保留收藏，确认恢复营业后再考虑特地前往。'};
 if(/地址点|具体店铺待确认/.test(p.desc))return {score:null,duration:'待确认',reason:'地点信息不足',detail:'这是原清单里的地址收藏，尚不能确认具体店铺。可以先标记兴趣，确认店名后再估算逛店时间。'};
 if(p.region!=='tokyo')return {score:1,duration:p.category==='food'?'45–75 分钟':p.category==='sight'?'60–90 分钟':'30–60 分钟',reason:'本次东京行程不优先',detail:'更适合另一次'+({kyoto:'京都',osaka:'大阪 / 兵库',kawagoe:'川越',fuji:'富士山周边',other:'当地'}[p.region]||'当地')+'旅行时安排。时长只估算在这一处的停留，不含从东京往返；低分表示不适合这次路线，不代表地点不好。'};
 if(p.category==='base')return {score:null,duration:p.id==='hotel'?'入住预留 30–45 分钟':'换乘预留 10–20 分钟',reason:'行程配套，不作景点评分',detail:p.id==='hotel'?'先确认寄存、入住和休息安排。这里的时间不包含住宿、早餐或泡汤。':'作为交通衔接点使用，预留找站台和出入口的时间；列车行驶时间另算。'};
 const type=p.desc+' '+p.name+' '+(p.originalName||'');
 if(p.category==='food'){
  const snack=/玉子|小吃|和果子|巧克力|糖果|糕点/.test(type),coffee=/咖啡|coffee|cafe|茶馆/i.test(type);
  return {score:snack?4:coffee?3:4,duration:snack?'15–30 分钟':coffee?'30–45 分钟':'60–90 分钟',reason:snack?'适合两人分食':coffee?'适合作为途中休息':'符合吃饭优先的偏好',detail:snack?'建议少量分食，把它放在附近散步途中，既尝味道也给正餐留胃口。':coffee?'作为走累后的休息点，点喜欢的饮品慢慢坐一会儿；顺路经过比特地绕行更合适。':'可以作为附近活动前后的正餐候选。留出完整用餐时间，菜单、价格和是否需要预约以店家最新信息为准。'};
 }
 if(p.category==='sight')return {score:4,duration:/阶梯|中心|歌舞伎/.test(type)?'20–40 分钟':'45–75 分钟',reason:'适合认识当地街区',detail:'建议先看主要景观，再留一点自由散步和拍照时间；和周边地点串联，比跨区来回更轻松。'};
 const craft=/餐具|厨具|厨房|陶瓷|瓷器|手工艺|玻璃|刀具|器物|DISHES|Kama-Asa/i.test(type);
 const groceries=/调味|超市|食品|杂货|KALDI|AKOMEYA|Kayanoya|Okume|Market/i.test(type);
 const fashion=/服装|鞋店|眼镜|配饰|帽子|行李箱|Goldwin|ASICS|atmos/i.test(type);
 return {score:craft||groceries?4:fashion?2:3,duration:craft?'30–45 分钟':groceries?'20–40 分钟':fashion?'20–45 分钟':'30–60 分钟',reason:craft?'适合看日本日常器物':groceries?'适合食材与伴手礼兴趣':fashion?'有明确购物目标再去':'顺路慢逛更合适',detail:craft?'建议重点看器型、材质和手感，两个人一起挑一两件真正喜欢的物品；不必把同类店全逛完。':groceries?'适合看看调味品、食品或日常用品，把感兴趣的东西列个小清单；带回国前再确认携带规定。':fashion?'先想好要试的款式、尺码或预算，再决定是否专程去；没有购物目标时可以把时间留给吃饭和散步。':'给自己一小段自由逛店时间，喜欢就多停一会儿；建议与同街区的景点或餐厅一起安排。'};
}
function wishlistFacts(p){const g=wishlistGuidance(p);return `<div class="wishlist-facts"><div><span>推荐指数</span><strong>${g.score===null?'待定 / 不适用':g.score+' / 5'} <i aria-hidden="true">${g.score===null?'':'★'.repeat(g.score)+'☆'.repeat(5-g.score)}</i></strong></div><div><span>预计${p.category==='food'?'用餐':p.category==='stroll'?'逛街':'停留'}</span><strong>${esc(g.duration)}</strong></div></div>${tabelogRating(p)}${wishlistBudget(p)}<p class="wishlist-reason">${esc(g.reason)}</p>`;}

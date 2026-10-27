/* A curated four-day route. Coordinates and connecting lines are schematic references. */
const JOURNEY_POINTS={
 hotel:{name:'银座酒店',coord:[35.6686,139.7582],short:'住',original:'hotel'},
 ginza:{name:'银座街区',coord:[35.6716,139.7650],original:'ginza'},
 oden:{name:'Oreno 关东煮',desc:'第一晚推荐一锅热乎乎的关东煮。两人坐下来分享萝卜、鸡蛋与牛筋，吃好再去看东京塔。',coord:[35.6696,139.7603],original:'oden',food:'oreno-oden'},
 tower:{name:'东京塔',coord:[35.6586,139.7454],original:'tower'},
 sensoji:{name:'浅草寺 · 雷门',coord:[35.7148,139.7967],original:'sensoji'},
 unagi:{name:'浅草鳗鱼午餐',coord:[35.7118,139.7983],original:'unagi',food:'unatetsu'},
 sumida:{name:'隅田川散步',coord:[35.7135,139.8014],original:'sumida'},
 nezu:{name:'根津神社',coord:[35.7202,139.7608],comic:[64,20],address:'1-28-9 Nezu, Bunkyo-ku, Tokyo',source:'https://nedujinja.or.jp/access/',gallery:'https://www.gotokyo.org/en/spot/70/',desc:'从热闹的浅草转到安静的鸟居小径。参考你提供的行程，把这段放在下午、天黑之前。',steps:['沿入口、楼门、拜殿慢慢参观，再走鸟居小径。','留45–60分钟；鸟居不是整座神社，不必为了拍照堵住通道。','11月看建筑与街区，不把春季杜鹃花海当作本次看点。'],budget:'普通境内参观免费，特别活动另计',booking:'出发前看官网当月开门安排；建议13:30到，不压最后入场时间。'},
 yanaka:{name:'谷中银座',coord:[35.7277,139.7653],comic:[65,14],address:'3-13 Yanaka, Taito-ku, Tokyo（商店街区域）',source:'https://www.gotokyo.org/en/destinations/northern-tokyo/yanaka-and-nezu/index.html',gallery:'https://www.gotokyo.org/en/destinations/northern-tokyo/yanaka-and-nezu/index.html',desc:'参考PDF的根津—谷中步行段，留时间给小店、小吃和夕阳阶梯。以散步为主，不做购物清单打卡。',steps:['从根津往谷中走，路过喜欢的小店再停。','进入谷中银座商店街，选一两样小吃，两人分享。','走到东侧夕阳阶梯回望商店街，再向日暮里站走。'],budget:'小吃规划 1,000–2,000 円（日元） / 人',booking:'商店各自营业，部分可能周三休息；这站安排街区散步，不依赖某一家甜品店开门。'},
 sushi:{name:'银座久兵卫晚餐',coord:[35.6690,139.7610],original:'sushi',food:'kyubey'},
 meiji:{name:'明治神宫',coord:[35.6764,139.6993],original:'meiji'},
 maisen:{name:'MAISEN 炸猪排',coord:[35.6676,139.7107],original:'maisen',food:'maisen'},
 omotesando:{name:'表参道',coord:[35.6652,139.7123],original:'omotesando'},
 crossing:{name:'八公 · 涩谷路口',coord:[35.6595,139.7005],original:'crossing'},
 sky:{name:'SHIBUYA SKY',coord:[35.6585,139.7022],original:'sky'},
 gonpachi:{name:'Gonpachi 晚餐',coord:[35.6575,139.6953],original:'gonpachi',food:'gonpachi'},
 tsukiji:{name:'筑地场外市场',coord:[35.6653,139.7707],original:'tsukiji'},
 yamacho:{name:'山长玉子烧',coord:[35.6653,139.7705],comic:[59,60],address:'4-10-10 Tsukiji, Chuo-ku, Tokyo',source:'https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/466/',gallery:'https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/466/',desc:'PDF里推荐的市场小吃，作为筑地早餐中的一小站。两人分享，不额外加一顿正餐。',steps:['先逛市场再吃一份玉子烧。','在店家指定区域吃完，不边走边吃。','若队伍长就继续市场主线，不为一份小吃挤压返程。'],budget:'与筑地早午餐预算合并；以现场菜单为准',booking:'市场官方列6:00–15:30、无固定休息日，仍需复核临时营业。'},
 tokyostation:{name:'东京站 · 丸之内',coord:[35.6812,139.7671],original:'tokyostation'}
};
const visit=(id,time,note)=>({id,time,note});
const leg=(mode,time,title,detail,cost='',via=[])=>({mode,time,title,detail,cost,via});
const JOURNEY_DAYS=[
 {id:1,date:'11.24',weekday:'周二',color:'#9b6554',title:'银座落脚，东京亮灯',area:'银座 / 新桥 / 东京塔',intro:'落地日只安排一片街区、一顿热饭和一个夜景。',focus:'关东煮 + 东京塔',walk:'约 3–4 km',note:'假设中午落地、15:00到酒店。若18:00后抵达，先吃饭休息，不硬赶东京塔；航班尚未确认。',
 visits:[visit('hotel','15:00','入住或寄存行李，三晚住同一家。'),visit('ginza','16:00','钟楼附近散步，先感受银座街道。'),visit('oden','17:30','毛毛的关东煮：两人慢慢点，提前订位。'),visit('tower','19:15','看东京塔亮灯，在芝公园周边散步。'),visit('hotel','20:30','打车回酒店，给明天留体力。')],
 legs:[leg('walk','10–15 分钟','酒店 → 银座四丁目','穿舒适鞋，沿银座街区步行；不用为这一小段进地铁站。'),leg('walk','10 分钟','银座 → Oreno','导航到 Ginza 7-6-6，注意店名与分店。'),leg('taxi','15–25 分钟','关东煮 → 东京塔','用餐后在允许停车处叫车，目的地 Tokyo Tower；两人一车比换乘更省心。','规划 1,500–3,000 円（日元） / 车'),leg('taxi','15–25 分钟','东京塔 → 酒店','把酒店英文名和地址给司机，车费随拥堵变化。','规划 1,500–3,000 円（日元） / 车')]},
 {id:2,date:'11.25',weekday:'周三',color:'#627761',title:'浅草出发，走进老东京',area:'浅草 / 根津 / 谷中 / 银座',intro:'保留浅草热门地标，把下午交给PDF里的根津和谷中。',focus:'鳗鱼 + 鸟居 + 街区小吃',walk:'约 6–8 km',note:'把原来的上野／阿美横丁替换为根津—谷中，不再叠加。午后尽量在天黑前走完神社与商店街。',
 visits:[visit('hotel','08:15','步行到新桥，准备坐直达地铁。'),visit('sensoji','09:00','雷门 → 仲见世 → 浅草寺，留足逛吃时间。'),visit('unagi','11:15','鳗鱼三吃午餐，不再叠加第二顿午餐。'),visit('sumida','12:30','河边远眺晴空塔，散步约30分钟。'),visit('nezu','13:30','鸟居、庭院、神社，约45–60分钟。'),visit('yanaka','14:45','小吃、老街、夕阳阶梯，慢逛约90分钟。'),visit('hotel','17:30','回酒店短暂休息。'),visit('sushi','18:30','已订到席位再去；本页只保留这家主推晚餐。'),visit('hotel','20:15','步行回酒店。')],
 legs:[leg('metro','35–45 分钟','G 银座线 · 新桥 → 浅草','步行到新桥G08；坐往 Asakusa 方向，到终点浅草G19。车上约19分钟，出站按雷门标识走；总时间含步行候车。','IC 209 円（日元） / 人',[[35.6716,139.765],[35.6917,139.7708],[35.7116,139.777],[35.7109,139.79]]),leg('walk','10–15 分钟','浅草寺 → 鳗鱼店','沿仲见世、雷门一带回到车站附近；餐厅地址 Hanakawado 1-2-11。'),leg('walk','5–10 分钟','鳗鱼店 → 隅田川','步行到河岸，找晴空塔方向；不用再登第二座观景塔。'),leg('taxi','20–30 分钟','浅草河边 → 根津神社','短途横穿老城区，建议打车，省去换乘与绕行。让司机在神社合适入口附近落客。','规划 2,500–4,000 円（日元） / 车'),leg('walk','20–25 分钟','根津 → 谷中银座','参考PDF的街区步行思路，沿千驮木、谷中方向走；中途可留咖啡休息。'),leg('metro','40–55 分钟','JR 山手线 · 日暮里 → 新桥','谷中东侧阶梯后步行约8–12分钟到日暮里；乘上野／东京方向的山手线，到新桥下车。跟车站屏幕确认方向，无需换乘。','规划 200–300 円（日元） / 人',[[35.7278,139.771],[35.7138,139.777],[35.6985,139.773],[35.6812,139.7671]]),leg('walk','5–10 分钟','酒店 → 银座久兵卫','银座8-7-6；带上预约确认，提前约10分钟到。'),leg('walk','5–10 分钟','晚餐 → 酒店','餐后附近散步，再步行回酒店。')]},
 {id:3,date:'11.26',weekday:'周四',color:'#9b8651',title:'神宫森林，涩谷日落',area:'明治神宫 / 表参道 / 涩谷',intro:'东京西侧只顺着一条线走，午餐、街区与夜景相互衔接。',focus:'炸猪排 + 城市天际线',walk:'约 6–8 km',note:'SHIBUYA SKY暂按15:30入场，需按票源调整。神宫从南侧进入、游玩后走回原宿侧，再向青山午餐。',
 visits:[visit('hotel','08:00','打车前往神宫南侧入口。'),visit('meiji','09:00','从原宿侧走入神宫森林，慢慢参拜。'),visit('maisen','11:30','青山本店炸猪排午餐。'),visit('omotesando','13:00','建筑、咖啡与短暂休息。'),visit('crossing','14:15','八公集合、看十字路口。'),visit('sky','15:30','按预约时段入场，留90分钟。'),visit('gonpachi','18:00','炭烤与荞麦面晚餐。'),visit('hotel','20:00','银座线直达新桥，再步行回酒店。')],
 legs:[leg('taxi','25–40 分钟 + 入口步行','酒店 → 明治神宫南参道','叫车目的地 Meiji Jingu Harajuku Entrance。车不能开到拜殿，落客后沿参道步行约15分钟。两人早晨打车省换乘。','规划 4,000–6,000 円（日元） / 车'),leg('walk','25–35 分钟','神宫 → MAISEN 青山','从南参道回到原宿侧，再沿表参道方向走到 Jingumae 4-8-5；时间从神宫内部起算。'),leg('walk','10–15 分钟','午餐 → 表参道','沿小街走回表参道主街，挑一家咖啡店休息。'),leg('metro','15–25 分钟','G 银座线 · 表参道 → 涩谷','表参道G02乘往 Shibuya 方向，1站到终点G01；出站跟 Hachiko 标识。时间含进出站。','规划 180–210 円（日元） / 人'),leg('walk','8–12 分钟','八公 → SHIBUYA SKY','走到 Shibuya Scramble Square，按观景台专用入口指示上楼，别去十字路口对面的建筑。'),leg('walk','15–20 分钟','SKY → Gonpachi','步行到 E.Space Tower 14楼，给出站、人流和找入口留余量。'),leg('metro','35–45 分钟','G 银座线 · 涩谷 → 新桥','回涩谷G01，坐往 Asakusa 方向，到新桥G08。车上约13分钟；出站步行回酒店。','IC 178 円（日元） / 人',[[35.6585,139.7022],[35.6652,139.7123],[35.6729,139.724],[35.677,139.737],[35.6663,139.758]])]},
 {id:4,date:'11.27',weekday:'周五',color:'#627e88',title:'筑地早晨，从容返程',area:'筑地 / 东京站 / 银座取行李',intro:'参考PDF的筑地早市安排，把最后半天留在酒店附近。',focus:'市场早餐 + 红砖东京站',walk:'约 3–4 km',note:'仅适用于傍晚或晚间航班。机场与起飞时间未确认，暂不画虚假的机场路线；国际航班建议按航司要求提前到场，规划先留3小时。',
 visits:[visit('hotel','08:30','退房，寄存行李；记得领取寄存凭证。'),visit('tsukiji','09:00','市场早午餐，海鲜、熟食按喜好点。'),visit('yamacho','09:45','PDF同款小吃，和早餐合并，不额外加餐。'),visit('tokyostation','11:15','丸之内红砖站房，散步拍照约45分钟。'),visit('hotel','12:30','回酒店取行李，再按航班时间去机场。')],
 legs:[leg('walk','20–25 分钟','银座酒店 → 筑地','不带大件行李，步行穿过银座到场外市场；避开送货通道。'),leg('walk','3–5 分钟','市场内 → 山长玉子烧','导航到 Tsukiji 4-10-10；市场区域标记与店铺点位很近，放大可查看。'),leg('taxi','15–25 分钟','筑地 → 东京站丸之内侧','建议打车到 Marunouchi Central Exit，节省市场走累后的体力。别选八重洲侧，否则还要穿站。','规划 1,500–2,500 円（日元） / 车'),leg('taxi','15–25 分钟','东京站 → 银座酒店取行李','必须回酒店取行李，再出发去机场；这一段已画回酒店。','规划 1,500–2,500 円（日元） / 车')]}
];
const MODE={walk:{label:'步行',dash:'2 7',icon:'步'},metro:{label:'地铁 / JR',dash:null,icon:'轨'},taxi:{label:'打车',dash:'10 6',icon:'车'}};
const ROUTE_SOURCES=[['东京地铁：线路与车站','https://www.tokyometro.jp/en/route_station/index.html'],['东京地铁：2026票价与行车时间','https://www.tokyometro.jp/lang_en/info/files/20260414_en.pdf'],['JR东日本：交通信息','https://www.jreast.co.jp/multi/en/'],['根津神社：地址与到达','https://nedujinja.or.jp/access/'],['东京旅游局：谷中与根津','https://www.gotokyo.org/en/destinations/northern-tokyo/yanaka-and-nezu/index.html'],['筑地山长：市场官方资料','https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/466/']];

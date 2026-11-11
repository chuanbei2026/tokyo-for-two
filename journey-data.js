/* Confirmed November 23–27, 2026 plan. Visit and transfer times are estimates. */
const JOURNEY_POINTS={
  "hotel": {
    "name": "Dormy Inn PREMIUM 银座",
    "coord": [
      35.6675816,
      139.7656977
    ],
    "address": "6-16-8 Ginza, Chuo-ku, Tokyo",
    "source": "https://dormy-hotels.com/dormyinn/hotels/ginza/",
    "gallery": "https://dormy-hotels.com/dormyinn/hotels/ginza/",
    "desc": "PDF 原推荐酒店，仅保留候选；本次住宿已改为馥府东京银座与东京银座万怡。",
    "steps": [
      "本次不入住这里，请使用两家已确认酒店的地址。"
    ],
    "budget": "房价以实际预订为准",
    "booking": "未排入本次住宿",
    "query": "Dormy Inn PREMIUM 银座 6-16-8 Ginza, Chuo-ku, Tokyo",
    "comic": [
      70,
      70
    ]
  },
  "ginza": {
    "name": "银座街区",
    "coord": [
      35.6716,
      139.765
    ],
    "original": "ginza"
  },
  "oden": {
    "name": "Oreno 关东煮",
    "desc": "周四两个人的关东煮晚餐；从浅草回银座休息后再出门。",
    "coord": [
      35.6696,
      139.7603
    ],
    "original": "oden",
    "food": "oreno-oden",
    "booking": "建议预约11月26日18:00；尚未代订，按餐厅确认时间调整。",
    "steps": [
      "预订11月26日两位、18:00左右的座位；具体用餐时段以餐厅确认结果为准。",
      "先点萝卜、鸡蛋和豆腐制品，再按胃口追加牛筋或其他肉类；汤底可能含鱼，过敏需向餐厅确认。",
      "晚间席费、小菜与饮料计入预算；吃完步行回银座万怡。"
    ]
  },
  "tower": {
    "name": "东京塔",
    "coord": [
      35.6586,
      139.7454
    ],
    "original": "tower"
  },
  "sensoji": {
    "name": "浅草寺 · 雷门",
    "coord": [
      35.7148,
      139.7967
    ],
    "original": "sensoji"
  },
  "unagi": {
    "name": "浅草鳗鱼午餐",
    "coord": [
      35.7118,
      139.7983
    ],
    "original": "unagi",
    "food": "unatetsu"
  },
  "sumida": {
    "name": "隅田川散步",
    "coord": [
      35.7135,
      139.8014
    ],
    "original": "sumida"
  },
  "nezu": {
    "name": "根津神社",
    "coord": [
      35.7202,
      139.7608
    ],
    "comic": [
      64,
      20
    ],
    "address": "1-28-9 Nezu, Bunkyo-ku, Tokyo",
    "source": "https://nedujinja.or.jp/access/",
    "gallery": "https://www.gotokyo.org/en/spot/70/",
    "desc": "从自由之丘转到根津，下午在神社建筑与鸟居小径中慢慢散步。",
    "steps": [
      "沿入口、楼门、拜殿慢慢参观，再走鸟居小径。",
      "留45–60分钟；鸟居不是整座神社，不必为了拍照堵住通道。",
      "11月看建筑与街区，不把春季杜鹃花海当作本次看点。"
    ],
    "budget": "普通境内参观免费，特别活动另计",
    "booking": "建议14:30到达；出发前核对官网当月参观时间。"
  },
  "yanaka": {
    "name": "谷中银座",
    "coord": [
      35.7277,
      139.7653
    ],
    "comic": [
      65,
      14
    ],
    "address": "3-13 Yanaka, Taito-ku, Tokyo（商店街区域）",
    "source": "https://www.gotokyo.org/en/destinations/northern-tokyo/yanaka-and-nezu/index.html",
    "gallery": "https://www.gotokyo.org/en/destinations/northern-tokyo/yanaka-and-nezu/index.html",
    "desc": "参考PDF的根津—谷中步行段，留时间给小店、小吃和夕阳阶梯。以散步为主，不做购物清单打卡。",
    "steps": [
      "从根津往谷中走，路过喜欢的小店再停。",
      "进入谷中银座商店街，选一两样小吃，两人分享。",
      "走到东侧夕阳阶梯回望商店街，再按返程路线前往千驮木站。"
    ],
    "budget": "小吃规划 1,000–2,000 円（日元） / 人",
    "booking": "商店各自营业；这里以街区散步为主，不依赖某一家甜品店开门。"
  },
  "sushi": {
    "name": "银座久兵卫晚餐",
    "coord": [
      35.669,
      139.761
    ],
    "original": "sushi",
    "food": "kyubey"
  },
  "meiji": {
    "name": "明治神宫",
    "coord": [
      35.6764,
      139.6993
    ],
    "original": "meiji"
  },
  "maisen": {
    "name": "MAISEN 炸猪排",
    "coord": [
      35.6676,
      139.7107
    ],
    "original": "maisen",
    "food": "maisen"
  },
  "omotesando": {
    "name": "表参道",
    "coord": [
      35.6652,
      139.7123
    ],
    "original": "omotesando"
  },
  "crossing": {
    "name": "八公 · 涩谷路口",
    "coord": [
      35.6595,
      139.7005
    ],
    "original": "crossing"
  },
  "sky": {
    "name": "SHIBUYA SKY",
    "coord": [
      35.6585,
      139.7022
    ],
    "original": "sky",
    "booking": "计划11月24日15:30入场，尚未购票；售罄则按可买到的场次调整当天顺序。屋顶开放受天气影响。",
    "steps": [
      "前往Shibuya Scramble Square 14层入口，提前到达并按票面时间入场。",
      "预留约90–120分钟看城市由白天进入傍晚；不能保证日落或天气。",
      "出发前检查屋顶开放与随身物品规定。"
    ]
  },
  "gonpachi": {
    "name": "Gonpachi 晚餐",
    "coord": [
      35.6575,
      139.6953
    ],
    "original": "gonpachi",
    "food": "gonpachi"
  },
  "tsukiji": {
    "name": "筑地场外市场",
    "coord": [
      35.6653,
      139.7707
    ],
    "original": "tsukiji",
    "booking": "周五早晨只选择已开门的店；若早营业店排队过长，改附近早餐，09:00收尾。",
    "tips": "07:30并非全市场都开门；早营业的海鲜店与玉子烧优先，按当天营业情况选。这里是场外市场，不是丰洲拍卖场。"
  },
  "yamacho": {
    "name": "山长玉子烧",
    "coord": [
      35.6653,
      139.7705
    ],
    "comic": [
      59,
      60
    ],
    "address": "4-10-10 Tsukiji, Chuo-ku, Tokyo",
    "source": "https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/466/",
    "gallery": "https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/466/",
    "desc": "PDF里推荐的市场小吃，作为筑地早餐中的一小站。两人分享，不额外加一顿正餐。",
    "steps": [
      "先逛市场再吃一份玉子烧。",
      "在店家指定区域吃完，不边走边吃。",
      "若队伍长就继续市场主线，不为一份小吃挤压返程。"
    ],
    "budget": "与筑地早午餐预算合并；以现场菜单为准",
    "booking": "市场官方列6:00–15:30、无固定休息日，仍需复核临时营业。"
  },
  "tokyostation": {
    "name": "东京站 · 丸之内",
    "coord": [
      35.6812,
      139.7671
    ],
    "original": "tokyostation",
    "desc": "周三午餐后逛丸之内与东京站红砖广场，下午回银座万怡办理入住；不是赶飞机前的停留。",
    "steps": [
      "13:30左右先在丸之内用午餐，按胃口选店，预算约2,000–4,000 円（日元） / 人。",
      "饭后看红砖站舍、站前广场与仲通，咖啡休息，购物随缘。",
      "约15:45叫车回银座万怡，不带行李逛大站。"
    ],
    "booking": "街区自由参观；午餐未订位。",
    "tips": "认准丸之内侧；周三在这里游玩，与周五机场交通分开。"
  },
  "nakameguro": {
    "name": "中目黑 · 目黑川",
    "coord": [
      35.6457,
      139.6994
    ],
    "address": "Kamimeguro 1-chome, Meguro-ku, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/southern-tokyo/nakameguro/index.html",
    "gallery": "https://www.gotokyo.org/en/destinations/southern-tokyo/nakameguro/index.html",
    "desc": "沿 PDF 从中目黑走向代官山，再到惠比寿；吃与散步优先，不强制购物。",
    "steps": [
      "出站先认目黑川，沿河散步。",
      "PDF 提到甜甜圈、AFURI 与河岸咖啡，选一顿或一杯，不逐店排队。",
      "11月是普通河岸街景，不是樱花季。"
    ],
    "budget": "餐饮规划 1,500–3,000 円（日元） / 人",
    "booking": "营业时间以出发前官方公布为准",
    "query": "中目黑 · 目黑川 Kamimeguro 1-chome, Meguro-ku, Tokyo",
    "comic": [
      23,
      78
    ]
  },
  "daikanyama": {
    "name": "代官山 · 蔦屋书店",
    "coord": [
      35.6491,
      139.6999
    ],
    "address": "17-5 Sarugakucho, Shibuya-ku, Tokyo",
    "source": "https://store.tsite.jp/daikanyama/access/",
    "gallery": "https://store.tsite.jp/daikanyama/access/",
    "desc": "PDF 中目黑—代官山—惠比寿步行主线的核心停留。",
    "steps": [
      "沿街慢走到 T-SITE，途中有坡道。",
      "重点看设计、旅行与艺术书，咖啡休息30分钟。",
      "购物只随缘，留足步行去惠比寿的时间。"
    ],
    "budget": "咖啡规划 800–1,500 円（日元） / 人",
    "booking": "书店官方列9:00–22:00；店内餐饮时间各异",
    "query": "代官山 · 蔦屋书店 17-5 Sarugakucho, Shibuya-ku, Tokyo",
    "comic": [
      30,
      72
    ]
  },
  "ebisu": {
    "name": "惠比寿站",
    "coord": [
      35.6467,
      139.7098
    ],
    "address": "Ebisu Station, Shibuya-ku, Tokyo",
    "source": "https://www.tokyometro.jp/lang_en/station/ebisu/index.html",
    "gallery": "https://www.tokyometro.jp/lang_en/station/ebisu/index.html",
    "desc": "PDF 街区步行终点，从这里坐日比谷线回东银座。",
    "steps": [
      "找 H 日比谷线，不要误入 JR 闸机。",
      "往北千住方向乘车，到东银座下车。",
      "返酒店休息后再吃晚饭。"
    ],
    "budget": "免费散步；餐饮另计",
    "booking": "营业时间以出发前官方公布为准",
    "query": "惠比寿站 Ebisu Station, Shibuya-ku, Tokyo",
    "comic": [
      36,
      76
    ]
  },
  "wellk": {
    "name": "Wellk 早餐",
    "coord": [
      35.6399717,
      139.71214
    ],
    "address": "2-5-11 Mita, Meguro-ku, Tokyo, 2F",
    "source": "https://www.tablecheck.com/en/wellk/reserve/message",
    "gallery": "https://www.tablecheck.com/en/wellk/reserve/message",
    "desc": "PDF 的预约早餐；先按9:00到店规划，最终须以店家开放的预约场次为准。",
    "steps": [
      "从惠比寿步行约15分钟，店在二楼，认门牌上楼。",
      "以预约页面当日可选套餐和时间为准。",
      "吃完回惠比寿，经中目黑换东横线去自由之丘。"
    ],
    "budget": "早餐规划 2,000–3,500 円（日元） / 人",
    "booking": "未预约；若当天无9:00场次，需同步调整早餐及之后行程",
    "query": "Wellk 早餐 2-5-11 Mita, Meguro-ku, Tokyo, 2F",
    "comic": [
      34,
      84
    ]
  },
  "jiyugaoka": {
    "name": "自由之丘",
    "coord": [
      35.6076,
      139.6688
    ],
    "address": "Jiyugaoka Station, Meguro-ku, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/southern-tokyo/jiyugaoka/",
    "gallery": "https://www.gotokyo.org/en/destinations/southern-tokyo/jiyugaoka/",
    "desc": "按 PDF 逛生活杂货、小店和甜品；为根津与谷中留出日光时间，午后提早离开。",
    "steps": [
      "站前 → 生活杂货小街 → 甜品休息，遇到喜欢的小店再进。",
      "午餐按 PDF 的荞麦面方向安排，餐饮预算与街区停留合并。",
      "13:20左右返站，选开往副都心线的直通车，或在涩谷换乘。"
    ],
    "budget": "午餐与甜品规划 2,500–4,500 円（日元） / 人",
    "booking": "营业时间以出发前官方公布为准",
    "query": "自由之丘 Jiyugaoka Station, Meguro-ku, Tokyo",
    "comic": [
      15,
      91
    ]
  },
  "titoten": {
    "name": "titoten · 三轩茶屋早餐",
    "coord": [
      35.644906,
      139.669802
    ],
    "address": "4-25-5 Taishido, Setagaya-ku, Tokyo",
    "source": "https://www.instagram.com/tito.ten/",
    "gallery": "https://www.instagram.com/tito.ten/",
    "desc": "照 PDF 第五天，从三轩茶屋的小店早餐开始，给两人留一小时慢慢吃。",
    "steps": [
      "从三轩茶屋站出站，沿茶泽通附近街道走到4-25-5；店面低调，注意门上的店名。",
      "点早餐拼盘或当日提供的面包、蛋和饮料，菜单以当天为准。",
      "计划9:25到；排队超过20分钟就压缩后面的拍照时间，保留午餐与豪德寺。"
    ],
    "budget": "早餐预算 1,500–2,500 円（日元） / 人",
    "booking": "提前核对11月27日早餐营业及预约方式；尚未预约。",
    "query": "titoten · 三轩茶屋早餐 4-25-5 Taishido, Setagaya-ku, Tokyo",
    "comic": [
      25,
      68
    ]
  },
  "gorilla": {
    "name": "三轩茶屋 · 大猩猩大楼",
    "coord": [
      35.6476117,
      139.6691656
    ],
    "address": "3-15-2 Taishido, Setagaya-ku, Tokyo",
    "source": "https://matcha-jp.com/en/23684",
    "gallery": "https://matcha-jp.com/en/23684",
    "desc": "茶泽通上的巨大猩猩是这一带很有趣的街头地标，短暂停留拍照。",
    "steps": [
      "沿茶泽通找便利店上方伸出的巨大猩猩。",
      "拍照约15分钟，其余时间留给附近散步、咖啡和与大熊会合。"
    ],
    "budget": "街道外观免费",
    "booking": "约10–15分钟即可。",
    "query": "三轩茶屋 · 大猩猩大楼 3-15-2 Taishido, Setagaya-ku, Tokyo",
    "comic": [
      25,
      62
    ]
  },
  "carrot": {
    "name": "Carrot Tower · 26层城市景色",
    "coord": [
      35.6436933,
      139.669292
    ],
    "address": "4-1-1 Taishido, Setagaya-ku, Tokyo",
    "source": "https://www.tokyu.co.jp/area/sangen-jaya/article/arti-01KS6TTH11RW90FTVAPSV1CS9M/",
    "gallery": "https://www.tokyu.co.jp/area/sangen-jaya/article/arti-01KS6TTH11RW90FTVAPSV1CS9M/",
    "desc": "免费展望大厅俯瞰西东京，再从楼下换乘世田谷线小电车。",
    "steps": [
      "走进Carrot Tower，跟随26F展望大厅标识；由2层中庭找专用电梯。",
      "在公共展望区域看城市街区，能见度决定远景，不保证能看见富士山。",
      "11:05左右下楼，找地面世田谷线SG01；不要回地下田园都市线。"
    ],
    "budget": "公共展望大厅免费；饮料另计",
    "booking": "出发前核对开放情况；餐厅消费不等于展望大厅门票。",
    "query": "Carrot Tower · 26层城市景色 4-1-1 Taishido, Setagaya-ku, Tokyo",
    "comic": [
      22,
      69
    ]
  },
  "gotokuji": {
    "name": "豪德寺 · 招财猫与寺院",
    "coord": [
      35.6484976,
      139.6472629
    ],
    "address": "2-24-7 Gotokuji, Setagaya-ku, Tokyo",
    "source": "https://www.gotokuji.jp/en/about/",
    "gallery": "https://www.gotokuji.jp/en/about/",
    "desc": "搭世田谷线来到安静寺院，按 PDF 依次走山门、佛殿、三重塔与招财猫区域。",
    "steps": [
      "从山下站沿住宅街走约15分钟，经参道进入寺院。",
      "先看山门与佛殿，再走三重塔和招财猫奉纳区域；拍照不触碰供奉物。",
      "如想请一只招财猫，留时间到寺务所；库存与价格以现场为准。",
      "12:30左右离开，留15分钟走到小田急豪德寺站OH10。"
    ],
    "budget": "普通境内参观免费；授予品另计",
    "booking": "官网参观6:00–17:00，寺务所8:00–15:00；临行复核。",
    "query": "豪德寺 · 招财猫与寺院 2-24-7 Gotokuji, Setagaya-ku, Tokyo",
    "comic": [
      12,
      56
    ]
  },
  "samurai": {
    "name": "SAMURAI. · 下北泽汤咖喱午餐",
    "coord": [
      35.6646759,
      139.6669344
    ],
    "address": "3-31-14 Kitazawa, Setagaya-ku, Tokyo",
    "source": "https://www.samurai-curry.com/shop_shimokitazawa/",
    "gallery": "https://www.samurai-curry.com/shop_shimokitazawa/",
    "desc": "从 PDF 的午餐推荐中选一间作主线：蔬菜丰富的汤咖喱，吃饱后再逛下北泽。",
    "steps": [
      "小田急下北泽OH07下车，中央口出站，沿北侧商店街步行到店。",
      "按菜单选主料、米饭量与辣度；第一次可从低辣开始。",
      "留约1小时含等位；若排队较久，减少之后小店停留，不压缩吃饭时间。"
    ],
    "budget": "午餐预算 1,800–2,800 円（日元） / 人",
    "booking": "不预设一定有位；营业与菜单以店家当日信息为准。",
    "query": "SAMURAI. · 下北泽汤咖喱午餐 3-31-14 Kitazawa, Setagaya-ku, Tokyo",
    "comic": [
      24,
      45
    ]
  },
  "shimokita": {
    "name": "下北泽 · 一番街与唱片小店",
    "coord": [
      35.664,
      139.66713
    ],
    "address": "Kitazawa 2–3 chome, Setagaya-ku, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/western-tokyo/shimokitazawa/index.html",
    "gallery": "https://www.gotokyo.org/en/destinations/western-tokyo/shimokitazawa/index.html",
    "desc": "午餐后沿一番街慢慢看古着、杂货和唱片，重点是街区气氛，不安排必须购买的清单。",
    "steps": [
      "沿一番街散步，路过NEW YORK JOE、2nd STREET和disk union时按兴趣停留。",
      "两人各挑一家感兴趣的小店，不把每一家都变成任务。",
      "接着往东走到reload，途中找路口和店招拍照。"
    ],
    "budget": "散步免费；购物自选",
    "booking": "约35分钟，店铺营业各不相同。",
    "query": "下北泽 · 一番街与唱片小店 Kitazawa 2–3 chome, Setagaya-ku, Tokyo",
    "comic": [
      27,
      42
    ]
  },
  "reload": {
    "name": "reload · 咖啡与设计小店",
    "coord": [
      35.6631126,
      139.6696564
    ],
    "address": "3-19-20 Kitazawa, Setagaya-ku, Tokyo",
    "source": "https://reload-shimokita.com/",
    "gallery": "https://reload-shimokita.com/",
    "desc": "旧铁道沿线的小型店铺聚落，在这里喝杯咖啡休息，再走去BONUS TRACK。",
    "steps": [
      "从东侧步道进入reload，先绕一圈看建筑与小店。",
      "选一杯咖啡或甜点，两人坐下歇脚，不急着赶店。",
      "沿下北线街的步行空间往西走，穿过车站附近去BONUS TRACK。"
    ],
    "budget": "咖啡甜点预算 700–1,500 円（日元） / 人",
    "booking": "店家分别营业；预计停留25–30分钟。",
    "query": "reload · 咖啡与设计小店 3-19-20 Kitazawa, Setagaya-ku, Tokyo",
    "comic": [
      30,
      44
    ]
  },
  "bonus": {
    "name": "BONUS TRACK · 街区慢逛",
    "coord": [
      35.6593357,
      139.6644187
    ],
    "address": "2-36-12 to 15 Daita, Setagaya-ku, Tokyo",
    "source": "https://bonus-track.net/",
    "gallery": "https://bonus-track.net/",
    "desc": "独立店铺与开放步行空间组成的小街区，作为下北泽的最后一站。",
    "steps": [
      "沿小街看书店、生活杂货与咖啡店，按喜好停留。",
      "15:55左右开始返回下北泽站，找京王井之头线标识。",
      "想买点心就控制分量，把胃口留给吉祥寺小吃与晚餐。"
    ],
    "budget": "散步免费；消费自选",
    "booking": "按当天开店情况逛，约30–40分钟。",
    "query": "BONUS TRACK · 街区慢逛 2-36-12 to 15 Daita, Setagaya-ku, Tokyo",
    "comic": [
      22,
      49
    ]
  },
  "kichijoji": {
    "name": "吉祥寺 · Sunroad与街头小吃",
    "coord": [
      35.70425,
      139.57976
    ],
    "address": "Kichijoji Honcho 1 chome, Musashino, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/western-tokyo/kichijoji/index.html",
    "gallery": "https://www.gotokyo.org/en/destinations/western-tokyo/kichijoji/index.html",
    "desc": "按 PDF 从北口进入有顶棚的Sunroad，再转Daiya Street，边走边分享小吃。",
    "steps": [
      "从吉祥寺站北口出站，先走Sunroad商店街，再转Daiya Street。",
      "想吃热食可找Satou炸牛肉饼、天音鲷鱼烧或鱼糕；以营业和队伍为准，选1–2样分享。",
      "小笹羊羹常需很早排队，这个下午时段不承诺能买到；不要为了售罄商品打乱路线。",
      "傍晚步行去车站北侧的口琴横丁，坐下来吃晚餐。"
    ],
    "budget": "小吃预算 1,000–2,000 円（日元） / 人",
    "booking": "小吃各店营业不同；日落后以商店街为主。",
    "query": "吉祥寺 · Sunroad与街头小吃 Kichijoji Honcho 1 chome, Musashino, Tokyo",
    "comic": [
      7,
      22
    ]
  },
  "harmonica": {
    "name": "口琴横丁 · 小巷晚餐",
    "coord": [
      35.70366,
      139.57926
    ],
    "address": "Kichijoji Honcho 1 chome, Musashino, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/western-tokyo/kichijoji/index.html",
    "gallery": "https://www.gotokyo.org/en/destinations/western-tokyo/kichijoji/index.html",
    "desc": "狭窄巷弄里的居酒屋与小店，为东京西侧的一天收尾。",
    "steps": [
      "沿口琴横丁的小巷看店面，选择有两人座位且菜单合适的店。",
      "晚餐主食搭几样下酒菜；不喝酒也可先向店家确认是否能用餐。",
      "18:50左右结账，19:00前往JR吉祥寺站，按中央线快速往东京方向返程。"
    ],
    "budget": "晚餐预算 3,000–5,000 円（日元） / 人",
    "booking": "街区安排，未锁定或预订具体餐厅；座位和禁烟情况现场确认。",
    "query": "口琴横丁 · 小巷晚餐 Kichijoji Honcho 1 chome, Musashino, Tokyo",
    "comic": [
      6,
      26
    ]
  },
  "imperial-palace-east-gardens": {
    "name": "皇居东御苑 · 江户城遗迹",
    "coord": [
      35.6855,
      139.7619
    ],
    "address": "1-1 Chiyoda, Chiyoda City, Tokyo 100-8111 · Ote-mon Gate",
    "source": "https://www.kunaicho.go.jp/visit/higashigyoen/gyoen-close.html",
    "gallery": "https://www.gotokyo.org/en/story/guide/a-noble-look-at-tokyos-imperial-palace-a-guide-to-the-royal-residence/",
    "desc": "穿过大手门，看石墙、庭园与江户城遗迹。建议 60–90 分钟；本次旅行可选 11月25日或26日。",
    "query": "Imperial Palace East Gardens Otemon Gate Tokyo",
    "steps": [
      "从大手门进入，依次看石墙、庭园与江户城遗迹，再从大手门返回。",
      "11月25日官方日历开放；09:00–16:00，15:30停止入园。",
      "这是东御苑，不是需要另外申请的皇居内部导览。"
    ],
    "budget": "参观免费；餐饮另计",
    "booking": "11月24日、27日休园；本次安排25日上午。临时调整以宫内厅公告为准。"
  },
  "imperial-palace-gaien": {
    "name": "皇居外苑 · 二重桥",
    "coord": [
      35.6797,
      139.7562
    ],
    "address": "Kokyogaien, Chiyoda City, Tokyo 100-0002",
    "source": "https://www.env.go.jp/garden/kokyogaien/english/",
    "gallery": "https://www.gotokyo.org/en/story/guide/a-noble-look-at-tokyos-imperial-palace-a-guide-to-the-royal-residence/",
    "desc": "你想去的皇宫区：看护城河、石桥和松树广场。建议留 45–60 分钟，接着散步去丸之内。",
    "query": "Kokyo Gaien Nijubashi Bridge Tokyo",
    "steps": [
      "从外苑看二重桥、护城河和松树广场。",
      "桥梁从公共区域观赏，不代表可以进入宫殿。"
    ],
    "budget": "参观免费；餐饮另计",
    "booking": "按当天实际开放与排队安排"
  },
  "afuri": {
    "name": "AFURI 原宿",
    "coord": [
      35.6716,
      139.7053
    ],
    "address": "1F Grandeforesta, 3-63-1 Sendagaya, Shibuya-ku, Tokyo",
    "source": "https://afuri.com/findus/",
    "gallery": "https://afuri.com/findus/",
    "desc": "旧计划里的柚子拉面备选；这是原宿店，与 PDF 的中目黑店区分。",
    "query": "AFURI 原宿",
    "steps": [
      "原宿店，地址3-63-1 Sendagaya；不是中目黑分店。",
      "准备银行卡等无现金支付方式；按现场排队取餐。"
    ],
    "budget": "参观免费；餐饮另计",
    "booking": "按当天实际开放与排队安排",
    "food": "afuri"
  },
  "fufu-ginza": {
    "name": "馥府东京银座 · FUFU",
    "coord": [
      35.6741485,
      139.7675246
    ],
    "address": "1-7-10 Ginza, Chuo-ku, Tokyo",
    "source": "https://www.fufutokyo.jp/en/access/",
    "gallery": "https://www.fufutokyo.jp/en/access/",
    "query": "馥府东京银座 · FUFU 1-7-10 Ginza, Chuo-ku, Tokyo",
    "desc": "11月23、24日两晚；25日上午退房。抵达夜以休息为主，温泉按酒店说明使用。",
    "steps": [
      "酒店餐食是否包含、入住与退房时间，以订单为准。",
      "带行李时优先短程出租车；提前让前台协助预约机场接送。"
    ],
    "budget": "房费以已订订单为准",
    "booking": "11月23、24日两晚；25日上午退房。抵达夜以休息为主，温泉按酒店说明使用。",
    "isHotel": true
  },
  "courtyard-ginza": {
    "name": "东京银座万怡 · Courtyard",
    "coord": [
      35.66837,
      139.7651
    ],
    "address": "6-14-10 Ginza, Chuo-ku, Tokyo",
    "source": "https://www.marriott.com/en-us/hotels/tyocy-courtyard-tokyo-ginza-hotel/overview/",
    "gallery": "https://www.marriott.com/en-us/hotels/tyocy-courtyard-tokyo-ginza-hotel/overview/",
    "query": "东京银座万怡 · Courtyard 6-14-10 Ginza, Chuo-ku, Tokyo",
    "desc": "11月25、26日两晚；25日上午先寄存行李，下午再办理入住。27日取行李退房后前往成田。",
    "steps": [
      "酒店餐食是否包含、入住与退房时间，以订单为准。",
      "带行李时优先短程出租车；提前让前台协助预约机场接送。"
    ],
    "budget": "房费以已订订单为准",
    "booking": "11月25、26日两晚；25日上午先寄存行李，下午再办理入住。27日取行李退房后前往成田。",
    "isHotel": true
  },
  "haneda-arrival": {
    "name": "羽田机场 HND · 19:15抵达",
    "coord": [
      35.5449,
      139.7686
    ],
    "address": "Haneda Airport, Ota-ku, Tokyo · 航站楼待航班号确认",
    "source": "https://tokyo-haneda.com/en/",
    "query": "Haneda Airport Terminal 3",
    "desc": "11月23日19:15抵达；地图暂以国际航站楼T3作定位参考，实际须核对机票。",
    "steps": [
      "19:15是落地时间，不是出机场时间。",
      "预留约75–105分钟入境、取行李；如延误，酒店抵达时间顺延。",
      "出关后到正规出租车乘车区，向司机展示酒店英文名称与完整地址。"
    ],
    "budget": "机场购物另计",
    "booking": "航班号与航站楼待补；未预订接机。"
  },
  "narita-departure": {
    "name": "成田机场 NRT · 15:00起飞",
    "coord": [
      35.773,
      140.3876
    ],
    "address": "Narita International Airport, Chiba · 航站楼待航班号确认",
    "source": "https://www.narita-airport.jp/en/airportguide/inter-dep/",
    "query": "Narita International Airport",
    "desc": "11月27日15:00飞往上海浦东；按3小时35分钟飞行和1小时时差，预计17:35上海当地落地。",
    "steps": [
      "目标12:30到机场，办理值机、托运、安检和出境；机场官方建议国际航班至少提前2小时抵达。",
      "当前地图以T2位置代表机场，不是已确认航站楼；订车前务必告诉司机航空公司和实际航站楼。",
      "值机截止与登机口时间以航空公司通知为准，不能把15:00当成到登机口的时间。"
    ],
    "budget": "机场午餐规划 1,500–3,000 円（日元） / 人",
    "booking": "15:00起飞为已确认约束；接送及航站楼尚待落实。"
  }
};
const JOURNEY_DAYS=[
  {
    "id": 1,
    "date": "11.23",
    "weekday": "周一",
    "label": "抵达夜",
    "kind": "arrival",
    "endTime": "23:00",
    "color": "#9b6554",
    "title": "羽田抵达，直接去馥府休息",
    "area": "羽田 / 银座",
    "intro": "19:15落地；入境、到酒店、休息，不安排必须赶上的晚餐。",
    "focus": "抵达 + 恢复体力",
    "walk": "少量机场步行",
    "note": "已确认19:15抵达羽田。暂估20:45出机场、21:30到馥府；入境和道路情况可能使时间后移。有精神且朋友有空才吃附近夜宵，不跨城赶赴约。",
    "visits": [
      {
        "id": "haneda-arrival",
        "time": "19:15",
        "note": "落地后入境、取行李。准备酒店地址，先给酒店报预计抵达时间。"
      },
      {
        "id": "fufu-ginza",
        "time": "21:30",
        "note": "办理入住、洗漱休息；夜宵可选，不安排正式预约。"
      }
    ],
    "legs": [
      {
        "mode": "taxi",
        "time": "40–50 分钟",
        "title": "羽田 → 馥府东京银座",
        "detail": "长途飞行后带箱子，建议正规出租车直达1-7-10 Ginza。暂估20:45上车；航站楼待确认。可选京急直通浅草线到宝町后步行，但今晚优先省力。",
        "cost": "规划 9,000–13,000 円（日元） / 车；高速及叫车费用以报价为准",
        "rails": []
      }
    ]
  },
  {
    "id": 2,
    "date": "11.24",
    "weekday": "周二",
    "label": "周二 · 涩谷",
    "kind": "tour",
    "endTime": "22:00",
    "color": "#718568",
    "title": "和大熊逛西东京，傍晚看涩谷",
    "area": "三轩茶屋 / 原宿 / 涩谷",
    "intro": "围绕贝贝想去的猩猩大楼、AFURI、十字路口与天空观景台；会合安排在大熊住的涩谷一带。",
    "focus": "和大熊会合 + 城市夜景",
    "walk": "约 4–6 km，累了打车",
    "note": "这天可以和大熊一起。上午节奏放慢；SHIBUYA SKY先按15:30规划，需先购到对应场次。猩猩只是短停，留时间给街区和吃饭。",
    "visits": [
      {
        "id": "fufu-ginza",
        "time": "09:00",
        "note": "酒店早餐、慢慢准备；约09:40出门，适应时差。"
      },
      {
        "id": "gorilla",
        "time": "10:30",
        "note": "与大熊在三轩茶屋会合，拍猩猩、逛茶泽通和喝咖啡。"
      },
      {
        "id": "afuri",
        "time": "12:00",
        "note": "原宿店吃柚子拉面，留60分钟含等位；长队时相应缩短后面散步。"
      },
      {
        "id": "omotesando",
        "time": "13:15",
        "note": "沿原宿、表参道街区散步，喜欢的店再进；这是顺路缓冲，不是必打卡。"
      },
      {
        "id": "crossing",
        "time": "14:30",
        "note": "看八公和十字路口，喝点东西、休息，再前往观景台入口。"
      },
      {
        "id": "sky",
        "time": "15:30",
        "note": "计划15:30入场看白天到傍晚的城市；票未买，按实际场次调整。"
      },
      {
        "id": "gonpachi",
        "time": "18:00",
        "note": "涩谷晚餐暂推荐Gonpachi，可与大熊商量替换；尚未订位。"
      },
      {
        "id": "fufu-ginza",
        "time": "20:15",
        "note": "回馥府休息，享受第二晚酒店和温泉，不再加夜游。"
      }
    ],
    "legs": [
      {
        "mode": "metro",
        "time": "45–55 分钟",
        "title": "银座线 → 表参道 → 三轩茶屋",
        "detail": "步行到银座G09，银座线往涩谷方向至表参道G02。换半藏门线，选直通田园都市线、继续往中央林间方向的列车，到三轩茶屋DT03；若只到涩谷，换继续西行列车。出站沿茶泽通走到猩猩大楼。",
        "cost": "规划 350–500 円（日元） / 人",
        "rails": []
      },
      {
        "mode": "taxi",
        "time": "25–35 分钟",
        "title": "三轩茶屋 → AFURI 原宿",
        "detail": "从茶泽通可停车处叫车，目的地为3-63-1 Sendagaya原宿店；绕开地铁换乘，预算按整车。",
        "cost": "规划 3,500–5,500 円（日元） / 车",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "15–25 分钟",
        "title": "AFURI → 表参道",
        "detail": "餐后沿原宿街区步行，按路口信号通行。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "25–35 分钟",
        "title": "表参道 → 涩谷路口",
        "detail": "沿街向涩谷走，边走边看；若疲劳可打车，保留观景台时间。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–20 分钟",
        "title": "八公路口 → SKY入口",
        "detail": "穿过车站周边步行通道到Scramble Square，再到14层检票；包含找入口和电梯的余量。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "15–25 分钟",
        "title": "SKY → 涩谷晚餐",
        "detail": "看完景色再走向道玄坂一侧，按餐厅地址确认楼层。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "taxi",
        "time": "25–45 分钟",
        "title": "涩谷晚餐 → 馥府",
        "detail": "与大熊告别后打车回银座；这段优先休息。也可从涩谷G01坐银座线到银座G09后步行。",
        "cost": "规划 5,000–8,000 円（日元） / 车",
        "rails": []
      }
    ]
  },
  {
    "id": 3,
    "date": "11.25",
    "weekday": "周三",
    "label": "周三 · 皇居",
    "kind": "tour",
    "endTime": "22:00",
    "color": "#ba8c52",
    "title": "换酒店，皇居与丸之内慢慢走",
    "area": "银座 / 皇居 / 丸之内",
    "intro": "上午先转移行李，再逛东御苑、二重桥和东京站；大熊可来会合。",
    "focus": "换酒店 + 皇居 + 银座晚餐",
    "walk": "约 5–7 km，含园内步行",
    "note": "11月25日东御苑开放；11月24日和27日休园。上午退房后把行李送到万怡，不能假设能提前拿房。大熊可在大手门或午餐时会合。",
    "visits": [
      {
        "id": "fufu-ginza",
        "time": "09:00",
        "note": "早餐、收行李和退房；确认没有遗漏物品。"
      },
      {
        "id": "courtyard-ginza",
        "time": "09:45",
        "note": "先寄存行李，确认下午办理入住时间。"
      },
      {
        "id": "imperial-palace-east-gardens",
        "time": "10:30",
        "note": "从大手门进入，参观庭园、石墙和江户城遗迹，约90分钟。"
      },
      {
        "id": "imperial-palace-gaien",
        "time": "12:30",
        "note": "从东御苑返回大手门后走向外苑，看二重桥；拍照约30分钟。"
      },
      {
        "id": "tokyostation",
        "time": "13:30",
        "note": "丸之内午餐约1小时，再看红砖站舍、站前广场与仲通；与大熊自由会合。"
      },
      {
        "id": "courtyard-ginza",
        "time": "16:00",
        "note": "办理入住、休息；把换酒店当天的体力留给晚饭。"
      },
      {
        "id": "sushi",
        "time": "18:00",
        "note": "银座久兵卫作为聚餐推荐，先订到席位再确认；没有席位就在银座就近用餐。"
      },
      {
        "id": "courtyard-ginza",
        "time": "20:00",
        "note": "回万怡休息。"
      }
    ],
    "legs": [
      {
        "mode": "taxi",
        "time": "10–20 分钟",
        "title": "馥府 → 银座万怡 · 转运行李",
        "detail": "两家酒店都在银座；带箱子建议短程出租车，到6-14-10 Ginza，不要去东京站万怡。",
        "cost": "规划 1,500–3,000 円（日元） / 车",
        "rails": []
      },
      {
        "mode": "taxi",
        "time": "15–25 分钟",
        "title": "万怡 → 皇居东御苑大手门",
        "detail": "司机目的地设Ote-mon Gate，车停可停靠位置后步行入园。",
        "cost": "规划 2,000–3,500 円（日元） / 车",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "25–35 分钟",
        "title": "大手门 → 皇居外苑",
        "detail": "东御苑参观后从大手门返回，沿护城河向南走至二重桥公共观景区域。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "20–30 分钟",
        "title": "皇居外苑 → 东京站丸之内",
        "detail": "从外苑往丸之内一侧走；午餐先吃，站舍与商店安排在饭后。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "taxi",
        "time": "10–20 分钟",
        "title": "丸之内 → 万怡入住",
        "detail": "在可停车位置叫车回酒店，休息后再吃晚饭。",
        "cost": "规划 1,500–3,000 円（日元） / 车",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–15 分钟",
        "title": "万怡 → 银座久兵卫",
        "detail": "按订位确认的分店、入口与楼层出发；18:00只是计划时间。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–15 分钟",
        "title": "银座晚餐 → 万怡",
        "detail": "晚饭后步行回酒店。",
        "cost": "",
        "rails": []
      }
    ]
  },
  {
    "id": 4,
    "date": "11.26",
    "weekday": "周四",
    "label": "周四 · 浅草",
    "kind": "tour",
    "endTime": "22:00",
    "color": "#648998",
    "title": "两个人逛浅草，晚上吃关东煮",
    "area": "浅草 / 隅田川 / 银座",
    "intro": "大熊不在，安排容易自己走的下町一日，留足小吃和休息时间。",
    "focus": "二人自由行 + 关东煮",
    "walk": "约 4–6 km",
    "note": "不再安排跨城赶景点。浅草寺是重点，鳗鱼午餐和河边散步可按胃口、天气缩短；关东煮建议提前订11月26日18:00。",
    "visits": [
      {
        "id": "courtyard-ginza",
        "time": "09:00",
        "note": "早餐后出发，步行到东银座站。"
      },
      {
        "id": "sensoji",
        "time": "10:00",
        "note": "雷门 → 仲见世 → 本堂，参观约90分钟，慢慢看小店、分享小吃。"
      },
      {
        "id": "unagi",
        "time": "12:00",
        "note": "浅草鳗鱼午餐是顺路推荐；按现场营业和等位决定，不强求特定套餐。"
      },
      {
        "id": "sumida",
        "time": "13:30",
        "note": "沿隅田川散步、拍晴空塔远景。天气不好就回银座休息。"
      },
      {
        "id": "courtyard-ginza",
        "time": "15:00",
        "note": "回酒店午休；有精神再在银座附近随意逛，不添加必须赶到的点。"
      },
      {
        "id": "oden",
        "time": "18:00",
        "note": "两个人吃关东煮，萝卜、鸡蛋、豆腐和肉类慢慢分享。"
      },
      {
        "id": "courtyard-ginza",
        "time": "20:00",
        "note": "回酒店收拾部分行李；明早筑地早餐后返程。"
      }
    ],
    "legs": [
      {
        "mode": "metro",
        "time": "35–45 分钟",
        "title": "都营浅草线 · 东银座 → 浅草",
        "detail": "东银座A11上车，坐往押上／青砥方向的都营浅草线，到浅草A18。出站按雷门指示步行，不要坐往西马込方向。",
        "cost": "规划 250–350 円（日元） / 人",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–15 分钟",
        "title": "浅草寺 → 鳗鱼午餐",
        "detail": "从寺院往浅草站、河岸一侧走，核对浅草Unatetsu店址。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–15 分钟",
        "title": "午餐 → 隅田川",
        "detail": "从餐厅步行到河岸，找开放的步道入口。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "metro",
        "time": "35–45 分钟",
        "title": "都营浅草线 · 浅草 → 东银座",
        "detail": "回浅草A18，找往西马込／羽田方向且停东银座的列车，到A11下车；步行回万怡。",
        "cost": "规划 250–350 円（日元） / 人",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–15 分钟",
        "title": "万怡 → Oreno关东煮",
        "detail": "步行往银座七丁目7-6-6，出发前核对预约与店址。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–15 分钟",
        "title": "关东煮 → 万怡",
        "detail": "饭后散步回酒店，整理明日行李。",
        "cost": "",
        "rails": []
      }
    ]
  },
  {
    "id": 5,
    "date": "11.27",
    "weekday": "周五",
    "label": "返程日",
    "kind": "departure",
    "endTime": "15:00",
    "color": "#8b7b9b",
    "title": "筑地早餐，然后去成田",
    "area": "筑地 / 银座 / 成田",
    "intro": "筑地已确定放在这天；早餐后不加景点，15:00飞上海。",
    "focus": "筑地早餐 + 15:00航班",
    "walk": "约 1–2 km，另计机场步行",
    "note": "07:30–09:00筑地，回酒店取行李退房。建议预订11:00酒店接送，留约90分钟路程，目标12:30到机场；不采用12点才出发的紧凑安排。若道路异常，提前改走东京站N’EX；最快53分钟只是列车运行时间，还需进站与候车。",
    "visits": [
      {
        "id": "courtyard-ginza",
        "time": "07:00",
        "note": "轻装出门，行李留酒店；护照、机票与贵重物品随身。"
      },
      {
        "id": "tsukiji",
        "time": "07:30",
        "note": "逛场外市场、吃海鲜早餐和玉子烧。09:00收尾，不为排队耽误返程。"
      },
      {
        "id": "courtyard-ginza",
        "time": "09:15",
        "note": "收行李、退房；10:45前准备好，11:00按预订接送出发。"
      },
      {
        "id": "narita-departure",
        "time": "12:30",
        "note": "目标抵达机场后值机、托运、安检、出境和候机；15:00起飞，预计17:35上海当地落地。"
      }
    ],
    "legs": [
      {
        "mode": "walk",
        "time": "10–20 分钟",
        "title": "万怡 → 筑地场外市场",
        "detail": "步行往筑地，早餐只逛场外市场；各店营业以当天为准。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–20 分钟",
        "title": "筑地 → 万怡取行李",
        "detail": "09:00左右结束早餐，回酒店检查行李、办理退房。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "taxi",
        "time": "75–105 分钟",
        "title": "11:00 银座万怡 → 成田机场",
        "detail": "建议提前请酒店预约固定报价接送，确认航空公司与正确航站楼。目标12:30抵达，车程按90分钟留量，实际受交通影响。铁路备选：提前打车到东京站，乘已订座N’EX；最晚到机场时间由航空公司要求决定。",
        "cost": "规划 25,000–35,000 円（日元） / 车；以接送报价和高速费为准",
        "rails": []
      }
    ]
  }
];
const MODE={"walk":{"label":"步行","dash":"2 6"},"metro":{"label":"地铁 / 铁路","dash":null},"taxi":{"label":"打车","dash":"8 6"}};

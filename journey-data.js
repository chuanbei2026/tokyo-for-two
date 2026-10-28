/* Four-day route adapted from the supplied PDF; all times are planning estimates. */
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
    "desc": "沿用 PDF 的住宿基地，靠近东银座与筑地；作为推荐酒店，尚未预订。",
    "steps": [
      "先寄存或办理入住，确认早餐与温泉使用时间。",
      "酒店天然温泉可安排在回程后，男女分浴，遵守酒店入浴说明。",
      "11月27日先寄存行李再去川越；当晚返程或续住尚待航班确认。"
    ],
    "budget": "房价以实际预订为准",
    "booking": "需确认三晚房型；第4日晚是否续住另定",
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
    "desc": "第一晚分享萝卜、鸡蛋与牛筋关东煮，饭后慢慢散步回酒店休息。",
    "coord": [
      35.6696,
      139.7603
    ],
    "original": "oden",
    "food": "oreno-oden"
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
    "original": "sky"
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
    "original": "tsukiji"
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
    "original": "tokyostation"
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
  "kawagoe": {
    "name": "川越站",
    "coord": [
      35.9070547,
      139.4833417
    ],
    "address": "Kawagoe Station, Kawagoe, Saitama",
    "source": "https://koedo.or.jp/en/access/",
    "gallery": "https://koedo.or.jp/en/access/",
    "desc": "PDF 川越一日游的起终点，从东口开始步行。",
    "steps": [
      "东京经池袋换东武东上线，在川越站下车。",
      "东口先找洗手间，补水后步行去八幡宫。",
      "返程仍到川越站，不是川越市站或本川越站。"
    ],
    "budget": "免费散步；餐饮另计",
    "booking": "营业时间以出发前官方公布为准",
    "query": "川越站 Kawagoe Station, Kawagoe, Saitama",
    "comic": [
      14.005020000012792,
      11.986324999998288
    ]
  },
  "hachiman": {
    "name": "川越八幡宫",
    "coord": [
      35.9105,
      139.4851
    ],
    "address": "19-3 Minamitorimachi, Kawagoe, Saitama",
    "source": "https://www.kawagoe-hachimangu.net/",
    "gallery": "https://www.kawagoe-hachimangu.net/",
    "desc": "PDF 川越步行第一站。",
    "steps": [
      "走入鸟居与参道，参拜后看境内银杏。",
      "停留约25分钟，再走向熊野神社。"
    ],
    "budget": "免费散步；餐饮另计",
    "booking": "营业时间以出发前官方公布为准",
    "query": "川越八幡宫 19-3 Minamitorimachi, Kawagoe, Saitama",
    "comic": [
      15.059999999999263,
      11.124999999999375
    ]
  },
  "kumano": {
    "name": "川越熊野神社",
    "coord": [
      35.919,
      139.4828
    ],
    "address": "17-1 Renjakucho, Kawagoe, Saitama",
    "source": "https://www.kawagoekumano.jp/",
    "gallery": "https://www.kawagoekumano.jp/",
    "desc": "PDF 第二站，境内参拜与小体验。",
    "steps": [
      "先参拜，再按现场说明体验。",
      "不要把求签结果当成必须购买更多护符的理由。",
      "出门顺路往大正浪漫梦通。"
    ],
    "budget": "免费散步；餐饮另计",
    "booking": "营业时间以出发前官方公布为准",
    "query": "川越熊野神社 17-1 Renjakucho, Kawagoe, Saitama",
    "comic": [
      13.680000000004611,
      8.999999999999886
    ]
  },
  "taisho": {
    "name": "大正浪漫梦通",
    "coord": [
      35.9203,
      139.4833
    ],
    "address": "Renjakucho / Nakacho, Kawagoe, Saitama",
    "source": "https://koedo.or.jp/en/",
    "gallery": "https://koedo.or.jp/en/",
    "desc": "从神社走进复古街道，保持 PDF 的顺路方向。",
    "steps": [
      "沿街看店招、老建筑。",
      "小吃两人分享，留肚子给一番街午餐。"
    ],
    "budget": "免费散步；餐饮另计",
    "booking": "营业时间以出发前官方公布为准",
    "query": "大正浪漫梦通 Renjakucho / Nakacho, Kawagoe, Saitama",
    "comic": [
      13.98000000001457,
      8.674999999999756
    ]
  },
  "ichibangai": {
    "name": "川越一番街 · 午餐",
    "coord": [
      35.9235,
      139.4827
    ],
    "address": "Saiwaicho, Kawagoe, Saitama",
    "source": "https://koedo.or.jp/en/spot_002/",
    "gallery": "https://koedo.or.jp/en/spot_002/",
    "desc": "PDF 的藏造老街与午餐区，安排一顿正餐加一两样红薯小吃。",
    "steps": [
      "先吃午餐，再慢逛藏造街景。",
      "按 PDF 方向选荞麦面或豆腐料理，现场确认营业与菜单。",
      "红薯片或地瓜点心两人分享，不把每一家都排进日程。"
    ],
    "budget": "午餐与小吃规划 2,500–4,500 円（日元） / 人",
    "booking": "营业时间以出发前官方公布为准",
    "query": "川越一番街 · 午餐 Saiwaicho, Kawagoe, Saitama",
    "comic": [
      13.62000000000262,
      7.874999999999844
    ]
  },
  "bell": {
    "name": "时之钟",
    "coord": [
      35.9241,
      139.4832
    ],
    "address": "15-7 Saiwaicho, Kawagoe, Saitama",
    "source": "https://koedo.or.jp/en/spot_001/",
    "gallery": "https://koedo.or.jp/en/spot_001/",
    "desc": "川越代表地标，按 PDF 放在一番街之后。",
    "steps": [
      "在街口拍整体，注意来车。",
      "穿过钟楼下方通道，按现场开放区域散步。",
      "停留20分钟后前往冰川神社。"
    ],
    "budget": "免费散步；餐饮另计",
    "booking": "营业时间以出发前官方公布为准",
    "query": "时之钟 15-7 Saiwaicho, Kawagoe, Saitama",
    "comic": [
      13.920000000012578,
      7.724999999998417
    ]
  },
  "hikawa": {
    "name": "川越冰川神社",
    "coord": [
      35.9355,
      139.4888
    ],
    "address": "2-11-3 Miyashitamachi, Kawagoe, Saitama",
    "source": "https://www.kawagoehikawa.jp/",
    "gallery": "https://www.kawagoehikawa.jp/",
    "desc": "PDF 午后的神社停留。",
    "steps": [
      "看鸟居、参道和绘马。",
      "想求签或购买护符时，先看清价格和说明。",
      "11月不预设夏季风铃活动，按当月现场开放参观。"
    ],
    "budget": "免费散步；餐饮另计",
    "booking": "营业时间以出发前官方公布为准",
    "query": "川越冰川神社 2-11-3 Miyashitamachi, Kawagoe, Saitama",
    "comic": [
      17.280000000004748,
      4.87499999999973
    ]
  },
  "kitain": {
    "name": "喜多院",
    "coord": [
      35.9174,
      139.4905
    ],
    "address": "1-20-1 Kosembamachi, Kawagoe, Saitama",
    "source": "https://kitain.net/",
    "gallery": "https://kitain.net/",
    "desc": "PDF 川越路线最后一站，安排在下午较早时段，避免错过建筑参观。",
    "steps": [
      "先确认当天最晚售票与开放区域。",
      "境内散步后，按体力选择付费建筑参观。",
      "15:50左右往川越站走，留返东京的交通余量。"
    ],
    "budget": "参观费以官网当日票种为准",
    "booking": "官方开放时间须临行复核；先完成需要门票的区域",
    "query": "喜多院 1-20-1 Kosembamachi, Kawagoe, Saitama",
    "comic": [
      18.300000000004502,
      9.399999999998954
    ]
  }
};
const JOURNEY_DAYS=[
  {
    "id": 1,
    "date": "11.24",
    "weekday": "周二",
    "color": "#9b6554",
    "title": "抵达东京，银座安顿",
    "area": "机场待定 / 东银座",
    "intro": "依 PDF 抵达日思路：入住、附近晚餐、酒店休息。",
    "focus": "入住 + 关东煮",
    "walk": "约 1–2 km",
    "note": "PDF 原航班19:55落地不套用。暂以15:00到酒店演示；确定航班后整体后移或前移，不额外安排东京塔。",
    "visits": [
      {
        "id": "hotel",
        "time": "15:00",
        "note": "入住或寄存行李；休息、熟悉酒店和附近街道。"
      },
      {
        "id": "oden",
        "time": "18:00",
        "note": "保留毛毛想吃的关东煮；建议提前预约，两人分享。"
      },
      {
        "id": "hotel",
        "time": "20:00",
        "note": "回酒店休息，可按酒店规定体验天然温泉。"
      }
    ],
    "legs": [
      {
        "mode": "walk",
        "time": "12–18 分钟",
        "title": "酒店 → 关东煮",
        "detail": "从东银座往银座七丁目步行；按店名 Oreno Oden Ginza 和门牌确认分店。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "12–18 分钟",
        "title": "关东煮 → 酒店",
        "detail": "沿银座街道回 Dormy Inn PREMIUM Ginza，温泉开放时间以酒店说明为准。",
        "cost": "",
        "rails": []
      }
    ]
  },
  {
    "id": 2,
    "date": "11.25",
    "weekday": "周三",
    "color": "#718568",
    "title": "筑地、浅草，到中目黑与代官山",
    "area": "筑地 / 浅草 / 中目黑 / 代官山 / 惠比寿",
    "intro": "按 PDF 第二天的顺序，把早市、寺院与西南街区串起来。",
    "focus": "市场早午餐 + 河岸散步",
    "walk": "约 7–9 km",
    "note": "11月25日是周三，筑地各店休市日不同；出发前核对市场日历。上午逛场外市场，不把批发市场营业当作保证。",
    "visits": [
      {
        "id": "hotel",
        "time": "08:45",
        "note": "轻早餐或留胃口，到筑地吃早午餐。"
      },
      {
        "id": "tsukiji",
        "time": "09:00",
        "note": "场外市场早午餐：海鲜丼或寿司选一顿，两人分享小吃。"
      },
      {
        "id": "yamacho",
        "time": "10:15",
        "note": "按 PDF 尝山长玉子烧，吃完再去东银座乘车。"
      },
      {
        "id": "sensoji",
        "time": "12:00",
        "note": "观光中心 → 雷门 → 仲见世 → 本堂，留足小吃与参观时间。"
      },
      {
        "id": "nakameguro",
        "time": "15:00",
        "note": "沿目黑川散步；按胃口吃 AFURI 或咖啡点心，避免再吃过量。"
      },
      {
        "id": "daikanyama",
        "time": "16:15",
        "note": "走到代官山蔦屋书店，设计书、街景和咖啡，不强制购物。"
      },
      {
        "id": "ebisu",
        "time": "17:30",
        "note": "步行到惠比寿，认准 H 日比谷线进站。"
      },
      {
        "id": "hotel",
        "time": "18:15",
        "note": "回酒店短暂休息。"
      },
      {
        "id": "sushi",
        "time": "19:00",
        "note": "银座久兵卫晚餐，须订到席位；这是保留的餐饮偏好。"
      },
      {
        "id": "hotel",
        "time": "20:45",
        "note": "步行回酒店。"
      }
    ],
    "legs": [
      {
        "mode": "walk",
        "time": "8–12 分钟",
        "title": "酒店 → 筑地",
        "detail": "出酒店往筑地场外市场；在指定区域吃东西。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "3–5 分钟",
        "title": "市场 → 山长玉子烧",
        "detail": "在场外市场内部慢走，核对4-10-10门牌。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "metro",
        "time": "35–45 分钟",
        "title": "浅草线 · 东银座 → 浅草",
        "detail": "步行到东银座 A11，找都营浅草线，往押上／青砥方向；浅草 A18 下车，按雷门出口指示到地面。候车以电子屏为准。",
        "cost": "交通预算 250–350 円（日元） / 人",
        "rails": [
          {
            "line": "A",
            "from": "A11",
            "to": "A18"
          }
        ]
      },
      {
        "mode": "metro",
        "time": "55–65 分钟",
        "title": "浅草 → 东银座换乘 → 中目黑",
        "detail": "浅草 A18 坐浅草线往西马込／羽田方向至东银座 A11；站内跟 H 日比谷线标识换乘，往中目黑 H01 方向坐到终点。",
        "cost": "交通预算 350–500 円（日元） / 人",
        "rails": [
          {
            "line": "A",
            "from": "A18",
            "to": "A11"
          },
          {
            "line": "H",
            "from": "H10",
            "to": "H01"
          }
        ]
      },
      {
        "mode": "walk",
        "time": "18–25 分钟",
        "title": "中目黑 → 代官山",
        "detail": "按 PDF 从河岸往代官山方向上坡；沿途小店随缘停，不要赶步速。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "18–25 分钟",
        "title": "代官山 → 惠比寿",
        "detail": "从 T-SITE 步行到惠比寿的日比谷线入口，途中注意坡道与路口。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "metro",
        "time": "30–40 分钟",
        "title": "日比谷线 · 惠比寿 → 东银座",
        "detail": "惠比寿 H02 上车，往北千住方向，到东银座 H10 下车。出站后步行回酒店。",
        "cost": "交通预算 200–300 円（日元） / 人",
        "rails": [
          {
            "line": "H",
            "from": "H02",
            "to": "H10"
          }
        ]
      },
      {
        "mode": "walk",
        "time": "10–15 分钟",
        "title": "酒店 → 晚餐",
        "detail": "步行前往银座久兵卫；出门前再次确认预约时间与店址。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "10–15 分钟",
        "title": "晚餐 → 酒店",
        "detail": "晚饭后慢慢走回酒店。",
        "cost": "",
        "rails": []
      }
    ]
  },
  {
    "id": 3,
    "date": "11.26",
    "weekday": "周四",
    "color": "#ba8c52",
    "title": "Wellk、自由之丘，再到根津与谷中",
    "area": "惠比寿 / 自由之丘 / 根津 / 谷中",
    "intro": "按 PDF 第三天动线；稍提前离开自由之丘，给老街留白天。",
    "focus": "早餐 + 甜品 + 下町散步",
    "walk": "约 7–9 km",
    "note": "Wellk 先按9:00预约场次规划，尚未订位。自由之丘13:20离开，比 PDF 提早，避免11月底到谷中时天已黑。",
    "visits": [
      {
        "id": "hotel",
        "time": "08:00",
        "note": "从酒店步行到东银座，早餐留给 Wellk。"
      },
      {
        "id": "wellk",
        "time": "09:00",
        "note": "预约早餐，留一小时慢慢吃。"
      },
      {
        "id": "jiyugaoka",
        "time": "11:00",
        "note": "逛杂货街区，午餐吃荞麦面方向，再分享一份甜品。"
      },
      {
        "id": "nezu",
        "time": "14:30",
        "note": "依 PDF 走入口、神桥、楼门、拜殿、鸟居与池塘。"
      },
      {
        "id": "yanaka",
        "time": "15:45",
        "note": "从根津步行到谷中，逛小店、小吃和夕阳阶梯。"
      },
      {
        "id": "hotel",
        "time": "18:30",
        "note": "回银座，附近自由用餐与休息；不再叠加跨区景点。"
      }
    ],
    "legs": [
      {
        "mode": "metro",
        "time": "45–55 分钟",
        "title": "日比谷线 · 东银座 → 惠比寿 → Wellk",
        "detail": "东银座 H10 往中目黑方向到惠比寿 H02；出站步行约15分钟到2-5-11 Mita二楼，提前确认预约场次。",
        "cost": "交通预算 200–300 円（日元） / 人",
        "rails": [
          {
            "line": "H",
            "from": "H10",
            "to": "H02"
          }
        ]
      },
      {
        "mode": "metro",
        "time": "45–55 分钟",
        "title": "惠比寿 → 中目黑换乘 → 自由之丘",
        "detail": "吃完步行回惠比寿 H02；日比谷线往中目黑 H01 一站，换东横线往横滨／元町中华街方向，到自由之丘 TY07。",
        "cost": "交通预算 350–500 円（日元） / 人",
        "rails": [
          {
            "line": "H",
            "from": "H02",
            "to": "H01"
          },
          {
            "line": "TY",
            "from": "TY03",
            "to": "TY07"
          }
        ]
      },
      {
        "mode": "metro",
        "time": "65–75 分钟",
        "title": "自由之丘 → 明治神宫前换乘 → 根津",
        "detail": "自由之丘 TY07 往涩谷方向；选直通副都心线且停明治神宫前的车，或在涩谷换副都心线。明治神宫前 F15/C03 换千代田线往北绫濑方向，到根津 C14；出站步行到神社。",
        "cost": "交通预算 450–650 円（日元） / 人",
        "rails": [
          {
            "line": "TY",
            "from": "TY07",
            "to": "TY01"
          },
          {
            "line": "F",
            "from": "TY01",
            "to": "F15"
          },
          {
            "line": "C",
            "from": "C03",
            "to": "C14"
          }
        ]
      },
      {
        "mode": "walk",
        "time": "25–35 分钟",
        "title": "根津神社 → 谷中银座",
        "detail": "按 PDF 走根津、谷中小巷到商店街；猫主题店铺只在营业时顺路看，不额外排队。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "metro",
        "time": "40–50 分钟",
        "title": "千驮木 → 日比谷换乘 → 东银座",
        "detail": "从夕阳阶梯回千驮木 C15；千代田线往代代木上原方向到日比谷 C09，换日比谷线 H08 往北千住方向，到东银座 H10。",
        "cost": "交通预算 200–350 円（日元） / 人",
        "rails": [
          {
            "line": "C",
            "from": "C15",
            "to": "C09"
          },
          {
            "line": "H",
            "from": "H08",
            "to": "H10"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "date": "11.27",
    "weekday": "周五",
    "color": "#648998",
    "title": "川越一日，按 PDF 慢慢走",
    "area": "池袋 / 川越",
    "intro": "保留 PDF 第四天完整顺序，傍晚回东京。返程航班另行安排。",
    "focus": "小江户 + 红薯小吃",
    "walk": "约 6–8 km",
    "note": "按你的选择保留完整川越日，不再作为机场半日。先寄存行李，预计18:00后回东京；11月27日航班及是否续住必须另行匹配。",
    "visits": [
      {
        "id": "hotel",
        "time": "08:30",
        "note": "退房寄存行李；若续住则不退房，等航班确认。"
      },
      {
        "id": "kawagoe",
        "time": "10:15",
        "note": "川越站东口出站，补水、洗手间，开始步行。"
      },
      {
        "id": "hachiman",
        "time": "10:40",
        "note": "八幡宫参拜，停留约25分钟。"
      },
      {
        "id": "kumano",
        "time": "11:20",
        "note": "熊野神社参拜与境内小体验。"
      },
      {
        "id": "taisho",
        "time": "11:55",
        "note": "大正浪漫梦通看建筑和店招，顺路向一番街。"
      },
      {
        "id": "ichibangai",
        "time": "12:20",
        "note": "先午餐，再逛藏造街景，分享红薯小吃。"
      },
      {
        "id": "bell",
        "time": "13:30",
        "note": "时之钟街口拍照，留20分钟。"
      },
      {
        "id": "hikawa",
        "time": "14:15",
        "note": "冰川神社参拜、绘马，按现场开放参观。"
      },
      {
        "id": "kitain",
        "time": "15:15",
        "note": "喜多院先看需门票区域，注意最晚售票。"
      },
      {
        "id": "kawagoe",
        "time": "16:20",
        "note": "回川越站，找东武东上线往池袋方向。"
      },
      {
        "id": "hotel",
        "time": "18:00",
        "note": "回银座取行李或办理续住；晚餐及机场段待航班确定。"
      }
    ],
    "legs": [
      {
        "mode": "metro",
        "time": "85–100 分钟",
        "title": "银座 → 池袋换乘 → 川越",
        "detail": "步行到银座 M16；丸之内线往池袋 M25。到池袋出 Metro 闸机，找东武东上线 TJ01，再进闸；选停川越 TJ21 的急行，往川越市／森林公园方向，约30–40分钟。不要套用PDF旧班次。",
        "cost": "交通预算 800–1,000 円（日元） / 人",
        "rails": [
          {
            "line": "M",
            "from": "M16",
            "to": "M25"
          },
          {
            "line": "TJ",
            "from": "TJ01",
            "to": "TJ21"
          }
        ]
      },
      {
        "mode": "walk",
        "time": "12–18 分钟",
        "title": "川越站 → 八幡宫",
        "detail": "从东口沿街步行到19-3 Minamitorimachi。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "12–18 分钟",
        "title": "八幡宫 → 熊野神社",
        "detail": "沿市区街道北行，注意过街信号。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "3–5 分钟",
        "title": "熊野神社 → 大正浪漫梦通",
        "detail": "神社出来后走向大正浪漫梦通入口。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "6–10 分钟",
        "title": "大正浪漫梦通 → 一番街",
        "detail": "沿商店街向藏造街区步行。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "3–5 分钟",
        "title": "一番街 → 时之钟",
        "detail": "从午餐街区走到钟楼街口。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "18–25 分钟",
        "title": "时之钟 → 冰川神社",
        "detail": "按步行导航走到2-11-3 Miyashitamachi，途中补水。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "25–35 分钟",
        "title": "冰川神社 → 喜多院",
        "detail": "向南走回寺院片区，预留30分钟步行。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "walk",
        "time": "20–30 分钟",
        "title": "喜多院 → 川越站",
        "detail": "沿市区街道回东武川越站，不是本川越站。",
        "cost": "",
        "rails": []
      },
      {
        "mode": "metro",
        "time": "85–100 分钟",
        "title": "川越 → 池袋换乘 → 银座",
        "detail": "川越 TJ21 坐往池袋方向急行；池袋出东武闸，换丸之内线 M25 往荻洼方向，到银座 M16，步行回酒店。",
        "cost": "交通预算 800–1,000 円（日元） / 人",
        "rails": [
          {
            "line": "TJ",
            "from": "TJ21",
            "to": "TJ01"
          },
          {
            "line": "M",
            "from": "M25",
            "to": "M16"
          }
        ]
      }
    ]
  }
];
const MODE={"walk":{"label":"步行","dash":"2 6"},"metro":{"label":"地铁 / 铁路","dash":null},"taxi":{"label":"打车","dash":"8 6"}};

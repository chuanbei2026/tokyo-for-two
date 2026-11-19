/* Visually audited user-supplied guide. Existing IDs retain their preference records. */
const FRIEND_PLACES=[
  {
    "id": "friend-tatsumi",
    "name": "辰巳新道",
    "friendPages": [
      1
    ],
    "category": "stroll",
    "coord": [
      35.6717,
      139.7966
    ],
    "address": "门前仲町 · 老式居酒屋巷",
    "desc": "木门、暖灯、小酒馆挤在窄巷里，适合饭后看看东京下班后的生活。小店空间有限，入店先问是否有座位。",
    "duration": "20–40 分钟",
    "query": "Monzen Nakacho Tatsumi Shindo",
    "photo": "assets/friend-guide/1-1.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Monzen%20Nakacho%20Tatsumi%20Shindo%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/1-1.webp"
  },
  {
    "id": "friend-yurakucho",
    "name": "有乐町高架下",
    "friendPages": [
      1
    ],
    "category": "food",
    "coord": [
      35.6747,
      139.7615
    ],
    "address": "有乐町站铁路高架周边",
    "desc": "听火车从头顶经过，看烤串店和下班人群；这是餐饮街区，不是一家已预订的店。可从银座步行过来。",
    "duration": "30–60 分钟",
    "query": "Yurakucho Gado Shita",
    "photo": "assets/friend-guide/1-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Yurakucho%20Gado%20Shita%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/1-2.webp"
  },
  {
    "id": "friend-marunouchi",
    "name": "丸之内仲通",
    "friendPages": [
      2
    ],
    "category": "stroll",
    "coord": [
      35.6792,
      139.7635
    ],
    "address": "东京站丸之内侧 · 仲通街区",
    "desc": "香槟色灯串与整齐街树很适合两个人散步。2026灯饰已公布为11月12日至2027年2月14日；入住和晚餐优先，饭后有精力再来。",
    "duration": "25–40 分钟",
    "query": "Marunouchi Naka Dori",
    "photo": "assets/friend-guide/2-1.webp",
    "source": "https://www.gotokyo.org/en/spot/ev002/index.html",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/2-1.webp"
  },
  {
    "id": "tokyostation",
    "name": "东京站丸之内口",
    "friendPages": [
      2
    ],
    "category": "sight",
    "coord": [
      35.6812,
      139.7671
    ],
    "address": "东京站丸之内侧",
    "desc": "看红砖站房和广场，夜晚亮灯也好看。拍照不用进检票闸机；别和八重洲一侧混淆。",
    "duration": "15–30 分钟",
    "query": "Tokyo Station Marunouchi",
    "photo": "assets/friend-guide/2-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Tokyo%20Station%20Marunouchi%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/2-2.webp"
  },
  {
    "id": "friend-sunamachi",
    "name": "砂町银座商店街",
    "friendPages": [
      3
    ],
    "category": "stroll",
    "coord": [
      35.679,
      139.8273
    ],
    "address": "江东区北砂 · 商店街中段参考点",
    "desc": "约670米的居民商店街，关东煮、炸物、家常熟食集中。离地铁较远，不是住处旁边的银座；单独来要多留往返时间。",
    "duration": "90–150 分钟",
    "query": "Sunamachi Ginza Shopping Street",
    "photo": "assets/friend-guide/3-1.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Sunamachi%20Ginza%20Shopping%20Street%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/3-1.webp"
  },
  {
    "id": "friend-jujo",
    "name": "十条银座商店街",
    "friendPages": [
      3
    ],
    "category": "stroll",
    "coord": [
      35.7619,
      139.7211
    ],
    "address": "北区十条仲原 · 商店街",
    "desc": "有顶棚的社区商店街，炸鸡、可乐饼和熟食摊适合少量分食。位于东京北部，不建议为了一个小吃跨城赶来。",
    "duration": "60–120 分钟",
    "query": "Jujo Ginza Shopping Street",
    "photo": "assets/friend-guide/3-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Jujo%20Ginza%20Shopping%20Street%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/3-2.webp"
  },
  {
    "id": "friend-amazake",
    "name": "人形町甘酒横丁",
    "friendPages": [
      4
    ],
    "category": "stroll",
    "coord": [
      35.6852,
      139.7848
    ],
    "address": "中央区人形町 · 甘酒横丁",
    "desc": "看看老店门面，尝鲷鱼烧、仙贝与甘酒。草加屋和柳屋可一起看，沿途以店前指定位置吃完再走。",
    "duration": "45–90 分钟",
    "query": "Amazake Yokocho",
    "photo": "assets/friend-guide/4-1.webp",
    "source": "https://www.gotokyo.org/en/spot/167/index.html",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/4-1.webp"
  },
  {
    "id": "yanaka",
    "name": "谷中银座",
    "friendPages": [
      4
    ],
    "category": "stroll",
    "coord": [
      35.7277,
      139.7653
    ],
    "address": "谷中银座商店街",
    "desc": "低矮住宅、寺庙与小店组成老东京街区，可顺接夕阳阶梯。适合放慢脚步，不用每家都买。",
    "duration": "90–120 分钟",
    "query": "Yanaka Ginza",
    "photo": "assets/friend-guide/4-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Yanaka%20Ginza%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/4-2.webp"
  },
  {
    "id": "yuyake",
    "name": "夕阳阶梯",
    "friendPages": [
      4
    ],
    "category": "sight",
    "coord": [
      35.728,
      139.7673
    ],
    "address": "谷中银座入口阶梯",
    "desc": "站在阶梯上回看商店街屋顶与行人；与谷中银座同一趟走，不另算一段跨区行程。",
    "duration": "10–20 分钟",
    "query": "Yuyake Dandan",
    "photo": "assets/friend-guide/4-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Yuyake%20Dandan%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/4-2.webp"
  },
  {
    "id": "friend-fukagawa",
    "name": "深川江户资料馆",
    "friendPages": [
      4
    ],
    "category": "sight",
    "coord": [
      35.6815,
      139.7991
    ],
    "address": "江东区白河1-3-28",
    "desc": "室内复原江户时期房屋和街道，能近距离理解普通人的生活；天气差时尤其适合。可以与清澄白河一起逛。",
    "duration": "60–90 分钟",
    "query": "Fukagawa Edo Museum",
    "photo": "assets/friend-guide/4-3.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Fukagawa%20Edo%20Museum%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/4-3.webp"
  },
  {
    "id": "akihabara",
    "name": "秋叶原电器街",
    "friendPages": [
      6
    ],
    "category": "stroll",
    "coord": [
      35.6983,
      139.7731
    ],
    "address": "秋叶原站周边",
    "desc": "电玩、模型、二手游戏与收藏品店密集。大熊建议先看Radio Kaikan，再按兴趣进入其他店。",
    "duration": "120–180 分钟",
    "query": "Akihabara Electric Town",
    "photo": "assets/friend-guide/6-1.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Akihabara%20Electric%20Town%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/6-1.webp"
  },
  {
    "id": "video-radio-kaikan",
    "name": "秋叶原 Radio Kaikan",
    "friendPages": [
      6
    ],
    "category": "stroll",
    "coord": [
      35.6979149,
      139.7719571
    ],
    "address": "秋叶原站电器街口附近",
    "desc": "模型与收藏品商场，大熊在秋叶原段落点名推荐。先看楼层导览，再挑感兴趣的店。",
    "duration": "30–60 分钟",
    "query": "Akihabara Radio Kaikan",
    "photo": "",
    "source": "https://www.google.com/maps/search/?api=1&query=Akihabara%20Radio%20Kaikan%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "暂无独立店面照片",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": ""
  },
  {
    "id": "friend-nakano",
    "name": "中野 Broadway",
    "friendPages": [
      6
    ],
    "category": "stroll",
    "coord": [
      35.7094,
      139.6658
    ],
    "address": "中野区中野5-52-15",
    "desc": "二手漫画、玩具和复古收藏品集中的商场。比热门景点更适合按兴趣慢慢找，注意各店开门时间不同。",
    "duration": "120–180 分钟",
    "query": "Nakano Broadway",
    "photo": "assets/friend-guide/6-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Nakano%20Broadway%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/6-2.webp"
  },
  {
    "id": "friend-mandarake-nakano",
    "name": "Mandarake 中野收藏店群",
    "friendPages": [
      6
    ],
    "category": "stroll",
    "coord": [
      35.7094,
      139.6658
    ],
    "address": "中野 Broadway 内 · 多楼层店群",
    "desc": "大熊点名的中野分店群，不是秋叶原分店；漫画、玩具等分散在不同楼层，以商场楼层表找对应品类。",
    "duration": "30–90 分钟",
    "query": "Mandarake Nakano",
    "photo": "",
    "source": "https://www.google.com/maps/search/?api=1&query=Mandarake%20Nakano%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "暂无独立店面照片",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": ""
  },
  {
    "id": "friend-parco",
    "name": "涩谷 PARCO",
    "friendPages": [
      7
    ],
    "category": "stroll",
    "coord": [
      35.662,
      139.6987
    ],
    "address": "涩谷区宇田川町15-1",
    "desc": "6楼游戏动漫主题店最适合这次顺路看；楼下还有设计和服装店。25日可以用这里替代一部分没有目标的逛街。",
    "duration": "90–120 分钟",
    "query": "Shibuya PARCO",
    "photo": "assets/friend-guide/7-1.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Shibuya%20PARCO%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/7-1.webp"
  },
  {
    "id": "friend-nintendo",
    "name": "任天堂东京店 · Nintendo TOKYO",
    "friendPages": [
      7
    ],
    "category": "stroll",
    "coord": [
      35.662,
      139.6987
    ],
    "address": "涩谷 PARCO 6F",
    "desc": "马里奥、塞尔达等任天堂角色周边；与同层宝可梦、JUMP商店一次逛完。热闹时按现场分流安排。",
    "duration": "20–40 分钟",
    "query": "Nintendo TOKYO Shibuya PARCO",
    "photo": "",
    "source": "https://www.google.com/maps/search/?api=1&query=Nintendo%20TOKYO%20Shibuya%20PARCO%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "暂无独立店面照片",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": ""
  },
  {
    "id": "friend-pokemon",
    "name": "宝可梦中心 · 涩谷店",
    "friendPages": [
      7
    ],
    "category": "stroll",
    "coord": [
      35.662,
      139.6987
    ],
    "address": "涩谷 PARCO 6F",
    "desc": "宝可梦主题陈列、玩偶和限定周边。与任天堂店同楼层，不需要另外坐车。",
    "duration": "20–40 分钟",
    "query": "Pokemon Center Shibuya",
    "photo": "",
    "source": "https://www.google.com/maps/search/?api=1&query=Pokemon%20Center%20Shibuya%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "暂无独立店面照片",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": ""
  },
  {
    "id": "friend-jump",
    "name": "JUMP 漫画周边店 · 涩谷",
    "friendPages": [
      7
    ],
    "category": "stroll",
    "coord": [
      35.662,
      139.6987
    ],
    "address": "涩谷 PARCO 6F",
    "desc": "按喜欢的漫画角色看周边，大熊在PARCO介绍中点名。与同楼层店一起选逛即可。",
    "duration": "15–30 分钟",
    "query": "JUMP SHOP Shibuya PARCO",
    "photo": "",
    "source": "https://www.google.com/maps/search/?api=1&query=JUMP%20SHOP%20Shibuya%20PARCO%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "暂无独立店面照片",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": ""
  },
  {
    "id": "friend-2k540",
    "name": "2k540 工匠街",
    "friendPages": [
      7
    ],
    "category": "stroll",
    "coord": [
      35.7032,
      139.7747
    ],
    "address": "秋叶原—御徒町铁路高架下",
    "desc": "皮革、木作、玻璃、首饰等工艺店，适合看日本日常设计。攻略提示周三多店休息，因此不安排到25日。",
    "duration": "45–90 分钟",
    "query": "2k540 Aki Oka Artisan",
    "photo": "assets/friend-guide/7-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=2k540%20Aki%20Oka%20Artisan%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/7-2.webp"
  },
  {
    "id": "friend-kappabashi",
    "name": "合羽桥道具街",
    "friendPages": [
      8
    ],
    "category": "stroll",
    "coord": [
      35.7142,
      139.7888
    ],
    "address": "台东区松谷 · 合羽桥街区",
    "desc": "餐具、厨房器具、刀具和逼真食品模型。26日浅草寺午餐后顺路最合适；不要拖到夜晚才来，许多店较早关门。",
    "duration": "90–150 分钟",
    "query": "Kappabashi Kitchen Town",
    "photo": "assets/friend-guide/8-1.webp",
    "source": "https://faq.japan-travel.jnto.go.jp/en/spot/390/",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/8-1.webp"
  },
  {
    "id": "friend-itoya",
    "name": "银座伊东屋 · Itoya",
    "friendPages": [
      8
    ],
    "category": "stroll",
    "coord": [
      35.6738,
      139.7675
    ],
    "address": "中央区银座2-7-15",
    "desc": "文具、纸张、笔和卡片层层展开，离馥府近。24日到银座后可随体力停留，买小礼物也轻便。",
    "duration": "45–90 分钟",
    "query": "Ginza Itoya",
    "photo": "assets/friend-guide/8-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Ginza%20Itoya%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/8-2.webp"
  },
  {
    "id": "friend-mitsukoshi",
    "name": "日本桥三越本店",
    "friendPages": [
      9
    ],
    "category": "stroll",
    "coord": [
      35.6851,
      139.7739
    ],
    "address": "中央区日本桥室町1-4-1",
    "desc": "看老百货建筑与食品地下层，挑茶、点心和传统伴手礼。和COREDO室町在同片区。",
    "duration": "45–90 分钟",
    "query": "Nihombashi Mitsukoshi Main Store",
    "photo": "assets/friend-guide/9-1.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Nihombashi%20Mitsukoshi%20Main%20Store%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/9-1.webp"
  },
  {
    "id": "friend-coredo",
    "name": "COREDO 室町",
    "friendPages": [
      9
    ],
    "category": "stroll",
    "coord": [
      35.6868,
      139.7752
    ],
    "address": "中央区日本桥室町 · 商业设施群",
    "desc": "传统风格街区里的餐饮、生活方式与手工艺店；和日本桥三越一起逛，两处合计约1.5–3小时。",
    "duration": "45–90 分钟",
    "query": "COREDO Muromachi",
    "photo": "assets/friend-guide/9-1.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=COREDO%20Muromachi%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/9-1.webp"
  },
  {
    "id": "friend-rikugien",
    "name": "六义园 · 秋季夜景",
    "friendPages": [
      9
    ],
    "category": "sight",
    "coord": [
      35.7331,
      139.7462
    ],
    "address": "文京区本驹込6-16-3",
    "desc": "池塘倒映红叶的庭园。官方已公布2026夜间特别观赏为11月25日至12月6日；夜间票与白天票不同，想去需先查票和入场截止。",
    "duration": "60–90 分钟",
    "query": "Rikugien Gardens",
    "photo": "assets/friend-guide/9-2.webp",
    "source": "https://www.tokyo-park.or.jp/special/rikugien_lighting/index.html",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/9-2.webp"
  },
  {
    "id": "friend-masuei",
    "name": "增英蒲鉾店 · 关东煮",
    "friendPages": [
      3,
      10
    ],
    "category": "food",
    "coord": [
      35.6789,
      139.831
    ],
    "address": "砂町银座 · 北砂4丁目，门牌存在来源差异",
    "desc": "大熊两次提到的街头关东煮小店，可选萝卜、鸡蛋、鱼糜制品。地图先定位商店街东段，出发前按完整店名核对现址；不是23日机场楼下那家。",
    "duration": "10–20 分钟",
    "query": "Masuei Kamaboko Sunamachi",
    "photo": "assets/friend-guide/10-1.webp",
    "source": "https://rurubu.jp/andmore/spot/80011553",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/10-1.webp"
  },
  {
    "id": "friend-yanagiya",
    "name": "柳屋鲷鱼烧",
    "friendPages": [
      10
    ],
    "category": "food",
    "coord": [
      35.6854,
      139.7832
    ],
    "address": "人形町甘酒横丁 · 店铺位置参考",
    "desc": "薄皮红豆鲷鱼烧，排队长度变化大。和甘酒横丁一起停留，10–20分钟仅指购买吃点心，不含长队。",
    "duration": "10–20 分钟",
    "query": "Yanagiya Taiyaki Ningyocho",
    "photo": "assets/friend-guide/10-2.webp",
    "source": "https://www.google.com/maps/search/?api=1&query=Yanagiya%20Taiyaki%20Ningyocho%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/10-2.webp"
  },
  {
    "id": "friend-kikunoya",
    "name": "银座菊廼舍 · 富贵寄",
    "friendPages": [
      11
    ],
    "category": "food",
    "coord": [
      35.6702,
      139.7659
    ],
    "address": "中央区银座5-9-17 1F",
    "desc": "缤纷小点心装进铁盒，是大熊推荐的伴手礼；不是需要坐下来吃一顿的餐厅。",
    "duration": "10–25 分钟",
    "query": "Ginza Kikunoya",
    "photo": "assets/friend-guide/11-1.webp",
    "source": "https://www.ginza-kikunoya.co.jp/english/",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "大熊攻略中的参考图 · 原摄影来源未附链接",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": "assets/friend-guide/11-1.webp"
  },
  {
    "id": "friend-sokaya",
    "name": "草加屋 · 手烤仙贝",
    "friendPages": [
      4
    ],
    "category": "food",
    "coord": [
      35.6858,
      139.785
    ],
    "address": "人形町甘酒横丁 · 街区定位参考",
    "desc": "大熊在甘酒横丁段落点名的手烤仙贝店，适合买一点尝味或带走。店面坐标尚待进一步核对，请按完整店名导航。",
    "duration": "10–20 分钟",
    "query": "Sokaya Ningyocho Senbei",
    "photo": "",
    "source": "https://www.google.com/maps/search/?api=1&query=Sokaya%20Ningyocho%20Senbei%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "暂无独立店面照片",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": ""
  },
  {
    "id": "friend-kiyosumi",
    "name": "清澄白河街区",
    "friendPages": [
      4
    ],
    "category": "stroll",
    "coord": [
      35.6821,
      139.799
    ],
    "address": "清澄白河站周边 · 街区参考点",
    "desc": "大熊建议与深川江户资料馆一起逛的街区。咖啡、小店和安静住宅街可按当天体力挑选，不指定某家未提及的店。",
    "duration": "45–90 分钟",
    "query": "Kiyosumi Shirakawa",
    "photo": "",
    "source": "https://www.google.com/maps/search/?api=1&query=Kiyosumi%20Shirakawa%20Tokyo",
    "region": "tokyo",
    "origin": "大熊《小攻略》",
    "days": [],
    "photoLabel": "暂无独立店面照片",
    "notes": "位置用于认识街区；街区、楼内店铺和小店请用完整名称查询实际入口。",
    "photoSource": ""
  }
];
for(const item of FRIEND_PLACES){const old=OVERVIEW_CATALOG.find(p=>p.id===item.id);if(old){old.friendPages=item.friendPages;old.friendNote=item.desc;}else OVERVIEW_CATALOG.push(item);WISHLIST_GUIDANCE[item.id] ||= [4,item.duration,item.category==='food'?'少量尝鲜或按需购买；排队时间另留，别挤占已订晚餐。':'攻略建议停留时长不含往返交通；优先与同片区地点一起逛，出发前复核营业。'];}
function friendPlaceDetails(p){return p.friendPages?.length?`<div class="friend-tags">大熊推荐 ·《小攻略》第${p.friendPages.join('、')}页</div>`:'';}

/* Key destinations from saved plans, the reference PDF, and owner requests. */
const OVERVIEW_CATALOG=[
  {
    "id": "hotel",
    "name": "Dormy Inn PREMIUM 银座",
    "coord": [
      35.6675816,
      139.7656977
    ],
    "category": "base",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      1,
      2,
      3,
      4
    ],
    "desc": "沿用 PDF 的住宿基地，靠近东银座与筑地；作为推荐酒店，尚未预订。",
    "address": "6-16-8 Ginza, Chuo-ku, Tokyo",
    "source": "https://dormy-hotels.com/dormyinn/hotels/ginza/",
    "photo": "https://www.gotokyo.org/en/story/walks-and-tours/ginza/images/43_0124_5_1024x800.jpg",
    "photoLabel": "GO TOKYO · 银座街区参考，非酒店外观",
    "query": "Dormy Inn PREMIUM 银座 6-16-8 Ginza, Chuo-ku, Tokyo",
    "notes": "先寄存或办理入住，确认早餐与温泉使用时间。 酒店天然温泉可安排在回程后，男女分浴，遵守酒店入浴说明。 11月27日退房后先寄存行李，游览东京西侧街区；预计20:00回酒店，机场与是否续住待航班确认。"
  },
  {
    "category": "sight",
    "region": "tokyo",
    "origin": "你提出想去",
    "days": [],
    "photoSource": "https://www.gotokyo.org/en/story/guide/a-noble-look-at-tokyos-imperial-palace-a-guide-to-the-royal-residence/",
    "photoLabel": "GO TOKYO · 皇居实景",
    "nearby": "可与东京站丸之内红砖站舍、丸之内仲通串联；区域之间步行，留出休息时间。",
    "id": "imperial-palace-gaien",
    "name": "皇居外苑 · 二重桥",
    "coord": [
      35.6797,
      139.7562
    ],
    "desc": "你想去的皇宫区：看护城河、石桥和松树广场。建议留 45–60 分钟，接着散步去丸之内。",
    "address": "Kokyogaien, Chiyoda City, Tokyo 100-0002",
    "source": "https://www.env.go.jp/garden/kokyogaien/english/",
    "photo": "https://www.gotokyo.org/en/story/guide/a-noble-look-at-tokyos-imperial-palace-a-guide-to-the-royal-residence/images/sub002.jpg",
    "query": "Kokyo Gaien Nijubashi Bridge Tokyo",
    "notes": "这里是皇居外围公共区域，二重桥从外侧观赏，不代表能进入宫殿。外苑散步免费：0 円 ≈ US$0。可从二重桥前站步行抵达，或从东京站丸之内口向西走约 15–20 分钟到观景区域。若到达日尚有日光，可考虑外苑；实际安排等航班时间确认。东御苑另有开放日，不能把两处当作同一个入口。"
  },
  {
    "category": "sight",
    "region": "tokyo",
    "origin": "你提出想去",
    "days": [],
    "photoSource": "https://www.gotokyo.org/en/story/guide/a-noble-look-at-tokyos-imperial-palace-a-guide-to-the-royal-residence/",
    "photoLabel": "GO TOKYO · 皇居实景",
    "nearby": "可与东京站丸之内红砖站舍、丸之内仲通串联；区域之间步行，留出休息时间。",
    "id": "imperial-palace-east-gardens",
    "name": "皇居东御苑 · 江户城遗迹",
    "coord": [
      35.6855,
      139.7619
    ],
    "desc": "穿过大手门，看石墙、庭园与江户城遗迹。建议 60–90 分钟；本次旅行可选 11月25日或26日。",
    "address": "1-1 Chiyoda, Chiyoda City, Tokyo 100-8111 · Ote-mon Gate",
    "source": "https://www.kunaicho.go.jp/visit/higashigyoen/gyoen-close.html",
    "photo": "https://www.gotokyo.org/en/story/guide/a-noble-look-at-tokyos-imperial-palace-a-guide-to-the-royal-residence/images/sub005.jpg",
    "query": "Imperial Palace East Gardens Otemon Gate Tokyo",
    "notes": "按宫内厅 2026年11月日历：11月24日（周二）及27日（周五）休园，25日、26日开放。11月至2月开放 09:00–16:00，入园截至15:30；免费：0 円 ≈ US$0。建议从大手町站步行至大手门进入，园区内步行。临时活动可能调整开放，出发前复核来源链接。这里是庭园与遗迹游览，不是皇居内部导览；暂列为你想去的候选，尚未挤入现有四天行程。"
  },
  {
    "id": "ginza",
    "name": "银座街区",
    "coord": [
      35.6716,
      139.765
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "看钟楼、逛食品楼层，先认识东京的精致日常。购物只做顺路选项。",
    "address": "4-5-11 Ginza, Chuo-ku, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/central-tokyo/ginza/index.html",
    "photo": "https://www.gotokyo.org/en/destinations/central-tokyo/ginza/images/main.webp",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "银座街区",
    "notes": "找银座四丁目十字路口的和光钟楼，作为第一次认路的地标。 进百货地下食品层，看便当、和果子与季节甜点；买一小份两人分享，留胃口给晚餐。 若想购物，给自己30分钟；剩下时间找咖啡馆坐一坐。",
    "nearby": "PDF 餐饮备选：福Mimi 串烧、RAGTIME、鸟神、Kobiki、瓢嘻、斋藤炸猪排、Gyu-an、根室花丸、佐藤养助、Unagi Eight、Hangetsu、森井拉面、Takahashi 拉面；宠物用品：松屋银座、German Pet House、唐吉诃德。"
  },
  {
    "id": "oden",
    "name": "Oreno 关东煮",
    "coord": [
      35.6696,
      139.7603
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [
      1
    ],
    "desc": "第一晚分享萝卜、鸡蛋与牛筋关东煮，饭后慢慢散步回酒店休息。",
    "address": "1F Ginza Metro Building, 7-6-6 Ginza, Chuo-ku, Tokyo",
    "source": "https://www.oreno.co.jp/restaurant/oden_ginza",
    "photo": "https://www.oreno.co.jp/wp-corp/wp-content/uploads/2014/02/4e2d5ca38f85d5253d019b4800880e4b.jpg",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "Oreno Kappou Oden Ginza 7-6-6",
    "notes": "先通过官网确认两位座位和当天营业，建议17:30；航班晚到就改时间或附近用餐。 先各选几样喜欢的关东煮，确认每份数量；萝卜、鸡蛋、豆腐制品适合开始，再追加牛筋或牛舌。 晚间每人另有小菜与席费共660 円（日元）（约 US$4.20），预算已预留；若不吃生食，避开菜单上的生鱼与生肉料理。"
  },
  {
    "id": "tower",
    "name": "东京塔",
    "coord": [
      35.6586,
      139.7454
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "在红白色铁塔下结束第一天。这里看外观，第三天再去涩谷看全城。",
    "address": "4-2-8 Shibakoen, Minato-ku, Tokyo",
    "source": "https://www.tokyotower.co.jp/price/index.html",
    "photo": "https://www.gotokyo.org/en/spot/4/images/main.webp",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "东京塔",
    "notes": "先到芝公园／增上寺周边公开步道看塔，注意寺院各区域开放时间，夜间不假设都能进入。 走近塔下看灯光。若精神很好，再临时决定是否登 Main Deck。 拍照时停在安全人行区域，不在马路中间或居民出入口取景。"
  },
  {
    "id": "sensoji",
    "name": "浅草寺 · 雷门",
    "coord": [
      35.7148,
      139.7967
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [
      2
    ],
    "desc": "从巨大的红灯笼开始，穿过老商店街，看东京最经典的寺院景色。",
    "address": "2-3-1 Asakusa, Taito-ku, Tokyo（浅草寺）",
    "source": "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html",
    "photo": "https://res-4.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1675339920/tokyo/Tokyo_s_id19_18",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "浅草寺 · 雷门",
    "notes": "按「雷门 → 仲见世商店街 → 宝藏门 → 浅草寺主殿」顺序走，红灯笼与五重塔是关键地标。 仲见世挑一份人形烧或仙贝，站在店家允许的位置吃完；部分店铺早上尚未开门。 想抽签可体验一次，按现场说明投币和取签。寺院参拜以安静合掌为主，不照搬神社拍手礼。",
    "nearby": "PDF 同区小店：花月堂、甘味处镰仓、Soratsuki、琥珀堂、Kanesue、Asakusa Menchi；Flower Miffy、三丽鸥浅草店。"
  },
  {
    "id": "unagi",
    "name": "浅草鳗鱼午餐",
    "coord": [
      35.7118,
      139.7983
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "同一碗鳗鱼饭，先原味，再加配料，最后茶泡饭。两个人一起慢慢试。",
    "address": "1-2-11 Hanakawado, Taito-ku, Tokyo",
    "source": "https://www.hitsumabushi.com/english/",
    "photo": "https://www.hitsumabushi.com/wp-content/uploads/2025/10/jp13.webp",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "Asakusa Unatetsu Honten",
    "notes": "选择浅草站本店，预约时说明两位；景观座位只作请求，不能保证。 第一次可点鳗鱼三吃，照店员说明把饭分几次吃，分别尝原味、配料与汤泡饭。 不想吃三吃就点普通鳗鱼饭。鳗鱼为熟食，但酱汁口味偏甜浓，忌口提前沟通。"
  },
  {
    "id": "sumida",
    "name": "隅田川散步",
    "coord": [
      35.7135,
      139.8014
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "吃饱后沿河走一段。晴空塔、桥与河面，正好构成一张东京明信片。",
    "address": "Hanakawado 1-chome, Taito-ku, Tokyo（浅草侧河岸）",
    "source": "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html",
    "photo": "https://www.gotokyo.org/shared/images/pages/destinations/eastern-tokyo/asakusa/images/area022_1001_18.jpg",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "隅田川散步",
    "notes": "以吾妻桥／隅田公园为定位，选不挡通行的河岸拍照。 不强求走到晴空塔脚下；本计划以远眺覆盖这座热门地标。 有风或下雨时，改为浅草室内咖啡休息，然后去上野。"
  },
  {
    "id": "nezu",
    "name": "根津神社",
    "coord": [
      35.7202,
      139.7608
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      3
    ],
    "desc": "从自由之丘转到根津，下午在神社建筑与鸟居小径中慢慢散步。",
    "address": "1-28-9 Nezu, Bunkyo-ku, Tokyo",
    "source": "https://nedujinja.or.jp/access/",
    "photo": "https://www.gotokyo.org/en/spot/70/images/main.webp",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "根津神社",
    "notes": "沿入口、楼门、拜殿慢慢参观，再走鸟居小径。 留45–60分钟；鸟居不是整座神社，不必为了拍照堵住通道。 11月看建筑与街区，不把春季杜鹃花海当作本次看点。"
  },
  {
    "id": "yanaka",
    "name": "谷中银座",
    "coord": [
      35.7277,
      139.7653
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      3
    ],
    "desc": "参考PDF的根津—谷中步行段，留时间给小店、小吃和夕阳阶梯。以散步为主，不做购物清单打卡。",
    "address": "3-13 Yanaka, Taito-ku, Tokyo（商店街区域）",
    "source": "https://www.gotokyo.org/en/destinations/northern-tokyo/yanaka-and-nezu/index.html",
    "photo": "https://www.gotokyo.org/en/destinations/northern-tokyo/yanaka-and-nezu/images/area013_0996_12.jpg",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "谷中银座",
    "notes": "从根津往谷中走，路过喜欢的小店再停。 进入谷中银座商店街，选一两样小吃，两人分享。 走到东侧夕阳阶梯回望商店街，再按返程路线前往千驮木站。",
    "nearby": "PDF 同区吃逛：Yoshibo Rin 荞麦面、根津松好、Asatte’s gelato、和栗屋、肉之铃木、山田屋烤肉、Himitsudo 刨冰。"
  },
  {
    "id": "sushi",
    "name": "银座久兵卫晚餐",
    "coord": [
      35.669,
      139.761
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [
      2
    ],
    "desc": "愿意认真吃一顿江户前寿司，就留这个晚上；午餐太饱也可以改轻晚餐。",
    "address": "8-7-6 Ginza, Chuo-ku, Tokyo",
    "source": "https://www.kyubey.jp/shoplist/ginza/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcBRXkTco-fvM0pCXtB2dqtnntyee_XZooIhMdToFDJTmTDzNF2yNoBdRL9L5bvDMffTJjNxg-YEYnirwqcwVpEZju_jkw1GoNt8IknyE_dGfAkEToFTnR4628NZfxAEM-5ZlE8zD9qBx9i=w960-h720-k-no",
    "photoLabel": "Google 地图 · 久兵卫银座本店 · 门店入口",
    "query": "Ginza Kyubey Tokyo",
    "notes": "高预算选项是银座久兵卫，须提前确认有位和套餐；不要到门口再把它当随到随吃。 订位前告知是否吃生鱼、贝类、海胆及其他忌口；套餐能否调整由店家确认。 若不吃生食或当天太饱，取消升级安排，改酒店周边熟食；不要预订后临时爽约。",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Ginza%20Ky%C5%ABbey%20Ginza%20Honten",
    "photoFit": "contain"
  },
  {
    "id": "meiji",
    "name": "明治神宫",
    "coord": [
      35.6764,
      139.6993
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "从巨大的鸟居走进去，城市的声音渐渐消失。东京也有安静的一面。",
    "address": "1-1 Yoyogikamizono-cho, Shibuya-ku, Tokyo",
    "source": "https://www.meijijingu.or.jp/en/access/",
    "photo": "https://res-3.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513945803/tokyo/Tokyo2331_8",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "明治神宫",
    "notes": "跟 Meiji Jingu／Harajuku 方向指示走到南侧入口；过鸟居后沿主路进森林。 从入口到主殿还需至少10分钟步行，包含在游览时间里，不要在站口就开始催促。 愿意参拜可按现场指引；神社与昨日的寺院不同。主殿前祈祷区域禁止拍照。"
  },
  {
    "id": "maisen",
    "name": "MAISEN 炸猪排",
    "coord": [
      35.6676,
      139.7107
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "在有老建筑气质的店里吃热腾腾的猪排。若想轻一点，换 AFURI 原宿拉面。",
    "address": "4-8-5 Jingumae, Shibuya-ku, Tokyo",
    "source": "https://mai-sen.com/restaurant/aoyama/",
    "photo": "https://mai-sen.com/wp-content/uploads/2026/06/20260903123441-66bb0ea83c57da6482851cbddb309d35.webp",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "Maisen Aoyama Main Store",
    "notes": "尽量11:30前到，热门时段可能排队。等待超过30–40分钟时切换附近轻餐。 第一次可选里脊或腰内肉套餐，配米饭、卷心菜和味噌汤；想吃哪种先看菜单图片。 想换柚子拉面，选 AFURI 原宿店；猪排和拉面二选一，不安排连吃。"
  },
  {
    "id": "omotesando",
    "name": "表参道",
    "coord": [
      35.6652,
      139.7123
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "树荫、设计店和小巷咖啡。逛街是散步的一部分，不是采购任务。",
    "address": "4-12-10 Jingumae, Shibuya-ku, Tokyo（Omotesando Hills）",
    "source": "https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/index.html",
    "photo": "https://www.gotokyo.org/en/spot/36/images/main.webp",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "表参道",
    "notes": "先看沿街建筑和橱窗；对购物兴趣不大就只选一间店进去。 找有座位的咖啡馆休息30–45分钟，给傍晚留体力。 若在原宿竹下通停留，控制在20–30分钟；拥挤时直接跳过。"
  },
  {
    "id": "crossing",
    "name": "八公 · 涩谷路口",
    "coord": [
      35.6595,
      139.7005
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "走一次世界闻名的交叉路口，再退到街边看人流。",
    "address": "2-1 Dogenzaka, Shibuya-ku, Tokyo（八公像）",
    "source": "https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html",
    "photo": "https://www.gotokyo.org/en/spot/86/images/main.webp",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "八公 · 涩谷路口",
    "notes": "先找到八公像，它是很实用的集合地标；人多时在边上约定一个明显店面。 绿灯后正常过街，不停在斑马线上拍照；走到对面再找合适视角。 看完路口，按导航去 Shibuya Scramble Square；它不是十字路口对面的 TSUTAYA。"
  },
  {
    "id": "sky",
    "name": "涩谷天空观景台",
    "originalName": "SHIBUYA SKY",
    "coord": [
      35.6585,
      139.7022
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "这趟旅行的高空时刻。白天、落日、亮灯，尽量一次看完。",
    "address": "Shibuya Scramble Square, 2-24-12 Shibuya, Shibuya-ku, Tokyo",
    "source": "https://shibuya-scramble-square.com/sky/ticket",
    "photo": "https://www.gotokyo.org/en/spot/1749/images/main_gd10237.webp",
    "photoLabel": "观景台所在大楼外观",
    "query": "SHIBUYA SKY",
    "notes": "先按实际日期查日落，再订日落前45–60分钟的入场券；本次11月26日天文日落约16:29，15:30为建议入场，不代表已订到票。高楼遮挡、天气和观景位置会影响实际观感。 提前到达，按预约时段入场；屋顶不能带包、帽子、自拍杆等，按现场规则寄存。 先看城市，再拍两人合照。若屋顶因天气关闭，依官方安排参观室内或处理票务，不保证退款。"
  },
  {
    "id": "gonpachi",
    "name": "Gonpachi 晚餐",
    "coord": [
      35.6575,
      139.6953
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "用烤串和一碗荞麦面收尾。点菜容易，也能坐下来慢慢聊。",
    "address": "14F E.Space Tower, 3-6 Maruyamacho, Shibuya-ku, Tokyo",
    "source": "https://gonpachi.jp/shibuya/",
    "photo": "https://gonpachi.jp/wp-content/uploads/sites/18/2020/01/gonpachi-soba-kushi04.jpg",
    "photoLabel": "品牌料理参考图",
    "query": "Gonpachi Shibuya E Space Tower",
    "notes": "订「Shibuya」分店，别订到西麻布；想要窗边座位可以请求，但不保证。 先点炭烤串、蔬菜与一份荞麦面，饿了再加天妇罗；无需为了尝种类一次点满。 若 SHIBUYA SKY 订到更晚的时段，先吃晚餐或后移订位，留足时间。"
  },
  {
    "id": "tsukiji",
    "name": "筑地场外市场",
    "coord": [
      35.6653,
      139.7707
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [
      2
    ],
    "desc": "一碗海鲜饭、一份玉子烧，看看食材如何变成一座城市的早晨。",
    "address": "1F, 4-16-2 Tsukiji, Chuo-ku, Tokyo（Plat Tsukiji）",
    "source": "https://www.tsukiji.or.jp/english/shopping/",
    "photo": "https://www.tsukiji.or.jp/assets/images/english/top/slide06.jpg",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "筑地场外市场",
    "notes": "退房前先确认行李寄存与取回时间。建议先吃正餐，再两人分一份玉子烧，避免空腹一路买。 选清楚标价、有座位的海鲜饭／寿司店；不吃生食就选熟鱼、鳗鱼、玉子烧等，并确认食材。 在店家指定位置吃，垃圾交回店家。别把批发作业区域当拍照背景。",
    "nearby": "PDF 同区小吃：OIDEYA 烤串、Unagi Shokudo、Sushikuni 海胆、Sushi Dai Honkan、鱼河岸小田原桥楼与海幸桥楼、Tekka Ya Hiei、Senriken。"
  },
  {
    "id": "yamacho",
    "name": "山长玉子烧",
    "coord": [
      35.6653,
      139.7705
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      2
    ],
    "desc": "PDF里推荐的市场小吃，作为筑地早餐中的一小站。两人分享，不额外加一顿正餐。",
    "address": "4-10-10 Tsukiji, Chuo-ku, Tokyo",
    "source": "https://www.tsukiji.or.jp/shoplist/cat-c/cat-10/466/",
    "photo": "https://www.tsukiji.or.jp/_cms/wp-content/uploads/2013/11/201-tukiji-yamachou-1274.jpg",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "山长玉子烧",
    "notes": "先逛市场再吃一份玉子烧。 在店家指定区域吃完，不边走边吃。 若队伍长就继续市场主线，不为一份小吃挤压返程。"
  },
  {
    "id": "tokyostation",
    "name": "东京站 · 丸之内",
    "coord": [
      35.6812,
      139.7671
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "给旅行留最后一张合照。伴手礼只买一小份，把返程余量留足。",
    "address": "1-9-1 Marunouchi, Chiyoda-ku, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/central-tokyo/tokyo-station-and-marunouchi/index.html",
    "photo": "https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513936386/tokyo/Tokyo2258_24",
    "photoLabel": "官方 / 旅游局实景参考",
    "query": "东京站 · 丸之内",
    "notes": "目的地设 Tokyo Station Marunouchi Square，在红砖站舍前拍照，不必为了这张照片进闸机。 有余量再逛站外或非付费区店铺；部分站内商店位于检票后，不要误刷卡进站购物。 返回银座酒店取行李，留出至少30–45分钟往返和整理；不要走错到机场巴士乘车侧就忘了行李。"
  },
  {
    "id": "nakameguro",
    "name": "中目黑 · 目黑川",
    "coord": [
      35.6457,
      139.6994
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      2
    ],
    "desc": "沿 PDF 从中目黑走向代官山，再到惠比寿；吃与散步优先，不强制购物。",
    "address": "Kamimeguro 1-chome, Meguro-ku, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/southern-tokyo/nakameguro/index.html",
    "photo": "https://www.gotokyo.org/en/destinations/southern-tokyo/nakameguro/images/103_0016_4.jpg",
    "photoLabel": "旅游局实景参考 · 非实时影像",
    "query": "中目黑 · 目黑川 Kamimeguro 1-chome, Meguro-ku, Tokyo",
    "notes": "出站先认目黑川，沿河散步。 PDF 提到甜甜圈、AFURI 与河岸咖啡，选一顿或一杯，不逐店排队。 11月是普通河岸街景，不是樱花季。",
    "nearby": "PDF 同区小店：I’m donut、AFURI、VISVIM、Sidewalk、Coverchord、neel。"
  },
  {
    "id": "daikanyama",
    "name": "代官山 · 蔦屋书店",
    "coord": [
      35.6491,
      139.6999
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      2
    ],
    "desc": "PDF 中目黑—代官山—惠比寿步行主线的核心停留。",
    "address": "17-5 Sarugakucho, Shibuya-ku, Tokyo",
    "source": "https://store.tsite.jp/daikanyama/access/",
    "photo": "https://www.gotokyo.org/en/destinations/western-tokyo/daikanyama/images/area034_1005_27.jpg",
    "photoLabel": "旅游局实景参考 · 非实时影像",
    "query": "代官山 · 蔦屋书店 17-5 Sarugakucho, Shibuya-ku, Tokyo",
    "notes": "沿街慢走到 T-SITE，途中有坡道。 重点看设计、旅行与艺术书，咖啡休息30分钟。 购物只随缘，留足步行去惠比寿的时间。",
    "nearby": "PDF 沿途店铺：Name.、KINTO、Jieda、Nigel Cabourn、1LDK、Hedy、LAYER、CARBOOTS、DOLCE TACUBO。"
  },
  {
    "id": "ebisu",
    "name": "惠比寿站",
    "coord": [
      35.6467,
      139.7098
    ],
    "category": "base",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      2
    ],
    "desc": "PDF 街区步行终点，从这里坐日比谷线回东银座。",
    "address": "Ebisu Station, Shibuya-ku, Tokyo",
    "source": "https://www.tokyometro.jp/lang_en/station/ebisu/index.html",
    "photo": "https://www.gotokyo.org/en/destinations/southern-tokyo/ebisu/images/area048_1030_11.jpg",
    "photoLabel": "官方旅游图文参考",
    "query": "惠比寿站 Ebisu Station, Shibuya-ku, Tokyo",
    "notes": "找 H 日比谷线，不要误入 JR 闸机。 往北千住方向乘车，到东银座下车。 返酒店休息后再吃晚饭。"
  },
  {
    "id": "wellk",
    "name": "Wellk 早餐",
    "coord": [
      35.6399717,
      139.71214
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      3
    ],
    "desc": "PDF 的预约早餐；先按9:00到店规划，最终须以店家开放的预约场次为准。",
    "address": "2-5-11 Mita, Meguro-ku, Tokyo, 2F",
    "source": "https://www.tablecheck.com/en/wellk/reserve/message",
    "photo": "https://2.image.cdn.tablecheck.com/unsafe/fit-in/640x427/filters:format(webp)/https://cdn2.tablecheck.com/booking_themes/663aedc8fd85e4ad0330b011/preview_images/xl/a0e97969.jpg?1715139689",
    "photoLabel": "Wellk 预约页参考图",
    "query": "Wellk 早餐 2-5-11 Mita, Meguro-ku, Tokyo, 2F",
    "notes": "从惠比寿步行约15分钟，店在二楼，认门牌上楼。 以预约页面当日可选套餐和时间为准。 吃完回惠比寿，经中目黑换东横线去自由之丘。"
  },
  {
    "id": "jiyugaoka",
    "name": "自由之丘",
    "coord": [
      35.6076,
      139.6688
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      3
    ],
    "desc": "按 PDF 逛生活杂货、小店和甜品；为根津与谷中留出日光时间，午后提早离开。",
    "address": "Jiyugaoka Station, Meguro-ku, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/southern-tokyo/jiyugaoka/",
    "photo": "https://www.gotokyo.org/en/destinations/southern-tokyo/jiyugaoka/images/50_0986_13.jpg",
    "photoLabel": "旅游局实景参考 · 非实时影像",
    "query": "自由之丘 Jiyugaoka Station, Meguro-ku, Tokyo",
    "notes": "站前 → 生活杂货小街 → 甜品休息，遇到喜欢的小店再进。 午餐按 PDF 的荞麦面方向安排，餐饮预算与街区停留合并。 13:20左右返站，选开往副都心线的直通车，或在涩谷换乘。",
    "nearby": "PDF 逛店清单：HOTCH POTCH、DULTON、Kaldi、katakana、Paris S’éveille、Lino e Lina、TODAY’S SPECIAL、Moonstar、IDÉE、私之部屋、Quatre Saisons、自由形、蜂之家；午餐 Machidaya / Chisou。"
  },
  {
    "id": "titoten",
    "name": "titoten · 三轩茶屋早餐",
    "coord": [
      35.644906,
      139.669802
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "照 PDF 第五天，从三轩茶屋的小店早餐开始，给两人留一小时慢慢吃。",
    "address": "4-25-5 Taishido, Setagaya-ku, Tokyo",
    "source": "https://www.instagram.com/tito.ten/",
    "photo": "https://shokusanbest.com/assets/uploads/sites/3/2023/08/titoten-7.jpg",
    "photoLabel": "当地探店实拍 · titoten早餐示例，非当日菜单",
    "query": "titoten · 三轩茶屋早餐 4-25-5 Taishido, Setagaya-ku, Tokyo",
    "notes": "从三轩茶屋站出站，沿茶泽通附近街道走到4-25-5；店面低调，注意门上的店名。 点早餐拼盘或当日提供的面包、蛋和饮料，菜单以当天为准。 计划9:25到；排队超过20分钟就压缩后面的拍照时间，保留午餐与豪德寺。"
  },
  {
    "id": "gorilla",
    "name": "三轩茶屋 · 大猩猩大楼",
    "coord": [
      35.6476117,
      139.6691656
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "茶泽通上的巨大猩猩是这一带很有趣的街头地标，短暂停留拍照。",
    "address": "3-15-2 Taishido, Setagaya-ku, Tokyo",
    "source": "https://matcha-jp.com/en/23684",
    "photo": "https://place.matcha-jp.com/resize/200x2000/2025/01/19-14-57-01-131b68b11aa6f001070f5c67f9b2fa974f5.webp",
    "photoLabel": "MATCHA · 三轩茶屋大猩猩大楼实景",
    "query": "三轩茶屋 · 大猩猩大楼 3-15-2 Taishido, Setagaya-ku, Tokyo",
    "notes": "从早餐店沿茶泽通向北走，抬头找便利店上方伸出的猩猩。 在人行道安全位置拍照，别站到车道或堵住店门。 这里是建筑外观，不是售票景点；拍完返回Carrot Tower。"
  },
  {
    "id": "carrot",
    "name": "Carrot Tower · 26层城市景色",
    "coord": [
      35.6436933,
      139.669292
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "免费展望大厅俯瞰西东京，再从楼下换乘世田谷线小电车。",
    "address": "4-1-1 Taishido, Setagaya-ku, Tokyo",
    "source": "https://www.tokyu.co.jp/area/sangen-jaya/article/arti-01KS6TTH11RW90FTVAPSV1CS9M/",
    "photo": "https://cdn.scramble-cms.dp.tokyu.co.jp/strapi/11_5acadc4afe.jpg",
    "photoLabel": "东急官方 · Carrot Tower展望景色",
    "query": "Carrot Tower · 26层城市景色 4-1-1 Taishido, Setagaya-ku, Tokyo",
    "notes": "走进Carrot Tower，跟随26F展望大厅标识；由2层中庭找专用电梯。 在公共展望区域看城市街区，能见度决定远景，不保证能看见富士山。 11:05左右下楼，找地面世田谷线SG01；不要回地下田园都市线。"
  },
  {
    "id": "gotokuji",
    "name": "豪德寺 · 招财猫与寺院",
    "coord": [
      35.6484976,
      139.6472629
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "搭世田谷线来到安静寺院，按 PDF 依次走山门、佛殿、三重塔与招财猫区域。",
    "address": "2-24-7 Gotokuji, Setagaya-ku, Tokyo",
    "source": "https://www.gotokuji.jp/en/about/",
    "photo": "https://gotokuji.jp/en/img/manekineko/img_main_pc.jpg",
    "photoLabel": "豪德寺官方 · 招财猫实景",
    "query": "豪德寺 · 招财猫与寺院 2-24-7 Gotokuji, Setagaya-ku, Tokyo",
    "notes": "从山下站沿住宅街走约15分钟，经参道进入寺院。 先看山门与佛殿，再走三重塔和招财猫奉纳区域；拍照不触碰供奉物。 如想请一只招财猫，留时间到寺务所；库存与价格以现场为准。"
  },
  {
    "id": "samurai",
    "name": "SAMURAI. · 下北泽汤咖喱午餐",
    "coord": [
      35.6646759,
      139.6669344
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "从 PDF 的午餐推荐中选一间作主线：蔬菜丰富的汤咖喱，吃饱后再逛下北泽。",
    "address": "3-31-14 Kitazawa, Setagaya-ku, Tokyo",
    "source": "https://www.samurai-curry.com/shop_shimokitazawa/",
    "photo": "https://www.samurai-curry.com/img/shop/shimokita_gaikan.jpg?_1",
    "photoLabel": "SAMURAI.官方 · 下北泽店外观",
    "query": "SAMURAI. · 下北泽汤咖喱午餐 3-31-14 Kitazawa, Setagaya-ku, Tokyo",
    "notes": "小田急下北泽OH07下车，中央口出站，沿北侧商店街步行到店。 按菜单选主料、米饭量与辣度；第一次可从低辣开始。 留约1小时含等位；若排队较久，减少之后小店停留，不压缩吃饭时间。"
  },
  {
    "id": "shimokita",
    "name": "下北泽 · 一番街与唱片小店",
    "coord": [
      35.664,
      139.66713
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "午餐后沿一番街慢慢看古着、杂货和唱片，重点是街区气氛，不安排必须购买的清单。",
    "address": "Kitazawa 2–3 chome, Setagaya-ku, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/western-tokyo/shimokitazawa/index.html",
    "photo": "https://www.gotokyo.org/en/destinations/western-tokyo/shimokitazawa/images/area033_1010_19.webp",
    "photoLabel": "GO TOKYO · 下北泽街区实景",
    "query": "下北泽 · 一番街与唱片小店 Kitazawa 2–3 chome, Setagaya-ku, Tokyo",
    "notes": "沿一番街散步，路过NEW YORK JOE、2nd STREET和disk union时按兴趣停留。 两人各挑一家感兴趣的小店，不把每一家都变成任务。 接着往东走到reload，途中找路口和店招拍照。",
    "nearby": "PDF 同区小店：NEW YORK JOE EXCHANGE、2nd STREET、disk union；旧Yam邸香料咖喱、白髭泡芙。"
  },
  {
    "id": "reload",
    "name": "reload · 咖啡与设计小店",
    "coord": [
      35.6631126,
      139.6696564
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "旧铁道沿线的小型店铺聚落，在这里喝杯咖啡休息，再走去BONUS TRACK。",
    "address": "3-19-20 Kitazawa, Setagaya-ku, Tokyo",
    "source": "https://reload-shimokita.com/",
    "photo": "https://www.gotokyo.org/en/destinations/western-tokyo/shimokitazawa/images/reload_shimokita.webp",
    "photoLabel": "GO TOKYO · reload实景",
    "query": "reload · 咖啡与设计小店 3-19-20 Kitazawa, Setagaya-ku, Tokyo",
    "notes": "从东侧步道进入reload，先绕一圈看建筑与小店。 选一杯咖啡或甜点，两人坐下歇脚，不急着赶店。 沿下北线街的步行空间往西走，穿过车站附近去BONUS TRACK。"
  },
  {
    "id": "bonus",
    "name": "BONUS TRACK · 街区慢逛",
    "coord": [
      35.6593357,
      139.6644187
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "独立店铺与开放步行空间组成的小街区，作为下北泽的最后一站。",
    "address": "2-36-12 to 15 Daita, Setagaya-ku, Tokyo",
    "source": "https://bonus-track.net/",
    "photo": "https://rstatic.enjoytokyo.jp/assets/images/spot/f0/l_00062605/img_1.jpg?1695096395&p=t&w=1200",
    "photoLabel": "Enjoy Tokyo · BONUS TRACK实景",
    "query": "BONUS TRACK · 街区慢逛 2-36-12 to 15 Daita, Setagaya-ku, Tokyo",
    "notes": "沿小街看书店、生活杂货与咖啡店，按喜好停留。 15:55左右开始返回下北泽站，找京王井之头线标识。 想买点心就控制分量，把胃口留给吉祥寺小吃与晚餐。"
  },
  {
    "id": "kichijoji",
    "name": "吉祥寺 · Sunroad与街头小吃",
    "coord": [
      35.70425,
      139.57976
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "按 PDF 从北口进入有顶棚的Sunroad，再转Daiya Street，边走边分享小吃。",
    "address": "Kichijoji Honcho 1 chome, Musashino, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/western-tokyo/kichijoji/index.html",
    "photo": "https://www.gotokyo.org/shared/images/pages/destinations/western-tokyo/kichijoji/images/area035_1012_22.jpg",
    "photoLabel": "GO TOKYO · 吉祥寺Sunroad商店街",
    "query": "吉祥寺 · Sunroad与街头小吃 Kichijoji Honcho 1 chome, Musashino, Tokyo",
    "notes": "从吉祥寺站北口出站，先走Sunroad商店街，再转Daiya Street。 想吃热食可找Satou炸牛肉饼、天音鲷鱼烧或鱼糕；以营业和队伍为准，选1–2样分享。 小笹羊羹常需很早排队，这个下午时段不承诺能买到；不要为了售罄商品打乱路线。",
    "nearby": "PDF 小吃清单：Satou 炸牛肉饼、小笹、天音鲷鱼烧、塚田水产、Woodberry’s。"
  },
  {
    "id": "harmonica",
    "name": "口琴横丁 · 小巷晚餐",
    "coord": [
      35.70366,
      139.57926
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "PDF",
    "days": [
      4
    ],
    "desc": "狭窄巷弄里的居酒屋与小店，为东京西侧的一天收尾。",
    "address": "Kichijoji Honcho 1 chome, Musashino, Tokyo",
    "source": "https://www.gotokyo.org/en/destinations/western-tokyo/kichijoji/index.html",
    "photo": "https://www.gotokyo.org/shared/images/pages/destinations/western-tokyo/kichijoji/images/area035_1006_15.jpg",
    "photoLabel": "GO TOKYO · 口琴横丁实景",
    "query": "口琴横丁 · 小巷晚餐 Kichijoji Honcho 1 chome, Musashino, Tokyo",
    "notes": "沿口琴横丁的小巷看店面，选择有两人座位且菜单合适的店。 晚餐主食搭几样下酒菜；不喝酒也可先向店家确认是否能用餐。 18:50左右结账，19:00前往JR吉祥寺站，按中央线快速往东京方向返程。"
  },
  {
    "id": "ueno",
    "name": "上野公园与不忍池",
    "coord": [
      35.7122,
      139.7731
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "坐下来，看水面与散步的人。给旅程留一点没有任务的时间。",
    "address": "Uenokoen, Taito-ku, Tokyo（不忍池周边）",
    "source": "https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html",
    "photo": "https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/images/main.webp",
    "photoLabel": "地点参考照片",
    "query": "Shinobazu Pond Ueno Tokyo",
    "notes": "按 Ueno Park 指示走出车站；先选一条公园步道，再到不忍池附近休息。 这里默认不排动物园和博物馆，避免排队挤掉吃饭时间。 雨天可把户外改为一间开放的博物馆，但需另查当日开放与门票。"
  },
  {
    "id": "ameyoko",
    "name": "阿美横丁的烟火气",
    "coord": [
      35.709,
      139.7746
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "铁路旁的叫卖声、小吃与杂货，和银座是完全不同的东京。",
    "address": "6-10-7 Ueno, Taito-ku, Tokyo（商店街定位）",
    "source": "https://www.ueno-ameyoko.jp/?lang=en",
    "photo": "https://www.gotokyo.org/en/spot/71/images/main.webp",
    "photoLabel": "地点参考照片",
    "query": "Ameyoko Shopping Street Tokyo",
    "notes": "先走一遍主街，看海鲜、干货和小吃店。两人分享一两样即可。 如果晚上订寿司，下午只喝茶或吃小点心；不把这里吃成第二顿正餐。 喜欢才买，不为了购物打乱节奏。结束后从上野坐银座线回新桥。"
  },
  {
    "id": "dinner1",
    "name": "银座天亭 · 天妇罗",
    "coord": [
      35.6688,
      139.7603
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "酥脆的虾与时蔬，适合落地后的一顿熟食。航班晚点时，改酒店附近简单晚餐。",
    "address": "B1 Shimbashi Kaikan, 8-6-3 Ginza, Chuo-ku, Tokyo",
    "source": "https://ginza-tentei.jp/",
    "photo": "https://ginza-tentei.jp/img/photo-gallery/24.jpg",
    "photoLabel": "地点参考照片",
    "query": "Ginza Tentei Tokyo",
    "notes": "先查看当日营业与晚餐菜单；有稳定抵达时间再订位。 两人可各点一份套餐，确认包含的料理、税费与服务费。对虾、面粉或油炸食物有忌口要提前说明。 饭后不要赶路，东京塔只排外观与公园散步即可。"
  },
  {
    "id": "kawagoe",
    "name": "川越站",
    "coord": [
      35.9070547,
      139.4833417
    ],
    "category": "base",
    "region": "kawagoe",
    "origin": "PDF · 第4天",
    "days": [],
    "desc": "PDF 川越一日游的起终点，从东口开始步行。",
    "address": "Kawagoe Station, Kawagoe, Saitama",
    "source": "https://koedo.or.jp/en/access/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcImMHQK4nMgPwa9NwDgnCNeNDY0ixsDmg46ymXV8oP_T5d8jDq0XA4WJ_oDH6DGhh-4iceSghzktLSpGpFdF7LJKjNTM1xBR0acQPloxX0eOm_8jqMDXwENw0O3GHX8_vCrxJB-LXzm3z4=w960-h720-k-no",
    "photoLabel": "Google 地图 · 川越站 · 站台实景",
    "query": "川越站 Kawagoe Station, Kawagoe, Saitama",
    "notes": "东京经池袋换东武东上线，在川越站下车。 东口先找洗手间，补水后步行去八幡宫。 返程仍到川越站，不是川越市站或本川越站。",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Kawagoe%20Station",
    "photoFit": "cover"
  },
  {
    "id": "hachiman",
    "name": "川越八幡宫",
    "coord": [
      35.9105,
      139.4851
    ],
    "category": "sight",
    "region": "kawagoe",
    "origin": "PDF · 第4天",
    "days": [],
    "desc": "PDF 川越步行第一站。",
    "address": "19-3 Minamitorimachi, Kawagoe, Saitama",
    "source": "https://www.kawagoe-hachimangu.net/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdcq-Pmbbbdyx7egzPuokKNp1ugKnFDRX2KqnOyoMhF7PBKvIemw8cvLMvy3qqZm1-QSkHUbsXYx5WPS2LLvbn8tDDtTAMgD-FGZzVDbNgcPBSIPXyaZy9gV18IvbMNTWED_rze=w960-h720-k-no",
    "photoLabel": "Google 地图 · 川越八幡宫 · 境内实景",
    "query": "川越八幡宫 19-3 Minamitorimachi, Kawagoe, Saitama",
    "notes": "走入鸟居与参道，参拜后看境内银杏。 停留约25分钟，再走向熊野神社。",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E5%B7%9D%E8%B6%8A%E5%85%AB%E5%B9%A1%E5%AE%AB",
    "photoFit": "cover"
  },
  {
    "id": "kumano",
    "name": "川越熊野神社",
    "coord": [
      35.919,
      139.4828
    ],
    "category": "sight",
    "region": "kawagoe",
    "origin": "PDF · 第4天",
    "days": [],
    "desc": "PDF 第二站，境内参拜与小体验。",
    "address": "17-1 Renjakucho, Kawagoe, Saitama",
    "source": "https://www.kawagoekumano.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfT-TQ7M7z86_9VwhAtDi_tuceoXXbi-mlnfVJLiwyQMIDok6oI3FWVRWPg9c4tCQUuzScAr3xhTdGq8eIQzfI34hPcKh1XMiYvbceUYahLnBpeRSqdGBtnDi4htd0M52lBar1okw=w960-h720-k-no",
    "photoLabel": "Google 地图 · 川越熊野神社 · 神社实景",
    "query": "川越熊野神社 17-1 Renjakucho, Kawagoe, Saitama",
    "notes": "先参拜，再按现场说明体验。 不要把求签结果当成必须购买更多护符的理由。 出门顺路往大正浪漫梦通。",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E7%86%8A%E9%87%8E%E7%A5%9E%E7%A4%BE%EF%BC%88%E5%B7%9D%E8%B6%8A%EF%BC%89",
    "photoFit": "cover"
  },
  {
    "id": "taisho",
    "name": "大正浪漫梦通",
    "coord": [
      35.9203,
      139.4833
    ],
    "category": "stroll",
    "region": "kawagoe",
    "origin": "PDF · 第4天",
    "days": [],
    "desc": "从神社走进复古街道，保持 PDF 的顺路方向。",
    "address": "Renjakucho / Nakacho, Kawagoe, Saitama",
    "source": "https://koedo.or.jp/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcxP_O--GeFsXztbdsQzqSVtePYV13q3U0JSOit2BcPeQDPWVi70joLwiaXlue0Xwx18h7a0OIvfTIa85zui6UlMbzc-h72yhpfjucPr285tKEAbsJsHKEOeMq6vvDTNfm8ddQ5OQ=w960-h720-k-no",
    "photoLabel": "Google 地图 · 大正浪漫梦通 · 街景，装饰随季节变化",
    "query": "大正浪漫梦通 Renjakucho / Nakacho, Kawagoe, Saitama",
    "notes": "沿街看店招、老建筑。 小吃两人分享，留肚子给一番街午餐。",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%AD%A3%E6%B5%AA%E6%BC%AB%E6%A2%A6%E9%80%9A",
    "photoFit": "cover"
  },
  {
    "id": "ichibangai",
    "name": "川越一番街 · 午餐",
    "coord": [
      35.9235,
      139.4827
    ],
    "category": "stroll",
    "region": "kawagoe",
    "origin": "PDF · 第4天",
    "days": [],
    "desc": "PDF 的藏造老街与午餐区，安排一顿正餐加一两样红薯小吃。",
    "address": "Saiwaicho, Kawagoe, Saitama",
    "source": "https://koedo.or.jp/en/spot_002/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLc9SW_o9CJ802buh8xO2u5G_tYuNQWtBeFQQy4IzLPx61aA1msgomiiVvz0CX3U7hlN4Ludx71-DZ58LjTXGksOeYo7xrdTlDwLUfKaedHx48Q80pU01DXUDpXkdrrbW8XkHTxB=w960-h720-k-no",
    "photoLabel": "Google 地图 · 川越一番街 · 藏造建筑",
    "query": "川越一番街 · 午餐 Saiwaicho, Kawagoe, Saitama",
    "notes": "先吃午餐，再慢逛藏造街景。 按 PDF 方向选荞麦面或豆腐料理，现场确认营业与菜单。 红薯片或地瓜点心两人分享，不把每一家都排进日程。",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E5%B7%9D%E8%B6%8A%E4%B8%80%E7%95%AA%E8%A1%97",
    "photoFit": "cover"
  },
  {
    "id": "bell",
    "name": "时之钟",
    "coord": [
      35.9241,
      139.4832
    ],
    "category": "sight",
    "region": "kawagoe",
    "origin": "PDF · 第4天",
    "days": [],
    "desc": "川越代表地标，按 PDF 放在一番街之后。",
    "address": "15-7 Saiwaicho, Kawagoe, Saitama",
    "source": "https://koedo.or.jp/en/spot_001/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfuLMn_wji3pFIvxQe73Cbemy6sJIQij3Z3QXY13Bhtk29GM0rLZ0L9GRwFYfzdz8Dj_XTrqtcLhrTDBCJatvik3u6vnOD11PBo-L7jAmxMZbSI_zzFXAiv1CxqX0lkIGfY2S0O=w960-h720-k-no",
    "photoLabel": "Google 地图 · 时之钟 · 夜景",
    "query": "时之钟 15-7 Saiwaicho, Kawagoe, Saitama",
    "notes": "在街口拍整体，注意来车。 穿过钟楼下方通道，按现场开放区域散步。 停留20分钟后前往冰川神社。",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E6%97%B6%E4%B9%8B%E9%92%9F",
    "photoFit": "contain"
  },
  {
    "id": "hikawa",
    "name": "川越冰川神社",
    "coord": [
      35.927586,
      139.488532
    ],
    "category": "sight",
    "region": "kawagoe",
    "origin": "PDF · 第4天",
    "days": [],
    "desc": "PDF 午后的神社停留。",
    "address": "2-11-3 Miyashitamachi, Kawagoe, Saitama",
    "source": "https://www.kawagoehikawa.jp/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/HikawaJinjaKawagoe20131014.jpg/330px-HikawaJinjaKawagoe20131014.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Hikawa Shrine (Kawagoe) 参考图",
    "query": "川越冰川神社 2-11-3 Miyashitamachi, Kawagoe, Saitama",
    "notes": "看鸟居、参道和绘马。 想求签或购买护符时，先看清价格和说明。 11月不预设夏季风铃活动，按当月现场开放参观。",
    "photoSource": "https://en.wikipedia.org/wiki/Hikawa_Shrine_(Kawagoe)"
  },
  {
    "id": "kitain",
    "name": "喜多院",
    "coord": [
      35.917525,
      139.48906667
    ],
    "category": "sight",
    "region": "kawagoe",
    "origin": "PDF · 第4天",
    "days": [],
    "desc": "PDF 川越路线最后一站，安排在下午较早时段，避免错过建筑参观。",
    "address": "1-20-1 Kosembamachi, Kawagoe, Saitama",
    "source": "https://kitain.net/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Kawagoe_Kitain_Tahoto_202011.jpg/330px-Kawagoe_Kitain_Tahoto_202011.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Kita-in 参考图",
    "query": "喜多院 1-20-1 Kosembamachi, Kawagoe, Saitama",
    "notes": "先确认当天最晚售票与开放区域。 境内散步后，按体力选择付费建筑参观。 15:50左右往川越站走，留返东京的交通余量。",
    "photoSource": "https://en.wikipedia.org/wiki/Kita-in"
  },
  {
    "id": "akihabara",
    "name": "秋叶原",
    "coord": [
      35.69833333,
      139.77305556
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "方位地标",
    "days": [],
    "desc": "电器、动漫与游戏街区，以车站周边为起点。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=%E7%A7%8B%E5%8F%B6%E5%8E%9F%20Tokyo%20Japan",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Sotokanda%2C_Akihabara_Electric_Town_at_night_20231114.png/330px-Sotokanda%2C_Akihabara_Electric_Town_at_night_20231114.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Akihabara 参考图",
    "query": "秋叶原",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Akihabara"
  },
  {
    "id": "shinjuku",
    "name": "新宿",
    "coord": [
      35.70138889,
      139.70972222
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "方位地标",
    "days": [],
    "desc": "大型交通枢纽与百货商圈，作为东京方位参照与可选逛街区域。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%AE%BF%20Tokyo%20Japan",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/330px-Skyscrapers_of_Shinjuku_2009_January.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Shinjuku 参考图",
    "query": "新宿",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Shinjuku"
  },
  {
    "id": "asakusa-center",
    "name": "浅草文化观光中心",
    "coord": [
      35.71069,
      139.7965
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 的浅草游览起点，可从观景层认识雷门与仲见世的方位。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=%E6%B5%85%E8%8D%89%E6%96%87%E5%8C%96%E8%A7%82%E5%85%89%E4%B8%AD%E5%BF%83%20Tokyo%20Japan",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Asakusa_Culture_Tourist_Information_Center_2016.jpg/330px-Asakusa_Culture_Tourist_Information_Center_2016.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Asakusa Culture Tourist Information Center 参考图",
    "query": "浅草文化观光中心",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Asakusa_Culture_Tourist_Information_Center"
  },
  {
    "id": "nakamise",
    "name": "仲见世商店街",
    "coord": [
      35.71472222,
      139.79675
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "雷门到浅草寺之间的小吃、伴手礼街，适合边走边看。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=%E4%BB%B2%E8%A7%81%E4%B8%96%E5%95%86%E5%BA%97%E8%A1%97%20Tokyo%20Japan",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Sensoji_2023.jpg/330px-Sensoji_2023.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Sensō-ji 参考图",
    "query": "仲见世商店街",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Sens%C5%8D-ji"
  },
  {
    "id": "asakura",
    "name": "旧朝仓家住宅",
    "coord": [
      35.6482,
      139.7015
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 中从中目黑逛向代官山时的历史住宅停留点。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=%E6%97%A7%E6%9C%9D%E4%BB%93%E5%AE%B6%E4%BD%8F%E5%AE%85%20Tokyo%20Japan",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLc2g-Peir_6ptD1czvdPjNIk60BXFh7a8Q7G4v0G7a0GXMu6DwlP3f7qDwlVSyEFiCSMK5wJvhGQ6EQP1zevkk_GZydYrpYZHxzqKKgzyvIHp2OuFDJrv-PLnIIGwjN1lJwfgbrLQ=w960-h720-k-no",
    "photoLabel": "Google 地图 · 旧朝仓家住宅 · 建筑实景",
    "query": "旧朝仓家住宅",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Kyu%20Asakura%20House",
    "photoFit": "cover"
  },
  {
    "id": "yuyake",
    "name": "谷中夕阳阶梯",
    "coord": [
      35.728,
      139.7673
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "从阶梯回望谷中商店街，适合傍晚拍街景。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=%E8%B0%B7%E4%B8%AD%E5%A4%95%E9%98%B3%E9%98%B6%E6%A2%AF%20Tokyo%20Japan",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdmfPvoVxXRk9jrwBmpG8qmBpJthkV7tnUj37PHBErhD4_9OwLg_L94tXahjICE-IlsDHQSsJOVa-UaMKRzfDvrGfCBlb3vu7pgPv-Uae9xkPc_7VbYPxJRqmG3kMx75-09VN8=w960-h720-k-no",
    "photoLabel": "Google 地图 · 谷中夕阳阶梯 · 街景",
    "query": "谷中夕阳阶梯",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Yanaka%20Ginza%20Y%C5%AByake%20Dandan",
    "photoFit": "cover"
  },
  {
    "id": "neko-gallery",
    "name": "猫町画廊",
    "coord": [
      35.7233,
      139.7667
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 的猫主题画廊与杂货停留点；地址为谷中 2-6-24，开放日需复核。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=%E7%8C%AB%E7%94%BA%E7%94%BB%E5%BB%8A%20Tokyo%20Japan",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfT74dSSygA155IHDHrcONP6A5PoU7Fuyrm-QFqHyNl7vH9tJcNaRb9XRI3QV3w1FMux995T3iZS75kJzAZbscIi7k7-PeC3JXGyDfSlxJBvqaz8WCCUGZdLXSRlDhsGqhkuOI=w960-h720-k-no",
    "photoLabel": "Google 地图 · 猫町画廊 · 入口阶梯",
    "query": "猫町画廊",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Neko%20Machi%20Gallery",
    "photoFit": "contain"
  },
  {
    "id": "nenneko",
    "name": "Nennekoya 猫主题小店",
    "coord": [
      35.7197,
      139.7672
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 提到的猫主题小景，地址谷中 1-7-26；店铺经营状态以出发前查询为准。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=Nennekoya%20%E7%8C%AB%E4%B8%BB%E9%A2%98%E5%B0%8F%E5%BA%97%20Tokyo%20Japan",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcxoBkkCg1JsQlbw7QHlX9YXVopwTOoZakUoiCYSuriFOPkfqXHM4R1_pLIiYXSBx0iC4iBzLy_ysOJLo3Rk1u0b6_WYsWYN4barkiCh6gV5s7Fk7XcoMKkaid3cP-GCLHdNNI=w960-h720-k-no",
    "photoLabel": "Google 地图 · Nennekoya · 猫主题门面",
    "query": "Nennekoya 猫主题小店",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Nenneko-ya%20%26%20Nenneko%20Shrine",
    "photoFit": "contain"
  },
  {
    "id": "mikan",
    "name": "MIKAN 下北",
    "coord": [
      35.6616,
      139.668
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "下北泽站附近的餐饮与商业街区，适合午餐和小逛。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=MIKAN%20%E4%B8%8B%E5%8C%97%20Tokyo%20Japan",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdyk8MQY9VDGIXGQlsMRYDkKOrLF3OSNwsq3zISFSriph-ElV0dBCREE_sGVnb9olJwka-twUl5XBIp0M0VSS7uXlfKVAo4J_wWDvN-hzGFwXFKgx1SidDUn7QhIR1aGRO-tGaNaVJrlPaV=w960-h720-k-no",
    "photoLabel": "Google 地图 · MIKAN 下北 · 商业设施入口",
    "query": "MIKAN 下北",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Mikan%20Shimokita",
    "photoFit": "cover"
  },
  {
    "id": "daiya",
    "name": "吉祥寺 Daiya 街",
    "coord": [
      35.7039,
      139.579
    ],
    "category": "stroll",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "连接车站、Sunroad 与口琴横丁的购物街，适合沿街尝小吃。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=%E5%90%89%E7%A5%A5%E5%AF%BA%20Daiya%20%E8%A1%97%20Tokyo%20Japan",
    "photo": "https://www.daiyagai.com/assets/photos/pc_kv_east.webp",
    "photoLabel": "商店街官网 · Daiya 街东区",
    "query": "吉祥寺 Daiya 街",
    "notes": "",
    "photoSource": "https://www.daiyagai.com/",
    "photoFit": "cover"
  },
  {
    "id": "kabukiza",
    "name": "歌舞伎座",
    "coord": [
      35.6695,
      139.7678
    ],
    "category": "sight",
    "region": "tokyo",
    "origin": "方位地标",
    "days": [],
    "desc": "东银座站旁的经典剧场地标，酒店附近认路很方便。",
    "address": "",
    "source": "https://www.gotokyo.org/en/story/walks-and-tours/ginza/",
    "photo": "https://www.gotokyo.org/en/story/walks-and-tours/ginza/images/29_0113_8_1024x800.jpg",
    "photoLabel": "GO TOKYO · 歌舞伎座",
    "query": "歌舞伎座",
    "notes": ""
  },
  {
    "id": "afuri",
    "name": "AFURI 原宿",
    "coord": [
      35.6716,
      139.7053
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "旧计划里的柚子拉面备选；这是原宿店，与 PDF 的中目黑店区分。",
    "address": "1F Grandeforesta, 3-63-1 Sendagaya, Shibuya-ku, Tokyo",
    "source": "https://afuri.com/findus/",
    "photo": "https://afuri.com/img/shop/photo06.jpg",
    "photoLabel": "AFURI 官方 · 原宿店",
    "query": "AFURI 原宿",
    "notes": ""
  },
  {
    "id": "afuri-naka",
    "name": "AFURI 中目黑",
    "coord": [
      35.6445,
      139.6988
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 的中目黑柚子拉面选择，适合河岸散步前后用餐。",
    "address": "",
    "source": "https://www.google.com/maps/search/?api=1&query=AFURI%20%E4%B8%AD%E7%9B%AE%E9%BB%91%20Tokyo%20Japan",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdmGbF2nY2QvB4TEsV-UBEHj90Tq4LsxmPp9_DqivzfVarHwerDLsDCILkN-NGcVmi9G28yID19DXCdSXNcDqvxWlr_9nh3_Vx9Dl41Swnc5QPvA6glcri9YT9inZ536RHS5El1=w960-h720-k-no",
    "photoLabel": "Google 地图 · AFURI 中目黑 · 门店外观",
    "query": "AFURI 中目黑",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Afuri%20Nakameguro",
    "photoFit": "cover"
  },
  {
    "id": "otako",
    "name": "日本桥多幸本店",
    "coord": [
      35.6816,
      139.7738
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "旧计划的关东煮与豆腐盖饭备选，注意是日本桥本店。",
    "address": "",
    "source": "https://www.kikumasamune.co.jp/ajinamise/detail.html?id=22",
    "photo": "https://www.kikumasamune.co.jp/ajinamise/shop_img/22/menu1.jpg",
    "photoLabel": "菊正宗餐厅介绍 · 本店料理参考",
    "query": "日本桥多幸本店",
    "notes": "",
    "photoSource": "https://www.kikumasamune.co.jp/ajinamise/detail.html?id=22"
  },
  {
    "id": "ukai",
    "name": "银座 UKAI NIKUSHO",
    "coord": [
      35.6676,
      139.7628
    ],
    "category": "food",
    "region": "tokyo",
    "origin": "旧计划",
    "days": [],
    "desc": "旧计划的精致肉料理备选，在银座 Jewel Box 地下1层。",
    "address": "",
    "source": "https://www.ukai.co.jp/ginzakappou/",
    "photo": "https://www.ukai.co.jp/cms/wp-content/uploads/2025/09/GK_20250806_5783-1024x683.jpg",
    "photoLabel": "UKAI 官网 · 料理参考，菜单随季节变化",
    "query": "银座 UKAI NIKUSHO",
    "notes": "",
    "photoSource": "https://www.ukai.co.jp/ginzakappou/"
  },
  {
    "id": "kiyomizu",
    "name": "清水寺",
    "coord": [
      34.995,
      135.785
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 第7天的主要寺院，清水舞台与寺院步道；未纳入本次东京四日。",
    "address": "",
    "source": "https://www.kiyomizudera.or.jp/en/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/330px-Kiyomizu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Kiyomizu-dera 参考图",
    "query": "清水寺",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Kiyomizu-dera"
  },
  {
    "id": "ninen",
    "name": "二年坂",
    "coord": [
      34.9981,
      135.7808
    ],
    "category": "stroll",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "石板坡道、町屋与伴手礼小店；与三年坂连起来走。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLc9noc0slftuyxb9tEEGU_leY9o3aZ79g0uN083yV38CbpaS7u_ZfRCU7ekG-cAwHwCseHSO7FCJQEJtwVJ2-BH6fDch2GC53M8V1eQRl1LrojYSgRdctHq_P3RFOBTDlDy4C9NNw=w960-h720-k-no",
    "photoLabel": "Google 地图 · 二年坂周边 · 八坂塔街景",
    "query": "二年坂",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E4%BA%8C%E5%B9%B4%E5%9D%82",
    "photoFit": "cover"
  },
  {
    "id": "sannen",
    "name": "三年坂",
    "coord": [
      34.9968,
      135.7816
    ],
    "category": "stroll",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "清水寺下山途中的传统街道，注意坡道和台阶。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Sannenzaka_street%2C_Kyoto_%283811257874%29.jpg/330px-Sannenzaka_street%2C_Kyoto_%283811257874%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Sannenzaka 参考图",
    "query": "三年坂",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Sannenzaka"
  },
  {
    "id": "yasaka",
    "name": "八坂神社",
    "coord": [
      35.00361111,
      135.77861111
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 清水寺之后的神社停留点，靠近祇园。",
    "address": "",
    "source": "https://www.yasaka-jinja.or.jp/en/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Yasaka_jinja.jpg/330px-Yasaka_jinja.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Yasaka Shrine 参考图",
    "query": "八坂神社",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Yasaka_Shrine"
  },
  {
    "id": "nishiki",
    "name": "锦市场",
    "coord": [
      35.005,
      135.7649
    ],
    "category": "food",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "京都小吃与食材市场，适合边走边尝。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Nishiki_Ichiba_by_matsuyuki.jpg/330px-Nishiki_Ichiba_by_matsuyuki.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · 锦市场参考图",
    "query": "锦市场",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Nishiki_Market"
  },
  {
    "id": "kawaramachi",
    "name": "四条河原町商业街",
    "coord": [
      35.0031,
      135.7685
    ],
    "category": "stroll",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 购物与晚餐片区，包含高岛屋、Kiddy Land、三丽鸥等店铺。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLekXNY-TkLtWD03nsDEhhCutTjxPliBE_iW4xKJ0MtF680C-Ejp3Hf4yvDNWRJ-8-6Vk-CvGKfTtfsBJRJv4WRgTwjoEfX2akuC91Nv5t37IsQcoLBssL0-MwKRoxp9VZBulH8=w960-h720-k-no",
    "photoLabel": "Google 地图 · 河原町 Garden · 商业街地标展示图",
    "query": "四条河原町商业街",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Kyoto%20Kawaramachi%20Garden",
    "photoFit": "cover"
  },
  {
    "id": "kamogawa",
    "name": "鸭川 · 四条河岸",
    "coord": [
      35.0035,
      135.7718
    ],
    "category": "stroll",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "晚餐后沿河散步；河岸散步与季节性纳凉床营业不是一回事。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Kamogawa_sakura.jpg/330px-Kamogawa_sakura.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · 鸭川 · 四条河岸参考图",
    "query": "鸭川 · 四条河岸",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Kamo_River"
  },
  {
    "id": "pontocho",
    "name": "先斗町通",
    "coord": [
      35.006,
      135.7708
    ],
    "category": "stroll",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 晚间散步的小巷，餐厅密集。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcDkw8Fh7A-L64PKzk2x43u34czfHnbO51SNnBc432PJJpOCBYG9t4-95yqXplP928Xfh8DHTOc-OrAc27ycOWg9Yuhko61MfAxwp8gixSPK4K8pal0OQeVArKzjSsCZa92vs99j83tH58C=w960-h720-k-no",
    "photoLabel": "Google 地图 · 先斗町 · 巷道实景",
    "query": "先斗町通",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Pontocho%20alley%20Kyoto",
    "photoFit": "contain"
  },
  {
    "id": "fushimi",
    "name": "伏见稻荷大社",
    "coord": [
      34.96722222,
      135.77277778
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "千本鸟居与参道步行；PDF 第6天的主要景点。",
    "address": "",
    "source": "https://inari.jp/en/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg/330px-Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Fushimi Inari-taisha 参考图",
    "query": "伏见稻荷大社",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Fushimi_Inari-taisha"
  },
  {
    "id": "uji-street",
    "name": "宇治表参道",
    "coord": [
      34.8904,
      135.8066
    ],
    "category": "stroll",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "平等院前的抹茶甜品、茶店与伴手礼街。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Byodoin_Phoenix_Hall_Uji_2009.jpg/330px-Byodoin_Phoenix_Hall_Uji_2009.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Uji 参考图",
    "query": "宇治表参道",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Uji"
  },
  {
    "id": "byodoin",
    "name": "宇治平等院",
    "coord": [
      34.8893,
      135.8077
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "以凤凰堂与庭园著称，PDF 第6天下午的参观点。",
    "address": "",
    "source": "https://www.byodoin.or.jp/en/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Phoenix_Hall%2C_Byodo-in%2C_November_2016_-01.jpg/330px-Phoenix_Hall%2C_Byodo-in%2C_November_2016_-01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · 宇治平等院参考图",
    "query": "宇治平等院",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/By%C5%8Dd%C5%8D-in"
  },
  {
    "id": "bamboo",
    "name": "岚山竹林",
    "coord": [
      35.0173,
      135.6718
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 第8天步行路线起点，竹林小径适合清早慢走。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfmGQdOeMB5k7lU-EXgRfKtijhKyHZ0NycPrqxrxC9BifT4RzeNQAMVywEKi78zzqwR05aMNJoD8tdyTcPSw_Seyiwx2lIBGVed-lgCOVvI89wnYh9_ER7RMhZdGyDDGTEqnWnXCw3IHCSz=w960-h720-k-no",
    "photoLabel": "Google 地图 · 岚山竹林 · 步道实景",
    "query": "岚山竹林",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E5%B2%9A%E5%B1%B1%20%E7%AB%B9%E6%9E%97%E5%B0%8F%E5%BE%84",
    "photoFit": "contain"
  },
  {
    "id": "tenryuji",
    "name": "天龙寺",
    "coord": [
      35.0158,
      135.6738
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "岚山寺院与庭园，可与竹林、商店街串联。",
    "address": "",
    "source": "https://www.tenryuji.com/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLd3ER91Ch-pTe_CUB-1HqoxdEQvgfmum8a_Ab_DBqEHrECeeTti7-wLFtBHx6vzzLfIS1iEHWBUkrN7QNpJcUFugYLX7Iflor0ga1bkFG2sRWbRrmkw8s0Hwy_h_P0Gwst95olf=w960-h720-k-no",
    "photoLabel": "Google 地图 · 天龙寺 · 建筑实景",
    "query": "天龙寺",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E5%A4%A9%E9%BE%99%E5%AF%BA",
    "photoFit": "cover"
  },
  {
    "id": "arashiyama-street",
    "name": "岚山商店街",
    "coord": [
      35.0144,
      135.6775
    ],
    "category": "stroll",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "岚山午餐、小吃和伴手礼聚集区。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdFdV2C2KPoumfMFXpoXS_BD9XvpKxDZXPU6x5Pg9KXFNmgmqfKv36vJKvdppscc7dukaOFu7m6Q6z8_4AVPDBFKtvBM3ENm3BSoDBirLCKC9wje1QYnX91on8esJtbDk2F7AgERg=w960-h720-k-no",
    "photoLabel": "Google 地图 · 岚山商店街 · 昇龙苑沿街实景",
    "query": "岚山商店街",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=Arashiyama%20Shoryuen%20Kyoto",
    "photoFit": "cover"
  },
  {
    "id": "yusai",
    "name": "岚山佑斋亭",
    "coord": [
      35.0114,
      135.6725
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 的染色艺术与窗景参观点；预约与开放状态以官方为准。",
    "address": "",
    "source": "https://yusai.kyoto/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLeb1v4V2ATXX_-q3hIXR9oiymgon5oanMC8yJzgL-dA79SpuO97-aHAcUIJPfPqSmMe7pMXz87fQBd5SIe0ET6PBd8V0Es8gvJO_9AHxdciCUmepK1pChBO95YamlRcx-vuJvRh=w960-h720-k-no",
    "photoLabel": "Google 地图 · 岚山佑斋亭 · 室内与庭院",
    "query": "岚山佑斋亭",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E7%A5%90%E9%BD%8B%E4%BA%AD",
    "photoFit": "cover"
  },
  {
    "id": "togetsu",
    "name": "渡月桥",
    "coord": [
      35.0095,
      135.677
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "岚山河景地标，连接两岸散步路线。",
    "address": "",
    "source": "https://kyoto.travel/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcu8tHrvt4b4nQNVqJfXtg6KVmKIqDu4VEAaZkYV8LIwz0rAyTrPi2rS9UokWh57cBEy4Z-pfOH1PhGFXq1H7xZ4-uvE-qqSgiQ62WIwe0NwnLqdWJwFs26n1OmS7-PPW3cUdIY=w960-h720-k-no",
    "photoLabel": "Google 地图 · 渡月桥 · 秋季实景",
    "query": "渡月桥",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E6%B8%A1%E6%9C%88%E6%A1%A5",
    "photoFit": "cover"
  },
  {
    "id": "kinkakuji",
    "name": "金阁寺",
    "coord": [
      35.0395,
      135.7285
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 岚山之后的寺院景点，金色建筑与池泉庭园。",
    "address": "",
    "source": "https://www.shokoku-ji.jp/en/kinkakuji/",
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg/330px-Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    "photoLabel": "Wikimedia · Kinkaku-ji 参考图",
    "query": "金阁寺",
    "notes": "",
    "photoSource": "https://en.wikipedia.org/wiki/Kinkaku-ji"
  },
  {
    "id": "torokko",
    "name": "岚山小火车站",
    "coord": [
      35.0178,
      135.6708
    ],
    "category": "sight",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 从龟冈乘观光小火车到这里；车票、班次需单独确认。",
    "address": "",
    "source": "https://www.sagano-kanko.co.jp/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdqtzzsfF9hPzLkX9O3ZgE11EOy_k1iOyqDGeRnv2FH3DenkrrTejCaCNlJIqyRX8pONpTer1sdJRQHkBYDhDFo4vgVpIWed7r_dFyamUA3eBMidoqipv2Zj2d-dmp88MrbAcZdADskhPU=w960-h720-k-no",
    "photoLabel": "Google 地图 · 岚山小火车站 · 站口",
    "query": "岚山小火车站",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%81%AB%E8%BD%A6%E5%B2%9A%E5%B1%B1",
    "photoFit": "cover"
  },
  {
    "id": "kameoka",
    "name": "龟冈小火车站",
    "coord": [
      35.0108,
      135.6067
    ],
    "category": "base",
    "region": "kyoto",
    "origin": "PDF",
    "days": [],
    "desc": "PDF 第8天观光小火车上车点，与 JR 马堀站步行连接。",
    "address": "",
    "source": "https://www.sagano-kanko.co.jp/en/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLe-5ZQ9q2_8Yj8om3MfltB_MKv70btodINCrktfPGBOBlUpP3IAORLQGMnKjZlS87z01v-4NJFQ45kL-FwewAne8Odrg8ZaD46f8mj24nL75soEjuTYnF-z5JfGhwMsFUKb8VjS3LTbaUDk=w960-h720-k-no",
    "photoLabel": "Google 地图 · 龟冈小火车站 · 列车与站台",
    "query": "龟冈小火车站",
    "notes": "",
    "photoSource": "https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%81%AB%E8%BD%A6%E9%BE%9F%E5%86%88",
    "photoFit": "cover"
  }
];

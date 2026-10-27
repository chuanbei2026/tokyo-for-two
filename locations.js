/* Verified addresses and visual reference pages. Reviewed 2026-10-27. */
const LOCATION_DATA = {
  "hotel": [
    "8-4-22 Ginza, Chuo-ku, Tokyo",
    "酒店正门；三晚入住同一家，地图请核对完整英文店名。",
    "https://www.celestinehotels.jp/en/ginza/access/",
    "https://www.celestinehotels.jp/en/ginza/rooms/",
    "酒店外观、客房与卫浴"
  ],
  "ginza": [
    "4-5-11 Ginza, Chuo-ku, Tokyo",
    "以 Wako／SEIKO HOUSE 钟楼为街区集合点，购物街没有单一门牌。",
    "https://www.iwc.com/us-en/boutiques/asia/japan/chuo-ku/wako-department-store-watch-square",
    "https://www.gotokyo.org/en/destinations/central-tokyo/ginza/index.html",
    "四丁目路口、钟楼与百货街景"
  ],
  "dinner1": [
    "B1 Shimbashi Kaikan, 8-6-3 Ginza, Chuo-ku, Tokyo",
    "天亭在地下1层；认准地面入口后下楼。",
    "https://ginza-tentei.jp/",
    "https://ginza-tentei.jp/",
    "店门入口、吧台和天妇罗",
    "https://ginza-tentei.jp/img/photo-gallery/24.jpg"
  ],
  "tower": [
    "4-2-8 Shibakoen, Minato-ku, Tokyo",
    "先到东京塔地面入口；本行程默认在塔下和芝公园散步。",
    "https://www.gotokyo.org/en/spot/4/index.html",
    "https://www.gotokyo.org/en/spot/4/index.html",
    "红白塔身、塔下视角与夜间灯光",
    "https://www.gotokyo.org/en/spot/4/images/main.webp"
  ],
  "sensoji": [
    "2-3-1 Asakusa, Taito-ku, Tokyo（浅草寺）",
    "导航先搜 Kaminarimon 雷门，再经仲见世走向浅草寺；寺院地址不等于雷门入口。",
    "https://www.senso-ji.jp/english/",
    "https://www.japan.travel/en/spot/1691/",
    "雷门大灯笼、仲见世与寺院本堂"
  ],
  "unagi": [
    "1-2-11 Hanakawado, Taito-ku, Tokyo",
    "认准 Asakusa Unatetsu Asakusa Ekimae Honten；不要选其他分店。",
    "https://www.hitsumabushi.com/english/",
    "https://www.hitsumabushi.com/english/",
    "鳗鱼三吃、炭火烧烤与店面"
  ],
  "sumida": [
    "Hanakawado 1-chome, Taito-ku, Tokyo（浅草侧河岸）",
    "从吾妻桥附近进入浅草侧河岸；这是步行区域定位，不是公园唯一入口。",
    "https://www.tokyotouristinfo.com/en/detail/M0418",
    "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html",
    "隅田川、桥梁与对岸晴空塔"
  ],
  "ueno": [
    "Uenokoen, Taito-ku, Tokyo（不忍池周边）",
    "地图定位 Shinobazu Pond，沿池边散步；上野公园很大，不用只搜公园中心。",
    "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/access",
    "https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html",
    "池塘、步道与上野公园环境"
  ],
  "ameyoko": [
    "6-10-7 Ueno, Taito-ku, Tokyo（商店街定位）",
    "位于上野至御徒町之间；这是街区定位，不代表每一家摊铺地址。",
    "https://www.gotokyo.org/en/spot/71/",
    "https://www.gotokyo.org/en/spot/71/",
    "商店街招牌、摊位与高架下街景",
    "https://www.gotokyo.org/en/spot/71/images/main.webp"
  ],
  "sushi": [
    "8-7-6 Ginza, Chuo-ku, Tokyo",
    "银座久兵卫本店／新馆：以预约确认单的楼栋、楼层为准。",
    "https://www.kyubey.jp/shoplist/ginza/",
    "https://www.kyubey.jp/shoplist/ginza/",
    "寿司吧台与本店室内",
    "https://www.kyubey.jp/wp-content/uploads/2025/12/ginza_slide_1_sp.jpg"
  ],
  "meiji": [
    "1-1 Yoyogikamizono-cho, Shibuya-ku, Tokyo",
    "本路线从原宿侧南参道进入，入口到主殿仍要步行。",
    "https://www.meijijingu.or.jp/en/access/",
    "https://www.japan.travel/en/spot/1666/",
    "鸟居、森林参道与神宫建筑",
    "https://res-3.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513945803/tokyo/Tokyo2331_8"
  ],
  "maisen": [
    "4-8-5 Jingumae, Shibuya-ku, Tokyo",
    "MAISEN 青山本店；表参道 A2 出口后走入支路。",
    "https://mai-sen.com/shop/shop-9960/",
    "https://mai-sen.com/shop/shop-9960/",
    "青山本店外观与用餐空间",
    "https://mai-sen.com/wp-content/uploads/2026/06/20260903123441-66bb0ea83c57da6482851cbddb309d35.webp"
  ],
  "omotesando": [
    "4-12-10 Jingumae, Shibuya-ku, Tokyo（Omotesando Hills）",
    "把 Omotesando Hills 当作街区散步定位点；不是必须购物的行程。",
    "https://www.gotokyo.org/en/spot/36/index.html",
    "https://www.gotokyo.org/en/spot/36/index.html",
    "林荫大道、建筑外立面与商业空间",
    "https://www.gotokyo.org/en/spot/36/images/main.webp"
  ],
  "crossing": [
    "2-1 Dogenzaka, Shibuya-ku, Tokyo（八公像）",
    "涩谷站八公出口外集合；十字路口就在旁边。",
    "https://www.gotokyo.org/en/spot/86/",
    "https://www.gotokyo.org/en/spot/86/",
    "八公像与站前广场",
    "https://www.gotokyo.org/en/spot/86/images/main.webp"
  ],
  "sky": [
    "Shibuya Scramble Square, 2-24-12 Shibuya, Shibuya-ku, Tokyo",
    "观景入口在14层；不是直接从街面进屋顶，按 SKY 指示乘指定电梯。",
    "https://www.gotokyo.org/en/spot/1749/index.html",
    "https://www.gotokyo.org/en/spot/1749/index.html",
    "屋顶观景平台、玻璃边缘与城市天际线",
    "https://www.gotokyo.org/en/spot/1749/images/main_gd10237.webp"
  ],
  "gonpachi": [
    "14F E.Space Tower, 3-6 Maruyamacho, Shibuya-ku, Tokyo",
    "涩谷分店在14层；不要导航到西麻布分店。",
    "https://gonpachi.jp/shibuya/",
    "https://gonpachi.jp/shibuya/",
    "餐厅空间、窗边景色与料理"
  ],
  "tsukiji": [
    "1F, 4-16-2 Tsukiji, Chuo-ku, Tokyo（Plat Tsukiji）",
    "以场外市场游客中心为定位点；这里是筑地场外市场，不是丰洲批发市场。",
    "https://www.tsukiji.or.jp/english/shoplist/cat-h/cat-h1/637/",
    "https://www.tsukiji.or.jp/english/",
    "市场街巷、海鲜摊位与小吃"
  ],
  "tokyostation": [
    "1-9-1 Marunouchi, Chiyoda-ku, Tokyo",
    "红砖外观在丸之内侧；八重洲侧主要用于另一侧出站及机场巴士。",
    "https://www.westjr.co.jp/global/en/ticket/hokuriku-arch-pass/Explore_Japan/spot/spot_sta/tokyo/index.html",
    "https://www.japan.travel/en/spot/1710/",
    "丸之内红砖站房与站前广场",
    "https://res-1.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1513936386/tokyo/Tokyo2258_24"
  ],
  "oden": [
    "1F Ginza Metro Building, 7-6-6 Ginza, Chuo-ku, Tokyo",
    "银座 Oreno 关东煮在1层；从新桥银座口步行约6分钟。",
    "https://www.oreno.co.jp/restaurant/oden_ginza",
    "https://www.oreno.co.jp/restaurant/oden_ginza",
    "关东煮、店内吧台与餐厅环境"
  ],
  "otako": [
    "2-2-3 Nihonbashi, Chuo-ku, Tokyo",
    "日本桥多幸本店，不是银座同名店；两位按当天席规则前往。",
    "https://www.enjoytokyo.jp/spot/g_a439400/",
    "https://www.nihonbashi-tokyo.jp/restaurants/gourmet-201505/",
    "招牌豆腐盖饭、关东煮与店内座位"
  ],
  "afuri": [
    "1F Grandeforesta, 3-63-1 Sendagaya, Shibuya-ku, Tokyo",
    "AFURI 原宿店；店名叫原宿，街道地址属于 Sendagaya。",
    "https://afuri.com/findus/",
    "https://afuri.com/findus/",
    "原宿门店外观；官网还有其他分店，请认准原宿",
    "https://afuri.com/img/shop/photo06.jpg"
  ],
  "ukai": [
    "B1 Jewel Box Ginza, 8-9-15 Ginza, Chuo-ku, Tokyo",
    "UKAI NIKUSHO 位于地下1层；不是银座 UKAI-TEI 铁板烧店。",
    "https://www.ukai.co.jp/english/ginzakappou/",
    "https://www.ukai.co.jp/english/ginzakappou/",
    "料理、吧台与室内设计"
  ],
  "mitsui": [
    "8-13-1 Ginza, Chuo-ku, Tokyo",
    "认准 Ginza PREMIER 分店；与其他银座三井花园酒店区分。",
    "https://www.gardenhotels.co.jp/ginza-premier/eng/",
    "https://www.gardenhotels.co.jp/ginza-premier/eng/",
    "高层大堂、客房与窗外城市景观"
  ],
  "imperial": [
    "1-1-1 Uchisaiwaicho, Chiyoda-ku, Tokyo",
    "按预订确认单找入口；入住楼栋与工程情况出发前复核。",
    "https://www.imperialhotel.co.jp/en/tokyo",
    "https://www.imperialhotel.co.jp/en/tokyo",
    "酒店大堂、客房与餐饮空间"
  ]
};
for(const [id,values] of Object.entries(LOCATION_DATA)){const [address,arrival,source,gallery,scenery,photo]=values;LOCATION_DATA[id]={address,arrival,source,gallery,scenery,photo};}
for(const [id,p] of Object.entries(PLACES)){if(LOCATION_DATA[id])p.location=LOCATION_DATA[id];}
const RESTAURANT_LOCATIONS={'oreno-oden':'oden','otako-nihonbashi':'otako',kyubey:'sushi',unatetsu:'unagi',maisen:'maisen',afuri:'afuri',gonpachi:'gonpachi',tentei:'dinner1',ukai:'ukai'};
for(const r of RESTAURANTS)r.location=LOCATION_DATA[RESTAURANT_LOCATIONS[r.id]];
HOTELS.forEach((h,i)=>h.location=LOCATION_DATA[['hotel','mitsui','imperial'][i]]);

LOCATION_DATA.sensoji.photo="https://res-4.cloudinary.com/jnto/image/upload/w_1000,h_667,c_fill,f_auto,fl_lossy,q_auto/v1675339920/tokyo/Tokyo_s_id19_18";
LOCATION_DATA.sensoji.gallery="https://www.japan.travel/en/spot/1691/";
LOCATION_DATA.ginza.photo="https://www.gotokyo.org/en/destinations/central-tokyo/ginza/images/main.webp";
LOCATION_DATA.ginza.gallery="https://www.gotokyo.org/en/destinations/central-tokyo/ginza/index.html";
LOCATION_DATA.ueno.photo="https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/images/main.webp";
LOCATION_DATA.ueno.gallery="https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html";
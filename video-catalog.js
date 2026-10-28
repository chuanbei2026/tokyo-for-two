/* Video wishlist candidates. Existing IDs and votes are preserved. */
const WISHLIST_VIDEO_SOURCES={
  "1": {
    "label": "视频① 东京热门景点",
    "url": "https://www.bilibili.com/video/BV1DfZDYmEEi/"
  },
  "2": {
    "label": "视频② 新手东京攻略",
    "url": "https://www.bilibili.com/video/BV1VH4meEEnt/"
  }
};
const VIDEO_CATALOG=[
  {
    "id": "video-narita",
    "name": "成田机场",
    "originalName": "Narita International Airport",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "base",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.770178,
      140.3843215
    ],
    "desc": "视频中的入境机场候选。离东京市区较远，航班确定后再选择列车与酒店衔接。",
    "address": "1-1 Furugome, Narita, Chiba 282-0004日本 ",
    "query": "Narita International Airport",
    "mapUrl": "https://www.google.com/maps/place/%E6%88%90%E7%94%B0%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA/@35.769769,140.387566,15z/data=!3m1!4b1!4m6!3m5!1s0x6022f379d1bd3757:0xd56e29a162771aa1!8m2!3d35.770178!4d140.3843215!16zL20vMDFsazZo?ved=1t%3A314688",
    "source": "https://www.narita-airport.jp/jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcfnhde_7Cn3rM1H7UuW3fT67LPVoses6Y_niwrhaNVRClGDng1g1-flFte3Wr04AhrfZCNziHsl6fFwFlKPIK0if9IUfM51nVFq5kxuAnlrjdoZhzrqpn_JnVrEX_crKVV9GjFej8XY8ls=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E6%88%90%E7%94%B0%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA/@35.769769,140.387566,15z/data=!3m1!4b1!4m6!3m5!1s0x6022f379d1bd3757:0xd56e29a162771aa1!8m2!3d35.770178!4d140.3843215!16zL20vMDFsazZo?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-haneda",
    "name": "羽田机场",
    "originalName": "Haneda Airport",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "base",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.5482964,
      139.7779951
    ],
    "desc": "视频中的另一座机场，作为航班与交通对照，不是观光景点。",
    "address": "Hanedakuko, Ota City, Tokyo 144-0041日本 ",
    "query": "Haneda Airport",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA/@35.5476839,139.7787882,15z/data=!3m1!4b1!4m6!3m5!1s0x6018640ba43192e3:0xd32c3a9d146f8df!8m2!3d35.5482964!4d139.7779951!16zL20vMDFubG1t?ved=1t%3A314688",
    "source": "https://tokyo-haneda.com/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcJTpBWETSzcDyVO8u0oDg8z3mdZqrGLgzSW9DoFcfcGEGMCm0G_nm7kjGnJYOhrk8Kv7fED-iSDfIrAruQIfQwmVPEnAB0Gl4LqU0bzrRBmSJMHEYHqF33b9i0Bw4a91XEYWzGyAw2pSM=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA/@35.5476839,139.7787882,15z/data=!3m1!4b1!4m6!3m5!1s0x6018640ba43192e3:0xd32c3a9d146f8df!8m2!3d35.5482964!4d139.7779951!16zL20vMDFubG1t?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-disney",
    "name": "东京迪士尼度假区",
    "originalName": "Tokyo Disney Resort",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6306579,
      139.8828695
    ],
    "desc": "包含迪士尼乐园与迪士尼海洋；这是度假区候选，决定去之后再选择园区和门票。不要默认落地当天一定能玩得从容。",
    "address": "1-1 Maihama, Urayasu, Chiba 279-0031日本 ",
    "query": "Tokyo Disney Resort",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%BA%A6%E5%81%87%E5%8C%BA/@35.6306579,139.8828695,17z/data=!3m1!4b1!4m6!3m5!1s0x60187d19d0d3a2cd:0xda29db8ad489735f!8m2!3d35.6306579!4d139.8828695!16zL20vMDEwNDIz?ved=1t%3A314688",
    "source": "https://www.tokyodisneyresort.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdrysVFY490mtVUpmvdcw6l78fUhw2VqISOHcbDtRr6C5RMR4r7-uqetJQhYKE14qoZQ5jiBxlQLIkpN7gXnoKKH18iFp1zwzuZtKSAN1_Opvpd07z0KBugpWBFT0dHxdaWD0_urkJPY43M=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%BA%A6%E5%81%87%E5%8C%BA/@35.6306579,139.8828695,17z/data=!3m1!4b1!4m6!3m5!1s0x60187d19d0d3a2cd:0xda29db8ad489735f!8m2!3d35.6306579!4d139.8828695!16zL20vMDEwNDIz?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-skytree",
    "name": "东京晴空塔",
    "originalName": "Tokyo Skytree",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7100627,
      139.8107004
    ],
    "desc": "浅草附近的高空观景候选。与涩谷 SKY、东京都厅相比选一个重点即可，避免观景台重复。",
    "address": "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045日本 ",
    "query": "Tokyo Skytree",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E5%A4%A9%E7%A9%BA%E6%A0%91/@35.7100627,139.8107004,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ed0d12f9adf:0x7d1d4fb31f43f72a!8m2!3d35.7100627!4d139.8107004!16zL20vMDd0aGty?ved=1t%3A314688",
    "source": "https://www.tokyo-skytree.jp/?utm_source=google&utm_medium=maps",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdEWb4kgo8JhbCB-rbyR0B8wrada5uoCFUl5mwe9xHhI-eqOOVYEZghc-5dsFZp_X7vgPk39x08N-Zy356ay3wTzRI06-T8Hq0QTVsUZB5GPz98sGzP7M8J6voNuklQUUUW5kVRwg=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E5%A4%A9%E7%A9%BA%E6%A0%91/@35.7100627,139.8107004,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ed0d12f9adf:0x7d1d4fb31f43f72a!8m2!3d35.7100627!4d139.8107004!16zL20vMDd0aGty?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1,
      2
    ],
    "notes": ""
  },
  {
    "id": "video-ueno-zoo",
    "name": "上野动物园",
    "originalName": "Ueno Zoo",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7164476,
      139.7725826
    ],
    "desc": "上野公园内的动物园。视频中的动物展示情况属于拍摄时信息，具体展区、动物与预约规则以官网为准。",
    "address": "9-83 Uenokoen, Taito City, Tokyo 110-8711日本 ",
    "query": "Ueno Zoo",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%8A%E9%87%8E%E5%8A%A8%E7%89%A9%E5%9B%AD/@35.7164476,139.7725826,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c28f7766d7f:0x76b8b5efa1988ef4!8m2!3d35.7164476!4d139.7725826!16zL20vMDN6Zm5t?ved=1t%3A314688",
    "source": "https://www.tokyo-zoo.net/ueno/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLebbC4nqRg775YgKzfIh_-4qmOmgfBDvi3H1Gk8HQfTyNzbepe1vFxSIJ94L_tQEiJe87ExciC5pGexMsb6h5f0PrJNE2djbKcPIXTJgp9AwtbZmad4tmy1qerNz0A6U6RqG3UjaVhcPNY=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%8A%E9%87%8E%E5%8A%A8%E7%89%A9%E5%9B%AD/@35.7164476,139.7725826,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c28f7766d7f:0x76b8b5efa1988ef4!8m2!3d35.7164476!4d139.7725826!16zL20vMDN6Zm5t?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1,
      2
    ],
    "notes": ""
  },
  {
    "id": "video-western-art",
    "name": "国立西洋美术馆",
    "originalName": "National Museum of Western Art Tokyo",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7153869,
      139.7758138
    ],
    "desc": "第一条视频上野段提到的美术馆。适合对绘画、雕塑感兴趣，或需要一个室内雨天安排的你们。",
    "address": "7-7 Uenokoen, Taito City, Tokyo 110-0007日本 ",
    "query": "National Museum of Western Art Tokyo",
    "mapUrl": "https://www.google.com/maps/place/%E5%9B%BD%E7%AB%8B%E8%A5%BF%E6%B4%8B%E7%BE%8E%E6%9C%AF%E9%A6%86/@35.7153869,139.7758138,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e9cfa41cc7f:0xbb23dcd494e13c8b!8m2!3d35.7153869!4d139.7758138!16s%2Fm%2F026r6hv?ved=1t%3A314688",
    "source": "https://www.nmwa.go.jp/jp/?utm_source=google&utm_medium=map",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcOTTbgfaRJhVPSd03u4gyPlO4anTfH4OOw9h7vdeTIJmHq7leAP_P59WzXXok42JFKIz5i346r9ozIXvNP5gQXx4PGys5cjg-fatckMhoGg3dCH9N8-ekxkou4ABQ1ESuilomfQko3q34=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E5%9B%BD%E7%AB%8B%E8%A5%BF%E6%B4%8B%E7%BE%8E%E6%9C%AF%E9%A6%86/@35.7153869,139.7758138,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e9cfa41cc7f:0xbb23dcd494e13c8b!8m2!3d35.7153869!4d139.7758138!16s%2Fm%2F026r6hv?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-ueno-museums",
    "name": "东京国立博物馆｜上野博物馆群",
    "originalName": "Tokyo National Museum",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7188351,
      139.7765215
    ],
    "desc": "视频提到上野的博物馆群，这张卡用东京国立博物馆作为具体参观候选；不要把所有馆当成同一个门票和入口。",
    "address": "13-9 Uenokoen, Taito City, Tokyo 110-8712日本 ",
    "query": "Tokyo National Museum",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E5%9B%BD%E7%AB%8B%E5%8D%9A%E7%89%A9%E9%A6%86/@35.7188351,139.7765215,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e8314d77d11:0x232fd618bd4977dd!8m2!3d35.7188351!4d139.7765215!16zL20vMDVzazVn?ved=1t%3A314688",
    "source": "https://www.tnm.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLc_zFqrSnOYFkQPDxD_IZOeQAIzsrVpXnnsiJdbe0F9hAYwLgdxe9tdEuEHHxvLm6Nt6Tie_CPAF0d7AixKCqOICKbCLnGxxFbw8N0utLv12sIw9Q_U2RH-bUJXiAlEWTMBwVae=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E5%9B%BD%E7%AB%8B%E5%8D%9A%E7%89%A9%E9%A6%86/@35.7188351,139.7765215,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e8314d77d11:0x232fd618bd4977dd!8m2!3d35.7188351!4d139.7765215!16zL20vMDVzazVn?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-utokyo",
    "name": "东京大学｜本乡校区",
    "originalName": "University of Tokyo Hongo Campus",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.711247,
      139.7631714
    ],
    "desc": "看看大学建筑与校园氛围。只参观对公众开放区域，校门和活动期间的访客规定出发前核实。",
    "address": "7 Chome-3-1 Hongo, Bunkyo City, Tokyo 113-8654日本 ",
    "query": "University of Tokyo Hongo Campus",
    "mapUrl": "https://www.google.com/maps/place/Hongo+Campus,+The+University+of+Tokyo/@35.711247,139.7586653,17z/data=!4m10!1m2!2m1!1sUniversity+of+Tokyo+Hongo+Campus!3m6!1s0x60188d004771c4ed:0x4c30a28fb45abae9!8m2!3d35.711247!4d139.7631714!15sCiBVbml2ZXJzaXR5IG9mIFRva3lvIEhvbmdvIENhbXB1c1oiIiB1bml2ZXJzaXR5IG9mIHRva3lvIGhvbmdvIGNhbXB1c5IBCnVuaXZlcnNpdHmaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnBGTkU0elZsUlZSMnhVVjBoYVdXVkdiRFZWYW1oM1ZFVmtaazR5WXhBQuABAPoBBAgAEAw!16s%2Fg%2F11ldw58y4r?ved=1t%3A314688",
    "source": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/map01_02.html",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcSyjgrzDwZkx2a3_QAcesaN7e_Ikj7qCLZMeT4CudNY_XLrbyGJB5KchyClduoydsVqjtOe_tK0Kda_g4YsqAHizmcH7bfGMsV2Gx2_fJkDKvUEtTRvcbphv0kz9MfGUvLhbdvi2b7SILb=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Hongo+Campus,+The+University+of+Tokyo/@35.711247,139.7586653,17z/data=!4m10!1m2!2m1!1sUniversity+of+Tokyo+Hongo+Campus!3m6!1s0x60188d004771c4ed:0x4c30a28fb45abae9!8m2!3d35.711247!4d139.7631714!15sCiBVbml2ZXJzaXR5IG9mIFRva3lvIEhvbmdvIENhbXB1c1oiIiB1bml2ZXJzaXR5IG9mIHRva3lvIGhvbmdvIGNhbXB1c5IBCnVuaXZlcnNpdHmaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnBGTkU0elZsUlZSMnhVVjBoYVdXVkdiRFZWYW1oM1ZFVmtaazR5WXhBQuABAPoBBAgAEAw!16s%2Fg%2F11ldw58y4r?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-jimbocho",
    "name": "神保町旧书街",
    "originalName": "Jimbocho Book Town",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6958463,
      139.7572397
    ],
    "desc": "旧书、画册、咖啡与咖喱组成的一片慢逛街区。适合把午餐和散步放在一起，不懂日文也可以看摄影与设计书。",
    "address": "2 Chome-20-26 Kanda Jinbocho, Chiyoda City, Tokyo 101-0051日本 ",
    "query": "Jimbocho Book Town",
    "mapUrl": "https://www.google.com/maps/place/Jimbocho+Book+Town/@35.6958463,139.7561132,19z/data=!3m1!5s0x60188c13de2ca507:0xf112e179fc61592b!4m10!1m2!2m1!1sJimbocho+Book+Town!3m6!1s0x60188dce2211f995:0xe22eeafa479cd390!8m2!3d35.6958463!4d139.7572397!15sChJKaW1ib2NobyBCb29rIFRvd25aFCISamltYm9jaG8gYm9vayB0b3dukgEKYm9va19zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVSUmEzUjFPRlJuRUFF4AEA-gEECAAQTA!16s%2Fg%2F11s0zn38vx?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/Jimbocho+Book+Town/@35.6958463,139.7561132,19z/data=!3m1!5s0x60188c13de2ca507:0xf112e179fc61592b!4m10!1m2!2m1!1sJimbocho+Book+Town!3m6!1s0x60188dce2211f995:0xe22eeafa479cd390!8m2!3d35.6958463!4d139.7572397!15sChJKaW1ib2NobyBCb29rIFRvd25aFCISamltYm9jaG8gYm9vayB0b3dukgEKYm9va19zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVSUmEzUjFPRlJuRUFF4AEA-gEECAAQTA!16s%2Fg%2F11s0zn38vx?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcLKELLJIlbsm4FEct9Fx9eWA4H911gnBcw0E2cfBXGQTf66UnpPU6XOeIKYWzaLu1FqBM-kwts8-Fpk6NdrZLyjVuc3Zb06r3WGy8cIg8LTYPnooltwcbY7vqFU-zSkltUpGfjPlm7iyo=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Jimbocho+Book+Town/@35.6958463,139.7561132,19z/data=!3m1!5s0x60188c13de2ca507:0xf112e179fc61592b!4m10!1m2!2m1!1sJimbocho+Book+Town!3m6!1s0x60188dce2211f995:0xe22eeafa479cd390!8m2!3d35.6958463!4d139.7572397!15sChJKaW1ib2NobyBCb29rIFRvd25aFCISamltYm9jaG8gYm9vayB0b3dukgEKYm9va19zdG9yZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuVFVSUmEzUjFPRlJuRUFF4AEA-gEECAAQTA!16s%2Fg%2F11s0zn38vx?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-toyosu-market",
    "name": "丰洲市场",
    "originalName": "Toyosu Market",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "food",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6440911,
      139.784281
    ],
    "desc": "视频里的海鲜市场候选。餐饮区与批发参观动线不同，是否看拍卖、休市日期和用餐营业时间要分别确认。",
    "address": "6 Chome-6-1 Toyosu, Koto City, Tokyo 135-0061日本 ",
    "query": "Toyosu Market",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%B0%E6%B4%B2%E5%B8%82%E5%9C%BA/@35.6440911,139.784281,17z/data=!3m1!4b1!4m6!3m5!1s0x601889f8cfbb8f5b:0xd6bfad0e525033dc!8m2!3d35.6440911!4d139.784281!16s%2Fg%2F121slj0m?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "source": "https://www.toyosu-market.or.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcFcWFpPBDy_FbRwsIVn4w7fADHzL_w9rrDvpRoEsxAJLYv97XgMmwD9q6zWtx22DRtRS9eBo3CvK_BiU9FvBLQ7t3ZnxVfvz9lTkIqvFlyTmMVl6YYXTaw3aGAgX1_N9LHfcNZ=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%B0%E6%B4%B2%E5%B8%82%E5%9C%BA/@35.6440911,139.784281,17z/data=!3m1!4b1!4m6!3m5!1s0x601889f8cfbb8f5b:0xd6bfad0e525033dc!8m2!3d35.6440911!4d139.784281!16s%2Fg%2F121slj0m?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-teamlab-planets",
    "name": "teamLab Planets｜丰洲互动艺术",
    "originalName": "teamLab Planets Tokyo",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6491207,
      139.7897739
    ],
    "desc": "光影、空间与身体参与的互动艺术体验，部分区域需赤脚涉水。按官网时段购票，穿着与身体条件也要一起考虑。",
    "address": "6 Chome-1-16 Toyosu, Koto City, Tokyo 135-0061日本 ",
    "query": "teamLab Planets Tokyo",
    "mapUrl": "https://www.google.com/maps/place/teamLab+Planets+TOKYO+DMM/@35.6491207,139.7897739,17z/data=!3m1!4b1!4m6!3m5!1s0x60188908e728e749:0x6de450c94bd3d622!8m2!3d35.6491207!4d139.7897739!16s%2Fg%2F11ghxr0p5m?ved=1t%3A314688",
    "source": "https://www.teamlab.art/jp/e/planets/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfX-MU76d69WgK6NY_tlbT3h6TlZMbHRihQNsC5z7yldpD8X8a_XuGr8hxLOWA1pf8PYDiwu--fXdM87YzfZOhXFUKDMgMr3N9bsbABxhegdKilZqSZDwgUa48SNP-HyJH1V8nyIg=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/teamLab+Planets+TOKYO+DMM/@35.6491207,139.7897739,17z/data=!3m1!4b1!4m6!3m5!1s0x60188908e728e749:0x6de450c94bd3d622!8m2!3d35.6491207!4d139.7897739!16s%2Fg%2F11ghxr0p5m?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-odaiba",
    "name": "台场海滨公园",
    "originalName": "Odaiba Seaside Park",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6300488,
      139.7756912
    ],
    "desc": "沿东京湾散步、看海岸与彩虹桥城市景色，和目前的老街行程形成很不一样的体验。",
    "address": "1 Chome-4-4 Daiba, Minato City, Tokyo 135-0091日本 ",
    "query": "Odaiba Seaside Park",
    "mapUrl": "https://www.google.com/maps/place/%E5%8F%B0%E5%9C%BA%E6%B5%B7%E6%BB%A8%E5%85%AC%E5%9B%AD/@35.6300488,139.7756912,17z/data=!3m1!4b1!4m6!3m5!1s0x60188a1deb0ac2d7:0x7dd3beb4c8363729!8m2!3d35.6300488!4d139.7756912!16s%2Fm%2F0nbhtld?ved=1t%3A314688",
    "source": "http://www.tptc.co.jp/park/01_02",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdoDiBKu44-50PT6fEYhT_Fv5_0Yp5XIRdz0d6bC9AX8yM13KeYnwg7TubVxkUmfC6JsvcDSOha4gRZZ9unhtZtQNOz4LAmY6EXsCGEvtpnTe9x7-OvLyd8kHXIajFC9d5GNAZB=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E5%8F%B0%E5%9C%BA%E6%B5%B7%E6%BB%A8%E5%85%AC%E5%9B%AD/@35.6300488,139.7756912,17z/data=!3m1!4b1!4m6!3m5!1s0x60188a1deb0ac2d7:0x7dd3beb4c8363729!8m2!3d35.6300488!4d139.7756912!16s%2Fm%2F0nbhtld?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-liberty",
    "name": "台场自由女神像",
    "originalName": "Statue of Liberty Odaiba",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6278727,
      139.7718346
    ],
    "desc": "台场海边的自由女神像地标，适合与海滨公园一起短暂停留，不必单独跑一趟。",
    "address": "1 Chome-4-2 Daiba, Minato City, Tokyo 135-0091日本 ",
    "query": "Statue of Liberty Odaiba",
    "mapUrl": "https://www.google.com/maps/place/%E8%87%AA%E7%94%B1%E5%A5%B3%E7%A5%9E%E5%83%8F/@35.6278727,139.7718346,17z/data=!3m1!4b1!4m6!3m5!1s0x60188be32451f7a7:0xbc7e67300e8691a3!8m2!3d35.6278727!4d139.7718346!16s%2Fg%2F11r8wpcq09?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/%E8%87%AA%E7%94%B1%E5%A5%B3%E7%A5%9E%E5%83%8F/@35.6278727,139.7718346,17z/data=!3m1!4b1!4m6!3m5!1s0x60188be32451f7a7:0xbc7e67300e8691a3!8m2!3d35.6278727!4d139.7718346!16s%2Fg%2F11r8wpcq09?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdLqQUncFlW8DMKaIXEFDdEEF45FfMV99IrVQEgdClfB4nh55Y_QtBSuSD3hQttHvcFPiZNb3zp220kSAMvalSMimswUVJFPZ0I6B3J0FR7xcQLfGILOrF6eBnmcK6EJAAouCnt=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E8%87%AA%E7%94%B1%E5%A5%B3%E7%A5%9E%E5%83%8F/@35.6278727,139.7718346,17z/data=!3m1!4b1!4m6!3m5!1s0x60188be32451f7a7:0xbc7e67300e8691a3!8m2!3d35.6278727!4d139.7718346!16s%2Fg%2F11r8wpcq09?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-divercity",
    "name": "DiverCity Tokyo Plaza｜台场商场",
    "originalName": "DiverCity Tokyo Plaza",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6247851,
      139.7758551
    ],
    "desc": "视频里的台场购物中心。独角兽高达立像已于 2026 年 8 月 31 日结束展示；图片含历史立像，不能代表十一月现场。商场开放情况请另查官网。",
    "address": "1 Chome-1-10 Aomi, Koto City, Tokyo 135-0064日本 ",
    "query": "DiverCity Tokyo Plaza",
    "mapUrl": "https://www.google.com/maps/place/DiverCity+Tokyo+Plaza/@35.6247851,139.7758551,17z/data=!3m1!4b1!4m6!3m5!1s0x601889f9d36ebaa5:0x67f4219bfa09db77!8m2!3d35.6247851!4d139.7758551!16s%2Fg%2F1hbpwy50x?ved=1t%3A314688",
    "source": "https://mitsui-shopping-park.com/divercity-tokyo/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdj5W0mwvAru_VNKoAsuIKEQCDGgRxqiDrI4_NV7wD4dKG5Zn3TtT0soBis8h08JoAo6Ys5ZzxR_y754ujBwRegjSjSQZPVt29T2Zq4cHXF_dr1-12o3JjOh8Ty3HY3RAap456uqg=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/DiverCity+Tokyo+Plaza/@35.6247851,139.7758551,17z/data=!3m1!4b1!4m6!3m5!1s0x601889f9d36ebaa5:0x67f4219bfa09db77!8m2!3d35.6247851!4d139.7758551!16s%2Fg%2F1hbpwy50x?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": "独角兽高达立像官网公告：展示已于 2026 年 8 月 31 日结束。请勿按旧视频期待现场立像；商场开放情况单独查看官网。"
  },
  {
    "id": "video-miraikan",
    "name": "日本科学未来馆",
    "originalName": "Miraikan Tokyo",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6193359,
      139.7763995
    ],
    "desc": "科学、技术和未来生活主题的互动展馆，成年人也能逛；喜欢动手体验或科学内容时值得单独留时间。",
    "address": "2 Chome-3-6 Aomi, Koto City, Tokyo 135-0064日本 ",
    "query": "Miraikan Tokyo",
    "mapUrl": "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E7%A7%91%E5%AD%A6%E6%9C%AA%E6%9D%A5%E9%A6%86/@35.6193359,139.7763995,17z/data=!3m1!4b1!4m6!3m5!1s0x601889fef478fdcf:0xf6b165739f8c89a0!8m2!3d35.6193359!4d139.7763995!16s%2Fm%2F02plzvg?ved=1t%3A314688",
    "source": "https://www.miraikan.jst.go.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcg_Rv_Zpsjo3IoDM_U973tPJAMJaQU3UG0MZujTSOowyVx9UjxbYbvyc-9q4rJAYKNN4s1lkp00raDz_Hmy-C8u23qzKd_7rXKrROeP_0L7-9MDEEKAOG3Ji3PCnHnOcRk2E5PKg=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E7%A7%91%E5%AD%A6%E6%9C%AA%E6%9D%A5%E9%A6%86/@35.6193359,139.7763995,17z/data=!3m1!4b1!4m6!3m5!1s0x601889fef478fdcf:0xf6b165739f8c89a0!8m2!3d35.6193359!4d139.7763995!16s%2Fm%2F02plzvg?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-zojoji",
    "name": "增上寺｜东京塔同框",
    "originalName": "Zojoji Temple",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.657479,
      139.7482928
    ],
    "desc": "寺院屋顶与东京塔构成经典的新旧东京同框画面，可直接和东京塔串联。",
    "address": "4 Chome-7-35 Shibakoen, Minato City, Tokyo 105-0011日本 ",
    "query": "Zojoji Temple",
    "mapUrl": "https://www.google.com/maps/place/%E5%A2%9E%E4%B8%8A%E5%AF%BA/@35.657479,139.7482928,17z/data=!3m1!4b1!4m6!3m5!1s0x60188bbe91676c0b:0x88a4a86ddb1dbd24!8m2!3d35.657479!4d139.7482928!16zL20vMDQ1Z3h6?ved=1t%3A314688",
    "source": "https://www.zojoji.or.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLeE49qLKaGRiI2VAGQwC7-FzgUc9ydwteAFeDEiWqBjP73US6WoT6j7c8ks9F8myRHIS7zWvTcopAy32ra92hbYKDAQR_MR-siEpxJTfQsGrao9p6d1xYjiZCxukCGG6zkNYcI4cl_Tt-TD=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E5%A2%9E%E4%B8%8A%E5%AF%BA/@35.657479,139.7482928,17z/data=!3m1!4b1!4m6!3m5!1s0x60188bbe91676c0b:0x88a4a86ddb1dbd24!8m2!3d35.657479!4d139.7482928!16zL20vMDQ1Z3h6?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-roppongi-view",
    "name": "六本木之丘 Tokyo City View",
    "originalName": "Tokyo City View Roppongi Hills",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6600712,
      139.7292907
    ],
    "desc": "从六本木看城市与东京塔的观景候选。室内展望与屋顶设施开放情况不同，不按旧视频默认都能进入。",
    "address": "日本〒106-0032 Tokyo, Minato City, Roppongi, 6 Chome−10−1 Roppongi Hills Mori Tower, 52階 ",
    "query": "Tokyo City View Roppongi Hills",
    "mapUrl": "https://www.google.com/maps/place/%E5%85%AD%E6%9C%AC%E6%9C%A8%E6%96%B0%E5%9F%8E%E5%B1%95%E6%9C%9B%E5%8F%B0%EF%BC%88%E4%B8%9C%E4%BA%AC%E5%9F%8E%E5%B8%82%E6%99%AF%E8%A7%82%EF%BC%89/@35.6600712,139.7292907,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b770edd442b:0x667ab47030771257!8m2!3d35.6600712!4d139.7292907!16s%2Fg%2F11bccll_jd?ved=1t%3A314688",
    "source": "https://tcv.roppongihills.com/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfL5rGNg3PEtcfqMDRoP1I_ecN4iOxZ3pazcPWnPx_4n_rA6ClI-t4pTM567Hqlhx3Lws7R5k0NjzDdZiI24PoYtHsFLou35DZzXFLuVZVKu9qVTTkpwTHdEWgpRvSGcAFzcey3aDXvU_Q=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E5%85%AD%E6%9C%AC%E6%9C%A8%E6%96%B0%E5%9F%8E%E5%B1%95%E6%9C%9B%E5%8F%B0%EF%BC%88%E4%B8%9C%E4%BA%AC%E5%9F%8E%E5%B8%82%E6%99%AF%E8%A7%82%EF%BC%89/@35.6600712,139.7292907,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b770edd442b:0x667ab47030771257!8m2!3d35.6600712!4d139.7292907!16s%2Fg%2F11bccll_jd?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-takeshita",
    "name": "原宿竹下通",
    "originalName": "Takeshita Street",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6710335,
      139.7051821
    ],
    "desc": "原宿的年轻潮流、甜品和小店街区，适合喜欢热闹时逛一段；可与表参道和明治神宫组合。",
    "address": "片区定位，入口请查看地图",
    "query": "Takeshita Street",
    "mapUrl": "https://www.google.com/maps/place/Takeshita+St,+1-ch%C5%8Dme+Jing%C5%ABmae,+Shibuya,+Tokyo+150-0001%E6%97%A5%E6%9C%AC/@35.6710335,139.7051821,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cbaf1de5995:0xc2becc88ea4e7eb5!8m2!3d35.6710335!4d139.7051821!16zL20vMDI5MzY2?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/Takeshita+St,+1-ch%C5%8Dme+Jing%C5%ABmae,+Shibuya,+Tokyo+150-0001%E6%97%A5%E6%9C%AC/@35.6710335,139.7051821,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cbaf1de5995:0xc2becc88ea4e7eb5!8m2!3d35.6710335!4d139.7051821!16zL20vMDI5MzY2?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfJ1bYWCtQ-_fN5h2QVOeVzn1pTi5DM2sWsWAitB7QXk1fmLKB8ILZTQj6n3wwVBmMXhj_6HTNe3QmSn0eR8B4UMSaIJm_BdmEZN8i3Eg8DqUVGTraIwctn0DntaCh7ZX17dm4DuQ=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Takeshita+St,+1-ch%C5%8Dme+Jing%C5%ABmae,+Shibuya,+Tokyo+150-0001%E6%97%A5%E6%9C%AC/@35.6710335,139.7051821,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cbaf1de5995:0xc2becc88ea4e7eb5!8m2!3d35.6710335!4d139.7051821!16zL20vMDI5MzY2?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1,
      2
    ],
    "notes": ""
  },
  {
    "id": "video-shinjuku-gyoen",
    "name": "新宿御苑",
    "originalName": "Shinjuku Gyoen National Garden",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6851763,
      139.7100517
    ],
    "desc": "庭园、池塘与草坪适合两个人慢慢走，十一月底可作为秋色候选。按常规补休规则，2026年11月24日不宜安排，仍需复核当月公告。",
    "address": "11 Naitomachi, Shinjuku City, Tokyo 160-0014日本 ",
    "query": "Shinjuku Gyoen National Garden",
    "mapUrl": "https://www.google.com/maps/place/%E6%96%B0%E5%AE%BF%E5%BE%A1%E8%8B%91/@35.6851763,139.7100517,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cc21b93233f:0x6a1eb1b5a117f287!8m2!3d35.6851763!4d139.7100517!16zL20vMDdkM24x?ved=1t%3A314688",
    "source": "https://www.env.go.jp/garden/shinjukugyoen/index.html",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdbklIakUFGOzDFcYXy1gkaI29XycXndFHAOtXvgKGh0uR1frZjSJw_JfACibh3vQn9I0MgSMM-h6dzKsxTbOgbmzO09pDCbwPYb-8zsAmWlI3EE6kXJMFvjpwfYz661viKSa5jcrpvQI8m=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E6%96%B0%E5%AE%BF%E5%BE%A1%E8%8B%91/@35.6851763,139.7100517,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cc21b93233f:0x6a1eb1b5a117f287!8m2!3d35.6851763!4d139.7100517!16zL20vMDdkM24x?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1,
      2
    ],
    "notes": ""
  },
  {
    "id": "video-tokyo-metropolitan",
    "name": "东京都厅展望室",
    "originalName": "Tokyo Metropolitan Government Building Observatories",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.689733,
      139.6916563
    ],
    "desc": "新宿的免费高空观景候选。适合吃饭前后顺路去，开放的南北展望室与休室日期以官网为准。",
    "address": "日本〒163-8001 Tokyo, Shinjuku City, Nishishinjuku, 2 Chome−8−1 Tochomae Station, 45F ",
    "query": "Tokyo Metropolitan Government Building Observatories",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E9%83%BD%E5%8E%85%E8%A7%82%E6%99%AF%E5%8F%B0/@35.689733,139.6916563,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cd4c86bcb9d:0xe5b1c573920cfe2e!8m2!3d35.689733!4d139.6916563!16s%2Fg%2F1tgz5gx6?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "source": "https://www.zaimu.metro.tokyo.lg.jp/tochousha/goannai/tenbou",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfl7gwdJRpGxFGCndmaLnd2oOjLLv_GGHSyvz0bbByLQCxzgq3yhdeGzWVrKKBtCpmFs7RzQsQqucPypBHfr_ros9FwbTIncUlSPmGPY4sizaFiDy5kEqrgtwLD4oYw2HK8uRPgPlISc-TH=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%9C%E4%BA%AC%E9%83%BD%E5%8E%85%E8%A7%82%E6%99%AF%E5%8F%B0/@35.689733,139.6916563,17z/data=!3m1!4b1!4m6!3m5!1s0x60188cd4c86bcb9d:0xe5b1c573920cfe2e!8m2!3d35.689733!4d139.6916563!16s%2Fg%2F1tgz5gx6?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-kabukicho",
    "name": "歌舞伎町一番街",
    "originalName": "Kabukicho Ichibangai",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6948233,
      139.701294
    ],
    "desc": "视频中的霓虹街区与红色入口牌坊，适合看城市夜景、吃饭和拍照；把它当作街区散步候选。",
    "address": "1 Chome-22-9 Kabukicho, Shinjuku City, Tokyo 160-0021日本 ",
    "query": "Kabukicho Ichibangai",
    "mapUrl": "https://www.google.com/maps/place/Kabuki-ch%C5%8D+Ichiban-gai/@35.6948233,139.701294,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d00475b10e5:0x3ebeb34053c4ae17!8m2!3d35.6948233!4d139.701294!16s%2Fg%2F11ltbf75vb?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/Kabuki-ch%C5%8D+Ichiban-gai/@35.6948233,139.701294,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d00475b10e5:0x3ebeb34053c4ae17!8m2!3d35.6948233!4d139.701294!16s%2Fg%2F11ltbf75vb?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLeYjtgc35UkcLZZqcmQv3k_PLgjRvsx_glJTAGLzfoKgA5yk_J0IRopgVJMZ5TgGDQ_RWhe7rhekNucbunGBSMAPgWLpeaLfW8j9nsNEH-qav72b7ThnrwJhkNeeRS--j5-Z0DjigUhWmnr=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Kabuki-ch%C5%8D+Ichiban-gai/@35.6948233,139.701294,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d00475b10e5:0x3ebeb34053c4ae17!8m2!3d35.6948233!4d139.701294!16s%2Fg%2F11ltbf75vb?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1,
      2
    ],
    "notes": ""
  },
  {
    "id": "video-ikebukuro",
    "name": "池袋｜动漫与城市散步",
    "originalName": "Ikebukuro Station",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7295028,
      139.7109001
    ],
    "desc": "两条视频都提到的街区。可围绕动漫周边店、乙女路与街头取景慢逛，具体小店另有独立卡片。",
    "address": "1 Chome Minamiikebukuro, Toshima City, Tokyo 171-0022日本 ",
    "query": "Ikebukuro Station",
    "mapUrl": "https://www.google.com/maps/place/%E6%B1%A0%E8%A2%8B/@35.7295028,139.7109001,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d5d4043e0dd:0x213775d25d2b034d!8m2!3d35.7295028!4d139.7109001!16zL20vMDIya3Zi?ved=1t%3A314688",
    "source": "http://www.tokyometro.jp/station/ikebukuro/index.html",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLce7InrW_57OD-M-225iDnI-QUm0qkZinaYJnu9rqNs_RZpmlRY3ZrbKZArVknjLe-0CL3ZbS95iZdxr0bUIJpzlfW9ID41iBKhBXTKlIleItnnEoACLiO1bYnyNNez0pOo9PlsA4eqL-s=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E6%B1%A0%E8%A2%8B/@35.7295028,139.7109001,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d5d4043e0dd:0x213775d25d2b034d!8m2!3d35.7295028!4d139.7109001!16zL20vMDIya3Zi?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1,
      2
    ],
    "notes": ""
  },
  {
    "id": "video-harry-potter",
    "name": "哈利波特影城｜东京制片厂之旅",
    "originalName": "Warner Bros Studio Tour Tokyo The Making of Harry Potter",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.745183,
      139.6460909
    ],
    "desc": "布景、服装、道具和电影制作体验。喜欢这个系列值得留半天；按日期时段购票，不作为随到随逛的小景点。",
    "address": "1 Chome-1-7 Kasugacho, Nerima City, Tokyo 179-0074日本 ",
    "query": "Warner Bros Studio Tour Tokyo The Making of Harry Potter",
    "mapUrl": "https://www.google.com/maps/place/The+Making+of+Harry+Potter+-+Warner+Bros.+Studio+Tour+Tokyo/@35.745183,139.6460909,17z/data=!3m1!4b1!4m6!3m5!1s0x6018edf292d73867:0x85ceba2d7e05669b!8m2!3d35.745183!4d139.6460909!16s%2Fg%2F11ssklb5dl?ved=1t%3A314688",
    "source": "https://www.wbstudiotour.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfFnutsw9wmYSsnzqptTkS7K5neP2Z487_yd8bjslGkeIiL3WUiSot9yXdJq2wr73np_SYFxcB-GCDZfCrfSRBg557ea21wq8YDBWBDWAjjHTcfVSd2wL6AEconKZUE5utU_V0h_w=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/The+Making+of+Harry+Potter+-+Warner+Bros.+Studio+Tour+Tokyo/@35.745183,139.6460909,17z/data=!3m1!4b1!4m6!3m5!1s0x6018edf292d73867:0x85ceba2d7e05669b!8m2!3d35.745183!4d139.6460909!16s%2Fg%2F11ssklb5dl?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-ghibli",
    "name": "三鹰之森吉卜力美术馆",
    "originalName": "Ghibli Museum Mitaka",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.696238,
      139.5704317
    ],
    "desc": "动画制作、展陈与馆内短片体验，适合吉卜力爱好者。需要按官方规则提前买票，可与吉祥寺组合。",
    "address": "1 Chome-1-83 Shimorenjaku, Mitaka, Tokyo 181-0013日本 ",
    "query": "Ghibli Museum Mitaka",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%89%E9%B9%B0%E4%B9%8B%E6%A3%AE%E5%90%89%E5%8D%9C%E5%8A%9B%E7%BE%8E%E6%9C%AF%E9%A6%86/@35.696238,139.5704317,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ee34e5038c2d:0x4de155903f849205!8m2!3d35.696238!4d139.5704317!16zL20vMDY5MDY0?ved=1t%3A314688",
    "source": "https://www.ghibli-museum.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLejWtrjnU99SkTfDfz7BsbOzrmp_CRSn6itzZ85Q6_PC0Q41suF83GCkRaKJQCJpUfHCy2rh06Fj-Cy-bEHl7aDt5Bka35NIjgMMncFnslEMIKjG2uI6vqLQUdMt8RxHs0GlxXcLA=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%89%E9%B9%B0%E4%B9%8B%E6%A3%AE%E5%90%89%E5%8D%9C%E5%8A%9B%E7%BE%8E%E6%9C%AF%E9%A6%86/@35.696238,139.5704317,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ee34e5038c2d:0x4de155903f849205!8m2!3d35.696238!4d139.5704317!16zL20vMDY5MDY0?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-fujiko",
    "name": "藤子·F·不二雄博物馆",
    "originalName": "Fujiko F Fujio Museum Kawasaki",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6099229,
      139.5735723
    ],
    "desc": "哆啦A梦作者的漫画原稿与创作世界，位于川崎。按预约入馆规则安排，往返交通另计。",
    "address": "2 Chome-8-1 Nagao, Tama Ward, Kawasaki, Kanagawa 214-0023日本 ",
    "query": "Fujiko F Fujio Museum Kawasaki",
    "mapUrl": "https://www.google.com/maps/place/%E8%97%A4%E5%AD%90%C2%B7F%C2%B7%E4%B8%8D%E4%BA%8C%E9%9B%84%E5%8D%9A%E7%89%A9%E9%A6%86/@35.6099229,139.5735723,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f12b615b3309:0xf707f79e8f7e3f85!8m2!3d35.6099229!4d139.5735723!16s%2Fg%2F1234t9g9?ved=1t%3A314688",
    "source": "https://fujiko-museum.com/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdx30LJkIgXmkUSynmRf0NaPfaXvUcjn8tWc_Cdr9zzG-LD-pa2hXve0QcUeo1aOryQ213K_1J0XKPdMFsItBHvAZ1XSg0xj3cPo7KOv514gWT8gouZVL_0t9omQLHgOwfzJJu5=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E8%97%A4%E5%AD%90%C2%B7F%C2%B7%E4%B8%8D%E4%BA%8C%E9%9B%84%E5%8D%9A%E7%89%A9%E9%A6%86/@35.6099229,139.5735723,17z/data=!3m1!4b1!4m6!3m5!1s0x6018f12b615b3309:0xf707f79e8f7e3f85!8m2!3d35.6099229!4d139.5735723!16s%2Fg%2F1234t9g9?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-sanrio",
    "name": "三丽鸥彩虹乐园",
    "originalName": "Sanrio Puroland",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.624512,
      139.429293
    ],
    "desc": "角色、演出与室内乐园体验。喜欢三丽鸥角色时值得专门去，具体节目与购票规则以官方当天安排为准。",
    "address": "1 Chome-31 Ochiai, Tama, Tokyo 206-8588日本 ",
    "query": "Sanrio Puroland",
    "mapUrl": "https://www.google.com/maps/place/%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%BD%A9%E8%99%B9%E4%B9%90%E5%9B%AD/@35.624512,139.429293,17z/data=!3m1!4b1!4m6!3m5!1s0x6018e34b221ad081:0xf0aaab4654086855!8m2!3d35.624512!4d139.429293!16zL20vMDkwd2I4?ved=1t%3A314688",
    "source": "https://www.puroland.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdZdF9i2vW4zT-lxQBGYqu0XXAHUWTYdBfMtWsr_R5v82bpYEx5BgWuNv4SXAChY2xIv8htcuKqWi83BN6q-QobTnvEIrmz-JY7Me8Zvo5OEG_8FvU3zH48n_HXn6J9qqfv7-Nj3Q=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%BD%A9%E8%99%B9%E4%B9%90%E5%9B%AD/@35.624512,139.429293,17z/data=!3m1!4b1!4m6!3m5!1s0x6018e34b221ad081:0xf0aaab4654086855!8m2!3d35.624512!4d139.429293!16zL20vMDkwd2I4?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-yokohama",
    "name": "横滨港未来｜海港城市散步",
    "originalName": "Minato Mirai Yokohama",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.4600798,
      139.6324577
    ],
    "desc": "视频提到的东京周边海港城市，用港未来作为具体散步起点。可与中华街搭配，属于需要另留时间的跨城候选。",
    "address": "片区定位，入口请查看地图",
    "query": "Minato Mirai Yokohama",
    "mapUrl": "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%92220-0012+%E7%A5%9E%E5%A5%88%E5%B7%9D%E5%8E%BF%E6%A8%AA%E6%BB%A8%E5%B8%82%E8%A5%BF%E5%8C%BA%E6%A8%AA%E6%BB%A8%E6%B8%AF%E6%9C%AA%E6%9D%A521/@35.4599044,139.6341458,15z/data=!3m1!4b1!4m6!3m5!1s0x60185c42f971e1ff:0x702e95bea7adb044!8m2!3d35.4600798!4d139.6324577!16zL20vMDI5emM4?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%92220-0012+%E7%A5%9E%E5%A5%88%E5%B7%9D%E5%8E%BF%E6%A8%AA%E6%BB%A8%E5%B8%82%E8%A5%BF%E5%8C%BA%E6%A8%AA%E6%BB%A8%E6%B8%AF%E6%9C%AA%E6%9D%A521/@35.4599044,139.6341458,15z/data=!3m1!4b1!4m6!3m5!1s0x60185c42f971e1ff:0x702e95bea7adb044!8m2!3d35.4600798!4d139.6324577!16zL20vMDI5emM4?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLelCuzZZRyZG2d7J914Voheq17cmuTxl8d9cNXF6hvltOtCxMJuYzPDOFewGt8XdvhiwfVjVJADfCRV-7gNI43gs-Vh5DpW3SVXV3S0089gIyJtF7OnLknz7jd9PDlq7dFJ3XCM=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%92220-0012+%E7%A5%9E%E5%A5%88%E5%B7%9D%E5%8E%BF%E6%A8%AA%E6%BB%A8%E5%B8%82%E8%A5%BF%E5%8C%BA%E6%A8%AA%E6%BB%A8%E6%B8%AF%E6%9C%AA%E6%9D%A521/@35.4599044,139.6341458,15z/data=!3m1!4b1!4m6!3m5!1s0x60185c42f971e1ff:0x702e95bea7adb044!8m2!3d35.4600798!4d139.6324577!16zL20vMDI5emM4?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-yokohama-chinatown",
    "name": "横滨中华街",
    "originalName": "Yokohama Chinatown",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "food",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.4431042,
      139.6440843
    ],
    "desc": "视频提到的横滨吃逛街区。这里是一片餐饮街，预算按一顿饭加少量小吃估算，不是一家固定餐厅。",
    "address": "Yamashitacho, Naka Ward, Yokohama, Kanagawa 231-0023日本 ",
    "query": "Yokohama Chinatown",
    "mapUrl": "https://www.google.com/maps/place/%E6%A8%AA%E6%BB%A8%E4%B8%AD%E5%8D%8E%E8%A1%97/@35.4431042,139.6440843,17z/data=!3m1!4b1!4m6!3m5!1s0x60185cef7b8bffff:0x90abf0214d828f35!8m2!3d35.4431042!4d139.6440843!16zL20vMGJoZDR5?ved=1t%3A314688",
    "source": "http://www.chinatown.or.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcixkSIT8qFqppyihWrvnmDKSmJwpTtBJfPV6vA6L81G-0CX6HqAl4WkEZgaMHQ7QWH-ibK1oIdpr18-WpVoMAnH4ugpUOtT8ay1S3vjc-Wdu5Mb0X2-IMwEKhpmkmECmOWBo4=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E6%A8%AA%E6%BB%A8%E4%B8%AD%E5%8D%8E%E8%A1%97/@35.4431042,139.6440843,17z/data=!3m1!4b1!4m6!3m5!1s0x60185cef7b8bffff:0x90abf0214d828f35!8m2!3d35.4431042!4d139.6440843!16zL20vMGJoZDR5?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-kamakura",
    "name": "镰仓｜小町通与古都散步",
    "originalName": "Komachi dori Kamakura",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.3216554,
      139.5524551
    ],
    "desc": "视频中的镰仓地区候选，以镰仓站附近小町通作为地图起点；大佛与海边车站另有独立卡片。",
    "address": "Komachi St, 2 Chome-8-8 Komachi, Kamakura, Kanagawa 248-0006日本 ",
    "query": "Komachi dori Kamakura",
    "mapUrl": "https://www.google.com/maps/place/KOMACHI+STREET/@35.3216554,139.5524551,17z/data=!3m1!4b1!4m6!3m5!1s0x6018450020202bed:0x517deabdfa776d46!8m2!3d35.3216554!4d139.5524551!16s%2Fg%2F11mdgvy7r1?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/KOMACHI+STREET/@35.3216554,139.5524551,17z/data=!3m1!4b1!4m6!3m5!1s0x6018450020202bed:0x517deabdfa776d46!8m2!3d35.3216554!4d139.5524551!16s%2Fg%2F11mdgvy7r1?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfUlf6HyKD4vOn-9IiOY8VpnhBdYd9rBuMtjMM5wet7raaGoTc_zdnEQ7lpVf4PFraoLgD8x_sKIgTYInFrCRY4bvsEkjLf4xuQXsyORTakHybq6-UxpoDyh_cejtzViycy7hxCW5uBVBWN=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/KOMACHI+STREET/@35.3216554,139.5524551,17z/data=!3m1!4b1!4m6!3m5!1s0x6018450020202bed:0x517deabdfa776d46!8m2!3d35.3216554!4d139.5524551!16s%2Fg%2F11mdgvy7r1?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-kotokuin",
    "name": "高德院｜镰仓大佛",
    "originalName": "Kotoku in Great Buddha Kamakura",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.3168145,
      139.5357442
    ],
    "desc": "视频点名的镰仓大佛，与东京寺院有不同的露天大佛景观。十一月底不照搬视频提及的六月绣球花体验。",
    "address": "4 Chome-2-28 Hase, Kamakura, Kanagawa 248-0016日本 ",
    "query": "Kotoku in Great Buddha Kamakura",
    "mapUrl": "https://www.google.com/maps/place/%E9%95%B0%E4%BB%93%E5%A4%A7%E4%BD%9B/@35.3168145,139.5357442,17z/data=!3m1!4b1!4m6!3m5!1s0x601845f2df49bc05:0x1ec393b02d6bef4c!8m2!3d35.3168145!4d139.5357442!16s%2Fg%2F11c2pcz953?ved=1t%3A314688",
    "source": "https://www.kotoku-in.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLc70XwbU0rHRuHXDiiRHvxrQeXUZn6aDC0_niZxPEmvzLBgdPp35KY0plsSmr901p2LXEi4Z4SNXLds17xMIBK84YebQVLS5KllGmx8d2nqqtRZQXq3MAtdGHiifSwtBq5cPHgPHickZ9Nx=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E9%95%B0%E4%BB%93%E5%A4%A7%E4%BD%9B/@35.3168145,139.5357442,17z/data=!3m1!4b1!4m6!3m5!1s0x601845f2df49bc05:0x1ec393b02d6bef4c!8m2!3d35.3168145!4d139.5357442!16s%2Fg%2F11c2pcz953?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-kamakurakokomae",
    "name": "镰仓高校前｜海边铁路道口",
    "originalName": "Kamakurakokomae Station",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.3067242,
      139.5005569
    ],
    "desc": "海边电车和动画联想的拍摄点。道口与道路仍在使用，只在允许的人行区域拍照，不挡通行。",
    "address": "1-chōme-1 Koshigoe, Kamakura, Kanagawa 248-0033日本 ",
    "query": "Kamakurakokomae Station",
    "mapUrl": "https://www.google.com/maps/place/%E9%95%B0%E4%BB%93%E9%AB%98%E6%A0%A1%E5%89%8D/@35.3067242,139.5005569,17z/data=!3m1!4b1!4m6!3m5!1s0x60184f16e67c1621:0x1941385abcdafc7d!8m2!3d35.3067242!4d139.5005569!16s%2Fm%2F02vnkjw?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/%E9%95%B0%E4%BB%93%E9%AB%98%E6%A0%A1%E5%89%8D/@35.3067242,139.5005569,17z/data=!3m1!4b1!4m6!3m5!1s0x60184f16e67c1621:0x1941385abcdafc7d!8m2!3d35.3067242!4d139.5005569!16s%2Fm%2F02vnkjw?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLf7w7waugVyIs8cYc4fVO_fK6f1eDz3SxnQwtuHYiPdxTOBH-ndEVshatmO22XD2Dqz4CTmprbJiz1TF763XIsO8BXPfqBC4thv9-1hiWFxIra2Zrak--fnRmW7hUgsOAkBwTmy=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E9%95%B0%E4%BB%93%E9%AB%98%E6%A0%A1%E5%89%8D/@35.3067242,139.5005569,17z/data=!3m1!4b1!4m6!3m5!1s0x60184f16e67c1621:0x1941385abcdafc7d!8m2!3d35.3067242!4d139.5005569!16s%2Fm%2F02vnkjw?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-enoshima",
    "name": "江之岛",
    "originalName": "Enoshima Island",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.2994178,
      139.480291
    ],
    "desc": "海边步道、岛上参道与高低起伏的散步路线。可和镰仓组合成一日候选，不适合当作东京市内短停。",
    "address": "日本〒251-0036 神奈川县藤泽市江之岛 ",
    "query": "Enoshima Island",
    "mapUrl": "https://www.google.com/maps/place/%E6%B1%9F%E4%B9%8B%E5%B2%9B/@35.3000954,139.4810726,16z/data=!3m1!4b1!4m6!3m5!1s0x60184ee6a0ffb471:0x2647c3f7d0777a14!8m2!3d35.2994178!4d139.480291!16s%2Fg%2F11crzk_z_q?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/%E6%B1%9F%E4%B9%8B%E5%B2%9B/@35.3000954,139.4810726,16z/data=!3m1!4b1!4m6!3m5!1s0x60184ee6a0ffb471:0x2647c3f7d0777a14!8m2!3d35.2994178!4d139.480291!16s%2Fg%2F11crzk_z_q?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLeE0HctYUzLGRD9O7fGzgn8hhH3VpL-JPjOjZiNDxKmQ77ZkStMSE4wC2a19puS98h4Wc6tcZKs3jMZGBcH6ldppJyKeQi8KADAHJ3kqkgaqwt1MrRBJpMWMZn528pInfoh4jHy=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E6%B1%9F%E4%B9%8B%E5%B2%9B/@35.3000954,139.4810726,16z/data=!3m1!4b1!4m6!3m5!1s0x60184ee6a0ffb471:0x2647c3f7d0777a14!8m2!3d35.2994178!4d139.480291!16s%2Fg%2F11crzk_z_q?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-hakone",
    "name": "箱根温泉｜汤本起点",
    "originalName": "Hakone Yumoto Station",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "nearby",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.2333827,
      139.1039163
    ],
    "desc": "视频推荐的泡汤地区；这张卡定位箱根汤本，方便比较交通。具体温泉旅馆与日归入浴设施需要另选，并非车站可以泡汤。",
    "address": "Yumoto, 箱根町足柄下郡神奈川县 250-0311日本 ",
    "query": "Hakone Yumoto Station",
    "mapUrl": "https://www.google.com/maps/place/%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85/@35.2333827,139.1039163,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a3750d54a667:0xf1390e35590bd49a!8m2!3d35.2333827!4d139.1039163!16s%2Fm%2F04074xj?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85/@35.2333827,139.1039163,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a3750d54a667:0xf1390e35590bd49a!8m2!3d35.2333827!4d139.1039163!16s%2Fm%2F04074xj?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLf4g2IbMl3lrkbayQT5VivtUEroOMG5xZxcXOp2udfTkYq7vyrXT4ASsplyDeZdNIAQuPtm2a00tJdyRhiZ0XzvOUsADUxuIz_TS2x3UvI1GiYifj_72nNjg6-PxvQn2JGnLVhd=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85/@35.2333827,139.1039163,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a3750d54a667:0xf1390e35590bd49a!8m2!3d35.2333827!4d139.1039163!16s%2Fm%2F04074xj?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-fuji-view",
    "name": "富士山眺望｜河口湖候选",
    "originalName": "Lake Kawaguchi",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "fuji",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.5170946,
      138.7517787
    ],
    "desc": "视频只泛指看富士山，这里以河口湖作为可导航的观景地区候选，不冒充视频中的精确机位。是否看到山取决于天气。",
    "address": "日本山梨县南都留郡富士河口湖町 ",
    "query": "Lake Kawaguchi",
    "mapUrl": "https://www.google.com/maps/place/%E6%B2%B3%E5%8F%A3%E6%B9%96/@35.5130845,138.7450271,14z/data=!3m1!4b1!4m6!3m5!1s0x60195fb4a5043f4f:0x29cbb24b1e337d47!8m2!3d35.5170946!4d138.7517787!16zL20vMDZ0MXYw?ved=1t%3A314688",
    "source": "https://www.google.com/maps/place/%E6%B2%B3%E5%8F%A3%E6%B9%96/@35.5130845,138.7450271,14z/data=!3m1!4b1!4m6!3m5!1s0x60195fb4a5043f4f:0x29cbb24b1e337d47!8m2!3d35.5170946!4d138.7517787!16zL20vMDZ0MXYw?ved=1t%3A314688",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLeWT5otawmCntjeoV0mu0u6GzwJgCelMDQ3OiWH8KayhuRqOqSDuVdACRGJubYRO_M01JJUWU6_zRDCdlUEOqdjSZDWSfyx-BQpy2YilJ9WeOkIAFOx8LGmqjlBocy7iEMW1Aec-E1jgAzR=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E6%B2%B3%E5%8F%A3%E6%B9%96/@35.5130845,138.7450271,14z/data=!3m1!4b1!4m6!3m5!1s0x60195fb4a5043f4f:0x29cbb24b1e337d47!8m2!3d35.5170946!4d138.7517787!16zL20vMDZ0MXYw?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  },
  {
    "id": "video-radio-kaikan",
    "name": "秋叶原 Radio Kaikan｜模型与手办",
    "originalName": "Akihabara Radio Kaikan",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6979149,
      139.7719571
    ],
    "desc": "第一条视频秋叶原段出现的手办模型商业楼，多家店集中在同一栋，适合先看一圈再比较价格。",
    "address": "1 Chome-15-16 Sotokanda, Chiyoda City, Tokyo 101-0021日本 ",
    "query": "Akihabara Radio Kaikan",
    "mapUrl": "https://www.google.com/maps/place/Akihabara+Radio+Kaikan/@35.6979149,139.7719571,17z/data=!3m1!4b1!4m6!3m5!1s0x60188eac7580ffff:0x30cd29f7c28f41e8!8m2!3d35.6979149!4d139.7719571!16s%2Fg%2F1w0p5mcn?ved=1t%3A314688",
    "source": "http://www.akihabara-radiokaikan.co.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcZD-dv7Z357pRUvEjPtv_syCf0GlV-fboLAnaC1QjV6ONTX_Ikp6xt84rk90LO7dGZiV514XoGb0ZKV60_4g0Zifz1xdWkwWlIRQ1kxZ2fBLzIIv0-JLYDNR0aMB77k5D_X2ffg-OxTHnq=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Akihabara+Radio+Kaikan/@35.6979149,139.7719571,17z/data=!3m1!4b1!4m6!3m5!1s0x60188eac7580ffff:0x30cd29f7c28f41e8!8m2!3d35.6979149!4d139.7719571!16s%2Fg%2F1w0p5mcn?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-animate-akiba",
    "name": "Animate｜秋叶原店",
    "originalName": "Animate Akihabara",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7004944,
      139.7717427
    ],
    "desc": "视频在秋叶原段提到 Animate 的动漫与角色商品。按自己的作品兴趣逛，不把同类商店全排进日程。",
    "address": "4 Chome-3-1 Sotokanda, Chiyoda City, Tokyo 101-0021日本 ",
    "query": "Animate Akihabara",
    "mapUrl": "https://www.google.com/maps/place/Animate+%E7%A7%8B%E5%8F%B6%E5%8E%9F%E5%BA%97/@35.7004944,139.7717427,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1d96fb5701:0x9276f70f9d512927!8m2!3d35.7004944!4d139.7717427!16s%2Fg%2F1tk8nlb7?ved=1t%3A314688",
    "source": "https://www.animate.co.jp/shop/akihabara/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLd-d_w-9pXF96vOlrHpLCpSftEsCSGmHZdmYr9UxVI9simgst3kQjp00dYXugZTUKfJba_2PoMvXEVWpAvhMY0XJ-Du3pgF85CuM8hktDVjDv_VVIFUAM-pVZXkZPDg2m20mnrIjPqpjFK2=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Animate+%E7%A7%8B%E5%8F%B6%E5%8E%9F%E5%BA%97/@35.7004944,139.7717427,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1d96fb5701:0x9276f70f9d512927!8m2!3d35.7004944!4d139.7717427!16s%2Fg%2F1tk8nlb7?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-bookoff-akiba",
    "name": "BOOKOFF｜秋叶原站前店",
    "originalName": "BOOKOFF Akihabara Ekimae Store",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6977342,
      139.7734748
    ],
    "desc": "视频提到 BOOKOFF 中古店品牌；这里选秋叶原站前店作为可导航候选，原片未逐字确认具体分店。",
    "address": "1 Chome-6-4 Kanda Sakumacho, Chiyoda City, Tokyo 101-0025日本 ",
    "query": "BOOKOFF Akihabara Ekimae Store",
    "mapUrl": "https://www.google.com/maps/place/BOOKOFF+Akihabara+Ekimae+Store/@35.6977342,139.7734748,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ea80611f7df:0x71a700780dc26a3!8m2!3d35.6977342!4d139.7734748!16s%2Fg%2F1vr1wmqt?ved=1t%3A314688",
    "source": "https://www.bookoff.co.jp/shop/shop20396.html",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLda95OJDw_5wtgsod46kIpjRUXqNaKmnlNRnX6ROkhku7YIMqtnZJvzTh-bXZ1kDQRWBayHJfqsuOH7JB7lpXpty5QBOnIJK3SCctRGSmHOKg9AttY1MtmK0y-YmVtjjTclMLPudc1JJJK1=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/BOOKOFF+Akihabara+Ekimae+Store/@35.6977342,139.7734748,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ea80611f7df:0x71a700780dc26a3!8m2!3d35.6977342!4d139.7734748!16s%2Fg%2F1vr1wmqt?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-surugaya-akiba",
    "name": "骏河屋｜秋叶原本馆",
    "originalName": "Surugaya Akihabara Main Store",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.70064,
      139.7705493
    ],
    "desc": "视频提到骏河屋中古周边店；这里选择秋叶原本馆作为代表门店，品类与库存随门店和时间变化。",
    "address": "3 Chome-11-3 Sotokanda, Chiyoda City, Tokyo 101-0021日本 ",
    "query": "Surugaya Akihabara Main Store",
    "mapUrl": "https://www.google.com/maps/place/%E9%AA%8F%E6%B2%B3%E5%B1%8B+%E7%A7%8B%E5%8F%B6%E5%8E%9F%E6%9C%AC%E9%A6%86/@35.70064,139.7705493,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d48c5c23c85:0x2b079e2f7e5a647d!8m2!3d35.70064!4d139.7705493!16s%2Fg%2F11fhxwd9sz?ved=1t%3A314688",
    "source": "https://www.suruga-ya.jp/feature/akihabara_main/index.html",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLeJrtLNlF0sU6oNNQ9w84m7vqoHFZd4LK58rgNY4tZ1QjVrYUt2_gs-VAShP7-SXGpfdSo2oaQ1mFvzE71L5k2kJJaSnivLEN_qwp8zP8nwmmkKQa8Q8ZqKJAXk8G5Ys0pEPKHXAVwcK8RC=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E9%AA%8F%E6%B2%B3%E5%B1%8B+%E7%A7%8B%E5%8F%B6%E5%8E%9F%E6%9C%AC%E9%A6%86/@35.70064,139.7705493,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d48c5c23c85:0x2b079e2f7e5a647d!8m2!3d35.70064!4d139.7705493!16s%2Fg%2F11fhxwd9sz?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-trader-akiba",
    "name": "TRADER｜秋叶原本店",
    "originalName": "Trader Akihabara Main Store",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7001399,
      139.7716396
    ],
    "desc": "视频提到的中古游戏与周边品牌，这里选秋叶原本店方便导航。购买前看版本、成色与适用语言。",
    "address": "日本〒101-0021 Tokyo, Chiyoda City, Sotokanda, 4 Chome−2−1 トレーダー本店ビル ",
    "query": "Trader Akihabara Main Store",
    "mapUrl": "https://www.google.com/maps/place/TRADER+%E6%80%BB%E5%BA%97/@35.7001399,139.7716396,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1dc59fff41:0xf44917d603081bf7!8m2!3d35.7001399!4d139.7716396!16s%2Fg%2F1td7c45q?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "source": "http://www.e-trader.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLc6bZvqgkWUk6zV3la6KaAsvo2WMtLzIvWy1lnqapbjufnxerRLHuOgndYuGMUSeS_BZAtK03-oKZWP9s6yGZRW2ysLi81yk2Q2SRXST78WUGbQ-bjcA1hPXt8Mp1SGruGx4YeJ8DNchp7E=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/TRADER+%E6%80%BB%E5%BA%97/@35.7001399,139.7716396,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1dc59fff41:0xf44917d603081bf7!8m2!3d35.7001399!4d139.7716396!16s%2Fg%2F1td7c45q?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-mandarake-akiba",
    "name": "MANDARAKE COMPLEX｜秋叶原中古收藏",
    "originalName": "Mandarake Complex Akihabara",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7003733,
      139.7705031
    ],
    "desc": "第一条视频中古店段出现的深色大楼，适合看漫画、玩具与收藏品，按感兴趣的楼层挑选。",
    "address": "3 Chome-11-12 Sotokanda, Chiyoda City, Tokyo 101-0021日本 ",
    "query": "Mandarake Complex Akihabara",
    "mapUrl": "https://www.google.com/maps/place/Mandarake+Complex/@35.7003733,139.7705031,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1db588759b:0x8c537b9b72799bd3!8m2!3d35.7003733!4d139.7705031!16s%2Fg%2F1w4vjy4m?ved=1t%3A314688",
    "source": "https://www.mandarake.co.jp/dir/cmp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLfMoZF9wMcNL4lNus_wBcb95sP9rQCHXuN_cn3Kmlx_oynuGU6RUGL2ufMsRUF8sfbtnwnoC0mURPZVfYqL1zccGP5L1VAj-tuMhiM-qjewL9wKEP-yBWBgWIIqO8iuga3IHy_u_3K6CtZW=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Mandarake+Complex/@35.7003733,139.7705031,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1db588759b:0x8c537b9b72799bd3!8m2!3d35.7003733!4d139.7705031!16s%2Fg%2F1w4vjy4m?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-gigo-akiba",
    "name": "GiGO 秋叶原 1 号馆｜街机游戏",
    "originalName": "GiGO Akihabara 1",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6986895,
      139.7710645
    ],
    "desc": "视频提到的游戏厅，适合一起试街机或抓娃娃；先定娱乐预算，体验为主。",
    "address": "1 Chome-10-9 Sotokanda, Chiyoda City, Tokyo 101-0021日本 ",
    "query": "GiGO Akihabara 1",
    "mapUrl": "https://www.google.com/maps/place/GiGO+%E7%A7%8B%E5%8F%B6%E5%8E%9F1%E5%8F%B7%E5%BA%97/@35.6986895,139.7710645,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1d106dc747:0xf573201481907c84!8m2!3d35.6986895!4d139.7710645!16s%2Fg%2F1hhgw95f_?ved=1t%3A314688",
    "source": "https://tempo.gendagigo.jp/am/akiba-1?utm_campaign=mov&utm_medium=GBP&utm_source=website-button",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLe-1RkTP0Iqe8EAkl9PC86GER6NtJj6Ry8212fA97q9RrnbfPBVH_B_K3JnJjQVrysj0ZlGToyrMcI88ySNzSPPbbYd7kJZfQT8otJ-iMK-UPzNbfoiz9TBgEoB4eSJsjDPYg4=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/GiGO+%E7%A7%8B%E5%8F%B6%E5%8E%9F1%E5%8F%B7%E5%BA%97/@35.6986895,139.7710645,17z/data=!3m1!4b1!4m6!3m5!1s0x60188c1d106dc747:0xf573201481907c84!8m2!3d35.6986895!4d139.7710645!16s%2Fg%2F1hhgw95f_?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-yodobashi-akiba",
    "name": "友都八喜 AKIBA｜电器商城",
    "originalName": "Yodobashi Akiba",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.698917,
      139.774798
    ],
    "desc": "视频点名的大型电器商城。相机、电子设备和生活电器适合集中比较，有购买目标再多留时间。",
    "address": "1-1 Kanda Hanaokacho, Chiyoda City, Tokyo 101-0028日本 ",
    "query": "Yodobashi Akiba",
    "mapUrl": "https://www.google.com/maps/place/%E5%8F%8B%E9%83%BD%E5%85%AB%E5%96%9C+%E7%A7%8B%E5%8F%B6%E5%8E%9F/@35.698917,139.774798,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ea7d9cc4f19:0x7bb917c6708b7376!8m2!3d35.698917!4d139.774798!16s%2Fg%2F120s70qs?ved=1t%3A314688",
    "source": "http://www.yodobashi.com/ec/store/0018/index.html",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcTCdulqb1PnUxkYeIBrY3SmKIET3coifzlqqUX-RX4Ye-T3pFp_F-vjC_UZoWMeKS0o25qZfOJNiwJ8Qvf10cZv64_LpOWE0cvBr03JXVp9GzFlh7KB6OO8eL6eTLOGDt90OieMEEp715X=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E5%8F%8B%E9%83%BD%E5%85%AB%E5%96%9C+%E7%A7%8B%E5%8F%B6%E5%8E%9F/@35.698917,139.774798,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ea7d9cc4f19:0x7bb917c6708b7376!8m2!3d35.698917!4d139.774798!16s%2Fg%2F120s70qs?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-suga-shrine",
    "name": "须贺神社阶梯｜你的名字取景",
    "originalName": "Suga Shrine Yotsuya",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6852851,
      139.7224783
    ],
    "desc": "视频提到《你的名字》的阶梯取景地。神社与周边是日常生活空间，短暂停留、安静拍照。",
    "address": "5-6 Sugacho, Shinjuku City, Tokyo 160-0018日本 ",
    "query": "Suga Shrine Yotsuya",
    "mapUrl": "https://www.google.com/maps/place/%E9%A1%BB%E8%B4%BA%E7%A5%9E%E7%A4%BE/@35.6852851,139.7224783,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ece406d552f1:0x440be600a9c6807c!8m2!3d35.6852851!4d139.7224783!16s%2Fg%2F122zd6vx?ved=1t%3A314688",
    "source": "https://sugajinjya.or.jp/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcs_hHDUj683IlJXSv51vUaDJF4I_yAo2LSA7AYmqpvjktRUM-SOMrkHwSHJOAJueINbwz5i4oLsg5yU_wWhHXwFYP1jg2Lh6dpvMhBtv9QnTYNv-50GxCJmTAoi_4e_CGEOwwAw2rPNEI=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E9%A1%BB%E8%B4%BA%E7%A5%9E%E7%A4%BE/@35.6852851,139.7224783,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ece406d552f1:0x440be600a9c6807c!8m2!3d35.6852851!4d139.7224783!16s%2Fg%2F122zd6vx?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-cross-shinjuku",
    "name": "新宿东口 3D 猫咪大屏",
    "originalName": "Cross Shinjuku Vision",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.6926882,
      139.7008265
    ],
    "desc": "视频新宿段反复出现的立体猫咪屏幕，适合和新宿吃饭或逛街一起路过看看，播放内容与时段可能变化。",
    "address": "日本〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3 Chome−23−18 東新宿ビル クロス RF ",
    "query": "Cross Shinjuku Vision",
    "mapUrl": "https://www.google.com/maps/place/Cross+Shinjuku+Vision/@35.6926882,139.7008265,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d9bdf9105af:0xf3111a6d8fafb41b!8m2!3d35.6926882!4d139.7008265!16s%2Fg%2F11pdmx7mcm?ved=1t%3A314688",
    "source": "https://shinjuku.xspace.tokyo/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLdSBv1P5fNBw2mSqcVmrZ_-BlIYzCSBIh3cC7jv3owkJTshbwatrYMpc1rA86FlserVnstneGTE3mBtkykzU1dbFd9rdrZc_7JMT5bmG0CE6GTV1d9to5kWUGnxH55v15Lyobn7m0ACfHSi=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Cross+Shinjuku+Vision/@35.6926882,139.7008265,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d9bdf9105af:0xf3111a6d8fafb41b!8m2!3d35.6926882!4d139.7008265!16s%2Fg%2F11pdmx7mcm?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-otome-road",
    "name": "池袋乙女路｜动漫周边街区",
    "originalName": "Otome Road Ikebukuro",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7307862,
      139.7179055
    ],
    "desc": "第一条视频池袋段展示女性向周边与同人店聚集区，适合按喜欢的角色和作品挑店慢逛。地图用 K-BOOKS 乙女馆作为街区起点，不代表视频确认去过这家分店。",
    "address": "日本〒170-0013 Tokyo, Toshima City, Higashiikebukuro, 3 Chome−15−5 東池袋マンション B1F ",
    "query": "Otome Road Ikebukuro",
    "mapUrl": "https://www.google.com/maps/place/K-BOOKS+Ikebukuro+Otome+Pavilion/@35.7307862,139.7179055,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d6700000001:0x7062395e802a41b!8m2!3d35.7307862!4d139.7179055!16s%2Fg%2F11nm_spnrg?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "source": "http://www.k-books.co.jp/shop/otome",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLd_M-MRBrK3ZDST-qV88GKI2Aw5Y2weSxW5l8vFCpknW0Dt6znRXkm28RJxfVvFwxAMTr6hC7eznvJyDPdt9zDNWNJ3W5x_LXq5ugASg3pWFVkSoBePBM6W_qTGKaLWm1xAsLNUAg=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/K-BOOKS+Ikebukuro+Otome+Pavilion/@35.7307862,139.7179055,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d6700000001:0x7062395e802a41b!8m2!3d35.7307862!4d139.7179055!16s%2Fg%2F11nm_spnrg?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-kbooks-ikebukuro",
    "name": "K-BOOKS｜池袋同人馆",
    "originalName": "K BOOKS Doujin kan Ikebukuro",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "stroll",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7314652,
      139.7187035
    ],
    "desc": "视频池袋段可见 K-BOOKS 同人馆招牌。属于作品兴趣导向的中古与同人收藏候选，先确认对应店铺的商品分区。",
    "address": "日本〒170-0013 Tokyo, Toshima City, Higashiikebukuro, 3 Chome−12−12 正和ビル 3F ",
    "query": "K BOOKS Doujin kan Ikebukuro",
    "mapUrl": "https://www.google.com/maps/place/K-BOOKS+Doujinkan/@35.7314652,139.7187035,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d65866437b9:0x9799dd82928d51bc!8m2!3d35.7314652!4d139.7187035!16s%2Fg%2F1thq0q5r?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "source": "https://k-books.co.jp/shop/doujin",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcu46d7uZSam5Ni8E5obbYG53uMHVq66Bu6ZhDjyLQhcM_23bvJwygv95GVIokdjmfhfDGSVDPbskkAi_OOSQBdTsNok-2NctuEGvsaaVbhyKdh5J3eWX7CBDfOEZZZVy-F1gMw-Q=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/K-BOOKS+Doujinkan/@35.7314652,139.7187035,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d65866437b9:0x9799dd82928d51bc!8m2!3d35.7314652!4d139.7187035!16s%2Fg%2F1thq0q5r?authuser=0&hl=zh-CN&ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-sushiro-ueno",
    "name": "寿司郎｜上野店候选",
    "originalName": "Sushiro Ueno",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "food",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7100577,
      139.7751464
    ],
    "desc": "视频约 05:40 提到在阿美横丁一带吃寿司郎。这里以上野店作可导航候选，未确认作者当时具体分店。",
    "address": "日本〒110-0005 Tokyo, Taito City, Ueno, 6 Chome−9−9 オリエンタルビル B1 ",
    "query": "Sushiro Ueno",
    "mapUrl": "https://www.google.com/maps/place/SUSHIRO+Ueno/@35.7100577,139.7751464,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e9fa9461afb:0x276a69060f368710!8m2!3d35.7100577!4d139.7751464!16s%2Fg%2F11ggs3q696?ved=1t%3A314688",
    "source": "https://www.akindo-sushiro.co.jp/shop/detail.php?id=1975",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLcCYKqlymQQ-6cnTJNOOK2uzqjN4pSRg93R--N3Jn_FuMYzHrhLO07bMrqEW1m3yig0LHuo1EE2_BYerBxAfeqYLP19Jv6aP_Taf7lVS6mo9-pVH3JzWlr-37aq74e2tUQ0DLfyQV1hxdYR=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/SUSHIRO+Ueno/@35.7100577,139.7751464,17z/data=!3m1!4b1!4m6!3m5!1s0x60188e9fa9461afb:0x276a69060f368710!8m2!3d35.7100577!4d139.7751464!16s%2Fg%2F11ggs3q696?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-saizeriya-shibuya",
    "name": "萨莉亚｜涩谷用餐候选",
    "originalName": "Saizeriya Shibuya Tokyu Hands Mae",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "food",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.662258,
      139.69682
    ],
    "desc": "视频约 13:30 展示在涩谷吃萨莉亚。适合轻松休息、吃意面或焗饭；选附近门店作为候选，原片未确认分店。",
    "address": "ﾋﾞﾚｯｼﾞ 802F, 39-2 Udagawacho, Shibuya, Tokyo 150-0042日本 ",
    "query": "Saizeriya Shibuya Tokyu Hands Mae",
    "mapUrl": "https://www.google.com/maps/place/Saizeriya/@35.662258,139.69682,17z/data=!3m1!4b1!4m6!3m5!1s0x60188dac7044ded7:0x19071df79ebbbf87!8m2!3d35.662258!4d139.69682!16s%2Fg%2F1tfw30fy?ved=1t%3A314688",
    "source": "https://shop.saizeriya.co.jp/sz_restaurant/spot/detail?code=0773",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLeP7sZlTyV0PwPcFSts82lR7Kux_RQ3QcL8kbf34IiY7ltKtH06NYc45b8vX_wXMpv8jyAITDy3YVzy9S3wanogzlka5fPHahI6PiT2F62-z9YZPr1XuVqTUhuuJN8DOm1v7ym3z88makE=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/Saizeriya/@35.662258,139.69682,17z/data=!3m1!4b1!4m6!3m5!1s0x60188dac7044ded7:0x19071df79ebbbf87!8m2!3d35.662258!4d139.69682!16s%2Fg%2F1tfw30fy?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      1
    ],
    "notes": ""
  },
  {
    "id": "video-sumida-aquarium",
    "name": "墨田水族馆",
    "originalName": "Sumida Aquarium",
    "nameNote": "中文名称包含译名或体验说明；英文用于查找",
    "category": "sight",
    "region": "tokyo",
    "origin": "B站视频候选",
    "days": [],
    "coord": [
      35.7099301,
      139.8095855
    ],
    "desc": "第二条视频晴空塔段提到的室内水族馆，可以和晴空塔、浅草搭配；喜欢企鹅和水母、或遇到雨天时值得考虑。",
    "address": "日本〒131-0045 Tokyo, Sumida City, Oshiage, 1 Chome−1−2 東京スカイツリータウン・ソラマチ ５階～６階 ",
    "query": "Sumida Aquarium",
    "mapUrl": "https://www.google.com/maps/place/%E5%A2%A8%E7%94%B0%E6%B0%B4%E6%97%8F%E9%A6%86/@35.7099301,139.8095855,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ed6ddcaa63b:0x52f9e68583464160!8m2!3d35.7099301!4d139.8095855!16s%2Fg%2F1hc0hhtgk?ved=1t%3A314688",
    "source": "http://www.sumida-aquarium.com/",
    "photo": "https://lh3.googleusercontent.com/grass-cs/AABkmLco8bCfLk0S72e8Or0OOCU_jBO0ecfeBVis-j-fdlmV7kUiaaIW1XSavUNJBTXNLjGF5DYDr8QoiyKiiFMPX2C9YjiBVeCusRcmLxKtniCvQ1eYRfMa16W1v16xHfQbD-XrPE0U=w960-h720-k-no",
    "photoSource": "https://www.google.com/maps/place/%E5%A2%A8%E7%94%B0%E6%B0%B4%E6%97%8F%E9%A6%86/@35.7099301,139.8095855,17z/data=!3m1!4b1!4m6!3m5!1s0x60188ed6ddcaa63b:0x52f9e68583464160!8m2!3d35.7099301!4d139.8095855!16s%2Fg%2F1hc0hhtgk?ved=1t%3A314688",
    "photoLabel": "Google Maps 地点实景",
    "photoFit": "contain",
    "videoSources": [
      2
    ],
    "notes": ""
  }
];
OVERVIEW_CATALOG.push(...VIDEO_CATALOG);
for(const [id,sources] of Object.entries({"sensoji":[1,2],"nakamise":[1],"ueno":[1,2],"ameyoko":[1],"akihabara":[1,2],"shinjuku":[1],"crossing":[1,2],"ginza":[1,2],"tower":[1,2],"tsukiji":[1,2],"imperial-palace-gaien":[1,2],"imperial-palace-east-gardens":[2],"sumida":[2],"tokyostation":[2],"daikanyama":[2],"sky":[2],"omotesando":[2],"shimokita":[2],"meiji":[2],"kichijoji":[2]})){const p=OVERVIEW_CATALOG.find(p=>p.id===id);if(p)p.videoSources=sources;}
Object.assign(WISHLIST_GUIDANCE,{
  "video-narita": [
    null,
    "交通预留 2–3 小时",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-haneda": [
    null,
    "交通预留 2–3 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-disney": [
    3,
    "1 整天",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-skytree": [
    4,
    "1.5–2 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-ueno-zoo": [
    3,
    "2–3 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-western-art": [
    4,
    "1.5–2 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-ueno-museums": [
    4,
    "2–3 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-utokyo": [
    3,
    "45–75 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-jimbocho": [
    5,
    "1.5–2.5 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-toyosu-market": [
    4,
    "1.5–2 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-teamlab-planets": [
    5,
    "2–3 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-odaiba": [
    4,
    "60–90 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-liberty": [
    3,
    "15–25 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-divercity": [
    3,
    "45–90 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-miraikan": [
    4,
    "2–3 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-zojoji": [
    5,
    "30–45 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-roppongi-view": [
    4,
    "60–90 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-takeshita": [
    3,
    "45–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-shinjuku-gyoen": [
    5,
    "1.5–2 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-tokyo-metropolitan": [
    4,
    "45–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-kabukicho": [
    3,
    "30–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-ikebukuro": [
    4,
    "2–3 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-harry-potter": [
    4,
    "4–5 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-ghibli": [
    4,
    "2–3 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-fujiko": [
    4,
    "2–3 小时",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-sanrio": [
    3,
    "4–6 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-yokohama": [
    3,
    "半天至 1 天",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-yokohama-chinatown": [
    3,
    "1.5–2 小时",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-kamakura": [
    4,
    "半天至 1 天",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-kotokuin": [
    4,
    "45–60 分钟",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-kamakurakokomae": [
    3,
    "20–40 分钟",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-enoshima": [
    4,
    "3–4 小时",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-hakone": [
    4,
    "1 天或住 1 晚",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-fuji-view": [
    4,
    "1 天",
    "这是东京周边的独立候选，尚未排入四天行程；往返交通和排队需要另外预留。"
  ],
  "video-radio-kaikan": [
    4,
    "45–90 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-animate-akiba": [
    3,
    "30–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-bookoff-akiba": [
    3,
    "30–45 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-surugaya-akiba": [
    3,
    "30–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-trader-akiba": [
    3,
    "30–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-mandarake-akiba": [
    4,
    "45–75 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-gigo-akiba": [
    4,
    "30–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-yodobashi-akiba": [
    3,
    "45–90 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-suga-shrine": [
    4,
    "20–30 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-cross-shinjuku": [
    3,
    "10–20 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-otome-road": [
    4,
    "45–90 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-kbooks-ikebukuro": [
    3,
    "30–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-sushiro-ueno": [
    4,
    "45–75 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-saizeriya-shibuya": [
    3,
    "45–60 分钟",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ],
  "video-sumida-aquarium": [
    4,
    "1.5–2 小时",
    "先收藏，再和附近地点组合；如需预约，请按最终选定日期查询官网。"
  ]
});
Object.assign(WISHLIST_BUDGETS,{
  "video-toyosu-market": {
    "min": 2500,
    "max": 6000,
    "meal": "市场海鲜正餐",
    "note": "用于挑选地点的每人规划估算，并非视频账单或已核实的店均消费；实际以点单和到店菜单为准。"
  },
  "video-yokohama-chinatown": {
    "min": 2000,
    "max": 5000,
    "meal": "正餐与小吃",
    "note": "用于挑选地点的每人规划估算，并非视频账单或已核实的店均消费；实际以点单和到店菜单为准。"
  },
  "video-sushiro-ueno": {
    "min": 1500,
    "max": 3000,
    "meal": "回转寿司",
    "note": "用于挑选地点的每人规划估算，并非视频账单或已核实的店均消费；实际以点单和到店菜单为准。"
  },
  "video-saizeriya-shibuya": {
    "min": 800,
    "max": 1800,
    "meal": "简餐",
    "note": "用于挑选地点的每人规划估算，并非视频账单或已核实的店均消费；实际以点单和到店菜单为准。"
  }
});
function videoPlaceDetails(p){return p.videoSources?.length?`<div class="chef-tags">${p.videoSources.map(id=>`<a class="pdf-source-badge" href="${WISHLIST_VIDEO_SOURCES[id].url}" target="_blank" rel="noopener">▷ ${esc(WISHLIST_VIDEO_SOURCES[id].label)} ↗</a>`).join('')}</div>`:'';}

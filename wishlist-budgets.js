/* Per-person planning allowances, not observed average checks. Reviewed 2026-10-28.
   Entries with a source use verified menu anchors; all other ranges are provisional estimates. */
const WISHLIST_BUDGETS={
  "oden": {
    "min": 4000,
    "max": 6000,
    "meal": "晚餐",
    "note": "关东煮、配菜与一杯饮品；预算含晚间小菜费与座位费合计660円。",
    "source": "https://www.oreno.co.jp/menu/kp_oden"
  },
  "unagi": {
    "min": 5000,
    "max": 6500,
    "meal": "午餐",
    "note": "官网鳗鱼饭4,970–5,520円；预算预留饮品。",
    "source": "https://www.hitsumabushi.com/menu/"
  },
  "sushi": {
    "min": 20000,
    "max": 35000,
    "meal": "晚餐",
    "note": "官网握寿司16,500円起，晚餐另收10%服务费；预算预留少量饮品，高阶套餐另计。午餐可另按9,000–18,000円规划。",
    "source": "https://www.kyubey.jp/shoplist/ginza/"
  },
  "maisen": {
    "min": 2000,
    "max": 4000,
    "meal": "正餐",
    "note": "炸猪排套餐与普通饮品；官网季节组合套餐参考价2,830円，11月菜单可能调整。",
    "source": "https://mai-sen.com/shop/shop-9960/"
  },
  "gonpachi": {
    "min": 5000,
    "max": 8000,
    "meal": "晚餐",
    "note": "按几道菜、主食与一杯饮品预留；套餐、酒水及附加费用待菜单确认。"
  },
  "tsukiji": {
    "min": 3000,
    "max": 6000,
    "meal": "市场早餐＋小吃",
    "note": "按每人一份海鲜主食加少量分食小吃估算；海胆、蟹与高级鱼料另加预算。"
  },
  "yamacho": {
    "min": 200,
    "max": 400,
    "meal": "一份小吃",
    "note": "玉子烧短停预算，不是一顿正餐；份量与当日售价待确认。"
  },
  "wellk": {
    "min": 2000,
    "max": 3500,
    "meal": "早餐／早午餐",
    "note": "按一份餐点加饮品预留；套餐内容与预约时段价格待确认。"
  },
  "titoten": {
    "min": 2000,
    "max": 3500,
    "meal": "早餐／早午餐",
    "note": "按早餐餐盘加饮品预留；未取得完整现行菜单。"
  },
  "samurai": {
    "min": 1800,
    "max": 2800,
    "meal": "正餐",
    "note": "汤咖喱加普通配料或饮品预算；加肉、加菜另计。"
  },
  "harmonica": {
    "min": 4000,
    "max": 6000,
    "meal": "小巷晚餐",
    "note": "这是横丁区域预算，不是单店报价；按小菜、主食及少量酒水预留，座位费依店而异。"
  },
  "dinner1": {
    "min": 12000,
    "max": 22000,
    "meal": "晚餐",
    "note": "官网晚餐套餐11,000／14,300／19,800円；预算另留饮品，特别套餐不在此范围内。",
    "source": "https://ginza-tentei.jp/"
  },
  "afuri": {
    "min": 1500,
    "max": 2500,
    "meal": "正餐",
    "note": "按一碗拉面加小食或饮品估算；不采用网上外卖套装价格。"
  },
  "afuri-naka": {
    "min": 1500,
    "max": 2500,
    "meal": "正餐",
    "note": "按一碗拉面加小食或饮品估算；各分店现行菜单待确认。"
  },
  "otako": {
    "min": 4000,
    "max": 7000,
    "meal": "晚餐",
    "note": "按关东煮、配菜和少量酒水预留；午餐另按1,000–2,000円估算，实际菜单待确认。"
  },
  "ukai": {
    "min": 38000,
    "max": 55000,
    "meal": "晚餐",
    "note": "官网套餐33,000／44,000円；预算留饮品与附加费余量，服务费需预约时确认。不含配酒套餐与包间费。",
    "source": "https://www.ukai.co.jp/ginzakappou/menu/"
  },
  "nishiki": {
    "min": 1500,
    "max": 3000,
    "meal": "市场小吃",
    "note": "按一路少量尝鲜估算，不含完整坐席正餐与伴手礼。"
  },
  "chef-9a8817db3e2aba": {
    "min": 800,
    "max": 1600,
    "meal": "一杯咖啡",
    "note": "按普通单杯预算；稀有豆、甜点另计。"
  },
  "chef-f73ebc21be7991": {
    "min": 18000,
    "max": 23000,
    "meal": "晚餐",
    "note": "预约页套餐16,000円含税，服务费另收；预算留普通饮品与费用余量。配酒另加14,000円，不在此范围内。",
    "source": "https://omakase.in/en/r/il637135"
  },
  "chef-d32e98e6d0f6ae": {
    "min": 600,
    "max": 1400,
    "meal": "咖啡／小点",
    "note": "按饮品与简单小点预留，完整餐点另计。"
  },
  "chef-f649ca41caddce": {
    "min": 800,
    "max": 1800,
    "meal": "咖啡／小点",
    "note": "按一杯咖啡、可选小点预留；特殊豆种另计。"
  },
  "chef-4f45076056d200": {
    "min": 1000,
    "max": 2500,
    "meal": "伴手礼购买",
    "note": "非餐厅：按每人一两件小包装伴手礼预留，不算用餐客单价。"
  },
  "chef-45edf6c3cfe1e9": {
    "min": 800,
    "max": 1800,
    "meal": "茶饮／小点",
    "note": "按一杯茶饮或搭配小点预留，不含茶叶礼盒。"
  },
  "chef-0dbb70542e645e": {
    "min": 1200,
    "max": 2500,
    "meal": "茶与甜点",
    "note": "按茶房的一份茶饮与甜点组合预留，不含购买抹茶粉。"
  },
  "chef-155b16480d02cc": {
    "min": 1500,
    "max": 4000,
    "meal": "一杯精品咖啡",
    "note": "豆单差价很大；这是单杯预算，稀有豆可能超过上限，不含买豆。"
  },
  "chef-566dfca913bfe2": {
    "min": 800,
    "max": 1800,
    "meal": "咖啡／小点",
    "note": "按饮品与可选甜点预留；不含美术馆门票与咖啡器具。"
  },
  "chef-5598a143437715": {
    "min": 800,
    "max": 1800,
    "meal": "咖啡／小点",
    "note": "按饮品与可选甜点预留；不含器具、饰品购买。"
  },
  "chef-633c68f7462cf7": {
    "min": 1200,
    "max": 2500,
    "meal": "茶房体验",
    "note": "按坐席茶饮、可选茶点预留；不含购买茶叶。"
  },
  "chef-78161e89f830af": {
    "min": 500,
    "max": 1200,
    "meal": "小吃购买",
    "note": "按小份糖炒栗子预留；两人分食一包可以降低人均。"
  },
  "chef-aa31efcc07e847": {
    "min": 1000,
    "max": 2200,
    "meal": "巧克力／饮品",
    "note": "按巧克力小点与饮品预留，不含礼盒与大量购买。"
  },
  "chef-27587f08479b99": {
    "min": 700,
    "max": 1500,
    "meal": "一杯茶饮",
    "note": "按抹茶或日本茶饮预留；甜点与茶叶购买另计。"
  },
  "chef-f01a36459b60f5": {
    "min": 40000,
    "max": 60000,
    "meal": "晚餐",
    "note": "预约页普通晚餐36,300／54,450円含税及服务费；预算预留饮品，高阶套餐另计。午餐22,000円起；不含包间费。",
    "source": "https://www.tablecheck.com/en/shops/sushi-ojima/reserve"
  },
  "chef-62f61ffe0e1076": {
    "meal": "加拿大巧克力店",
    "note": "这家位于加拿大，非日本餐饮；当地价格尚未核实，不套用日元人均。"
  }
};
function wishlistBudget(p){
 if(p.category!=='food')return '';
 const b=WISHLIST_BUDGETS[p.id];
 if(!b)return '<div class="wishlist-budget">人均预算待确认</div>';
 const money=n=>n.toLocaleString('en-US');
 const price=b.min?money(b.min)+'–'+money(b.max)+' 円（日元）':'';
 const usd=b.min?'约 US$'+money(Math.round(b.min/FX_JPY_PER_USD))+'–'+money(Math.round(b.max/FX_JPY_PER_USD)):'';
 return `<div class="wishlist-budget"><div class="wishlist-budget-label">${b.meal==='伴手礼购买'?'每人购买预算':'人均预算'} · ${esc(b.meal)}</div>${price?'<strong>'+price+'</strong><span class="wishlist-budget-usd">'+usd+'</span>':'<strong>当地价格待确认</strong>'}<details><summary>${b.source?'菜单参考 · 规划预算':'规划估算 · 价格待确认'}</summary><p>${esc(b.note)}</p>${b.source?'<a href="'+esc(b.source)+'" target="_blank" rel="noopener noreferrer">查看菜单／预约价格 ↗</a>':''}<p class="wishlist-budget-fx">2026-10-28 整理；美元按 US$1 ≈ 157 円换算，非实时汇率。预算用于比较，实际账单依点单与到店菜单。</p></details></div>`;
}

/* Geographic references are approximate landmark centers, not entrance navigation. */
const GEO_POINTS={hotel:[35.6686,139.7582],ginza:[35.6716,139.7650],dinner1:[35.6688,139.7603],oden:[35.6696,139.7603],tower:[35.6586,139.7454],sensoji:[35.7148,139.7967],unagi:[35.7118,139.7983],sumida:[35.7135,139.8014],ueno:[35.7122,139.7731],ameyoko:[35.7090,139.7746],sushi:[35.6690,139.7610],meiji:[35.6764,139.6993],maisen:[35.6676,139.7107],omotesando:[35.6652,139.7123],crossing:[35.6595,139.7005],sky:[35.6585,139.7022],gonpachi:[35.6575,139.6953],tsukiji:[35.6653,139.7707],tokyostation:[35.6812,139.7671]};
let mapStyle='comic',geoMap=null,geoLayers=null,geoArrow=null,geoProgress=null,geoDay=0;
function initGeo(){
 if(geoMap)return true;
 if(!window.L){$('#geo-error').hidden=false;return false;}
 geoMap=L.map('flat-map',{zoomControl:false,scrollWheelZoom:false});
 L.control.zoom({position:'topright'}).addTo(geoMap);
 L.control.scale({position:'bottomleft',imperial:false}).addTo(geoMap);
 const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'}).addTo(geoMap);
 tiles.on('tileerror',()=>{$('#geo-error').hidden=false;});
 geoLayers=L.layerGroup().addTo(geoMap);
 geoMap.on('dragstart',()=>{if(tour.running)pauseTour();});
 return true;
}
function renderGeo(day=0,fit=true){
 if(!geoMap)return;geoDay=day;geoLayers.clearLayers();geoArrow=null;geoProgress=null;
 const days=DAYS.filter(d=>!day||d.id===day),bounds=[];
 days.forEach(d=>{const ids=d.stops.filter(id=>GEO_POINTS[id]);const coords=ids.map(id=>GEO_POINTS[id]);bounds.push(...coords);
 L.polyline(coords,{color:d.color,weight:4,opacity:.7,dashArray:'7 9'}).addTo(geoLayers);
 ids.forEach((id,i)=>{const p=PLACES[id];L.marker(GEO_POINTS[id],{title:p.name,icon:L.divIcon({className:'geo-pin',html:`<span style="background:${d.color}">${d.id}.${i+1}</span>`,iconSize:[36,28],iconAnchor:[18,14]})}).addTo(geoLayers).bindTooltip(p.name,{permanent:!!day||['tower','sensoji','ueno','meiji','crossing','tokyostation'].includes(id),direction:i%2?'right':'left',offset:[i%2?18:-18,0]}).on('click',()=>{if(tour.running)pauseTour();openPlace(id);});});
 });
 if(fit&&bounds.length){const mobile=atlas.clientWidth<681;geoMap.fitBounds(bounds,{paddingTopLeft:[mobile?35:330,mobile?245:35],paddingBottomRight:[45,160],maxZoom:15,animate:false});}
}
function geoPaint(points,index,ease){
 if(mapStyle!=='flat'||!geoMap)return;
 const a=GEO_POINTS[points[index].id],b=GEO_POINTS[points[Math.min(index+1,points.length-1)].id];if(!a||!b)return;
 const pos=[a[0]+(b[0]-a[0])*ease,a[1]+(b[1]-a[1])*ease];
 const angle=Math.atan2(-(b[0]-a[0]),(b[1]-a[1])*Math.cos(a[0]*Math.PI/180))*180/Math.PI;
 if(!geoArrow)geoArrow=L.marker(pos,{interactive:false,zIndexOffset:1000,icon:L.divIcon({className:'geo-traveler',html:'<span>➤</span>',iconSize:[36,36],iconAnchor:[18,18]})}).addTo(geoLayers);
 geoArrow.setLatLng(pos);const el=geoArrow.getElement();if(el)el.firstChild.style.transform=`rotate(${angle}deg)`;
 const line=points.slice(0,index+1).map(p=>GEO_POINTS[p.id]).filter(Boolean).concat([pos]);
 if(!geoProgress)geoProgress=L.polyline(line,{color:DAYS[tour.day].color,weight:6}).addTo(geoLayers);else geoProgress.setLatLngs(line);
}
function setMapStyle(style){
 mapStyle=style;atlas.classList.toggle('flat-mode',style==='flat');
 $$('[data-map-style]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mapStyle===style)));
 $('#map-mode-note').textContent=style==='flat'?'真实街区底图 · 地标近似定位 · 虚线为游览顺序，非导航 · 编号＝天数.站次':'漫画地图 · 地理位置为艺术示意 · 点地标看详情';
 if(style==='flat'&&initGeo()){geoMap.invalidateSize();renderGeo(tour.active?tour.day+1:mapDay);if(tour.active)tourPaint();}
}
function showMapDay(day){
 if(tour.active){tourSetDay(day-1);}else{mapDay=day;renderPins();drawMap();if(mapStyle==='flat')renderGeo(day);}
 $('#map-day-select').value=String(day);
}
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.mapStyle)setMapStyle(b.dataset.mapStyle);if(b.dataset.view==='map')requestAnimationFrame(()=>{if(mapStyle==='flat'&&initGeo()){geoMap.invalidateSize();renderGeo(mapDay);}});});
$('#map-day-select').onchange=e=>{const day=Number(e.target.value);if(day)showMapDay(day);else{if(tour.active)stopTour();mapDay=0;renderPins();drawMap();if(mapStyle==='flat')renderGeo(0);}};
$('#begin').onclick=()=>{showView('map');setMapStyle('comic');};
window.addEventListener('resize',()=>{if(mapStyle==='flat'&&geoMap){geoMap.invalidateSize();renderGeo(tour.active?tour.day+1:mapDay);}});

/* A restrained CARTO Voyager vector basemap beneath the Leaflet itinerary. */
const BASEMAP_STYLE_URL='https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json';
let basemapStyleRequest;
function loadQuietBasemap(target){
  if(!basemapStyleRequest)basemapStyleRequest=fetch(BASEMAP_STYLE_URL).then(r=>{if(!r.ok)throw new Error('Basemap style unavailable');return r.json();}).catch(error=>{basemapStyleRequest=null;throw error;});
  basemapStyleRequest.then(original=>{
    if(target!==map&&target!==airportInset)return;
    const style=structuredClone(original);
    for(const layer of style.layers){
      if(/^(housenumber|place_hamlet|boundary_county)/.test(layer.id)){layer.layout={...layer.layout,visibility:'none'};continue;}
      if(layer.type==='symbol'&&layer.layout?.['text-field']){
        layer.layout['text-field']=['coalesce',['get','name:zh'],['get','name:en'],['get','name']];
        layer.layout['text-padding']=4;
        layer.layout['text-allow-overlap']=false;
        if(layer.id==='roadname_minor')layer.minzoom=16;
      }
      if(layer.id==='background')layer.paint['background-color']='#f5f4ef';
      if(layer.id==='water')layer.paint['fill-color']='#b9dce8';
      if(layer.id==='landuse_residential')layer.paint['fill-opacity']=.25;
    }
    const font=['Open Sans Regular','Noto Sans Regular','Noto Sans CJK JP Regular'];
    style.sources['trip-context']={type:'geojson',data:new URL('map-context.geojson',location.href).href};
    style.layers.push({id:'context-stations',type:'circle',source:'trip-context',minzoom:11,paint:{'circle-radius':3,'circle-color':'#647d8d','circle-stroke-width':1.5,'circle-stroke-color':'#fff'}});
    style.layers.push({id:'context-station-names',type:'symbol',source:'trip-context',minzoom:12,layout:{'text-field':['concat',['get','name'],' 站'],'text-font':font,'text-size':12,'text-anchor':'top','text-offset':[0,.6],'text-padding':5},paint:{'text-color':'#465f70','text-halo-color':'#fff','text-halo-width':2}});
    const landmarks=Object.entries(JOURNEY_POINTS).filter(([id,p])=>p.coord&&id!=='hotel').map(([id,p])=>({type:'Feature',geometry:{type:'Point',coordinates:[p.coord[1],p.coord[0]]},properties:{name:p.name}}));
    style.sources['trip-landmarks']={type:'geojson',data:{type:'FeatureCollection',features:landmarks}};
    style.layers.push({id:'context-landmark-names',type:'symbol',source:'trip-landmarks',minzoom:13,layout:{'text-field':['get','name'],'text-font':font,'text-size':11,'text-anchor':'left','text-offset':[.8,0],'text-padding':6},paint:{'text-color':'#7c7059','text-halo-color':'#fff','text-halo-width':2}});
    const layer=L.maplibreGL({style,interactive:false,attributionControl:false,padding:.15}).addTo(target);
    let failures=0;
    layer.getMaplibreMap().on('error',()=>{if(target===map&&++failures>=3)q('#map-caption').textContent='底图部分内容未加载，刷新可重试；行程地点与路线仍可查看';});
  }).catch(()=>{if(target===map)q('#map-caption').textContent='道路底图暂时不可用，刷新可重试；行程地点与路线仍可查看';});
}

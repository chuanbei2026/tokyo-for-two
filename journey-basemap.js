/* A restrained CARTO Voyager vector basemap beneath the Leaflet itinerary. */
const BASEMAP_STYLE_URL='https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json';
let basemapStyleRequest;
function loadQuietBasemap(target){
  if(!basemapStyleRequest)basemapStyleRequest=fetch(BASEMAP_STYLE_URL).then(r=>{if(!r.ok)throw new Error('Basemap style unavailable');return r.json();}).catch(error=>{basemapStyleRequest=null;throw error;});
  basemapStyleRequest.then(original=>{
    if(target!==map)return;
    const style=structuredClone(original);
    for(const layer of style.layers){
      if(/^(poi_|building|housenumber|place_hamlet|place_villages|roadname_minor|boundary_county)/.test(layer.id)){layer.layout={...layer.layout,visibility:'none'};continue;}
      if(layer.type==='symbol'&&layer.layout?.['text-field']){
        layer.layout['text-field']=['coalesce',['get','name:zh'],['get','name:en'],['get','name']];
        layer.layout['text-padding']=12;
        layer.layout['text-allow-overlap']=false;
        if(layer.id.startsWith('roadname_'))layer.minzoom=Math.max(layer.minzoom||0,15);
      }
      if(layer.id==='background')layer.paint['background-color']='#f5f4ef';
      if(layer.id==='water')layer.paint['fill-color']='#b9dce8';
      if(layer.id==='landuse_residential')layer.paint['fill-opacity']=.25;
    }
    const layer=L.maplibreGL({style,interactive:false,attributionControl:false,padding:.15}).addTo(target);
    let failures=0;
    layer.getMaplibreMap().on('error',()=>{if(target===map&&++failures>=3)q('#map-caption').textContent='底图部分内容未加载，刷新可重试；行程地点与路线仍可查看';});
  }).catch(()=>{if(target===map)q('#map-caption').textContent='道路底图暂时不可用，刷新可重试；行程地点与路线仍可查看';});
}

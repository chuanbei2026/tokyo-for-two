/* White street basemap with real roads and restrained geographic labels. */
const BASEMAP_STYLE_URL='https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
let basemapStyleRequest;
function loadQuietBasemap(target){
 if(!basemapStyleRequest)basemapStyleRequest=fetch(BASEMAP_STYLE_URL).then(r=>{if(!r.ok)throw Error('Basemap unavailable');return r.json();}).catch(error=>{basemapStyleRequest=null;throw error;});
 basemapStyleRequest.then(original=>{
  if(target!==map&&target!==airportInset)return;
  const style=structuredClone(original);
  for(const layer of style.layers){
   if(layer.type==='symbol'&&layer.layout?.['text-field']){
    layer.layout['text-field']=['coalesce',['get','name:zh-Hans'],['get','name:zh'],['get','name:en'],['get','name']];
    layer.layout['text-allow-overlap']=false;
   }
  }
  const layer=L.maplibreGL({style,interactive:false,attributionControl:false,padding:.15}).addTo(target);
  let failures=0;
  layer.getMaplibreMap().on('error',()=>{if(target===map&&++failures===3)q('#map-caption').textContent='街道底图加载异常，请刷新重试；行程地点和路线仍可查看';});
 }).catch(()=>{if(target===map)q('#map-caption').textContent='街道底图未加载，请刷新重试；行程地点和路线仍可查看';});
}

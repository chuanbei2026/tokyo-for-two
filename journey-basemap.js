/* Restore the original minimal geographic overview beneath current routes. */
function addArea(target,name,coord,cls=''){L.marker(coord,{interactive:false,icon:L.divIcon({className:'district-label '+cls,html:esc(name),iconSize:[100,20],iconAnchor:[50,10]})}).addTo(target);}
function loadQuietBasemap(target){
 const parkStyle={color:'#dfe4d6',weight:1,fillColor:'#e4e8dc',fillOpacity:.8,interactive:false};
 L.polygon([[35.682,139.691],[35.68,139.705],[35.667,139.704],[35.667,139.691]],parkStyle).addTo(target);
 L.polygon([[35.691,139.752],[35.686,139.761],[35.677,139.756],[35.677,139.744],[35.685,139.745]],parkStyle).addTo(target);
 L.polygon([[35.721,139.773],[35.719,139.78],[35.71,139.778],[35.712,139.77]],parkStyle).addTo(target);
 L.polyline([[35.746,139.805],[35.736,139.803],[35.726,139.807],[35.717,139.803],[35.71,139.801],[35.702,139.794],[35.691,139.792],[35.681,139.788],[35.674,139.786],[35.667,139.777],[35.652,139.775],[35.637,139.783]],{color:'#d0dfe0',weight:13,smoothFactor:3,interactive:false}).addTo(target);
 L.polyline([[35.707,139.735],[35.703,139.75],[35.699,139.765],[35.697,139.778],[35.696,139.791]],{color:'#d0dfe0',weight:4,smoothFactor:2,interactive:false}).addTo(target);
 [['新宿',[35.696,139.7]],['皇居',[35.684,139.753]],['上野',[35.715,139.774]],['港区',[35.655,139.732]],['代代木',[35.671,139.692]],['浅草',[35.72,139.792]],['隅田川',[35.691,139.805]]].forEach(([n,p])=>addArea(target,n,p,n==='隅田川'?'river-label':''));
}

/* Illustrated itinerary playback; route lines are schematic, not transit tracks. */
const tour = {running:false,active:false,day:0,elapsed:0,last:0,frame:0,speed:1,stop:-1};
const tourDays=DAYS.map(d=>({...d,points:d.stops.filter(id=>id!=='departure').map(id=>({id,...PLACES[id]}))}));
const reducedTourMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
const tourSVG=document.createElementNS('http://www.w3.org/2000/svg','svg');
tourSVG.id='tour-route';tourSVG.setAttribute('viewBox','0 0 1500 1000');tourSVG.setAttribute('aria-hidden','true');
tourSVG.innerHTML='<path class="tour-track"/><path class="tour-progress"/><g class="tour-arrow"><circle r="22"/><path d="M-10,-9 L13,0 L-10,9 L-5,0 Z"/></g>';
world.append(tourSVG);
const tourPanel=$('#tour-panel'),tourToggle=$('#tour-toggle');
function tourDuration(){return Math.max(1,tourDays[tour.day].points.length-1)*3000+2200;}
function tourPaint(){
 const d=tourDays[tour.day],points=d.points;
 const t=Math.max(0,tour.elapsed-1100)/3000;
 const index=Math.min(points.length-1,Math.floor(t));
 const fraction=index===points.length-1?0:Math.min(1,(t-index)*1.5);
 const ease=reducedTourMotion.matches?0:fraction*fraction*(3-2*fraction);
 const p=points[index],next=points[Math.min(index+1,points.length-1)];
 const x=(p.x+(next.x-p.x)*ease)*15,y=(p.y+(next.y-p.y)*ease)*10;
 const completed=points.slice(0,index+1).map(p=>[p.x*15,p.y*10]);completed.push([x,y]);
 tourSVG.querySelector('.tour-progress').setAttribute('d','M'+completed.map(p=>p.join(',')).join(' L'));
 const angle=Math.atan2(next.y*10-p.y*10,next.x*15-p.x*15)*180/Math.PI;
 tourSVG.querySelector('.tour-arrow').setAttribute('transform',`translate(${x} ${y}) scale(${1/zoom}) rotate(${angle})`);
 const stopIndex=ease>=.98?Math.min(index+1,points.length-1):index;
 if(tour.stop!==stopIndex){tour.stop=stopIndex;$('#tour-place').textContent=points[stopIndex].name;$('#tour-detail').dataset.place=points[stopIndex].id;$('#tour-count').textContent=`${stopIndex+1} / ${points.length} 站`;}
 $('#tour-progress').value=(tour.day+Math.min(1,tour.elapsed/tourDuration()))/4*100;
}
function tourSetDay(day){
 tour.day=day;tour.elapsed=0;tour.stop=-1;const d=tourDays[day];
 mapDay=d.id;renderPins();$$('.day-card').forEach(b=>b.classList.toggle('active',Number(b.dataset.mapDay)===d.id));
 atlas.style.setProperty('--tour-color',d.color);
 $('#tour-day').textContent=`DAY 0${d.id} · ${dateLabel(d.id)}`;$('#tour-title').textContent=d.short;
 $('#tour-note').textContent=d.id===4?'市区最后两站；机场不在此插画范围内。':'跟着箭头看今天的顺序 · 路线为示意';
 const points=d.points;drawMap();
 tourSVG.querySelector('.tour-track').setAttribute('d','M'+points.map(p=>`${p.x*15},${p.y*10}`).join(' L'));tourPaint();
}
function tourTick(now){if(!tour.running)return;if(tour.last)tour.elapsed+=Math.min(now-tour.last,100)*tour.speed;tour.last=now;
 if(tour.elapsed>=tourDuration()){if(tour.day<3)tourSetDay(tour.day+1);else if($('#tour-loop').checked)tourSetDay(0);else{tour.elapsed=tourDuration();tourPaint();pauseTour();tourToggle.textContent='↻ 再看一遍';return;}}
 tourPaint();tour.frame=requestAnimationFrame(tourTick);
}
function pauseTour(){tour.running=false;tour.last=0;cancelAnimationFrame(tour.frame);tourToggle.textContent='▶ 继续';tourToggle.setAttribute('aria-label','继续播放旅程');}
function resumeTour(){if(tour.elapsed>=tourDuration()&&tour.day===3)tourSetDay(0);tour.running=true;tour.last=0;tourToggle.textContent='Ⅱ 暂停';tourToggle.setAttribute('aria-label','暂停播放旅程');tour.frame=requestAnimationFrame(tourTick);}
function startTour(){closeDrawer();tour.active=true;atlas.classList.add('tour-active');tourPanel.hidden=false;$('#start-tour').hidden=true;tourSetDay(0);resumeTour();tourToggle.focus();}
function stopTour(){pauseTour();tour.active=false;tourPanel.hidden=true;atlas.classList.remove('tour-active');$('#start-tour').hidden=false;world.style.transition='';resetMap();}
$('#start-tour').onclick=startTour;tourToggle.onclick=()=>tour.running?pauseTour():resumeTour();
$('#tour-restart').onclick=()=>{tourSetDay(0);if(!tour.running)resumeTour();};
$('#tour-next').onclick=()=>{tourSetDay((tour.day+1)%4);};
$('#tour-exit').onclick=()=>{stopTour();$('#start-tour').focus();};
$('#tour-speed').onchange=e=>{tour.speed=Number(e.target.value);};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&tour.running)pauseTour();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&tour.active){stopTour();$('#start-tour').focus();}});
document.addEventListener('click',e=>{if(!tour.active)return;const b=e.target.closest('button,a');if(!b)return;if(b.dataset.place){pauseTour();}else if(b.dataset.view||b.dataset.mapDay||b.dataset.panel||b.matches('.brand')||b.id==='reset-map'){stopTour();}},true);
window.addEventListener('resize',()=>{if(tour.active){pauseTour();tourSetDay(tour.day);}});

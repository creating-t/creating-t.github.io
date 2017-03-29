function id(el){
  return document.getElementById(el);
}
function do_animation(el,state){
  return id(el).style.animationPlayState=state;
}
//---------------------------------------------------//
var flag=0,S=0,H=0,M=0;
function animationPause(){
  flag=0;
  do_animation('secondPointer','paused');
  do_animation('minutePointer','paused');
  do_animation('hourPointer','paused');
  do_animation('getS','paused');
  do_animation('getM','paused');
  do_animation('getH','paused');
  id('begin').style.display='block';
  id('end').style.display='none';
  get=clearInterval(get);
}
function animationRun(){
  flag=1,H=id("hourInput").value,M=id("minuteInput").value,S=id("secondInput").value;
  if(H=='H'||H=='时'){H=0};
  if(M=='M'||M=='间'){M=0};
  if(S=='S'||S=='到'){S=0};
  stopAudio();
  do_animation('secondPointer','running');
  do_animation('minutePointer','running');
  do_animation('hourPointer','running');
  do_animation('getS','running');
  do_animation('getM','running');
  do_animation('getH','running');
  id('begin').style.display='none';
  id('end').style.display='block';
  get=setInterval('getTime()',100);
}
function getTime(){
  s=S-parseInt(Number(getComputedStyle(id('getS')).width.slice(0,-2)));
  m=M-parseInt(Number(getComputedStyle(id('getM')).width.slice(0,-2)));
  h=H-parseInt(Number(getComputedStyle(id('getH')).width.slice(0,-2)));
  if(s<=0&&(m>=0||h>=0)){s+=60,m-=1};
  if(m<0&&h>=0){m+=60,h-=1};
  if(h<0){s="到",m="间",h="时";animationPause();id('em').src="audio.mp3";};
  id('hourInput').value=h;
  id('minuteInput').value=m;
  id('secondInput').value=s;
}
function stopAudio(){
  id('em').src='#';
}
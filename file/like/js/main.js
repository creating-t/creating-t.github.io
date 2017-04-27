//进入全屏
function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }
};
//退出全屏
function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
};
//自动切换
function toggleFullScreen() {  
        if (!document.fullscreenElement && // alternative standard method  
            !document.mozFullScreenElement && !document.webkitFullscreenElement) {// current working methods  
            if (document.documentElement.requestFullscreen) {  
                document.documentElement.requestFullscreen();  
            } else if (document.documentElement.mozRequestFullScreen) {  
                document.documentElement.mozRequestFullScreen();  
            } else if (document.documentElement.webkitRequestFullscreen) {  
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);  
            }  
        } else {  
            if (document.cancelFullScreen) {  
                document.cancelFullScreen();  
            } else if (document.mozCancelFullScreen) {  
                document.mozCancelFullScreen();  
            } else if (document.webkitCancelFullScreen) {  
                document.webkitCancelFullScreen();  
            }  
        }  
    };
$(document).ready(function(){
  var status=1,times=0;
  $("#no").mouseover(function(){
    if(times<4){
    if(status){
    $("#no").css("left","320px");
    $("#yes").css("left","400px");status=0;}
    else{$("#no").css("left","400px");
    $("#yes").css("left","320px");status=1;}
    }
    else{
    if(status){
    $("#no").css("top","100px");status=0;}
    else{
    $("#no").css("top","200px");status=1;}
    }
    times++;
  });
});
window.onbeforeunload = function(){return "关闭窗口也改变不了你喜欢我的事实！";};

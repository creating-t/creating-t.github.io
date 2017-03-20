$(document).ready(function(){
  $(".hamburger").click(function(){
  $(this).toggleClass("is-active");
  $("#menu").toggle(300);
  });
});
function id(el){        //减少代码量
  return document.getElementById(el);
};
function excg(url){     //更换背景
  id("musicbg").style.backgroundImage=url;
};
function windclose(){   //每次切换时关闭wind（清明上河图窗口）
  id("wind").src="none";
  id("wind").style.display="none";
  id("play_pause_btn").style.display="block";
  id("iframeClose").style.display="none";
  id("play_pause_btn").className='pauseBtn';
};
function btn01(){       //打开wind
  id("music").src="#";
  id('play_pause_btn').style.display="none";
  excg("url('imgs/img01.png')");
  id("iframeClose").style.display="block";
	id("wind").style.display="block";
	id("wind").src="https://creating-t.github.io/file/music/";
};
function btn02(){       //切换第二首
  windclose();
  id("music").src="music/xgfzuijiu.mp3";
  excg("url('imgs/img02.bmp')");
};
function btn03(){       //切换第三首
  windclose();
  id("music").src="music/ghyjianni.mp3";
  excg("url('imgs/img03.png')");
};
function btn04(){       //切换第四首
  windclose();
  id("music").src="music/gjsmdbuganla.mp3";
  excg("url('imgs/img04.jpg')");
};
function btn05(){       //切换第五首
  windclose();
  id("music").src="music/qianbenying.mp3";
  excg("url('imgs/img05.png')");
};
function btn06(){       //切换第六首
  windclose();
  id("music").src="music/yanyuan.mp3";
  excg("url('imgs/img06.bmp')");
};
function btn07(){       //切换第七首
  windclose();
  id("music").src="music/youdiantian.mp3";
  excg("url('imgs/img07.png')");
};
function btn08(){       //切换第八首
  windclose();
  id("music").src="music/tkzhicheng.mp3";
  excg("url('imgs/img08.jpg')");
};
function btn09(){       //切换第九首
  windclose();
  id("music").src="music/xiaoxingyun.mp3";
  excg("url('imgs/img09.jpg')");
};
function play_pauseBtn(){
  if(id("music").paused){
  id("music").play();
  id("play_pause_btn").className='pauseBtn';
}
  else {
  id("music").pause();
  id("play_pause_btn").className='playBtn';
  };
};
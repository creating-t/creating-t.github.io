var id = function(el) {
	            return document.getElementById(el);        
				},
        c = id('photo-list');
           
if(c) {
    var ul = id('scroll'),
        lis = ul.getElementsByTagName('li'),
        itemCount = lis.length,
        width = lis[0].offsetWidth, //获得每个img容器的宽度
        marquee = function() {
            c.scrollLeft += 2;
            if(c.scrollLeft % width <= 1){  //当 c.scrollLeft 和 width 相等时，把第一个img追加到最后面
               ul.appendChild(ul.getElementsByTagName('li')[0]);
                c.scrollLeft = 0;
            };
        },
        speed = 34; //数值越大越慢
   ul.style.width = width*itemCount + 'px'; //加载完后设置容器长度        
    var timer = setInterval(marquee, speed);
    c.onmouseover = function(){
    document.getElementById("em").pause();
        clearInterval(timer);};
    c.onmouseout = function() {
    document.getElementById("em").play();
        timer = setInterval(marquee, speed);
    };//鼠标停留时暂停动画和bgm
};

var lrc=new Array()     //想起我的纯手工歌词就心疼我自己
lrc.push('[00:00.11]加载完成^o^')
lrc.push('[00:00.22]')
lrc.push('[00:02.00]洛天依 - 清明上河图')
lrc.push('[00:08.00]~这是天依老婆版~')
lrc.push('[00:10.00]作词：高进 作曲：高进')
lrc.push('[00:16.00]')
lrc.push('[00:18.00]歌词编辑：涂华武')
lrc.push('[00:24.00]QQ：1789912638')
lrc.push('[00:30.00]')
lrc.push('[00:32.47]我俯身看去')
lrc.push('[00:35.76]那一帘秋雨')
lrc.push('[00:39.49]落下的水滴')
lrc.push('[00:42.58]却悄无声息')
lrc.push('[00:46.19]雕刻在石碑上的印记')
lrc.push('[00:49.48]是否隐藏着秘密')
lrc.push('[00:52.97]在你的眼神中')
lrc.push('[00:55.00]我看到了情丝万缕')
lrc.push('[00:58.35]')
lrc.push('[01:00.45]古巷的忧郁')
lrc.push('[01:03.55]写下琵琶的旋律')
lrc.push('[01:07.95]飘逸的外衣')
lrc.push('[01:10.71]街上叫卖的小曲')
lrc.push('[01:14.34]仿佛隔空变换到那里')
lrc.push('[01:17.84]一切模糊又清晰')
lrc.push('[01:21.30]几秒钟的世界')
lrc.push('[01:23.08]感叹不平凡的意义')
lrc.push('[01:26.95]')
lrc.push('[01:28.69]绫罗飘起遮住日落西')
lrc.push('[01:31.81]奏一回断肠的古曲')
lrc.push('[01:35.42]抬起画面如此的美丽')
lrc.push('[01:38.78]孰不知是谁的墨笔')
lrc.push('[01:42.35]淡淡胭脂遮住了思绪')
lrc.push('[01:45.83]小酌几杯却有醉意')
lrc.push('[01:49.45]多少能人将相 书画三千里')
lrc.push('[01:53.31]上河图雕琢的意义')
lrc.push('[01:56.99]')
lrc.push('[02:10.07]QQ：1789912638')
lrc.push('[02:18.89]')
lrc.push('[02:32.25]古巷的忧郁')
lrc.push('[02:35.27]写下琵琶的旋律')
lrc.push('[02:39.40]飘逸的外衣')
lrc.push('[02:42.35]街上叫卖的小曲')
lrc.push('[02:46.19]仿佛隔空变换到那里')
lrc.push('[02:49.57]一切模糊又清晰')
lrc.push('[02:52.98]几秒钟的世界')
lrc.push('[02:54.80]感叹不平凡的意义')
lrc.push('[02:58.62]')
lrc.push('[03:00.59]绫罗飘起遮住日落西')
lrc.push('[03:03.56]奏一回断肠的古曲')
lrc.push('[03:07.05]抬起画面如此的美丽')
lrc.push('[03:10.53]孰不知是谁的墨笔')
lrc.push('[03:14.14]淡淡胭脂遮住了思绪')
lrc.push('[03:17.63]小酌几杯却有醉意')
lrc.push('[03:21.21]多少能人将相 书画三千里')
lrc.push('[03:25.04]上河图雕琢的意义')
lrc.push('[03:28.67]绫罗飘起遮住日落西')
lrc.push('[03:31.77]奏一回断肠的古曲')
lrc.push('[03:35.45]抬起画面如此的美丽')
lrc.push('[03:38.80]孰不知是谁的墨笔')
lrc.push('[03:42.36]淡淡胭脂遮住了思绪')
lrc.push('[03:45.80]小酌几杯却有醉意')
lrc.push('[03:49.34]多少能人将相 书画三千里')
lrc.push('[03:53.12]上河图雕琢的意义')
lrc.push('[03:57.60]')
lrc.push('[03:59.89]你看完了?握草666 一定是真爱')
lrc.push('[04:08.99]献上一个多大的么么哒 ')
lrc.push('[04:18.99]')
var ss=new Array()//储存lrc里提取的时间
var te=new Array()//储存lrc里提取的文字
for(i=0;i<lrc.length;i++)
{
var time=lrc[i].match(/[0-9]+/g);
	text=lrc[i].match(/].+/g);
	var text=new String(text);
	te.push(text.substring(1));
	ss.push(time[0]*60+time[1]*1+time[2]*0.01);//精确到.00
}
 
function btn(){
    stime=document.getElementById("em").currentTime;
    //return stime;
    };
    setInterval("btn()" ,100);   //每0.1秒获取一次播放进度

function lll(){     //这个函数里我是模模糊糊混过来的, stime哪来的?上面那函数我没有使stime出来吧
for(i=0;i<lrc.length;i++){
    if(stime<ss[i]+0.1 && stime>ss[i]-0.1)
    {//优化null造成的显示'ull'情况
	    if(te[i]!='ull'){
    document.getElementById("demo").innerHTML=te[i]}
	    else {document.getElementById("demo").innerHTML=""}
    }
  }
}
setInterval("lll()" ,100);//每0.1秒匹配一次歌词

/*
累死了,写这个破东西,终于解放了,好好学习高数物理英语吧,不然学业警示了就不好了.
*/

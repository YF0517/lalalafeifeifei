var onesongtxt=document.getElementById("onesongtxt").value;
var twosongtxt=document.getElementById("twosongtxt").value;
var threesongtxt=document.getElementById("threesongtxt").value;
var myMusic=document.getElementById("myMusic");
var con=document.getElementById("lryc");
var play = document.getElementById("play");
var onOff=true;
var songone = document.getElementById("songone");
var songtwo = document.getElementById("songtwo");
var songthree = document.getElementById("songthree");
var text=document.getElementById("text");
var next=document.getElementById("next");
var up = document.getElementById("up");
songone.onclick = function(){
	var name = document.getElementById("songone").innerHTML;
	document.getElementById("get_songname").innerHTML = name;
	document.getElementById("get_singer").innerHTML = "蔡徐坤";
	document.getElementById("get_CD").innerHTML =   "19";
	document.getElementById("pic").src = "img/music/a71ea8d3fd1f413402342376291f95cad1c85eb2.jpg";
	oPage.style.top = "0px";
	myMusic.src = "img/music/蔡徐坤 - I Wanna Get Love(1).mp3";
	document.getElementById("bg_pic").style.background = "rgba(255,0,0,.3)"
	document.getElementById("bg_pic").style.background = "url(img/music/a71ea8d3fd1f413402342376291f95cad1c85eb2.jpg))";
	document.getElementById("bg_pic").style.backgroundSize = "cover";
	text.innerHTML = onesongtxt;
	play.onclick();
	geci();
}
songtwo.onclick = function(){
	var name = document.getElementById("songtwo").innerHTML;
	document.getElementById("get_songname").innerHTML = name;
	document.getElementById("get_singer").innerHTML = "Adele";
	document.getElementById("get_CD").innerHTML =   "25";
	document.getElementById("pic").src = "img/music/T002R300x300M000001wah0o0iX7Vq.jpg";
	oPage.style.top = "0px";
	myMusic.src = "img/music/Adele - Million Years Ago.mp3";
	document.getElementById("bg_pic").style.background = "url(img/music/T002R300x300M000001wah0o0iX7Vq.jpg)";
	document.getElementById("bg_pic").style.backgroundSize = "cover";
	text.innerHTML = twosongtxt;
	play.onclick();
	geci();
}
songthree.onclick = function(){
	var name = document.getElementById("songthree").innerHTML;
	document.getElementById("get_songname").innerHTML = name;
	document.getElementById("get_singer").innerHTML = "Knights";
	document.getElementById("get_CD").innerHTML =   "25";
	document.getElementById("pic").src = "img/music/u=57990691,3401937141&fm=27&gp=0.jpg";
	oPage.style.top = "0px";
	myMusic.src = "img/music/Knights - Silent Oath.mp3";
	document.getElementById("bg_pic").style.background = "url(img/music/u=57990691,3401937141&fm=27&gp=0.jpg)";
	document.getElementById("bg_pic").style.backgroundSize = "cover";
	text.innerHTML = threesongtxt;
	play.onclick();
	geci();
}
next.onclick = function(){
	var songname = document.getElementById("get_songname").innerHTML;
	if(songname == "I wanna get love"){
		songtwo.onclick();
	}else if(songname == "Million Years Ago"){
		songthree.onclick();
	}
}
up.onclick = function(){
	var songname = document.getElementById("get_songname").innerHTML;
	if(songname == "Million Years Ago"){
		songone.onclick();
	}else if(songname == "Slient Oath"){
		songtwo.onclick();
	}
}
play.onclick = function(){
	if(onOff){
		myMusic.play();
		onOff = false;
		play.style.backgroundPositionX = -28+"px";
		play.style.backgroundPositionY = -1+"px";
	}else{
		myMusic.pause();
		onOff = true;
		play.style.backgroundPositionX = 0+"px";
		play.style.backgroundPositionY = -1+"px";
	}
}
var aP;
var tiao=0;//存放音乐的总时长
var oPage=document.getElementById("page");
function geci(){
	//歌词同步
	//1.获取歌词并添加到歌词盒子中
	var html='';
	var end=document.getElementById("end");//获取音乐播放总时间
	var arr=text.value.split("[");
	//console.log(arr);
	var musictime=0;
for(var i=0;i<arr.length;i++){
	var lrc=arr[i].split("]");//从“]”处切开
	var times=lrc[0].split(".");//从"."处切开
	//console.log(lrc[0]);
	var time=times[0].split(":");//从“：”处切开
	//console.log(time);
	var cut=time[0]*60+time[1]*1;//把分钟化成秒钟并和秒钟加起来用于作为p标签的id名
	tiao=cut;//存放音乐的总时长
	musictime=time[0]+":"+time[1];
	//musictime="0"+(myMusic.duration)/60+":"+(myMusic.duration)%60;
	//console.log(musictime);
	if(lrc[1]){
		html+="<p id="+cut+">"+lrc[1]+"</p>";//给每个<p>标签添加id
		
		}
	}
	oPage.innerHTML=html;
	//console.log(html);
	aP=oPage.getElementsByTagName("p");
	end.innerHTML=musictime;
}
	
	//console.log(end);
	console.log(aP);
	var n=0;//用来存放多少行
	//2.实现歌词同步
	//2.1监听歌曲播放的进度
myMusic.addEventListener("timeupdate",function(){
	//console.log(this.currentTime);
	var strat=document.getElementById("str");//获取音乐播放时间
	var jdt=document.getElementById("jdt");
	var curt=parseInt(this.currentTime); //获取歌曲的播放时间并取整数赋给curt
	strat.innerHTML="0"+parseInt(curt/60)+":"+(curt%60);
	var na = document.getElementById("name");
	na.innerHTML = name;
	//console.log(strat.innerHTML);
	//console.log(this.currentTime);
	
	//console.log(jdt.style.marginLeft);
	if(document.getElementById(curt)){
		//把原先的歌词都变为原来的颜色和字号
		for(var i=0;i<aP.length;i++){
			aP[i].style.color="#ccc";
			aP[i].style.fontSize="9px";
			aP[i].style.fontWeight="none";
			}
			//再把当前的改为红色
			document.getElementById(curt).style.color="mediumseagreen";
			document.getElementById(curt).style.fontSize="12px";
			document.getElementById(curt).style.fontWeight="300";
			
			if(aP[n+2]&&aP[n+2].id==curt){
				oPage.style.top=-n*20+"px";
				n++;
				}
		}
		if(curt>=1){
		jdt.style.marginLeft=-490+curt*(470/tiao)+"px";
	}
	});
	/*监听歌曲是否播放完成*/
myMusic.addEventListener("ended",function(){
			var jdt=document.getElementById("jdt");
			jdt.style.marginLeft="-20px";
			oimg.className="im";
			onOff=true;
			oPage.style.top="0px";
			oPlay.style.backgroundImage = "url('img\music\T002R300x300M000001wah0o0iX7Vq.jpg')";
});
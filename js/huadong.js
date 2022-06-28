var main1 = document.getElementById("main1");
var display = document.getElementById("display1")
var yuanquan1 = document.getElementById("yuanquan").getElementsByTagName("li");
var index = 0;
var leftbtn1 = document.getElementById("left1");
var rigntbtn1 = document.getElementById("right1");
var main22 = document.getElementById("main22");
var display2 = document.getElementById("display2");
var yuanquan2 = document.getElementById("yuanquan2").getElementsByTagName("li");
var leftbtn2 = document.getElementById("left2");
var rigntbtn2 = document.getElementById("right2");
var main33 = document.getElementById("main33");
var display3 = document.getElementById("display3");
var yuanquan3 = document.getElementById("yuanquan3").getElementsByTagName("li");
var leftbtn3 = document.getElementById("left3");
var rigntbtn3 = document.getElementById("right3");

var main44 = document.getElementById("main44");
var display4 = document.getElementById("display4");
var yuanquan4 = document.getElementById("yuanquan4").getElementsByTagName("li");
var leftbtn4 = document.getElementById("left4");
var rigntbtn4 = document.getElementById("right4");

var main66 = document.getElementById("main66");
var display6 = document.getElementById("display6");
var yuanquan6 = document.getElementById("yuanquan6").getElementsByTagName("li");
var leftbtn6 = document.getElementById("left6");
var rigntbtn6 = document.getElementById("right6");

function chanage6(num){
	for(var i = 0; i < yuanquan6.length; i++){
		yuanquan6[i].className = '';
	}
	yuanquan4[num].className = 'on';
	display6.style.marginLeft = num * -1190 + "px";
	index = num;
}
function chanage4(num){
	for(var i = 0; i < yuanquan4.length; i++){
		yuanquan4[i].className = '';
	}
	yuanquan4[num].className = 'on';
	display4.style.marginLeft = num * -1204 + "px";
	index = num;
}

function chanage3(num){
	for(var i = 0; i < yuanquan3.length; i++){
		yuanquan3[i].className = '';
	}
	yuanquan3[num].className = 'on';
	display3.style.marginLeft = num * -1204 + "px";
	index = num;
}
function chanage2(num){
	for(var i = 0; i < yuanquan2.length; i++){
		yuanquan2[i].className = '';
	}
	yuanquan2[num].className = 'on';
	display2.style.marginLeft = num * -1233 + "px";
	index = num;
}
function chanage(num){
	for(var i = 0; i < yuanquan1.length; i++){
		yuanquan1[i].className = '';
	}
	yuanquan1[num].className = 'on';
	display.style.marginLeft = num * -1200 + "px";
	index = num;
}
leftbtn1.onclick = function(){
	index++;
	if(index >= yuanquan1.length){
		index = 0;
	}
	chanage(index);
}
rigntbtn1.onclick = function(){
	index++;
	if(index >= yuanquan1.length){
		index = 0;
	}
	chanage(index);
}
leftbtn2.onclick = function(){
	index++;
	if(index >= yuanquan2.length){
		index = 0;
	}
	chanage2(index);
}
rigntbtn2.onclick = function(){
	index++;
	if(index >= yuanquan2.length){
		index = 0;
	}
	chanage2(index);
}
leftbtn3.onclick = function(){
	index++;
	if(index >= yuanquan3.length){
		index = 0;
	}
	chanage3(index);
}
rigntbtn3.onclick = function(){
	index++;
	if(index >= yuanquan3.length){
		index = 0;
	}
	chanage3(index);
}
leftbtn4.onclick = function(){
	index++;
	if(index >= yuanquan4.length){
		index = 0;
	}
	chanage4(index);
}
rigntbtn4.onclick = function(){
	index++;
	if(index >= yuanquan4.length){
		index = 0;
	}
	chanage4(index);
}

leftbtn6.onclick = function(){
	index++;
	if(index >= yuanquan6.length){
		index = 0;
	}
	chanage6(index);
}
rigntbtn6.onclick = function(){
	index++;
	if(index >= yuanquan6.length){
		index = 0;
	}
	chanage6(index);
}
var container = document.getElementById("container");
var image = document.getElementById("img");

var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");

var count1 = 0;
var count2 = 0;
var count3 = 0;

btn1.onclick = button1;
btn2.onclick = button2;
btn3.onclick = button3;

btn1.innerHTML = count1;
btn2.innerHTML = count2;
btn3.innerHTML = count3;

function button1() {
	container.style.background = "url(images/bg1.jpg)";
	image.style.background = "url(images/1.jpg)";
	image.style.backgroundSize = "cover";
	button1Clicked();
}

function button2() {
	container.style.background = "url(images/bg2.jpg)";
	image.style.background = "url(images/2.jpg)";
	image.style.backgroundSize = "cover";
	button2Clicked();
}

function button3() {
	container.style.background = "url(images/bg3.jpg)";
	image.style.background = "url(images/3.jpg)";
	image.style.backgroundSize = "cover";
	button3Clicked();
}

function button1Clicked() {
	count1++;
	btn1.innerHTML = count1;
}

function button2Clicked() {
	count2++;
	btn2.innerHTML = count2;
}

function button3Clicked() {
	count3++;
	btn3.innerHTML = count3;
}
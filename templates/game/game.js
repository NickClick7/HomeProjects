var headObj = document.getElementById("head").style;
var xHead = 0;
var yHead = 0;

var ballObj = document.getElementById("ball").style;
var xBall = 0;
var yBall = 100;
var xSpeed = 10;
var ySpeed = 10;

var ballObj2 = document.getElementById("ball2").style;
var xBall2 = 1000;
var yBall2 = 200;
var xSpeed2 = 10;
var ySpeed2 = 10;

var ballObj3 = document.getElementById("ball3").style;
var xBall3 = 500;
var yBall3 = 660;
var xSpeed3 = 10;
var ySpeed3 = 10;

var ballObj4 = document.getElementById("ball4").style;
var xBall4 = 1000;
var yBall4 = 600;
var xSpeed4 = 10;
var ySpeed4 = 10;

var ballObj5 = document.getElementById("ball5").style;
var xBall5 = 500;
var yBall5 = 0;
var xSpeed5 = 10;
var ySpeed5 = 10;

var timerBall;
var timerBall2;
var timerBall3;
var timerBall4;
var timerBall5;

moveBall();
moveBall2();
moveBall3();
moveBall4();
moveBall5();


document.onkeydown = keyDownMoveIt;

function keyDownMoveIt(e) {
	if(e.keyCode == 39) 
		xHead = xHead + 20;	
	if(e.keyCode == 37) 
		xHead = xHead - 20;
	if(e.keyCode == 40) 
		yHead = yHead + 20;
	if(e.keyCode == 38) 
		yHead = yHead - 20;
	if(xHead > 1000 - 70)
		xHead = 1000 - 70;
	if(xHead < 0) 
		xHead = 0;
	if(yHead < 0) 
		yHead = 0;
	if(yHead > 662 - 70)
		yHead = 662 - 70;
	headObj.left = xHead;
	headObj.top = yHead;
}
function moveBall() {
	if(xBall + xSpeed > 1000 - 70)
		xSpeed = (Math.random() * -5 ) -10;
	if(xBall + xSpeed < 0) 
		xSpeed = (Math.random() * 5) +10;
	if(yBall + ySpeed > 662 - 70) 
		ySpeed = (Math.random() * -5) -10;
	if(yBall + ySpeed < 0)
		ySpeed = (Math.random() * 5) +10;

	xBall = xBall + xSpeed;
	yBall = yBall + ySpeed;
	ballObj.top = yBall;
	ballObj.left = xBall;

	timerBall = setTimeout("moveBall()",30);

	if((xHead < xBall + 70) && (xHead + 70 > xBall) && (yHead < yBall + 70) && (yHead + 70 > yBall)) {
		clearTimeout(timerBall);
		document.body.style.backgroundColor = "green";
		document.getElementById("ball").style.display = "none";
		document.getElementById("green").style.display = "block";
	}else{
		document.getElementById("green").style.display = "none";
	}
}
function moveBall2() {
	if(xBall2 + xSpeed2 > 1000 - 70)
		xSpeed2 = (Math.random() * -5 )- 10;
	if(xBall2 + xSpeed2 < 0) 
		xSpeed2 = (Math.random() * 5) + 10;
	if(yBall2 + ySpeed2 > 662 - 70)
		ySpeed2 = (Math.random() * -5) - 10;
	if(yBall2 + ySpeed2 < 0)
		ySpeed2 = (Math.random() * 5) + 10;

	xBall2 = xBall2 + xSpeed2;
	yBall2 = yBall2 + ySpeed2;
	ballObj2.top = yBall2;
	ballObj2.left = xBall2;

	timerBall2 = setTimeout("moveBall2()",40);

	if((xHead < xBall2 + 70) && (xHead + 70 > xBall2) && (yHead < yBall2 + 70) && (yHead + 70 > yBall2)) {
		clearTimeout(timerBall2);
		document.body.style.backgroundColor = "blue";
		document.getElementById("ball2").style.display = "none";
		document.getElementById("blue").style.display = "block";
	}else{
		document.getElementById("blue").style.display = "none";
	}

}

function moveBall3() {
	if(xBall3 + xSpeed3 > 1000 - 70)
		xSpeed3 = (Math.random() * -10)- 10;
	if(xBall3 + xSpeed3 < 0) 
		xSpeed3 = (Math.random() * 10) + 10;
	if(yBall3 + ySpeed3 > 662 - 70)
		ySpeed3 = (Math.random() * -10) - 10;
	if(yBall3 + ySpeed3 < 0)
		ySpeed3 = (Math.random() * 10) + 10;

	xBall3 = xBall3 + xSpeed3;
	yBall3 = yBall3 + ySpeed3;
	ballObj3.top = yBall3;
	ballObj3.left = xBall3;

	timerBall3 = setTimeout("moveBall3()",20);

	if((xHead < xBall3 + 70) && (xHead + 70 > xBall3) && (yHead < yBall3 + 70) && (yHead + 70 > yBall3)) {
		clearTimeout(timerBall3);
		document.body.style.backgroundColor = "pink";
		document.getElementById("ball3").style.display = "none";
		document.getElementById("pink").style.display = "block";
	}else{
		document.getElementById("pink").style.display = "none";
	}

	
}

function moveBall4() {
	if(xBall4 + xSpeed4 > 1000 - 70)
		xSpeed4 = (Math.random() * -5 )- 10;
	if(xBall4 + xSpeed4 < 0) 
		xSpeed4 = (Math.random() * 5) + 10;
	if(yBall4 + ySpeed4 > 662 - 70)
		ySpeed4 = (Math.random() * -5) - 10;
	if(yBall4 + ySpeed4 < 0)
		ySpeed4 = (Math.random() * 5) + 10;

	xBall4 = xBall4 + xSpeed4;
	yBall4 = yBall4 + ySpeed4;
	ballObj4.top = yBall4;
	ballObj4.left = xBall4;

	timerBall4 = setTimeout("moveBall4()",30);

	if((xHead < xBall4 + 70) && (xHead + 70 > xBall4) && (yHead < yBall4 + 70) && (yHead + 70 > yBall4)) {
		clearTimeout(timerBall4);
		document.body.style.backgroundColor = "orange";
		document.getElementById("ball4").style.display = "none";
		document.getElementById("orange").style.display = "block";
	}else{
		document.getElementById("orange").style.display = "none";
	}
}

function moveBall5( ) {
	if(xBall5 + xSpeed5 > 1000 - 70)
		xSpeed5 = (Math.random() * -5 )- 10;
	if(xBall5 + xSpeed5 < 0) 
		xSpeed5 = (Math.random() * 5) + 10;
	if(yBall5 + ySpeed5 > 662 - 70)
		ySpeed5 = (Math.random() * -5) - 10;
	if(yBall5 + ySpeed5 < 0)
		ySpeed5 = (Math.random() * 5) + 10;

	xBall5 = xBall5 + xSpeed5;
	yBall5 = yBall5 + ySpeed5;
	ballObj5.top = yBall5;
	ballObj5.left = xBall5;

	timerBall5 = setTimeout("moveBall5()",20);

	if((xHead < xBall5 + 70) && (xHead + 70 > xBall5) && (yHead < yBall5 + 70) && (yHead + 70 > yBall5)) {
		clearTimeout(timerBall5);
		document.body.style.backgroundColor = "red";
		document.getElementById("ball5").style.display = "none";
		document.getElementById("red").style.display = "block";
	}else{
		document.getElementById("red").style.display = "none";
	}

}

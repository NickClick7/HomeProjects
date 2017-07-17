$(function(){
	var handSec = document.querySelector('.hand-sec');
	var handMin = document.querySelector('.hand-min');
	var handHour = document.querySelector('.hand-hour');
	function setTime() {
		var date = new Date();
		var sec = date.getSeconds();
		var min = date.getMinutes();
		var hour = date.getHours();
		var secDegree = ((sec/60)*360)+90;
		handSec.style.transform = "rotate("+secDegree+"deg)";
		var minDegree = (min/60*360)+90;
		handMin.style.transform = "rotate("+minDegree+"deg)";
		var hourDegree = (hour/12*360)+90;
		handHour.style.transform = "rotate("+hourDegree+"deg)";
		
		console.log(sec, min, hour);
	}
	setInterval(setTime,1000);
});
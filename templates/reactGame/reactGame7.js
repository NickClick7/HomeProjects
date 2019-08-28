	var start;
	var myArray = [];
	function getRandomColor() {
		var letters = "0123456789ABCDEF".split("");
		var color = "#";
		for (var i = 0;i < 6;i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	function makeFormAppear() {
		var top = Math.random() * 400;
		var left = Math.random() * 400;
		var width = (Math.random() * 200) + 50;
		var height = width;
		if (Math.random() > 0.5) {
			document.getElementById("divForm").style.borderRadius = "50%";
		} else {
			document.getElementById("divForm").style.borderRadius = "0";
		}
		document.getElementById("divForm").style.backgroundColor = getRandomColor();
		document.getElementById("divForm").style.top = top + "px";
		document.getElementById("divForm").style.left = left + "px";
		document.getElementById("divForm").style.width = width + "px";
		document.getElementById("divForm").style.height = height + "px";
		document.getElementById("divForm").style.display = "block";
		start = new Date().getTime();
	}
	function appearAfterDelay() {
		setTimeout(makeFormAppear,Math.random() * 2000);
	}
	function countAvarage() {
		var total = 0;
		var avg;
		for (var i =0; i < myArray.length; i++) {
			total += myArray[i];
		}
		avg = total / myArray.length;
		return (avg);

	}
	appearAfterDelay();
	document.getElementById("divForm").onclick = function() {
		document.getElementById("divForm").style.display = "none";
		var end = new Date().getTime();
		var timeTaken = (end - start) / 1000;
		document.getElementById("timeTaken").innerHTML = timeTaken+" s";
		myArray.push(timeTaken);
		if(myArray.length < 10) {
			appearAfterDelay();
		}else {
			alert("Your avarage reaction time is: "+countAvarage());
		}
			
					
	}		

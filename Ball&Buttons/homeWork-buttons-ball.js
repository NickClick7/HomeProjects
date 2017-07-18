window.addEventListener("DOMContentLoaded", function(){
	/* ez volt az eredeti megoldás:
	var ball = document.getElementById("ball");
	var but1 = document.getElementById("btn-1");
	var but2 = document.getElementById("btn-2");
	var but3 = document.getElementById("btn-3");

	but1.addEventListener("click",function(){
		ball.classList.add("pos1");
		ball.classList.remove("pos2","pos3");
	});

	but2.addEventListener("click",function(){
		ball.classList.add("pos2");
		ball.classList.remove("pos1","pos3");
	});

	but3.addEventListener("click",function(){
		ball.classList.add("pos3");
		ball.classList.remove("pos2","pos1");
	});
	*/

	var ball = document.getElementById("ball");

	positions.forEach(function( pos ){
		var newButton = document.createElement("button");
		newButton.innerText = pos.text;
		ball.insertAdjacentElement("beforebegin", newButton);
		newButton.addEventListener("click", function(){
			ball.style.top = pos.top +"px";
			ball.style.left = pos.left + "px";
		});
	});

});
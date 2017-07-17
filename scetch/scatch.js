$(function(){
	var size = 16;
	init(size);

	function init(n) {
		var div = "<div class='block'></div>"
		var divSize = $("#container").height()/n;
		for(var i=0; i<n*n;i++) {
			$("#container").append(div);
		}
		$(".block").css({"width":divSize, "height":divSize});
	}

	$("#container").on("mouseenter",".block", function(){
		$(this).addClass("black");
	});
	$("#reset").on("click", function(){
		$("#container").empty();
		size = prompt("Enter a number between 16 and 100!");
		if(size<16 || size>100) {
			alert("Incorrect number! Reverting to default!");
			size = 16;
		}
		init(size);S

	});

});
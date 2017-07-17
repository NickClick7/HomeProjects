$(function(){
	$('input').on("mousemove", handleUpdate);
	$('input').on("change", handleUpdate);
	function handleUpdate() {
		var suffix = this.dataset.sizing || "";
		console.log(this.name, this.value);
		document.documentElement.style.setProperty('--'+this.name, this.value+suffix);
	}
	var imgs = ["img/pic-1.jpg", "img/pic-2.jpg", "img/pic-3.jpg", "img/pic-4.jpg"
	, "img/pic-5.jpg", "img/pic-6.jpg", "img/pic-7.jpg", "img/pic-8.jpg"];
	$("button").on("click", function(){
		var x = Math.floor(Math.random()*9);
		$("img").attr("src", imgs[x]);
		console.log(x);
	});
});
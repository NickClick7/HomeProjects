$(function() {
	var panels = document.querySelectorAll(".panel");

	function toggleOpen() {
		this.classList.toggle("open");
	}
	function toggleActive(e) {
		console.log(e);
		if(e.propertyName === "flex-grow") {
			this.classList.toggle("open-active");
		}
	}
	panels.forEach( panel => panel.addEventListener("click", toggleOpen));
	panels.forEach( panel => panel.addEventListener("transitionend", toggleActive));


	
});

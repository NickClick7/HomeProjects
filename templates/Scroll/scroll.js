document.addEventListener("DOMContentLoaded", function(){

	function debounce(func, wait=20, immediate=true) {
		var timeout;
		return function() {
			var context = this;
			var args = arguments;
			var later = function() {
				timeout = null;
				if(!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};

	};

	const sliderImages = document.querySelectorAll(".slide-in");

	function checkSlide (e) {
		console.log(window.scrollY);
		sliderImages.forEach( sliderImage => {
			var slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
			var imageBottom = sliderImage.offsetTop + sliderImage.height;
			var isHalfShown = slideInAt > sliderImage.offsetTop;
			var isNotScrolledPassed = window.scrollY < imageBottom;
			console.log("slideInAt:"+slideInAt, "imageBottom:"+imageBottom, "isHalfShown:"+isHalfShown, "isNotScrolledPassed:"+isNotScrolledPassed)
			if(isHalfShown && isNotScrolledPassed) {
				sliderImage.classList.add('active');
			}else{
				sliderImage.classList.remove('active');
			}
		});
	};
	window.addEventListener("scroll", debounce(checkSlide));

});
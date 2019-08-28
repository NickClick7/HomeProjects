document.addEventListener("DOMContentLoaded", function(){
	var myApp = function(){
		var number = generateRandomNumber();

		function welcome(){
			alert("Welcome!"+"\n"+number);
		}
		welcome();
		function generateRandomNumber() {
			return (Math.floor(Math.random() * 10) + 1 ); 
		}
		function generateList() {
			var list=["Hungary", "US", "Germany", "Poland", "Angola", "UK", "Bahamas", "Taiwan", "China", "Ecuador", "Greek"];
			var ul = $("#listCountries");
			var li = $("li");

			for(var i=1;i<number+1;i++) {
				ul.append('<li class="display"><span>'+list[i]+'</span></li>');	
			}	
		}; 
		generateList();
		
		$("span").on("click", edit);
		$("input").on("keyup", check); 
		
		
		function edit() {
			$("span").not(this).css({"font-size":"14px", "font-weight":"normal"});
			var text = $(this).text();
			$("input").val(text).focus();
			$(this).css({"font-size":"18px", "font-weight":"bold"});
			that = this;
			$("input").on("change", function(){
				if($(this).val() != "") {
					$(that).text($(this).val());
				}else{
					$(that).text($(that).text());
					$(".warning").hide();
				}

			});	
			$("input").on("blur", function(){
				$(that).css({"font-size":"14px", "font-weight":"normal"});
				$(this).val("");
			});	

		}
		
		function check() {
			
			if($(this).val().length === 0) {
				$(this).before("<div><span class='warning' >"+'Value cant be empty!'+"</span></div>");
			}else{
				$(".warning").hide();
			}

		}
	}();
	
});
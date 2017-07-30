$(function(){

	var list = JSON.parse(localStorage.getItem("list"));
	if(list === null) {
		var list = [{"projectName":"",
					"todos":[{
							"name":"",
							"checked":false
							}]
					}];
	}
	else if(list.length == 1) {
		$("#projects>span").text("No projects!");
	}else{
		$("#projects>span").text("");
	}
	console.log(list);
	for(var i=0;i<list.length;i++) {
		var newLi = $("<li data-target="+i+"><input type='text' class='editor hidden-input'><a>"+list[i].projectName+"</a><button class='btn-xs btn-danger del'>X</button></li>");
		if(list[i].projectName !="") {
			$("#pList").append(newLi);
		}
	}	
	$("#pInput").on("focus", function(){
		$("#pList a").removeClass('highlight');
		$("#todos").hide();
	});
	$("#pAdd").on("click", function(){
		var pInput = $("#pInput").val();
		var newLi = $("<li data-target="+list.length+"><input type='text' class='editor hidden-input'><a>"+pInput+"</a><button class='btn-xs btn-danger del'>X</button></li>");
		if(pInput != "") {
			list.push({"projectName":pInput, "todos":[]});
			$("#pList").append(newLi);
			$("#projects>span").text("");
			saveToLocalStorage();
		}
		$("#pInput").val("");
		
	});
	var p;
	$("#pList").on("click","a", function(){
		$("#tList").empty();
		$("#projects>span").hide();
		$("li").not($(this)).children("a").removeClass('highlight');
		$(this).addClass('highlight');
		p = $(this).parent().data("target");
		if(!list[p]){
			return;
		}
		if(list[p].todos.length === 0) {
			$("#todos>span").text("No todos!");
		}
		if(list[p].todos.length != 0) {
			$("#todos>span").text("");
		}
		for(var j=0; j<list[p].todos.length;j++) {
			if(list[p].todos[j].checked == true) {
				var newLi = $("<li data-target="+j+"><input type='checkbox' class='check' checked>"+list[p].todos[j].name+
					"<button class='btn-xs btn-danger del'>X</button></li>");
			}else{
				var newLi = $("<li data-target="+j+"><input type='checkbox' class='check' >"+list[p].todos[j].name+
					"<button class='btn-xs btn-danger del'>X</button></li>");
			}
			$("#tList").append(newLi);
		}
		$("#todos").show();
		
		console.log(list[p].todos.length);
	});
	var pName;
	var pTarget;
	$("#pList").on("contextmenu","a", function(e){
		e.preventDefault();
		$(this).siblings('input').removeClass('hidden-input').val($(this).text()).focus();
		pName = $(this);
		pTarget = $(this).parent("li").data("target");
		$(this).hide();
		console.log(pName);
	});
	$("#pList").on("blur",".editor", function(){
		var change = $(this).val();
		if(change.length == 0) {
			list[pTarget].projectName = pName.text();
			pName.text(pName.text());
			saveToLocalStorage();	
		}else{
			list[pTarget].projectName = change;
			pName.text(change);
			saveToLocalStorage();
		}
		pName.show();
		pName.parent("li").show();
		pName.siblings(".editor").addClass('hidden-input');
	});
	$("#pList").on("keyup",".editor",function(){
		if($(this).val() == "") {
			$(this).addClass("warning");
		}else{
			$(this).removeClass("warning");
		}
	});

	$("#tAdd").on("click", function(){
		var tInput = $("#tInput").val();
		if(list[p].todos) {
			var newLi = $("<li data-target="+list[p].todos.length+"><input type='checkbox' class='check' >"+tInput+"<button class='btn-xs btn-danger'>X</button></li>");
			if(tInput != "") {
				list[p].todos.push({"name":tInput, "checked":"false"});
				$("#tList").append(newLi);
				saveToLocalStorage();
				$("#todos>span").text("");
			}
			$("#tInput").val("");	
		}
		
	});
	$("#tList").on("click",".del", function(){
		$(this).parent().remove();
		var idx = $(this).parent().data("target");
		list[p].todos.splice(idx, 1);
		saveToLocalStorage();
		if(list[p].todos.length == 0) {
			$("#todos>span").text("No todos!");
		}else{
			$("#todos>span").text("");
		}
	});
	$("#pList").on("click",".del", function(){
		var idx = $(this).parent().data("target");
		if(list[idx].todos.length != 0 ) {
			$("#projects>span").text("There are still undone tasks!!!").show();	
		}else{
			$(this).parent().remove();
			list.splice(idx, 1);
			saveToLocalStorage();
			$("#todos").hide();
			if(list.length == 1) {
				$("#projects>span").text("No projects!").show();
			}else{
				$("#projects>span").text("").hide();
			}
		}
	});
	$("#tList").on("change",".check", function(){
		var idx = $(this).parent().data("target");
		if($(this).is(":checked")){
			$(this).attr("checked", true);
			$(this).parent().addClass('crossed');
			list[p].todos[idx].checked = true;
			saveToLocalStorage();
		}else{
			$(this).attr("checked", false);
			$(this).parent().removeClass('crossed');
			list[p].todos[idx].checked = false;
			saveToLocalStorage();

		}
	});

	function saveToLocalStorage(){
		localStorage.setItem("list", JSON.stringify(list));
	}

});
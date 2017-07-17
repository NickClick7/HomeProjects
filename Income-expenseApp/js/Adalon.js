$(function(){
	$( function() {
		$( "#datepicker1" ).datepicker({
			dateFormat: 'dd-mm-yy'
		});
	});
	$( function() {
		$( "#datepicker2" ).datepicker({
			dateFormat: 'dd-mm-yy'
		});
	});

	var data = JSON.parse(localStorage.getItem("data"));
	var diagram = data;
	if(data === null ) {
		data = [{ 'name':"", 'type': "", 'amount': "", 'date':""}];
		$("span").text("Database is empty");
	}
	console.log(data);

	var summa = 0;
	var incomeTotal = 0;
	var expenseTotal = 0;
	for(var i=0; i<data.length;i++) {
		var newRow = 
		$('#datas > tbody:last-child').append(
	            '<tr>'
	            +'<td>'+data[i].name+'</td>'
	            +'<td>'+data[i].type+'</td>'
	            +'<td>'+data[i].date+'</td>'
	            +'<td>'+numberWithCommas(data[i].amount)+'</td>'
	            +'</tr>'
	    );
		if(data[i].name != "" && data[i].amount != "" ) {
			$("ul").append(newRow);
			if(data[i].name == "Expense") {
				summa -= Number(data[i].amount);
				expenseTotal += Number(data[i].amount);
			}else{
				summa += Number(data[i].amount);
				incomeTotal += Number(data[i].amount);
			}
			$("span").text(summa+" Ft");
		}
	}

	$("#income-button").on("click", function(){
		var $incomeType = $("#incomeType").val();
		var $incomePrice = $("#incomePrice").val();
		var $incomeDate = $("#datepicker1").val();
		if($incomeType !="" && $incomePrice !="" && $incomeDate !="") {
			data.push({ name:"Income", type: $incomeType, amount: $incomePrice, date:$incomeDate});
			saveToLocalStorage();
			var newRow = $("<tr>"+data[i].date+"	"+data[i].name+"	"+data[i].type+"	"+numberWithCommas(data[i].amount)+'Ft'+'</tr>');
			$('#datas > tbody:last-child').append( newRow );
		}
		
	});
	$("#expense-button").on("click", function(){
		var $expenseType = $("#expenseType").val();
		var $expensePrice = $("#expensePrice").val() ;
		var $expenseDate = $("#datepicker2").val();
		if($expenseType !="" && $expensePrice !="" && $expenseDate !="") {
			data.push({ name:"Expense", type: $expenseType, amount: $expensePrice, date:$expenseDate});
			saveToLocalStorage();
			var newRow = $("<li>"+data[i].date+"	"+data[i].name+"	"+data[i].type+"	"+numberWithCommas(data[i].amount)+'Ft'+'</li>');
			$('#datas > tbody:last-child').append( newRow );
		}
		
	});
	function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function saveToLocalStorage() {
		localStorage.setItem("data", JSON.stringify(data));
	}
	//kördiagram:
	var ctx = document.getElementById("myChart").getContext('2d');
	var myPieChart = new Chart(ctx, {
	    type: 'pie',
	    data: {
	        labels: ["Incomes","Expenses"],
	        datasets: [{
	            label: ['Red','Blue'],
	            data: [incomeTotal, expenseTotal],
	            backgroundColor: ["rgb(237, 157, 28)","rgb(23, 70, 145)"]
	        }]
	    }
	});
	//localStorage feltöltése
	$("#test").on("click", fillUpDatabaseWithTestData);
	testData = [{ 'name':"Income", 'type': "Salary", 'amount': "400000", 'date':"28-05-2017"},
				{ 'name':"Expense", 'type': "Food", 'amount': "25000", 'date':"29-05-2017"},
				{ 'name':"Expense", 'type': "Books", 'amount': "12000", 'date':"12-06-2017"},
				{ 'name':"Expense", 'type': "Clothes", 'amount': "30000", 'date':"01-06-2017"},
				{ 'name':"Income", 'type': "Work", 'amount': "50000", 'date':"20-06-2017"},
				{ 'name':"Expense", 'type': "Trip", 'amount': "180000", 'date':"24-06-2017"},
				{ 'name':"Expense", 'type': "Drinks", 'amount': "5000", 'date':"28-06-2017"},
				{ 'name':"Income", 'type': "Salary", 'amount': "400000", 'date':"29-06-2017"},
				{ 'name':"Expense", 'type': "Carpit", 'amount': "30000", 'date':"01-07-2017"},
				{ 'name':"Expense", 'type': "Restaurant", 'amount': "20000", 'date':"03-07-2017"}];
	
	function fillUpDatabaseWithTestData() {
		data = testData;
		saveToLocalStorage();
		location.reload();
	}
	

});


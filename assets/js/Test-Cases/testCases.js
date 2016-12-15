 $(document).ready(function(){
    
	//test case
	var debug = 1;
	
	if(debug == 1){
	

		$("#S1").val("10");
		$("#S4").val("10");

		$("#S2").val("5");
		$("#S3").val("8");
		$("#S5").val("6");
		$("#S6").val("4");
		$("#S7").val("2");

		$("#W1").val("20");
		$("#W2").val("5");
		$("#W3").val("20");
		$("#W4").val("20");
		$("#W5").val("30");		
		$("#W6").val("5");

		/*for(var i = 0; i < 7; i++){
			$("#S" + (i + 1)).val("10");
		}			
	
		for(var j = 0; j < 6; j++){
			$("#W" + (j + 1)).val("10");
		}	*/
	}else{
	
		console.log("Test Cases off");
	
	}

	

});
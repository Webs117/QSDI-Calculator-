 $(document).ready(function(){
    
	//test case
	var debug = 1;
	
	if(debug == 1){
	
		for(var i = 0; i < 7; i++){
			$("#S" + (i + 1)).val("10");
		}			
	
		for(var j = 0; j < 6; j++){
			$("#W" + (j + 1)).val("10");
		}	
	}else{
	
		console.log("Test Cases off");
	
	}

	

});
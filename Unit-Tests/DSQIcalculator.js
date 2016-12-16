 $(document).ready(function(){
    
	var rawWeights = [];
	
	var rawSvalues = [];

	var dValues = [];
	
	//collapse group 
	var myGroup = $('#collapseGroup');
	myGroup.on('show.bs.collapse','.collapse', function() {
	    myGroup.find('.collapse.in').collapse('hide');
	});

	var myGroup2 = $('#collapseGroup2');
	myGroup2.on('show.bs.collapse','.collapse', function() {
	    myGroup2.find('.collapse.in').collapse('hide');
	});	

	/*
	$("#W1").on("blur", function(){
		alert("handler for blur called");
	});
	*/
	
	function totalWeights(){
		var total = 0;
		for (var j = 0; j < rawWeights.length; j++) {
	 		console.log(rawWeights[j]);
	 		total += rawWeights[j];
	 	}
		return total;
	}
	

	function auth(){
		for(var i=0; i < 7; i++){
    		if(rawSvalues[i] < -1 || rawSvalues[i] == NaN){
    			Console.log("S" + (i+1) + " is invalid");
    		}
    	}

    	if(rawSvalues[0] < rawSvalues[1]){

    	}
    	if(rawSvalues[0] < rawSvalues[2]){
    		
    	}
    	if(rawSvalues[3] < rawSvalues[4]){
    		
    	}
    	if(rawSvalues[3] < rawSvalues[5]){
    		
    	}
    	if(rawSvalues[0] < rawSvalues[6]){
    		
    	}

    	//test for decimal numbers?
	}



	

    $( "#sValueBtn" ).click(function( event ) {


    	//handle d value 
    	if($("#d1CheckBox").is(":checked")){
			console.log("checked");
			if( dValues.length < 1){
				dValues.push(1.0);
			}else{
				dValues[0] = 1.0;
			}
		}else{
			console.log("not checked");
		    if( dValues.length < 1){
				dValues.push(0.0);
			}else{
				dValues[0] = 0;
			}
		}

    	//check array 
    	if(rawSvalues.length < 1){
    		for (var i = 0; i < 7; i++) {
	 			rawSvalues.push(parseFloat($("#S" + (i+1)).val()));
	 		}
    	}else{
    		for(var i=0; i < 7; i++){
    			rawSvalues[i] = parseFloat($("#S" + (i+1)).val());
    		}
    	}

    	//check s-value 
		//auth();

    	//calculate d values 
    	if(dValues.length == 1){

    		//add d2
    		dValues.push( 1 - (rawSvalues[1] / rawSvalues[0] ));

    		//add d3
    		dValues.push( 1 - (rawSvalues[2] / rawSvalues[0] ));
    		
    		//add d4
    		dValues.push( 1 - (rawSvalues[4] / rawSvalues[3] ));
    		
    		//add d5
    		dValues.push( 1 - (rawSvalues[5] / rawSvalues[3] ));
    		
    		//add d6
    		dValues.push( 1 - (rawSvalues[6] / rawSvalues[0] ));

    	}else{
    		//update d2
    		dValues[1] = ( 1 - (rawSvalues[1] / rawSvalues[0] ));

    		//update d3
    		dValues[2] = ( 1 - (rawSvalues[2] / rawSvalues[0] ));
    		
    		//update d4
    		dValues[3] = ( 1 - (rawSvalues[4] / rawSvalues[3] ));
    		
    		//update d5
    		dValues[4] = ( 1 - (rawSvalues[5] / rawSvalues[3] ));
    		
    		//update d6
    		dValues[5] = ( 1 - (rawSvalues[6] / rawSvalues[0] ));
    	}

    	//update d values 
    		for(var i=0; i < 6; i++){
    			$("#D" + (i + 1)).val(dValues[i]);
    		}

		event.preventDefault();
	});


    $( "#calculateBtn" ).click(function( event ) {


    	if(rawWeights.length < 1){
    		for (var i = 0; i < 6; i++) {
	 			rawWeights.push(parseFloat($("#W" + (i+1)).val()));
	 		}
    	}else{
    		for(var i=0; i < 6; i++){
    			$("#W" + (i + 1)).val(dValues[i]);
    		}
    	}


		var totalweight = totalWeights();
		var DSQI = 0;
		if(totalweight == 100){
			for (var i = 0; i < dValues.length; i++) {
				DSQI += (dValues[i] * (rawWeights[i] / 100));
			}
			$("#DSQI").val(DSQI);
		}else{
			Console.log("Weights don't add up to 100")
    	}
    	
    	


		event.preventDefault();
	});



/*
    $( "#sValueBtn" ).click(function( event ) {


    	setD1();
    	
	 	var result = 0;

	 	var totalWeight;

	 	//D2 Module Indepence
	 	var d2 = 1 - (rawSvalues[1]/rawSvalues[0]);
	 	console.log(d2);



		construcWeights();
		totalWeight = totalWeights();

	  				 

	  	var str = result.toString();
    	console.log(result);

		$('#DSQI').val(str);

		var strWeight = totalWeight.toString();
		console.log("Total weight: " + strWeight);
		$("#WTotal").val(strWeight);

		event.preventDefault();
	});
*/

})
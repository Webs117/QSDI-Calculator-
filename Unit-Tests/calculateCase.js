 $(document).ready(function(){
    
	//test case
	var debug = 1;
	
	var weights = [];

	var dValues = [];
	
	if(debug == 1){
	
		// ---------------------
		//************* Only Edit Values 
		//Test Case 1
		console.log("Test Case 1");
		
		//D1
		dValues.push(parseFloat("8"));
		
		//D2
		dValues.push(parseFloat("4"));
		
		//D3
		dValues.push(parseFloat("4"));
		
		//D4
		dValues.push(parseFloat("6"));
		
		//D5
		dValues.push(parseFloat("4"));
		
		//D6
		dValues.push(parseFloat("2"));
		
		//W1
		weights.push(parseFloat("20"));
		
		//W2
		weights.push(parseFloat("20"));
		
		//W3
		weights.push(parseFloat("20"));
		
		//W4
		weights.push(parseFloat("20"));
		
		//W5
		weights.push(parseFloat("10"));
		
		//W6
		weights.push(parseFloat("10"));		
		
		
		calculateDSQI();
		// ---------------------		
		
		
		
		
		// ---------------------
		//******** Copy this one and then edit Values
		//Test Case 2
		console.log("Test Case 2");

		//D1
		dValues[0] = parseFloat("10");
		
		//D2
		dValues[1] = parseFloat("5");
		
		//D3
		dValues[2] = parseFloat("");
		
		//D4
		dValues[3] = parseFloat("10");
		
		//D5
		dValues[4] = parseFloat("10");
		
		//D6
		dValues[5] = parseFloat("10");

		//W1
		weights[0] = parseFloat("10");
		
		//W2
		weights[1] = parseFloat("5");
		
		//W3
		weights[2] = parseFloat("");
		
		//W4
		weights[3] = parseFloat("10");
		
		//W5
		weights[4] = parseFloat("10");
		
		//W6
		weights[5] = parseFloat("10");		
	
		calculateDSQI();		
		// ---------------------		

		
		// ---------------------
		// Example copy
		//Test Case 3 
		console.log("Test Case 3");
		
		//D1
		dValues[0] = parseFloat("10");
		
		//D2
		dValues[1] = parseFloat("5");
		
		//D3
		dValues[2] = parseFloat("");
		
		//D4
		dValues[3] = parseFloat("10");
		
		//D5
		dValues[4] = parseFloat("10");
		
		//D6
		dValues[5] = parseFloat("10");

		//W1
		weights[0] = parseFloat("10");
		
		//W2
		weights[1] = parseFloat("5");
		
		//W3
		weights[2] = parseFloat("");
		
		//W4
		weights[3] = parseFloat("10");
		
		//W5
		weights[4] = parseFloat("10");
		
		//W6
		weights[5] = parseFloat("10");		
	
		calculateDSQI();	
		// ---------------------		

	}else{
	
		console.log("Test Cases off");
	
	}

	function totalWeights(){
		var total = 0;
		for (var j = 0; j < weights.length; j++) {
	 		total += weights[j];
	 	}
		return total;
	}
	
	function weightAuth(){

		var pass = true;
		//check for negative weights to avoid -100 and 200
    	for (var i = 0; i < 6; i++) {
    		if(weights[i] < 1 || weights[i] == NaN){
    			console.log("W" + (i+1) + " is invalid");
                pass = false; 
    		}
    	}
    	return pass
	}
	
	function calculateDSQI(){

		var pass = weightAuth();

		if(pass){
			var totalweight = totalWeights();
			var DSQI = 0;
			if(totalweight == 100){
				for (var i = 0; i < 6; i++) {
					DSQI += (dValues[i] * (weights[i] / 100));
				}

			console.log("D Value Array: " + dValues.toString());	
			console.log("Weights Array: " + weights.toString());
			console.log("DSQI: " + DSQI);
			console.log("-------------------------------------------");					
				
			}else{
				console.log("Weights don't add up to 100")
	    	}

	    
			
		}else{
			console.log("Invalid weights");
		}
		
		
	
	}

});
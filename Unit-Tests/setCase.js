 $(document).ready(function(){
    
	//test case
	var debug = 1;
	
	var rawSvalues = [];

	var dValues = [];
	
	if(debug == 1){
	
		// ---------------------
		//************* Only Edit Values 
		//Test Case 1
		console.log("Test Case 1");
		//S1
		rawSvalues.push(parseFloat("8"));
		
		//S2
		rawSvalues.push(parseFloat("4"));
		
		//S3
		rawSvalues.push(parseFloat("4"));
		
		//S4
		rawSvalues.push(parseFloat("6"));
		
		//S5
		rawSvalues.push(parseFloat("4"));
		
		//S6
		rawSvalues.push(parseFloat("2"));
		
		//S7
		rawSvalues.push(parseFloat("2"));
		
		//D1
		dValues.push(parseFloat("1"));
	
		setDvalues();
		// ---------------------		
		
		
		
		
		// ---------------------
		//******** Copy this one and then edit Values
		//Test Case 2
		console.log("Test Case 2");
		//S1
		rawSvalues[0] = parseFloat("10");
		
		//S2
		rawSvalues[1] = parseFloat("5");
		
		//S3
		rawSvalues[2] = parseFloat("");
		
		//S4
		rawSvalues[3] = parseFloat("10");
		
		//S5
		rawSvalues[4] = parseFloat("10");
		
		//S6
		rawSvalues[5] = parseFloat("10");
		
		//S7
		rawSvalues[6] = parseFloat("0");
		
		//D1
		dValues[0] = parseFloat("0");
	
		setDvalues();		
		// ---------------------		

		
		// ---------------------
		// Example copy
		//Test Case 3 
		console.log("Test Case 3");
		//S1
		rawSvalues[0] = parseFloat("100");
		
		//S2
		rawSvalues[1] = parseFloat("50");
		
		//S3
		rawSvalues[2] = parseFloat("40");
		
		//S4
		rawSvalues[3] = parseFloat("100");
		
		//S5
		rawSvalues[4] = parseFloat("100");
		
		//S6
		rawSvalues[5] = parseFloat("100");
		
		//S7
		rawSvalues[6] = parseFloat("100");
		
		//D1
		dValues[0] = parseFloat("100");
		
		setDvalues();		
		// ---------------------		



		console.log("=======================================");
	}else{
	
		console.log("Test Cases off");
	
	}

/*****************************

DO NOT EDIT ANYTHING BELOW
		

*******************************/

	function auth(){
        var pass = true;
		for(var i=0; i < 7; i++){
    		if(rawSvalues[i] < 0 || isNaN(rawSvalues[i]) ){
    			console.log("S" + (i+1) + " is invalid");
                pass = false; 
    		}
    	}

    	if(rawSvalues[0] < rawSvalues[1]){
            console.log("S1 must be greater than S2");
            pass = false; 
    	}
    	if(rawSvalues[0] < rawSvalues[2]){
    		console.log("S1 must be greater than S3");
            pass = false; 
    	}
    	if(rawSvalues[3] < rawSvalues[4]){
    		console.log("S4 must be greater than S5");
            pass = false; 
    	}
    	if(rawSvalues[3] < rawSvalues[5]){
    		console.log("S4 must be greater than S6");
            pass = false; 
    	}
    	if(rawSvalues[0] < rawSvalues[6]){
    		console.log("S1 must be greater than S7");
            pass = false; 
    	}

        return pass;
        
    	//test for decimal numbers?
	}

	function setDvalues(){

    	//check s-value 
		var pass = auth();
		if(pass){

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

	    
			console.log("S Value Array: " + rawSvalues.toString());	
			console.log("D Value Array: " + dValues.toString());
			console.log("Pass case");
			
		
		}else{
			console.log("failed S-Values Validation");
			console.log("S Value Array: " + rawSvalues.toString());	
		}
    	console.log("-------------------------------------------");
		
		
	}

});
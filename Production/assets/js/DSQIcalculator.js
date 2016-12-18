 $(document).ready(function(){
    
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
    })


	var weights = [];
	
	var rawSvalues = [];

	var dValues = [];
	
	
	//Collapse group for S-Values
	
	var myGroup = $('#collapseGroup');
	myGroup.on('show.bs.collapse','.collapse', function() {
	    myGroup.find('.collapse.in').collapse('hide');
	});

	//Collapse group for D-values 
	
	var myGroup2 = $('#collapseGroup2');
	myGroup2.on('show.bs.collapse','.collapse', function() {
	    myGroup2.find('.collapse.in').collapse('hide');
	});	

	
	
	$("#W1").on("blur", function(){
		alert("handler for blur called");
	});
	
	
	function totalWeights(){
		var total = 0;
		for (var j = 0; j < weights.length; j++) {
	 		total += weights[j];
	 	}
		return total;
	}
	

	function auth(){
        var pass = true;
		for(var i=0; i < 7; i++){
    		if(rawSvalues[i] < 0 || isNaN(rawSvalues[i]) ){
                $("#S" + (i+1) +"Par").addClass("has-error");
                $("#S" + (i+1) +"Err").show();
                pass = false; 
    		}
    	}

        if(pass == false){
            $( "#invalidS" ).show("slow");
        }

    	if(rawSvalues[0] < rawSvalues[1]){
            $( "#invalid1" ).show("slow");
            pass = false; 
    	}
    	if(rawSvalues[0] < rawSvalues[2]){
            $( "#invalid2" ).show("slow");
            pass = false; 
    	}
    	if(rawSvalues[3] < rawSvalues[4]){
            $( "#invalid3" ).show( "slow");
            pass = false; 
    	}
    	if(rawSvalues[3] < rawSvalues[5]){
            $( "#invalid4" ).show( "slow");
            pass = false; 
    	}
    	if(rawSvalues[0] < rawSvalues[6]){
            $( "#invalid5" ).show( "slow");
            pass = false; 
    	}

        return pass;

    	//test for decimal numbers?
	}

    function weightAuth(){

        var pass = true;

        for (var i = 0; i < 6; i++) {
            if(weights[i] < 1 || isNaN(weights[i]) ){
                $("#W" + (i+1) +"Par").addClass("has-error");
                $("#W" + (i+1) +"Err").show();
                pass = false; 
            }
        }
        return pass
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


        //reset auth
        $( "#invalidS" ).hide();
        for (var i = 0; i < 5; i++) {
             $( "#invalid" + (i+1)).hide();    
        }
        for (var j = 0; j < 7; j++) {
            $("#S" + (j+1) +"Par").removeClass("has-error");
            $("#S" + (j+1) +"Err").hide();                    
        }        
        $("#successCheck").hide();

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

            //Enable DSQI Button
            if($("#calculateBtn").prop("disabled")){
                $("#calculateBtn").removeAttr("disabled");
            }

            $("#successCheck").show("fast");
            $('#collapseGroup').find('.collapse.in').collapse('hide');

            //update d values 
            for(var i=0; i < 6; i++){
                $("#D" + (i + 1)).val(dValues[i]);
            }

        }else{
            console.log("failed S-Values Validation");

            //Disable DSQI Button
            if($("#calculateBtn").prop("disabled") == false){
                $("#calculateBtn").attr("disabled", "disabled");
            }
        }
    	

		event.preventDefault();
	});


    $( "#calculateBtn" ).click(function( event ) {
	
		//check for negative weights to avoid -100 and 200

    	if(weights.length < 1){
    		for (var i = 0; i < 6; i++) {
	 			weights.push(parseFloat($("#W" + (i+1)).val()));
	 		}
    	}else{
    		for(var i=0; i < 6; i++){
    			weights[i] = parseFloat($("#W" + (i + 1)).val());
    		}
    	}


        //reset Weight auth 
        $( "#weightTotal" ).hide();
        $( "#invalidWeight" ).hide();

        for (var j = 0; j < 7; j++) {
            $("#W" + (j+1) +"Par").removeClass("has-error");
            $("#W" + (j+1) +"Err").hide();                    
        }  

        var pass = weightAuth();
        if(pass){
            var totalweight = totalWeights();
            var DSQI = 0;
            
            if(totalweight == 100){
                for (var i = 0; i < 6; i++) {
                    DSQI += (dValues[i] * (weights[i] / 100));
                }
                $('#collapseGroup2').find('.collapse.in').collapse('hide');
                $("#DSQI").val(DSQI);
            }else{
                console.log("Weights don't add up to 100")
                $( "#weightTotal" ).show("Slow");
            }
        }else{
            console.log("Invalid weights");
            $( "#invalidWeight" ).show("Slow");
        }


    	
    	


		event.preventDefault();
	});


})
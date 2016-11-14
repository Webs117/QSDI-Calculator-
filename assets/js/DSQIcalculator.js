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

	
	$("#W1").on("blur", function(){
		alert("handler for blur called");
	});
	
	
	function construcWeights(){
		for (var i = 0; i < 6; i++) {
	 		rawWeights.push(parseFloat($("#W" + (i+1)).val()));
	 	}
	}
	
	function updateWeight(pos){
		
	}
	
	function totalWeights(){
		var total = 0;
		for (var j = 0; j < rawWeights.length; j++) {
	 		console.log(rawWeights[j]);
	 		total += rawWeights[j];
	 	}
		return total;
	}
	
	function construcSvalues(){
	 	for (var i = 0; i < 7; i++) {
	 		rawSvalues.push(parseFloat($("#S" + (i+1)).val()));
	 	}
	}
	
	function updateSval(pos){
		
	}

	function setD1(){
		if($("#d1CheckBox").is(":checked")){
			console.log("checked");
		}else{
			console.log("not checked");
		}
	}
	

    $( "#sValueBtn" ).click(function( event ) {


    	setD1();


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
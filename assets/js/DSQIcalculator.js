 $(document).ready(function(){
    




    $( "#calculateBtn" ).click(function( event ) {


	 	var rawSvalues = [];

	 	for (var i = 0; i < 7; i++) {
	 		rawSvalues.push(parseInt($("#S" + (i+1)).val()));
	 	}


	 	var result = 0;

	 	for (var i = 0; i < rawSvalues.length; i++) {
	 		console.log(rawSvalues[i]);
	 		result += rawSvalues[i];
	 	}
	  				 

	  	var str = result.toString();
    	console.log(result);

		$('#DSQI').val(str);

		event.preventDefault();
	});



})
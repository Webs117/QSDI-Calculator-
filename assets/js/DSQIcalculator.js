 $(document).ready(function(){
    




    $( "#calculateBtn" ).click(function( event ) {
	 	var s1 = $('#S1').val();
	 	var s2 = $('#S2').val();
	 	var s3 = $('#S3').val();
	 	var s4 = $('#S4').val();
	 	var s5 = $('#S5').val();
	 	var s6 = $('#S6').val();
	 	var s7 = $('#S7').val();

	 	console.log("S1: " + s1);
	 	console.log("S2: " + s2);
	 	console.log("S3: " + s3);
	 	console.log("S4: " + s4);
	 	console.log("S5: " + s5);
	 	console.log("S6: " + s6);
	 	console.log("S7: " + s7);

	  	


	  	var result = parseInt(s1) + parseInt(s2) + parseInt(s3)+ parseInt(s4) + parseInt(s5) + parseInt(s6) + parseInt(s7);
	  					 

	  	var str = result.toString();
    	console.log(result);

		$('#DSQI').val(str);

		event.preventDefault();
	});



})
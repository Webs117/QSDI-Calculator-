 $(document).ready(function(){
    




    $( "#calculateBtn" ).click(function( event ) {
	 	var s1 = $('#S1').val();
	 	var s2 = $('#S2').val();

	 	console.log("S1: " + s1);
	 	console.log("S2: " + s2);
	  	event.preventDefault();

	  	var result = parseInt(s1) + parseInt(s2);

	  	var str = result.toString();
    	console.log(result);

		$('#DSQI').val(str);
	});



})
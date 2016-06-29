// Chosen CSS
    var config = {
      '.optradio'           : {},
      '.optradio-deselect'  : {allow_single_deselect:true},
      '.optradio-no-single' : {disable_search_threshold:10},
      '.optradio-no-results': {no_results_text:'Oops, nothing found!'},
      '.optradio-width'     : {width:"95%"}
    }
    for (var optradio in config) {
      $(optradio).chosen(config[optradio]);
    }
	
	// Capture the form inputs
	
    $("#Submit").on("click", function(){
    	// Form validation
    	function validateForm() {
		  var isValid = true;
		  $('.form-control').each(function() {
		    if ( $(this).val() === '' )
		        isValid = false;
		  });
		  $('.optradio').each(function() {
		  	if( $(this).val() === "")
		  		isValid = false
		  })
		  return isValid;
		}
		// If all required fields are filled
		if (validateForm() == true) {
			// Create an object for the user's data
	    	var userData = {
	    		name: $("#name").val(),
	    		photo: $("#photo").val(),
	    		scores: [$("input[name=options1]:checked").val(), $("input[name=options2]:checked").val(), $("input[name=options3]:checked").val(), $("input[name=options4]:checked").val(), $("input[name=options5]:checked").val(), $("input[name=options6]:checked").val(), $("input[name=options7]:checked").val(), $("input[name=options8]:checked").val(), $("input[name=options9]:checked").val(), $("input[name=options10]:checked").val(), ]}
	    	console.log(userData);
	    
    	// Grab the URL of the website
	    	var currentURL = window.location.origin;
	    	
	    	// AJAX post the data to the friends API. 
	    	$.post(currentURL + "/api/friends", userData, function(data){
	    		// Grab the result from the AJAX post so that the best match's name and photo are displayed.
	    		$("#matchName").text(data.name);
	    		$('#matchImg').attr("src", data.photo);
		    	// Show the modal with the best match 
		    	$("#resultsModal").modal('toggle');
	    	});
		}
		else
		{
			alert("Please fill out all fields before submitting!");
		}
    	
    	return false;
    });	
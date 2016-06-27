$(".submit").on("click", function(){

	function validateForm(){
		var isValid = true;
		$('.form-control').each(function(){
			if ($(this).val() === '')
				isValid = false;
		})

		$('.radio').each(function(){
			if( $(this).val() === "")
				isValid = false
		})

		return isValid;
	}

})
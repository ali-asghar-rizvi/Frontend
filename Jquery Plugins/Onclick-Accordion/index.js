	
//  To click anywhere Expect header-menulinks-main 
$(document).on('click', function(event) {
  if (!$(event.target).closest('.header-menulinks-main').length) {
    $('.collapse').collapse('hide');
  }
});




// To only  industry-inner click hide 
	$(".industry-inner").click(function() {
		$('.collapse').collapse('hide');
	});

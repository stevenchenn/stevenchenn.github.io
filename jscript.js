$(document).ready(function($) {

	$(".clickable").click(function(event) {
		event.preventDefault(); 
		var $anchor = $('#' + this.hash.substring(1));
		$('html,body').animate({ 
			scrollTop: $anchor.offset().top
		}, 500);        
	});
    
	$("#top-button").click(function(event) {
		event.preventDefault(); 
        
    var $anchor = $('#' + this.hash.substring(1));

    $('html,body').animate({ 
			scrollTop: $anchor.offset().top
		}, 500);        
	});

});

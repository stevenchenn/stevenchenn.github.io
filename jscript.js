$(document).ready(function($) {

    $(".clickable").click(function(event) {
        event.preventDefault(); 

        var defaultAnchorOffset = 0;
        
        var $anchor = $('#' + this.hash.substring(1));

        $('html,body').animate({ 
            scrollTop: $anchor.offset().top
        }, 500);        
    });
});
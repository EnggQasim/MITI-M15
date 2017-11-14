;(function($, window, undefined) {

	"use strict";
	
  $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        itemsMobile:[600,1],
		margin:20,
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        autoPlay:true
    });
});
  
})(jQuery, window);

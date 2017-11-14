$(function () {
	"use strict";
	$(window).on("scroll", function() {
		   if($(window).scrollTop() > 0) {
			$("#header-fix").addClass("active");
				} else {
			$("#header-fix").removeClass("active");
		  }
		});
	
	
	
});
	
	
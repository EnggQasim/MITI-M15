$(function () {
	"use strict";
	
	$(document).ready(function() {
		  $('.background-image-maker').each(function() {
		     var imgURL = $(this).next('.holder-image').find('img').attr('src');
		     $(this).css('background-image', 'url(' + imgURL + ')');
		  });
		});
});
	
	
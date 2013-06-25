$(document).ready(function() {
	
	// Search for all the elements 'img' inside of an 'a' tag inside of a 'p' tag
	$('p > a.fancybox > img').load(function() {
		
		$(this).addClass('centeredIMG'); // img tag containing the Image
		
		var pCont = $(this).parent().parent(); // p tag containing the 'fancybox <a> and the span for the Caption'
		$(pCont).css('margin-top', '25px');
		$(pCont).css('margin-bottom', '25px');

		var spanCaption = $(this).parent().next('span.caption'); // span tag containing the Caption for the Image
		$(spanCaption).css('display', 'none');
	});
});
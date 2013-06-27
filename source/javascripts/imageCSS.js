/*
@Author: Carlos Cuba
Date: June 24, 2013

Description: This .js centers the images you've added to your post via markdown 
(it automatically set the alignment of all your images to the left.)
Also, it hides the Caption (title of the image).

*/

$(document).ready(function() {
	// Search for all the elements 'img' inside of an 'a' tag inside of a 'p' tag
	// and then executes te code inside
	$('p > a.fancybox > img').each(function() {

		$(this).addClass('centeredIMG'); // img tag containing the Image
		
		var pCont = $(this).parent().parent(); // p tag containing the 'fancybox <a> and the span for the Caption'
		$(pCont).css('margin-top', '25px');
		$(pCont).css('margin-bottom', '25px');

		var spanCaption = $(this).parent().next('span.caption'); // span tag containing the Caption for the Image
		$(spanCaption).css('display', 'none');
	});
});
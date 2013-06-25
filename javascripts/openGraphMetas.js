/*
@Author: Carlos Cuba
Date: June 24, 2013

Description: 

*/

$(document).ready(function() {
	var metaImgContent = $('#imageMeta').html().replace('"','');
	alert(metaImgContent);
	var metaImg = '<meta property="og:image" content="'+ metaImgContent +'" />'
	$('head').prepend(metaImg);
});
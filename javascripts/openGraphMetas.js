/*
@Author: Carlos Cuba
Date: June 24, 2013

Description: 

*/

$(document).ready(function() {
	var metaImgContent = $('#imageMeta').html().replace('"','');
	var metaImg = '<meta property="og:image" content="'+ metaImgContent +'" />'
	var metaDescContent = $('#descMeta').html();
	var metaDesc = '<meta property="og:description" content="'+ metaDescContent +'" />'
	$('head').prepend(metaImg);
});
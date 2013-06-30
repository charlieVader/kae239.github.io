/*
@Author: Carlos Cuba
Date: June 24, 2013

Description: 

*/

$(document).ready(function() {
	alert('openGraphMetas.js');
	var metaImgContent = '';
	if ($('#imageMeta').text() != '') {
		metaImgContent = $('#imageMeta').text().replace('"','');
		var metaImg = '<meta property="og:image" content="'+ metaImgContent +'" />'
		$('head').prepend(metaImg);
	}

	// var metaDescContent = $('#descMeta').html();
	// var metaDesc = '<meta property="og:description" content="'+ metaDescContent +'" />'
	// $('head').prepend(metaDesc);
});
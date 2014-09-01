$(document).ready(function(){
	var windowsHeight 	= $(window).height();
	var headerHeight	= $('header').height();
	console.log(headerHeight)
	$('#map').css({
		'height':windowsHeight-headerHeight
	});
});
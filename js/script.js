/* Author: 

*/

$(document).ready(function() {
  $('#nav').onePageNav();
  
	$("#wow-chalk").click(function() {
		$.fancybox([
			'portfolio/wow-chalk/wow-chalk-01.jpg',
			'portfolio/wow-chalk/wow-chalk-02.jpg',
			'portfolio/wow-chalk/wow-chalk-03.jpg',
			'portfolio/wow-chalk/wow-chalk-04.jpg',
			'portfolio/wow-chalk/wow-chalk-05.jpg',
			'portfolio/wow-chalk/wow-chalk-06.jpg',
			'portfolio/wow-chalk/wow-chalk-07.jpg',
			'portfolio/wow-chalk/wow-chalk-08.jpg',
			'portfolio/wow-chalk/wow-chalk-09.jpg',
			'portfolio/wow-chalk/wow-chalk-10.jpg',
			'portfolio/wow-chalk/wow-chalk-11.jpg',
			'portfolio/wow-chalk/wow-chalk-12.jpg',
			'portfolio/wow-chalk/wow-chalk-13.jpg'			
			], {
			'padding'			: 0,
			'transitionIn'		: 'fade',
			'transitionOut'		: 'fade',
			'type'              : 'image',
			'changeFade'        : 0
		});
	});
	
	$("#kewpie").fancybox({
			'width'				: '100%',
			'height'			: '100%',
	        'autoScale'     	: false,
	        'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe'
		}); 
  
});
(function ($) {
 "use strict";
 $(document).ready(function(){
	/*---------------------
	 1. slicknav
	--------------------- */	
		$('#nav').slicknav({	
		allowParentLinks: true
		});	

	/*---------------------
	 1. owl-carousel
	--------------------- */
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:false,
			smartSpeed:3000,
			navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:3
				},
				1000:{
					items:5
				}
			}
		})	
		
}); 

})(jQuery);


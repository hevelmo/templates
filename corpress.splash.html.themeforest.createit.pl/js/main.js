/* ========================== */
/* ==== HELPER FUNCTIONS ==== */


var isiPad = (navigator.userAgent.match(/iPad/i) != null);


jQuery(document).ready(function () {
	"use strict";
    $ = jQuery.noConflict();

	/* ======================== */
	/* ==== ANIMATION INIT ==== */

	if ($().appear) {

		if (($.browser.mobile)||(isiPad)) {
			// disable animation on mobile
			$("body").removeClass("withAnimation");
		} else {
			$('.withAnimation .animated').appear(function () {
				var $this = $(this);
				$this.each(function () {
					$this.addClass('activate');
					$this.addClass($this.data('fx'));
				});
			}, {accX: 50, accY: -150});

		}
	}


	/* ======================= */
	/* ==== TO TOP BUTTON ==== */

	$('#toTop').click(function () {
		$("body,html").animate({scrollTop: 0}, 600);
		return false;
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$("#toTop").fadeIn(300);
		} else {
			$("#toTop").fadeOut(250);
		}
	});

    jQuery(".article-thumbnail img").mouseover(function(){
        var $distance = this.height - jQuery(this).parent().height();
        jQuery(this).stop().animate({marginTop: -$distance}, 6500, 'linear');

    }).mouseout(function(){
    	jQuery(this).stop().animate({marginTop: '0'}, 300);
    });


		$(".scrollToElement").click(function(){
			$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 600);

			return false;
		});


});


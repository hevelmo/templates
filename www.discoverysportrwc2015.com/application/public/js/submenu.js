$( document ).ready(function() {
	$('.menu').click(function(){
		$('.menu').removeClass('active');
		$(this).addClass('active');
	});
  $(window).scroll(function(){
  	var session = $('#session_promo').val();
  	if(session == '1'){
  		if ($(this).scrollTop() >= 600 && $(this).scrollTop() < 1400){
	    	$('.menu').removeClass('active');
	    	$('.promo').addClass('active');
	    }else if ($(this).scrollTop() >= 1400 && $(this).scrollTop() < 2650){
	    	$('.menu').removeClass('active');
	    	$('.teste').addClass('active');
	    }else if ($(this).scrollTop() >= 2650 && $(this).scrollTop() < 4100){
	    	$('.menu').removeClass('active');
	    	$('.disco').addClass('active');
	    }else if ($(this).scrollTop() >= 4100 && $(this).scrollTop() < 5000){
	    	$('.menu').removeClass('active');
	    	$('.rugb').addClass('active');
	    }else if ($(this).scrollTop() >= 5000 && $(this).scrollTop() < 6000){
	    	$('.menu').removeClass('active');
	    	$('.wede').addClass('active');
	    }else if ($(this).scrollTop() >= 6000 && $(this).scrollTop() < 7000){
	    	$('.menu').removeClass('active');
	    	$('.conte').addClass('active');
	    }
  	}else{
	    if ($(this).scrollTop() >= 600 && $(this).scrollTop() < 1850){
	    	$('.menu').removeClass('active');
	    	$('.teste').addClass('active');
	    }else if ($(this).scrollTop() >= 1850 && $(this).scrollTop() < 3400){
	    	$('.menu').removeClass('active');
	    	$('.disco').addClass('active');
	    }else if ($(this).scrollTop() >= 3400 && $(this).scrollTop() < 4200){
	    	$('.menu').removeClass('active');
	    	$('.rugb').addClass('active');
	    }else if ($(this).scrollTop() >= 4200 && $(this).scrollTop() < 5300){
	    	$('.menu').removeClass('active');
	    	$('.wede').addClass('active');
	    }else if ($(this).scrollTop() >= 5300 && $(this).scrollTop() < 6100){
	    	$('.menu').removeClass('active');
	    	$('.conte').addClass('active');
	    }
  	}
    
});
});
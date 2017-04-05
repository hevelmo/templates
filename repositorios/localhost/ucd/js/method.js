/*
  In this file will be present most of the hard programming and performance of
  The web application, here is the hard logic, handlers methods of the
  DOM elements events.
  This section is used to declare global variables, with values used Throughout
  The system, especially those that keeps session variable values from php
*/


/* ------------------------------------------------------ *\
 [Variables] 'Zone'
\* ------------------------------------------------------ */
var section;
/* ------------------------------------------------------ *\
 [functions] 'Zone'
 function nameFunction (arg) {
 }
\* ------------------------------------------------------ */
/* ------------------------------------------------------ *\
 [functions] validateEmail
\* ------------------------------------------------------ */
function validateEmail(email) {
	var re = /^(([^<>()[\]\\., ;:\s@\"] + (\.[^<>()[\]\\., ;:\s@\"] + )*)|(\". + \"))@((\[[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\])|(([a-zA-Z\-0-9] + \.) + [a-zA-Z] {2, }))$/;
	//return re.test(email);
	return true;
}
/* ------------------------------------------------------ *\
 [functions] resetAlert
\* ------------------------------------------------------ */
//It performs whit alertify libary an css
function resetAlert () {
	alertify.set({
		labels : {
			ok     : "OK",
			cancel : "Cancel"
		},
		delay : 5000,
		buttonReverse : false,
		buttonFocus   : "ok"
	});
 }
/* ------------------------------------------------------ *\
 [functions] 'Zone'
 var Method = {
 function_name : function(event) {}
 }

 for event name event handlers methods use indicate the name
 of the event and the element afected
\* ------------------------------------------------------ */
/*Make a group of methods for each url defined in room.js, in order to control the elements events,
  and the porformance of  each section.
  Depending on the complexity of the url, could be more than one group of methods.
  Could exist some group of general methods*/
/* ------------------------------------------------------ *\
 [Methods] MENU RESPONSIVE
\* ------------------------------------------------------ */
var menuResponsiveMethod = {
  menuresponsive : function () {
	$(".menu-responsive").toggle(function(){
		$('.menu-responsive span.fa').addClass('active');
		$('.menu').addClass('active');
		//console.log('menu active');
	},function() {
		$('.menu-responsive span.fa').removeClass('active');
		$('.menu').removeClass('active');
		//console.log('menu disabled');
	});
  },
  clickMenuResponsive : function(event) {
	$('.menu-responsive span.fa').removeClass('active');
	$('.menu').removeClass('active');
	//console.log('click active');
  },
  stopPropagation : function(event) {
	event.stopPropagation();
	//console.log('menu stop');
  }
}
var scrollHeaderMethods = {
  toTopScroll : function() {
	if ($(this).scrollTop() < 200) {
		$('#totop').fadeOut();
	} else {
		$('#totop').fadeIn();
	}
  },
  clickToTopScroll : function(event) {
	$('html, body').animate({scrollTop:0}, 'fast');
	return false;
  },
  pageHeaderScroll : function() {
	if ($(this).scrollTop() > 50) {
		$("body").addClass("page-header-scroll");
	} else {
		$("body").removeClass("page-header-scroll");
	}
  }
}
var carouselMethod = {
  initCarousel : function () {
	$('.carousel').carousel();
	//console.log('entra carousel');
  }
}
var gmapMethod = {
  gmap : function () {
		var myOptions = {zoom: 16, scrollwheel: false, center: new google.maps.LatLng(20.676602, -103.375033), mapTypeId: google.maps.MapTypeId.ROADMAP};
		map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
		marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(20.676602, -103.375033)});
		infowindow = new google.maps.InfoWindow({
		  content:
			'<div class="marker-info-win" style="text-align: center;">'+
			'<div class="marker-inner-win"><span class="info-content">'+
			'<img src="img/ucd-corp-maps.png" alt="logo ucd" style="margin-botton: 10px;" width="80">'+
			'<h5 class="marker-heading" style="color:#000; padding: 0px; margin: 0px;">UNIDAD CLÍNICA DIAGNÓSTICA</h5>'+
			'<span>Av Hidalgo, Ladrón de Guevara, 44680 Guadalajara, Jal.</span>' +
			'</span>'+
			'</div></div>'
		  });
		google.maps.event.addListener(marker, "click", function () {
			infowindow.open(map, marker);
		});
		infowindow.open(map, marker);
  },
  map_holder : function () {
  	$('.map-holder').click(function(){
		$(this).addClass('disable-overlay');
	});

	$(window).scroll(function(){
		$('.map-holder').removeClass('disable-overlay');
	});
  },
  initmap : function () {
	google.maps.event.addDomListener(window, 'load', gmapMethod.gmap);
  }
}
/* ------------------------------------------------------ *\
 [Methods] Home
\* ------------------------------------------------------ */
/* ------------------------------------------------------ *\
 [Methods] Section UCD
\* ------------------------------------------------------ */
var actionMethod = {
  clickRetun : function(event) {
	Finch.navigate('/');
	ga('send', 'event', 'go-index', 'click', 'return-home');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu home');
  },
  clickGoUcd : function(event) {
	Finch.navigate('/ucd');
	ga('send', 'event', 'go-services', 'click', 'nav-ucd');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu ucd');
  },
  clickGoServices : function(event) {
	Finch.navigate('/servicios');
	ga('send', 'event', 'go-services', 'click', 'nav-servicios');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu servicios');
  },
  clickGoViewResults : function(event) {
	Finch.navigate('/consulta-tus-resultados');
	ga('send', 'event', 'go-view-results', 'click', 'nav-consulta-tus-resultados');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu consulta resultados');
  },
  clickProgram : function(event) {
  	Finch.navigate('/programa');
  	ga('send', 'event', 'go-program', 'click', 'nav-programa');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu programa');
  },
  clickPromos : function(event) {
	Finch.navigate('/promociones');
	ga('send', 'event', 'go-promos', 'click', 'nav-promociones');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu promociones');
  },
  clickGoRecognitions : function(event) {
	Finch.navigate('/reconocimientos');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu reconocimientos');
  },
  clickGoContact : function(event) {
	Finch.navigate('/contacto');
	ga('send', 'event', 'go-contact', 'click', 'nav-contacto');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu contacto');
  },
  clickGoAppointment : function(event) {
	Finch.navigate('/nueva-cita');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu citas');
  },
  clickGoPrivacyNotice : function(event) {
	Finch.navigate('/aviso-de-privacidad');
	ga('send', 'event', 'go-privacy-notice', 'click', 'return-home');
	$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
	menuResponsiveMethod.clickMenuResponsive();
	//console.log('click menu aviso de privacidad');
  }
}
var changeStylesMethod = {
  changeStyles : function () {
	var opc = section;
	switch (opc) {
	  case 'home':
		$('.list-inline-home').addClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').removeClass('active');
	  break;
	  case 'ucd':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').addClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').removeClass('active');
		$('#header-bg').addClass('bg-ucd');
		$('h2.title').html('<img src="img/ucd-corp.png" alt="" />');
	  break;
	  case 'services':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').addClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').removeClass('active');
		$('#header-bg').addClass('bg-services');
		$('h2.title').prepend('Servicios');
	  break;
	  case 'view_results':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').addClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').removeClass('active');
		$('h2.title').prepend('Consulta tus resultados');
	  break;
	  case 'program':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').addClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').removeClass('active');
		//$('#header-bg').addClass('bg-promos');
		//$('h2.title').prepend('Promociones');
	  break;
	  case 'promos':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').addClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').removeClass('active');
		$('#header-bg').addClass('bg-promos');
		$('h2.title').prepend('Promociones');
	  break;
	  case 'recognitions':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').addClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').removeClass('active');
		$('h2.title').prepend('Reconocimientos');
	  break;
	  case 'contact':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').addClass('active');
		$('.list-inline-appointment').removeClass('active');
		$('#header-bg').addClass('bg-contact');
		$('h2.title').prepend('Contacto');
	  break;
	  case 'privacy_notice':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').removeClass('active');
		$('#header-bg').addClass('bg-privacy-notice');
		$('h2.title').prepend('Aviso de Privacidad');
	  break;
	  case 'appointment':
		$('.list-inline-home').removeClass('active');
		$('.list-inline-ucd').removeClass('active');
		$('.list-inline-services').removeClass('active');
		$('.list-inline-view-results').removeClass('active');
		$('.list-inline-program').removeClass('active');
		$('.list-inline-promos').removeClass('active');
		//$('.list-inline-recognition').removeClass('active');
		$('.list-inline-contact').removeClass('active');
		$('.list-inline-appointment').addClass('active');
		$('h2.title').prepend('Haz una cita ahora !');
	  break;
	  default:
	  break;
	}
  }
}
/* ------------------------------------------------------ *\
	[Metodos] __sizeCheck
\* ------------------------------------------------------ */
function __sizeCheck(element) {
	var _cWidth;

	// current width
	_cWidth = element.width();

	// update text
	_cText = 'desktop screens > 1200px';
	$('#change-legend').html('Ver <i class="fa fa-plus"></i>');
	//console.log(_cText);

	// check block
	if(_cWidth == 1680) {
	  _cText = 'desktop computer ' + _cWidth + 'px';
	  //console.log(_cText);
	}
	if(_cWidth < 1680) {
		_cText = 'desktop computer ' + _cWidth + 'px';
		//console.log(_cText);
	}
	if(_cWidth <= 1280) {
	  _cText = 'desktop computer ' + _cWidth + 'px';
		//console.log(_cText);
	}
	if(_cWidth < 1280) {
		_cText = 'desktop computer ' + _cWidth + 'px';
		//console.log(_cText);
	}
	if(_cWidth <= 1024) {
	  _cText = 'ipad landscape ' + _cWidth + 'px';
		//console.log(_cText);
	}
	if(_cWidth < 1024) {
		_cText = 'ipad landscape ' + _cWidth + 'px';
		//console.log(_cText);
	}
	if(_cWidth == 767) {
	  _cText = 'ipad portrait ' + _cWidth + 'px';
	  $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','55px');
	  $('#wrapper #footer #section-footer .logo .img-responsive').css({
		  'margin':'0 auto',
		  'width':'100%'
		});
	  //console.log(_cText);
	}
	if(_cWidth <= 768) {
	  _cText = 'ipad portrait ' + _cWidth + 'px';
	  $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','55px');
	  $('#wrapper #footer #section-footer .logo .img-responsive').css({
		  'margin':'0 auto',
		  'width':'100%'
		});
	  //console.log(_cText);
	}
	if(_cWidth < 768) {
		_cText = 'ipad portrait ' + _cWidth + 'px';
		$('#wrapper #footer #section-footer .logo .img-responsive').css({
		  'margin':'0 auto',
		  'width':'100%'
		});
		//console.log(_cText);
	}
	if(_cWidth <= 640) {
	  _cText = 'ipad portrait ' + _cWidth + 'px';
	  $('#change-legend').html('ver <i class="fa fa-plus"></i>');
	  $('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
	  //console.log(_cText);
	}
	if(_cWidth < 640) {
		_cText = 'ipad portrait ' + _cWidth + 'px';
		$('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
		$('#footer #section-footer .newsletter').css('text-align','center');
		$('#wrapper #footer #section-footer .logo .img-responsive').css({
		  'margin':'0 auto',
		  'width':'60%'
		});
		//console.log(_cText);
	}
	if(_cWidth = 400) {
		_cText = 'iphone landscape ' + _cWidth + 'px';
		$('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
		$('#footer #section-footer .newsletter').css('text-align','center');
		$('#wrapper #footer #section-footer .logo .img-responsive').css({
		  'margin':'0 auto',
		  'width':'60%'
		});
		//console.log(_cText);
	}
	if(_cWidth <= 480) {
		_cText = 'iphone landscape ' + _cWidth + 'px';
		$('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
		$('#footer #section-footer .newsletter').css('text-align','center');
		$('#wrapper #footer #section-footer .logo .img-responsive').css({
		  'margin':'0 auto',
		  'width':'60%'
		});
		//console.log(_cText);
	}
	if(_cWidth < 480) {
		_cText = 'iphone landscape ' + _cWidth + 'px';
		$('#change-legend').html('consulta tus resultados <i class="fa fa-plus"></i>');
		$('.carousel-inner > .item > img, .carousel-inner > .item > a > img').css('padding-top','40px');
		$('#footer #section-footer .newsletter').css('text-align','center');
		$('#wrapper #footer #section-footer .logo .img-responsive').css({
		  'margin':'0 auto',
		  'width':'60%'
		});
		//console.log(_cText);
	}
	if(_cWidth < 320) {
		_cText = 'iphone portrait ' + _cWidth + 'px';
		$('#change-legend').html('consulta tus resultados <i class="fa fa-plus"></i>');
		//console.log(_cText);
	}
	if(_cWidth < 240) {
		_cText = 'so small phones ' + _cWidth + 'px';
		$('#change-legend').html('consulta tus resultados <i class="fa fa-plus"></i>');
		//console.log(_cText);
	}
}
/* ------------------------------------------------------ *\
	[Metodos] Contact
\* ------------------------------------------------------ */
var contactMethods = {
	addDataFormContact: function() {
		var dataFormContact;
		dataFormContact = $('#send_ucd_form_contact').serializeFormJSON();
		return UCD.postalService(urlsApi.send_form_contact, dataFormContact);
	},
	fillingControl: function() {
		var validFieldItems, dataFormContact, isFull, isNoEmpty;
		validFieldItems = [
			'ucd_contact_get_name', 'ucd_contact_get_email', 'ucd_contact_get_subject', 'ucd_contact_get_message'
		];
		dataFormContact = $('#send_ucd_form_contact').serializeFormJSON();
		isFull = UCD.validFormFull(dataFormContact, validFieldItems);
		$('#ucd_send_contact_submit').attr('disabled', !isFull);
		//console.log($('#send_ucd_form_contact').serializeFormJSON());
	},
	refreshForm : function() {
		UCD.loadTemplate(tempsNames.tmp_contact_section_features, domEl.div_recurrent);
	},
	resetForm : function() {
		UCD.resetForm('#send_ucd_form_contact');
		$('#ucd_send_contact_submit').attr('disabled', true);
	},
	reset_pre_loader_in: function() {
		$('#send_message_form_loader').fadeIn();
	},
	reset_pre_loader_out: function() {
		$('#send_message_form_loader').fadeOut();
	},
	finchNavigateReturn: function() {
		$('body,html').animate({ scrollTop: "0" }, 999, 'easeOutExpo' );
		Finch.navigate('/');
	},
	sendContactForm : function(event) {
		ga('send', 'event', 'ucd_send_contact_submit', 'click', 'enviar-contacto');
		contactMethods.fillingControl();
		var contactPromise = contactMethods.addDataFormContact();
		contactPromise.success(function(data){
			setTimeout(function () {
				setTimeout(function () {
					contactMethods.reset_pre_loader_in();
				}, 1800);
				setTimeout(function () {
					setTimeout(function () {
						contactMethods.reset_pre_loader_out();
					}, 1800);
					setTimeout(function () {
						var correo = $("#contact-get-email").val();
						$('#email-from').text(correo);
						setTimeout(function () {
							$('#send_message_form_thanks').fadeIn();
						}, 1800);
						setTimeout(function () {
							setTimeout(function () {
								$('#send_message_form_thanks').fadeOut();
								contactMethods.resetForm();
								setTimeout(function () {
									contactMethods.finchNavigateReturn();
								}, 2600);
							}, 1800);
						}, 4500);
					}, 3500);
				}, 2000);
			}, 500);
		});
		contactPromise.error(function(data){
			setTimeout(function () {
				setTimeout(function () {
					contactMethods.reset_pre_loader_in();
				}, 1800);
				setTimeout(function () {
					setTimeout(function () {
						contactMethods.reset_pre_loader_out();
					}, 1800);
					setTimeout(function () {
						setTimeout(function () {
							var correo = $("#contact-get-email").val();
							$('#email-from').text('El '+ correo +' que ingresaste no es valido.');
							setTimeout(function () {
								$('#send_message_form_error').fadeIn();
								setTimeout(function () {
									$('#send_message_form_error').fadeOut();
									contactMethods.resetForm();
								}, 1800);
							}, 2900);
						}, 1500);
					}, 900);
				}, 2000);
			}, 500);
		});
	}
}


/* ------------------------------------------------------ *\
 [Methods] forms validation
\* ------------------------------------------------------ */

var inputValMetdods = {
	isIntegerKP: function (event) {
		return /\d/.test(String.fromCharCode(event.keyCode));
	}
}

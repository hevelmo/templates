/* Adl */

oldConfig = {
	sendcolor 			: '', // C49200
	sendcolorname 		: '', // Gris Saville m. (492)
	sendcolorimg 		: '', // system/img/360/MY15/S60/C49200/C49200_02.png
	sendcolorimgpre 	: '', // system/img/360/colores/C49200.png

	sendcolor2 			: '', // 3303
	sendcolorname2		: '', // Piel Sport Haya/Gris Oscuro (3303) Disponible en MOMENTUM
	sendcolorimg2		: '', // system/img/360/MY15/LATERAL/S60/u330300.jpg
	sendcolorimgpre2	: '', // system/img/360/interiores/3303.png

	interior1_img		: '', // system/img/360/MY15/LATERAL/S60/u330300.jpg
	interior2_img		: '', // system/img/360/MY15/FRONTAL/S60/3303.jpg

}

myConfig = {

	'status'			: false,
	'v_cotizador'		: 2,
	'dc'				: bypass.my_car.dc,
	'my'				: bypass.my_car.my,
	'clavemodelo'		: bypass.my_car.clavemodelo,
	'slug'				: (bypass.my_car.clavemodelo=='V40CC'?'V40-CROSS-COUNTRY':(bypass.my_car.clavemodelo=='S60CC'?'S60-CROSS-COUNTRY':bypass.my_car.clavemodelo)),
	'version_idx'		: bypass.my_car.version_idx,

	'exterior_imagex' 	: null,

	'color_status' 		: true,
	'color_name' 		: bypass.rawColor.color_nombre,
	/* 'color_thumb' 	: 'http://'+document.location.hostname+'/system/img/360'+bypass.rawColor.colorpath,*/
	'color_thumb' 		: 'http://'+bypass.agencia.dominio1+'/system/img/360'+bypass.rawColor.colorpath,
	'color_id'			: bypass.my_car.color_id,

	'rims_status' 		: false,
	'rims_name' 		: null,
	'rims_thumb' 		: null,
	'rims_id'			: bypass.my_car.rims_id,

	'accesories_status' : false,
	'accesories_name' 	: null,
	'accesories_thumb' 	: null,
	'accesories_id'		: bypass.my_car.accesories_id,

	'interior_status' 	: false,
	'interior_name' 	: null,
	'interior_thumb' 	: null,
	'interior_images_0' : null,
	'interior_images_1' : null,

	'updatefinancebutton': function (){

		var url_finance = 'http://'+bypass.agencia.dominio1+'/financiamiento-'+this.slug+'?my=MY16&dc='+this.dc+'&r='+this.rims_id+'&a='+this.accesories_id+'&c='+this.color_id+'&v='+this.version_idx+'&ver=2&origen=config';
			$("#botonfinance").attr("href", url_finance);
		//console.log(url_finance);
	},

	'updateex': function (type, rel, text, thumb){
		$('#sendemail').fadeIn("slow");

				


		this.status = true;
		switch (type) {
		    case 'color':
		        this.color_status = true;
		        this.color_name = text;
		        this.color_thumb = thumb;

		        break;
		    case 'rin':
		        this.rims_status = true;
		        this.rims_name = text;
		        this.rims_thumb = thumb;
		        break;
		    case 'acc':
		        this.accesories_status = true;
		        this.accesories_name = text;
		        this.accesories_thumb = thumb;
		        break;
		}
		
		return true;	
	},

	'updatein': function (img1, img2, type, rel, text, thumb){
		// $('#sendemail').fadeIn("slow");
		this.status = true;
		this.interior_status = true;
		this.interior_name = text;
		this.interior_thumb = thumb;
		this.interior_images_0 = img1;
		this.interior_images_1 = img2;

		return true;	
	},

	'fill_hidden_inputs':function (){

		$('#mc_status').val('true');
		$('#mc_exterior_imagex').val(myConfig.exterior_imagex);
		$('#sendcolor').val('adl-filled-it');

		if(myConfig.color_status){

			$('#mc_color_status').val('true');
			$('#mc_color_name').val(myConfig.color_name);
			$('#mc_color_thumb').val(myConfig.color_thumb);

		}

		if(myConfig.rims_status){
			$('#mc_rims_status').val('true');
			$('#mc_rims_name').val(myConfig.rims_name);
			$('#mc_rims_thumb').val(myConfig.rims_thumb);
		}

		if(myConfig.accesories_status){
			$('#mc_accesories_status').val('true');
			$('#mc_accesories_name').val(myConfig.accesories_name);
			$('#mc_accesories_thumb').val(myConfig.accesories_thumb);
		}		
	
		if(myConfig.interior_status){
			$('#mc_interior_status').val('true');
			$('#mc_interior_name').val(myConfig.interior_name);
			$('#mc_interior_thumb').val(myConfig.interior_thumb);
			$('#mc_interior_images_0').val(myConfig.interior_images_0);
			$('#mc_interior_images_1').val(myConfig.interior_images_1);
		}

	}
}

$( "#sendemail" ).click(function() {

  $('#imgminicar').attr('src',myConfig.exterior_imagex+'/02.png');
  
  if(myConfig.color_status){
  	$('#imgextsrcpre').attr('src',myConfig.color_thumb);
  }

  if(myConfig.interior_status){
  	$('#imgintsrcpre').attr('src',myConfig.interior_thumb);
  	$('#interiorauto').show();
  }else{
  	$('#interiorauto').hide();
  }

  if(myConfig.rims_status){
  	$('#imgrimsrcpre').attr('src',myConfig.rims_thumb);
  	$('#rimauto').show();
  }else{
  	$('#rimauto').hide();
  }

  if(myConfig.accesories_status){
  	$('#imgaccsrcpre').attr('src',myConfig.accesories_thumb);
  	$('#accesorioauto').show();
  }else{
  	$('#accesorioauto').hide();
  }

  myConfig.fill_hidden_inputs();

});

$(document).ready( function() {

  $('#asunto').bind('change', function (e) { 

    if( $('#asunto').val() == 'refacciones') {
      $('#asunto_refacciones').show();
      $('#tipo_formato').val("3");
    }
    else{
      $('#asunto_refacciones').hide();
      $('#tipo_formato').val("1");
    } 
    if( $('#asunto').val() == 'interes-auto') {
      $('#asunto_auto').show();
    }
    else{
      $('#asunto_auto').hide();
    }
  });

  $('#asunto').trigger('change');

  $(function(){
       $(".submitbut").click(function () {
            $(".submitbut").attr("disabled", true);
            $('#contactform').submit();
       });
  });

});

window.ParsleyConfig = { excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden], [disabled], :hidden" };
myConfig.updatefinancebutton();


/* Omar */

$(function() {

	var modelo, version, init_color, init_rin, init_acc;
	var frame, rbase;
	var base_url = 'http://'+bypass.agencia.dominio1+'/';
	var home_url = 'http://'+bypass.agencia.dominio1;
	var modelo = $('#loader').data('modelo');
	var version = $('#loader').data('version');
	var color = $('#loader').data('init-color');
	var rin = $('#loader').data('init-rin');
	var acc = $('#loader').data('init-acc');
	var changing = false;
	var selected_icon =  '<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-check fa-stack-1x fa-inverse"></i></span>';

    setGlobalVars = function(){
    	if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			frame = base_url+'system/img/360/MOVIL/EXTERIORES/'+modelo+'/'+version+'/'+color+'/'+rin+'/'+acc+'/'+'0#.png';
			myConfig.exterior_imagex = base_url+'system/img/360/MOVIL/EXTERIORES/'+modelo+'/'+version+'/'+color+'/'+rin+'/'+acc;
			rbase = base_url+"system/img/360/MOVIL/INTERIORES/";
		}else{
			frame = base_url+'system/img/360/MY16/'+modelo+'/'+version+'/'+color+'/'+rin+'/'+acc+'/'+'0#.png';
			myConfig.exterior_imagex = base_url+'system/img/360/MY16/'+modelo+'/'+version+'/'+color+'/'+rin+'/'+acc;
			rbase = base_url+"system/img/360/";
		}
    }

	switch_360 = function(tipo,folder,texto){

		if(tipo == "color"){ 
			color = folder;
		}

		if(tipo=="rin") rin = folder;
		if(tipo=="acc") acc = folder;

		$('#image').show();
		$('#image2').hide();

		setGlobalVars();

        /*var frame = base_url+'system/img/360/MY16/'+modelo+'/'+version+'/'+color+'/'+rin+'/'+acc+'/'+'0#.png';*/
        myConfig.exterior_imagex=base_url+'system/img/360/MY16/'+modelo+'/'+version+'/'+color+'/'+rin+'/'+acc;
        myConfig.color_id = color; myConfig.rims_id = rin; myConfig.accesories_id = acc;

        var selected = $('#contents div.cols:not(.hidden) .col ul.grid li a.selected img').attr('src');

        $('ul.tabs li.active h5 span').text(texto);
        $('#image').reel('images', frame);
        $('ul.tabs li.active img').attr('src',selected);     
    }


 	mostrarInteriores = function(image1,image2,isDefault){

 		/*var rbase = base_url+"system/img/360/";*/
 		var im1 = '<div style="background-image:url('+rbase+image1+');" />';
 		var im2 = '<div style="background-image:url('+rbase+image2+');" />';
 		var loader = $('div.interior');

 		$('div.interior').empty();

		$(im1).appendTo('div.interior');
		$(im2).appendTo('div.interior');

		$('div.interior div:first-child').show();

 		$('div.showcase').fadeOut('normal',function(){
 			$('div.controls').fadeIn();
 			$('div.interior').fadeIn();
 		});

	    /*
	    if(isDefault){
	      console.log("not default");
	      $("#interiorDefault1").val(rbase+image1);
	      $("#interiorDefault2").val(rbase+image2);
	      $("#interior1").attr("src", rbase+image1);
	      $("#interior2").attr("src", rbase+image2);
	    }else{
	      console.log("is default");
	      $("#interior1").attr("src", rbase+image1);
	      $("#interior2").attr("src", rbase+image2);
	    }

	    $("#carrusel-interiores").show();*/
  	}

  	sidebar = function(){
  		var w = $('.sidebar').outerWidth();
  		var fw = w+200;
  		$('.sidebar').css('left',-fw);
  		$('.sidebar').show();
  	}

  	$('div.controls span').on('click',function(){
  		if(changing==false){
  			changing = true;
			$('div.interior div:first-child').hide();
			$('div.interior div:last-child').fadeIn('normal',function(){
				changing = false;
			});
			$('div.interior div:first-child').appendTo('div.interior');
		}
  	});

	$('ul.tabs li').on('click',function(e){
		e.preventDefault();
		var rel = $(this).data('rel');
		$('ul.tabs li').removeClass('active');
		$(this).addClass('active');
		$('#contents div.cols').addClass('hidden');
		$('#contents #'+rel).removeClass('hidden');
	});

	$('body').on('click','ul.grid li a',function(e){
		e.preventDefault();
		var parent = $(this).parent().parent().parent().parent();
		var type = $(this).data('type');
		var rel = $(this).data('rel');
		var text = $(this).data('text');
		var rel = $(this).data('rel');
		var thumb = $(this).find('img').attr('src');

		$(parent).find('span.fa-stack').remove();
		$(parent).find('ul.grid li a').removeClass('selected');
		$(selected_icon).prependTo(this);
		$(this).addClass('selected');

		if(type==='int'){
			imgs = rel.split('|');
			$('div.interior').fadeOut('normal',function(){
				mostrarInteriores(imgs[0],imgs[1],parseInt(text));
			});
			myConfig.updatein(base_url+'system/img/360/'+imgs[0], base_url+'system/img/360/'+imgs[1], type, rel, text, home_url+thumb);			

		}else{
			if($('div.interior').is(':visible')){
				$('div.interior').fadeOut();
				$('div.controls').fadeOut();
				$('div.showcase').fadeIn();
			}

			if(type!="rin"){
				myConfig.updateex(type, rel, text, home_url+thumb);
				
			}else{
				myConfig.updateex(type, rel, text, base_url+thumb);
				
			}

			

			switch_360(type,rel,text);
			myConfig.updatefinancebutton();
		}

	});

	$('.sidebar span').on('click',function(){
		var w = $('.sidebar').outerWidth();
  		var fw = w+200;
		$( ".sidebar" ).animate({
			left: "-="+w,
		}, 600);
	});

	$('body').on('click','a.change',function(e){
		e.preventDefault();
		var w = $('.sidebar').outerWidth();
		$( ".sidebar" ).animate({
			left: 0,
		}, 600);
	});


	$('#image').reel({
		images:      base_url+'system/img/360/MY16/'+modelo+'/'+version+'/'+color+'/'+rin+'/'+acc+'/0#.png',
		frames:      5,
		frame:       2, 
		loops:       true,
		speed:       0,
		responsive:   true, 
		revolution:  100,
		indicator:    0, 
		preloader:    2
    }); 


	//alert(hidesidebar);
	if(hidesidebar==true){
    	sidebar();
	}


    setGlobalVars();

    if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	var interior = $('.interior');
    	var models = $('a#models_sidebar');
		interior.remove();
		models.remove();
		interior.insertBefore('ul.tabs');
		models.insertAfter('#contents');
    }

    $('.wrap h4').on('click',function(){
    	$(this).next('ul').slideToggle();
    });

});
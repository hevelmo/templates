var model, json = [], version, plan, plazo, enganche, prev = null, changed = false;

function preselect(indice){
	
		resetValues();
		//var indice = $(this).index();
		version = indice - 1;

		var config = $('div.cotizador').data('config');

		$('.version-v ol li').eq(version).addClass('active');

		if(config==true){ $('.version-v ol li').eq(version).addClass('config'); }

		$(this).addClass('active');
		$('.version-v ol li').eq(version).attr('data-origin',true);
		$('.content-cotizador').addClass('preVersion');
		$('.plazo ol').empty();
		$('.plazo h2:eq(0)').addClass('active');
		
		$('.version-v h2').addClass('active');	

		$('.mod-modelo dd').text($('.version-v ol li').eq(version).text());	

		$('#version').val(json[version].nombre);
		
		
		$('.enganche ol').remove();
		$(".enganche").append('<ol/>');

		$('.content-cotizador').removeClass('prePlazo');
		$('.content-cotizador').removeClass('preEnganche');


		/* if($('.version-v ol li').eq(version).hasClass('promo')){

			if(json[version].promo.modal==1){
				$('.promocion a').attr('href','#');
				$('.promocion a').addClass('mdl');
				$('.promocion a.mdl').attr({"data-toggle": 'modal', "data-target": '#terms'});
				$('#terms .modal-body p.mdl-text').text(json[version].promo.legales);
				$('#terms .modal-body p.mdl-vigencia').html('<strong>Vigencia hasta</strong> '+json[version].promo.vigencia);
			}else{
				$('.promocion a').removeAttr('data-toggle');
				$('.promocion a').removeAttr('data-target');
				$('.promocion a').attr({'href':json[version].promo.legales,'target':'_blank'});
			}
			$('.promocion').removeClass('disabled');
			$('.promocion span').text(json[version].promo.descripcion);
			$('.promocion a').show();


			var precio_promo = json[version].promo.precio_promo;
			var precio_lista = json[version].precio;
			var precio_lista_formated = precio_lista.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			var precio_descuento_formated = precio_promo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			$('.mod-precio dd').addClass('highlight');

			$('.mod-precio dd span:eq(0)').text(precio_descuento_formated);
			$('.mod-precio dd .desc span').text('$'+precio_lista_formated);
			$('.mod-precio dd .desc').show();
			$('#descuento').val('Desde y sin equipo adicional $'+precio_descuento_formated+'*.');
			$('#promocion').val('true');
			
			$('#promovigencia').val(json[version].promo.descripcion_vigencia);
			$('#disclaimer').val(json[version].promo.legales);

			
			var css_class;
			
			$.each(json[version].planes, function( index, data){
				if(data.hay_promo==1){
					css_class = 'pm';
				}else{
					css_class = '';
				}
				var html = '<li class="'+css_class+'" data-index="'+index+'">'+data.descripcion_promo+'</li>';
				$(html).appendTo('.plazo ol:eq(0)');
			});

		}else{
			var css_class;

			$.each(json[indice].meses, function( index, data){
				var html = '<li data-mes="'+data.mes+'">'+data.mes+' Meses</li>';
				$(html).appendTo('.plazo ol');
			});

			$('#promocion').val('false');
			$('.promocion a').hide();
			$('.promocion').addClass('disabled');
			$('.promocion a').attr('href','#');
			$('.promocion a').removeAttr('data-toggle');
			$('.promocion a').removeAttr('data-target');

		
			var precio_lista = json[version].precio;
			var precio_lista_formated = precio_lista.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			$('.mod-precio dd span').text(''+precio_lista_formated);


		}		*/

		var css_class;

			
		$.each(json[version].planes, function( index, data){
			if(data.hay_promo==1){
				css_class = 'pm';
			}else{
				css_class = '';
			}
			var html = '<li class="'+css_class+'" data-index="'+index+'">'+data.descripcion_promo+'</li>';
			$(html).appendTo('.plazo ol:eq(0)');
		});
		
		$('#promocion').val('false');
		$('.promocion a').hide();
		$('.promocion').addClass('disabled');
		$('.promocion a').attr('href','#');
		$('.promocion a').removeAttr('data-toggle');
		$('.promocion a').removeAttr('data-target');

	
		var precio_lista = json[version].precio;
		var precio_lista_formated = precio_lista.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$('.mod-precio dd span').text(''+precio_lista_formated);

}


init = function(api_url){

	//console.log(api_url);
	loadData = function(){
		model = $('.cotizador').data('model');
		var url = api_url+'&clavemodelo='+model;
		
		var request = $.ajax({
		  	url: url,
		  	type: 'GET',	
		  	"text json": jQuery.parseJSON,
		  	dataType: 'json',
		   	beforeSend: function() {
		   		
  			}
		});
		 
		request.done(function( json_response ) {

			$.each(json_response, function( index, data){

				var planes = [];

				$.each(data.planes, function( p_index, p_data){

					var months = [];

					$.each(p_data.meses, function( m_index, m_data){
						var enganches = [];
						var mes = m_index.replace('meses_', '');
						//var promo = m_data.promo;

						$.each(m_data, function(e_index, e_data){
							var percent = e_index.replace('enganche_', '');
							enganches.push({
											plazo:percent,
											desc:e_data
										});
						});

						months.push({
										mes:mes,
										enganches:enganches
									});
					});

					planes.push({
						    		habilitada : p_data.habilitada,
						    		precio_promo : p_data.precio_promo,
						    		enganche_min: p_data.enganche_min,
						    		hay_promo: p_data.hay_promo,
						    		descripcion : p_data.descripcion,
						    		descripcion_promo : p_data.descripcion_promo,
						    		descripcion_vigencia : p_data.descripcion_vigencia,
						    		legales : p_data.legales,
						    		legales_short : p_data.legales_short,
						    		modal : p_data.modal,
						    		vigencia : p_data.vigencia,
						    		habilitada : p_data.habilitada,
						    		meses: months,
						    		promo: data.promocion
								});
				});

				json.push({
						    nombre : data.nombre_version, 
						    precio : data.precio_lista,
						    planes: planes,
						    img: data.default_version_img
						});

			});

			console.log(json);

			createPlanList();

		});
		 
		request.fail(function( jqXHR, textStatus ) {
		  alert( "Ocurrió el siguiente error: " + textStatus );
		});

	}

	createPlanList = function(){

		$.each(json, function( index, data){
			var css_class;

			if(data.planes.length > 1){
				css_class = 'promo';
			}else{
				css_class = '';
			}

			var html = '<li class="'+css_class+'" data-precio="'+data.precio+'" class="">'+data.nombre+'</li>';
			$(html).appendTo('.version-v ol');
		});

		$('#cotizador').fadeIn();

	}

	createVersionList = function(){
		$.each(json, function( index, data){
			var html = '<li data-precio="'+data.precio+'" class="">'+data.nombre+'</li>';
			$(html).appendTo('.version-v ol');
		});
		$('#cotizador').fadeIn();
	}

	resetValues2 = function(){
		$('.mod-precio dd span').text('---,---');
		$('.mod-mensualidad dt:eq(0)').text('--');
		$('#plazo').val('');
		$('.mod-comision dd span').text('--');
		$('.mod-mensualidad dd span').text('---,---');

		$('.mod-financiamiento dd span').text('---,---');
		$('.mod-cat dd span').text('--');
		$('.mod-enganche dd span').text('--');
		$('.promocion a').removeClass('mdl');
		$('.promocion span').text('No hay promociones disponibles.');
		resetSpecialPrice();

		$('#sendbuttonmail').hide();
		
	}

	resetValues = function(){
		$('.mod-modelo dd').text('--');
		$('#version').val('');

		$('.mod-precio dd span').text('---,---');
		$('.mod-mensualidad dt:eq(0)').text('--');
		$('#plazo').val('');
		$('.mod-comision dd span').text('--');
		$('.mod-mensualidad dd span').text('---,---');

		$('.mod-financiamiento dd span').text('---,---');
		$('.mod-cat dd span').text('--');
		$('.mod-enganche dd span').text('--');
		$('.promocion a').removeClass('mdl');
		$('.promocion span').text('No hay promociones disponibles.');
		resetSpecialPrice();

		$('#sendbuttonmail').hide();
		
	}

	resetSpecialPrice = function(){
		$('.mod-precio dd .desc').hide();
		$('.mod-precio dd').removeClass('highlight');
		$('#descuento').val('');
	}

	hidePromoText = function(){
		$('.promocion a').hide();
		$('.promocion').addClass('disabled');
		$('.promocion a').attr('href','#');
		$('.promocion a').removeAttr('data-toggle');
		$('.promocion a').removeAttr('data-target');
	}

	loadData();

	$('.promocion a.mdl').on('click',function(e){
		e.preventDefault();
	});

	// Seleccionar Versión

	changeImg = function(indice,origin){
		var url;
		var assets = $('#cotizador').data('assets');

		if(origin===true){
			url = $('#cotizador').data('original');
		}else{
			url =  assets+json[indice].img;
		}
		
		$('.version-v img').attr('src',url);
	}

	procesarPromo = function(){
		indice = $('#changeModal').data('index');
		version = indice;
		me = $('.version-v ol li').eq(indice);

		resetValues();

		if(me.attr('data-origin')){
			changeImg(indice,true);
		}else{
			changeImg(indice,false);
		}

		$('.version-v ol li').removeClass('active');
		me.addClass('active');

		$('.version-v h2').addClass('active');
		$('.plazo h2').removeClass('active');
		$('.plazo h2:eq(0)').addClass('active');
		$('.enganche h2').removeClass('active');
		
		$('.content-cotizador').addClass('preVersion');
		$('.plazo ol').empty();

		$('.enganche ol').remove();
		$('.enganche').append('<ol/>');

		$('.content-cotizador').removeClass('prePlazo');
		//$('.content-cotizador').removeClass('preEnganche');


		$.each(json[indice].planes, function( index, data){
			if(data.hay_promo==1){
				css_class = 'pm';
			}else{
				css_class = '';
			}
			var html = '<li class="'+css_class+'" data-index="'+index+'">'+data.descripcion_promo+'</li>';
			$(html).appendTo('.plazo ol:eq(0)');
		});
		/*
		if(me.hasClass('promo')){
			if(json[version].planes[plan].modal==1){
				$('.promocion a').attr('href','#');
				$('.promocion a').addClass('mdl');
				$('.promocion a.mdl').attr({"data-toggle": 'modal', "data-target": '#terms'});
				$('#terms .modal-body p.mdl-text').text(json[version].promo.legales);
				$('#disclaimer').val(json[version].promo.legales);

				$('#terms .modal-body p.mdl-vigencia').html('<strong>Vigencia hasta</strong> '+json[version].promo.vigencia);
			}else{
				$('#disclaimer').val('');
				$('.promocion a').removeAttr('data-toggle');
				$('.promocion a').removeAttr('data-target');
				$('.promocion a').attr({'href':json[version].promo.legales,'target':'_blank'});
			}
			////console.log($('#disclaimer').val());
			$('.promocion').removeClass('disabled');
			$('.promocion span').text(json[version].promo.descripcion);
			$('.promocion a').show();

			var precio_promo = json[version].promo.precio_promo;
			var precio_lista = json[version].precio;
			var precio_lista_formated = precio_lista.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			var precio_descuento_formated = precio_promo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			$('.mod-precio dd').addClass('highlight');

			$('.mod-precio dd span:eq(0)').text(precio_descuento_formated);
			$('.mod-precio dd .desc span').text('$'+precio_lista_formated);
			$('.mod-precio dd .desc').show();

			// ADL Mod
			$('#promocion').val('true');
			$('#descuento').val(json[version].promo.descripcion_promo);
			$('#promovigencia').val(json[version].promo.descripcion_vigencia);

		}else{
			hidePromoText();

			// ADL Mod
			$('#promocion').val('false');
			$('#descuento').val('');
			$('#vigencia').val('');
			

			var precio = parseFloat(json[version].precio);
			var precio_formated = precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			$('.mod-precio dd span:eq(0)').text(precio_formated);
		}*/

		$('.mod-modelo dd').text(json[version].nombre);
		$('#version').val(json[version].nombre);

		$('#changeModal').modal('hide');
	}

	$('#true_btn').on('click',function(e){
		e.preventDefault();
		procesarPromo();
		changed = true;
	});

	$('body').on('click','.version-v ol li',function(){
		var indice = $(this).index();
		$('#changeModal').data('index',indice);

	    //if (!$(this).attr('data-origin') && changed == false && $('[data-origin]').length > 0) {
	    //	$('#changeModal').modal('show');
	    //    return false;
	    //}else{
	    	procesarPromo();
	    //}
	});

	$('body').on('click','.plazo ol:eq(0) li',function(){
		var indice = $(this).index();
		var nodo = json[version].planes[indice];
		plan = indice;

		resetValues2();

		$('.plazo h2:eq(0)').removeClass('active');
		$('.plazo h2:eq(1)').addClass('active');

		$('.plazo .ms ol').remove();
		$(".plazo .ms").append('<ol/>');

		$('.enganche ol').remove();
		$(".enganche").append('<ol/>');
		$('.enganche h2').removeClass('active');

		$('.plazo ol:eq(0) li').removeClass('active');
		$(this).addClass('active');

		/***/
		var precio_final = nodo.precio_promo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		var precio_original = json[version].precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
		$('.mod-precio dd span:eq(0)').text(precio_final);
		
		if(nodo.hay_promo==1){

			$('.mod-precio dd span:eq(1)').text(precio_original);
			
			if(json[version].planes[plan].modal==1){
				$('.promocion a').attr('href','#');
				$('.promocion a').addClass('mdl');
				$('.promocion a.mdl').attr({"data-toggle": 'modal', "data-target": '#terms'});
				$('#terms .modal-body p.mdl-text').text(json[version].planes[plan].legales_short);
				$('#terms .modal-body p.mdl-vigencia').html('<strong>Vigencia hasta</strong> '+json[version].planes[plan].vigencia);
			}else{
				$('.promocion a').removeAttr('data-toggle');
				$('.promocion a').removeAttr('data-target');
				$('.promocion a').attr({'href':json[version].planes[plan].legales_short,'target':'_blank'});
			}

			$('.promocion').removeClass('disabled');
			$('.promocion span').text(json[version].planes[plan].legales);
			$('.promocion a').show();

			$('.mod-precio dd').addClass('highlight');
			$('.mod-precio dd .desc span').text('$'+precio_original);
			$('.mod-precio .desc').show();

			//console.log("has-promo");
			$('#promocion').val('true');
			$('#descuento').val(json[version].planes[plan].descripcion_promo);
			$('#promovigencia').val(json[version].planes[plan].descripcion_vigencia);

			css_class = 'pm';

		}else{

			resetSpecialPrice();

			$('.mod-precio dd span:eq(0)').text(precio_final);

			hidePromoText();

			$('.mod-precio dd').removeClass('highlight');
			$('.mod-precio .desc').hide();

			css_class = '';
		}

		if(nodo.enganche_min==1.0){
			
			$('<li>Una sola exhibición</li>').appendTo('.plazo .ms ol');
			$('<li>No aplica</li>').appendTo('.enganche ol');

			$('.plazo .ms ol').addClass('full');
			$('.enganche ol').addClass('full');
			$('.enganche h2').addClass('active');

			$('.content-cotizador').addClass('prePlazo preEnganche');

		}else{

			$.each(nodo.meses, function( index, data){
					var html = '<li class="full_li" data-index="'+index+'">'+data.mes+' Meses</li>';
					$(html).appendTo('.plazo .ms ol');
			});

			var num_cols = 2,
		    container = $('.plazo .ms'),
		    listItem = 'li',
		    listClass = 'plazos';
		    container.each(function() {
		        var items_per_col = new Array(),
		        items = $(this).find(listItem),
		        min_items_per_col = Math.floor(items.length / num_cols),
		        difference = items.length - (min_items_per_col * num_cols);
		        for (var i = 0; i < num_cols; i++) {
		            if (i < difference) {
		                items_per_col[i] = min_items_per_col + 1;
		            } else {
		                items_per_col[i] = min_items_per_col;
		            }
		        }
		        for (var i = 0; i < num_cols; i++) {
		            $(this).append($('<ol ></ol>').addClass(listClass));
		            for (var j = 0; j < items_per_col[i]; j++) {
		                var pointer = 0;
		                for (var k = 0; k < i; k++) {
		                    pointer += items_per_col[k];
		                }
		                $(this).find('.' + listClass).last().append(items[j + pointer]);
		            }
		        }
		    });

		    $('.plazo .ms ol:eq(0)').remove();
		}


	});

	$('body').on('click','.plazo .ms ol:not(.full) li',function(){
		//var indice = $(this).index();
		var indice = $(this).data('index');
		plazo = indice;

		$('.mod-mensualidad dd span').text('---,---');
		$('#sendbuttonmail').hide();
		$('.mod-financiamiento dd span').text('---,---');
		$('.mod-enganche dd span').text('--');
		$('.mod-mensualidad dt:eq(0)').text('--');
		//resetSpecialPrice();
	
		$('.plazo .ms ol li').removeClass('active');
		$(this).addClass('active');
			
		if(!$(this).hasClass('pm')){
			$('.promocion a').hide();
			$('.promocion').addClass('disabled');
			$('.promocion a').attr('href','#');
			$('.promocion a').removeAttr('data-toggle');
			$('.promocion a').removeAttr('data-target');
			$('#promocion').val('false');
			$('.promocion span').text('No hay promociones disponibles.');
		}
		
		$('.version-v h2').addClass('active');
		$('.plazo h2').removeClass('active');
		$('.enganche h2').addClass('active');
		
		$('.content-cotizador').addClass('prePlazo');
		$('.enganche ol').remove();
		$(".enganche").append('<ol/>');

		$('.content-cotizador').removeClass('preEnganche');

		var css_class;

		$.each(json[version].planes[plan].meses[plazo].enganches, function( index, data){
				var html = '<li data-index="'+index+'" data-porcent="'+data.plazo+'">'+data.plazo+'%</li>';
				$(html).appendTo('.enganche ol');
		});

		var num_cols = 2,
	    container = $('.enganche'),
	    listItem = 'li',
	    listClass = 'enganches';
	    container.each(function() {
	        var items_per_col = new Array(),
	        items = $(this).find(listItem),
	        min_items_per_col = Math.floor(items.length / num_cols),
	        difference = items.length - (min_items_per_col * num_cols);
	        for (var i = 0; i < num_cols; i++) {
	            if (i < difference) {
	                items_per_col[i] = min_items_per_col + 1;
	            } else {
	                items_per_col[i] = min_items_per_col;
	            }
	        }
	        for (var i = 0; i < num_cols; i++) {
	            $(this).append($('<ol ></ol>').addClass(listClass));
	            for (var j = 0; j < items_per_col[i]; j++) {
	                var pointer = 0;
	                for (var k = 0; k < i; k++) {
	                    pointer += items_per_col[k];
	                }
	                $(this).find('.' + listClass).last().append(items[j + pointer]);
	            }
	        }
	    });

    	$('.enganche ol:eq(0)').remove();
    	/**/
		/*$('.mod-mensualidad dt:eq(0)').text(json[version].planes[plan].meses[plazo].mes);
		$('#plazo').val(json[version].planes[plan].meses[plazo].mes);*/
    	/**/

	});

	$('body').on('click','.enganche ol:not(.full) li',function(){
		var enganche = $(this).data('index');
		var parent = $(this).parent().index();
		var parent_el = ($('.enganche ol:eq(0) li').length);

		var nodo, precio_lista, precio_promo, comision, mensualidades, financiamiento;

		$('.enganche ol li').removeClass('active');
		$(this).addClass('active');
		$('.content-cotizador').addClass('preEnganche');
		//resetSpecialPrice();
		/**/
		nodo = json[version].planes[plan].meses[plazo].enganches[enganche].desc;
		comision = parseFloat(nodo.comision_apertura);
		mensualidades = parseFloat(nodo.mensualidad);
		financiamiento = parseFloat(nodo.pago_inicial);
		precio_promo = nodo.precio;
		precio_lista = json[version].precio;
		// Formato .replace(/\d(?=(\d{3})+\.)/g, '$&,');
		var comision_formated = comision.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		var mensualidades_formated = mensualidades.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		var financiamiento_formated = financiamiento.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		var tasa = nodo.tasa;
		var porcentaje = nodo.porcentaje;
		// Textos
		$('.mod-comision dd span').text(comision_formated);
		$('.mod-mensualidad dd span').text(mensualidades_formated);

		$('.mod-financiamiento dd span').text(financiamiento_formated);
		//$('.mod-comision dd span').text(comision_formated);
		$('.mod-cat dd span').text(tasa);
		$('.mod-enganche dd span').text(porcentaje);

		/*ADL MOD*/
		$('#sendbuttonmail').show();
		
		
		$('#enganchepct').val(porcentaje);
		$('#tasa').val(tasa);
		$('#enganche').val(financiamiento_formated);
		$('#comision').val(comision_formated);
		$('#mensualidades').val(mensualidades_formated);
		$('#precio').val(precio_lista);

		var plazo_n;

		if(nodo.anualidades_plazo==1){
			plazo_n = nodo.anualidades_plazo+' Anualidades';
		}else{
			plazo_n = nodo.meses_plazo+' Mensualidades';
		}

		$('.mod-mensualidad dt:eq(0)').text(plazo_n);
		$('#plazo').val(nodo.meses_plazo);
		

		var dd =[];
		dd.push($('#enganchepct').val());
		dd.push($('#tasa').val());
		dd.push($('#enganche').val());
		dd.push($('#comision').val());
		dd.push($('#mensualidades').val());
		dd.push($('#precio').val());
		dd.push($('#version').val());
		dd.push($('#plazo').val());

		dd.push($('#colorid').val());
		dd.push($('#dc').val());
		dd.push($('#my').val());


		if(precio_lista==precio_promo){ //
			$('#promocion').val('false');
			$('#promovigencia').val();
			$('#descuento').val()
		}else{
			$('#promocion').val('true');
			
			console.log(json[version].planes[plan].vigencia);

			$('#promovigencia').val('Vigente hasta el '+json[version].planes[plan].vigencia);
			$('#descuento').val('$ '+precio_promo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
		}


		// Pendientes
		dd.push($('#descuento').val());
		dd.push($('#promocion').val());
		dd.push($('#promovigencia').val());

	});

	$('.plazo h2 span.back a').on('click',function(e){
		e.preventDefault();
		$('.content-cotizador').removeClass('preVersion');
	});

	$('.enganche h2 span.back a').on('click',function(e){
		e.preventDefault();
		$('.content-cotizador').removeClass('prePlazo');
	});

	$('.result-cotizador span.back a').on('click',function(e){
		e.preventDefault();
		$('.content-cotizador').removeClass('preEnganche');
	});

}

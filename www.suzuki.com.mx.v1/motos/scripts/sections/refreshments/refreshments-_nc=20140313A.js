$(document).ready(function(){

	if(IS_MOBILE){
		$('.ref_mob').css('display', 'block');
		$('.ref_des').remove();
	}
	else{
		$('.ref_des').css('display', 'block');
		$('.ref_mob').remove();
	}

	var refacciones;
	var $model_select = $('#model_select');

    $.ajax({
        url: '/motos/refacciones/data',
        cache: false,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            refacciones = data.refacciones;

            refacciones.forEach(function(entry) {
			    var group = '<optgroup label="'+ entry.moto +'" class="grp_opt opt_"'+ entry.moto +'>';

			    entry.models.forEach(function(e) {
			    	group+= '<option value="'+ e.file +'" class="ys_opt opt_"'+ entry.moto +'_'+ e.year +'> '+ e.year +' </option>';                                         
			    });
			    group+= '</optgroup>';
			     $('#model_select').append(group);
			});
   
			$model_select.chosen({
			    placeholder_text_single: "Selecione una opción",
			    placeholder_text_multiple: "Selecione una opción"
			});
        },
        error: function(e){
            console.log(e);
        }
    });

	$('#model_select').change(function(){		
		if($('#model_select').val() !== null) {
			var loc = window.location.hostname;
			switch(loc){
				case 'suzuki.dev.ktc.mx':
				case 'www.suzuki.dev.ktc.mx':
					var cdn = 'http://cdn.suzuki.dev.ktc.mx/';
					break;
				case 'suzuki.stg.ktc.mx':
				case 'www.suzuki.stg.ktc.mx':
					var cdn = 'http://cdn.suzuki.stg.ktc.mx/';
					break;
				case 'suzuki.com.mx':
				case 'www.suzuki.com.mx':
					var cdn = 'http://cdn.ktcagency.com/';
					break;
				default:
					var cdn = 'http://cdn.suzuki.stg.ktc.mx/';
					break;
			}
			$(".link.refreshment").attr("href", cdn + 'motos/files/refacciones/' + $('#model_select').val()).attr('target', '_blank');
		}
		$('.label.refreshment').html('Modelo:  ' + $(this.options[this.selectedIndex]).closest('optgroup').prop('label'));
	});

});

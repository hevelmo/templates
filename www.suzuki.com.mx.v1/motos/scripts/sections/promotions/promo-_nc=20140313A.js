$(document).ready(function(){
    var $model_select = $('#model_select');
    

    // $.ajax({
    //     url: '/motos/data/promociones.json',
    //     cache: false,
    //     type: 'GET',
    //     dataType: 'json',
    //     success: function(data){
    //         promociones = data.promociones;

    //         promociones.forEach(function(entry) {
    //             var group = '<optgroup label="'+ entry.moto +'" class="grp_opt opt_"'+ entry.moto +'>';

    //             entry.models.forEach(function(e) {
    //                 group+= '<option value="'+ e.file +'" class="ys_opt opt_"'+ entry.moto +'_'+ e.year +'> '+ e.year +' </option>';                                         
    //             });
    //             group+= '</optgroup>';
    //              $model_select.append(group);
    //         });
   
    //         $model_select.chosen({
    //             placeholder_text_single: "Selecione una opción",
    //             placeholder_text_multiple: "Selecione una opción"
    //         });
    //     },
    //     error: function(e){
    //         console.log(e);
    //     }
    // });

    $model_select.change(function(){ 
        if($model_select.val() !== null)
            $(".link.promotion").attr("href", location.protocol + '//' + location.hostname + '/motos/'+$model_select.val()).attr('target', '_blank');
        // $('.label.promotion').html('Modelo:  ' + $(this.options[this.selectedIndex]).closest('optgroup').prop('label'));
    });
    $model_select.chosen();


    if(IS_MOBILE){

    }
    else{
        $('.events_gallery_content').css('min-height', '290px');
        $('.section_wrapper a .hover').css('display', 'block');
    }



});
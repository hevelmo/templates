$(document).ready(function(){

    // if(!IS_MOBILE){
    var init_slide_load = location.hash.slice(1);
    if(!init_slide_load && IS_MOBILE){
        $('.mob_catalog_opt').css('display', 'block');
        $('.mob_catalog_opt').click(function(){
            var me =  $(this),
                link = me.data('link');

            window.location.href = '/motos/catalogo#' + link;
            location.reload();
        });
    }else{
        
        $('.catalog_cars_wrapper').find('.catalog_car').each(function( index ) {
            if( $(this).hasClass(init_slide_load) )
                init_slide_load = index;
        });

        $.switch_catalog = function(key, element){
            if(key){
                var car_key = key;
                var slide = $("#catalog-"+ car_key);

            }
            if(element){
                $('.catalog_car.active').removeClass('active');
                element.parent('.catalog_car').addClass('active');
                $('.catalog_car.'+key).addClass('active');
            }
        }

        // $.init_slider = function(){
            if( $('a.switch-catalog-category')){
                $('.catalog_cars_wrapper').delegate('a.switch-catalog-category', 'click', function( e ){
                    $.switch_catalog($(this).data('first-key'),$(this));
                    $('.catalog_car_category').hide();
                    $('.'+$(this).data('category')).show();
                    $('.catalog_cars_wrapper .subtitle').show().html($(this).data('name'));
                    $('.catalog_cars_wrapper .title').addClass('subtitle_return').html('Cambia de categoría <img class="close_category" src="/motos/images/sections/catalog/X.png">');
        
                    //Aquí va la lógica de cambio de categoría
        
                    var show_category = $(this).data('category').substring(4, 6);
                    var $show_category_wrapper = $('*[data-category-id="' + show_category + '"]');
                    $('#catalog-main_key').fadeOut().removeClass("et-page-active");
                    $show_category_wrapper.fadeIn().addClass("et-page-active");
        
                }).delegate('.title', 'click', function( e ){
                    history.pushState("", document.title, window.location.pathname);
        
                    $('.models_motos').hide();
                    $('.catalog_cars_wrapper .subtitle').hide();
                    $('.catalog_car_category').delay(500).show();
                    $('.catalog_cars_wrapper .title').removeClass('subtitle_return').html('Selecciona una categoría');
                    $.switch_catalog('main_key',false);
        
                    $('.et-page-active').css("top","auto");
                    $('.et-page-active').fadeOut().removeClass('et-page-active');
                    $('#catalog-main_key').fadeIn().addClass('et-page-active');
                    //Regresar al estado inicial del thingy
                });
        
                $('.catalog_cars_wrapper').delegate('a.switch-catalog', 'click', function( e ){
                    e.preventDefault();
        
                    $.switch_catalog($(this).data('key'), $(this));
        
                    //Aquí va la lógica de cambio de slide
        
                    var current_category = $(this).data('category').substring(4, 6);
                    var current_index = $(this).data('index');
        
                    var show_product_position = -655 * current_index;
        
        
                    //$('.et-page-active').css("top",temp_scroll);
                    $('.et-page-active').animate({
                        top: show_product_position
                    }, 350);
        
                });
        
                var slide_load = window.location.hash.substr(1,2);
                $( ".switch-catalog-category."+slide_load).trigger( "click" );
            }
        //     else{
        //         $.init_slider();
        //     }
        // }
    // }
    }

    

})

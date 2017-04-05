(function($) {
    $.fn.concessionaire_selector = function( options ) {
        var _defaults = {
            cache                   : true,
            callback                : null,
            concessionaires_class   : 'concessionaire_select',
            concessionaires_text    : '[ Elige tu concesionaria ]',
            ga_label                : '',
            id                      : '',
            name                    : '',
            preselected             : -1,
            states_class            : 'state_select',
            states_text             : '[ Elige tu estado ]',
            target                  : this,
            service_url             : '/autos/services/concessionaires/combo',
            url                     : '',
            width                   : '250px'
        }, defaults;
        function init(){
            $.ajax({
                url: defaults.service_url,
                success: function( data ){
                    if( data.status == 'ok' ){
                        var conce_i,
                            concessionaires = data.data.concessionaires,
                            concessionaire,
                            states = data.data.states,
                            html_output = '',
                            st_i,
                            state;
                        html_output += '<option value="-1">' + defaults.states_text + '</option>';
                        for( st_i in states ){
                            state = states[ st_i ];
                            html_output += '<option value="' + state.key + '">' + state.name + '</option>'
                        }
                        $( defaults.target ).html(
                            '<select style="width: '+defaults.width+';" class="' + defaults.states_class + '">' + html_output + '</select>' +
                            '<select style="width: '+defaults.width+';" class="' + defaults.concessionaires_class + '" disabled="disabled"><option value="-1">' + defaults.concessionaires_text + '</option></select>'

                        );
                        try{
                            $('select.' + defaults.states_class ).chosen();
                            $('select.' + defaults.concessionaires_class ).hide();
                        }catch(e){

                        }
                        $( defaults.target ).children( '.' + defaults.states_class ).on( 'change', function( e ){                            
                            var state_selected = $(this).val();                           
                            if( state_selected == -1 ){
                                $('select.' + defaults.concessionaires_class ).hide();
                                e.preventDefault();
                                return false;
                            }else{
                                $('select.' + defaults.concessionaires_class ).show();
                            }

                            html_output = '<option value="-1">' + defaults.concessionaires_text + '</option>';
                            for( conce_i in concessionaires ){
                                concessionaire = concessionaires[ conce_i ];
                                if( state_selected == concessionaire.state ){
                                    html_output += '<option value="' + concessionaire.key + '">' + concessionaire.name + '</option>'
                                }
                            }
                            var conce_sel =  $( defaults.target).children( '.' + defaults.concessionaires_class );
                            conce_sel.prop({disabled:false}).html( html_output );
                            conce_sel.chosen('destroy');
                            conce_sel.chosen();
                            $('.chosen-container').css({'width':'235px'});
                            $('.chosen-container .chosen-results').css({'max-height':'200px'});
                            conce_sel.on('change', function(a){
                                var conce_val   = conce_sel.val();
                                defaults.id     = conce_val;
                                defaults.name   = conce_sel.children('option:selected').text();
                                defaults.url    = '/autos/concesionarias/suzuki-' + conce_val;

                                if( defaults.callback === null ){
                                    if( defaults.ga_label != '' ){
                                        ga('send', 'event', 'Promociones', defaults.ga_label, defaults.name );
                                        setTimeout(function(){
                                            document.location.href = defaults.url;
                                        }, 300);
                                    }
                                } else {  
                                    var return_vals = {
                                        callback    : defaults.callback,
                                        id          : defaults.id,
                                        name        : defaults.name,
                                        url         : defaults.url
                                    };
                                    return_vals.callback();
                                }
                            });
                        
                        });

                    }

                    $('.chosen-container').css({'width':'235px'});
                    $('.chosen-container .chosen-results').css({'max-height':'200px'});

                },
                dataType: "json",
                cache : defaults.cache
            });
        }
        defaults = $.extend( _defaults, options );
        init();
    };
})(jQuery);
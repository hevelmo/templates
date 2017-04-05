var SHOPING_CART;
$(document).ready(function(){
    SHOPING_CART = {
        endpoint    : '/servicesv2/cart',
        list : null,
        update_interval : null,
        default_options : {
            'error'     : SuzukiWeb.errorHandler,
            'success'   : function success( jsondata ){
                console.log( jsondata );
            }
        },
        __get: function __get(){
            var me = this,
                data = {extended:true},
                url = this.endpoint + '/get';
            $.ajax({
                data        : data,
                dataType    : 'json',
                'error' : function error( error ){
                    clearInterval( me.update_interval );
                },
                'success' : function success( jsondata ){
                    me.list = jsondata.cart;
                },
                'url': url
            });
        },
        __add: function __add( sku, type ){
            var me = this,
                url = this.endpoint + '/add',
                data = {
                    'sku'   : sku,
                    'type'  : type
                };
            $.ajax({
                data        : data,
                dataType    : 'json',
                'error'     : SuzukiWeb.errorHandler,
                'success'   : function success( jsondata ){
                    console.log( jsondata );
                },
                'type'      : 'post',
                'url'       : url
            });
        },
        __delete: function __delete( hash, success ){
            var me = this,
                url = this.endpoint + '/delete',
                data = {
                    'hash'  : hash
                };
            if(!success){
                success = function success( jsondata ){
                    console.log( jsondata );
                }
            }
            $.ajax({
                data        : data,
                dataType    : 'json',
                'error'     : SuzukiWeb.errorHandler,
                'success'   : success,
                'type'      : 'post',
                'url'       : url
            });
        },
        __update: function __update( hash, quantity, extra ){
            var me = this,
                url = this.endpoint + '/update',
                data = {
                    'hash'       : hash,
                    'quantity'  : quantity
                },
                opt = $.extend( SHOPING_CART.default_options, extra);
            $.ajax({
                data        : data,
                dataType    : 'json',
                'error'     : opt.error,
                'success'   : opt.success,
                'type'      : 'post',
                'url'       : url
            });
        },
        __checkout: function __checkout( data , extra ){
            var me = this,
                url = this.endpoint + '/checkout',
                opt = $.extend( SHOPING_CART.default_options, extra);
            $.ajax({
                'data'      : data,
                'dataType'  : 'json',
                'error'     : opt.error,
                'success'   : opt.success,
                'type'      : 'post',
                'url'       : url
            });
        },
        initialize: function initialize(){
            var me = this;
            if( $('a[href="/autos/accesorios"]').length > 0 ){
                me.__get();
                $(document).delegate('a.add-to-cart','click',function( event ){
                    event.preventDefault();
                    var $this = $(this),
                        sku = $this.data('sku'),
                        type = $this.data('type');
                    SHOPING_CART.__add( sku, type);

                });
            }
            //this.update_interval = setInterval( me.__get, 5000);
        }
    };
    SHOPING_CART.initialize();


});
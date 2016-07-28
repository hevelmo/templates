$(document).ready(function(){
    var help;

    var PageTransition = ( function( options ) {
        var prev_slide = 'prev_slide';
        var next_slide = 'next_slide';
        var wrapper = options.wrapper;
        console.log(options);

        this.transitions = {
            'next': {
                'init': options.next_in_transition,
                'end': options.next_out_transition
            },
            'prev': {
                'init': options.prev_in_transition,
                'end': options.prev_out_transition
            }
        }
        this.pages  = $(options.wrapper).children('.et-section');
        console.log(help);
        console.log(this.help);
        this.current_page = this.pages[ (options.init_page ) ];
        $( this.current_page ).addClass('et-page-current');
        $( this.current_page ).prevAll('.et-section').addClass('after');
        $( this.current_page ).nextAll('.et-section').addClass('after');
    });

    PageTransition.prototype.move_to = function( div ){
        var current_page = this.current_page;
        var next_page = div;
        console.log(current_page);
        console.log(next_page);

        if( ! $(next_page).hasClass('et-page-current') ){

            if( $(next_page).hasClass( 'after' ) ) {
                direction = 'next';
                //console.log('Me voy');
            } else if( $(next_page).hasClass( 'before' ) ) {
                direction = 'prev';
                //console.log('Me quedo');
            }

            if( ! Modernizr.csstransitions) {

                $('.et-section').removeClass('before after');
                $( current_page ).removeClass().addClass('item et-section et-page-current');
                $( next_page ).addClass('et-page-current').stop().animate({
                    bottom: 0
                }, 600, 'linear', function(){
                    $( current_page ).removeClass().addClass('item et-section');
                    $( next_page ).prevAll('.et-section').addClass('before');
                    $( next_page ).nextAll('.et-section').addClass('after');
                });

                this.current_page = next_page;
                console.log(this.current_page);

            } else {

                in_transition = ( direction == 'next' ) ? this.transitions.next.init : this.transitions.prev.init;
                out_transition = ( direction == 'next' ) ? this.transitions.next.end : this.transitions.prev.end;

                $('.et-section').removeClass('before after');

                $( current_page ).removeClass().addClass('item et-section et-page-current '+'pt-page-'+out_transition);
                $( next_page ).addClass('et-page-current '+'pt-page-'+in_transition).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    $( current_page ).removeClass().addClass('item et-section');
                    $( next_page ).prevAll('.et-section').addClass('before');
                    $( next_page ).nextAll('.et-section').addClass('after');
                });
                this.current_page = next_page;
            }
        }
    };


    var init_slide_load = location.hash.slice(1);
    console.log(init_slide_load);
    console.log(location.hash.slice(0));
    console.log(location.hash);
    $('.catalog_cars_wrapper').find('.catalog_car').each(function( index ) {
        console.log(index);
        //_class = $(this).attr('class');
        //console.log(_class);
        if( $(this).hasClass(init_slide_load) ) {
            init_slide_load = index;
            //console.log('Si tiene la clase ' + init_slide_load);
        } else {
            //console.log('No tiene la clase ' + init_slide_load);
        }
    });
    console.log(init_slide_load);


    var pages = new PageTransition({
        wrapper:             document.getElementById('catalog-wrapper'),
        init_page:           init_slide_load,

        prev_in_transition:  'moveFromTop',
        prev_out_transition: 'moveToBottom ontop',

        next_in_transition:  'moveFromBottom',
        next_out_transition: 'moveToTop ontop'
    });
    help = pages;
    console.log(pages);



    $('.catalog_cars_wrapper').delegate('a.switch-catalog', 'click', function( e ){
        e.preventDefault();
        var car_key = $(this).data('key');
        var slide = $("#catalog-"+ car_key);
        $('.catalog_car').removeClass('active');
        $(this).parent('.catalog_car').addClass('active');
        console.log(slide);

        pages.move_to( slide );
        //console.log(car_key);
    });

})


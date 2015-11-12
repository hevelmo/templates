$(function(){
	$('.cpf').setMask('999.999.999-99');
	$('.cnpj').setMask('99.999.999/9999-99');
	$('.rg').setMask('99.999.999-9');
	$('.cep').setMask('99999-999');
	$('.data').setMask('99/99/9999');
	$('.horario').setMask('99:99');
	$('.titulo_e').setMask('9999 9999 9999 99');
	$('.celular').setMask('(99) 99999-9999');
	$('.telefone').setMask('(99) 9999-9999');
	$('.valor').setMask('decimal');
});	
$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});
$(function(){
	$('div.abas').not('.aba_desabilitada').click(function(){
		$('.aba_ativa').removeClass('aba_ativa');
		$(this).addClass('aba_ativa');
		$('.aba_selecionada').removeClass('aba_selecionada');
		atual = $(this).attr('referencia');
		$(atual).addClass('aba_selecionada');

		var indice = $(this).attr("indice");

		$("div.preloader_admin").removeClass('preloader_admin');
	});

	$('div.aba_1').click();

});

$(document).ready( function(){

    $(".cb-enable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-disable',parent).removeClass('selected');
	    $('.campo_secreto',parent).css("display","block");
        $(this).addClass('selected');
        $('.campo_status',parent).val(1);
    });
    $(".cb-disable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-enable',parent).removeClass('selected');
	    $('.campo_secreto',parent).css("display","none");
        $(this).addClass('selected');
        $('.campo_status',parent).val(0);
    });

	var collection = $(".campo_status");
	collection.each(function() {
		var valor = $(this).val();
		var parent = $(this).parents('.switch');
	    if( valor!=1 ){
	    	$('.cb-disable',parent).click();
	    }else{
	    	$('.cb-enable',parent).click();
	    }
	});
	
	
	$(".cb-enable").click(function(){
       var id = $(this).attr('id');
        $('.cb-disable'+id).removeClass('selected');
	    $('.campo_secreto'+id).css("display","block");
        $(this).addClass('selected');
        $('.campo_status'+id).val(1);
    });

    $(".cb-disable").click(function(){
        var id = $(this).attr('id');
        $('.cb-enable'+id).removeClass('selected');
	    $('.campo_secreto'+id).css("display","none");
        $(this).addClass('selected');
        $('.campo_status'+id).val(0);
    });
});
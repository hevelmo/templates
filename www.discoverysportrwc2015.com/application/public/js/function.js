$(function() {
	$("#telefone_1").bind('click', function(e){
			$("#telefone_1").setMask("(99) 9999-9999");
	});
	$("#cpf").bind('click', function(e){
			$("#cpf").setMask("999.999.999-99");
	}); 
	$("#cep").bind('click', function(e){
			$("#cep").setMask("99999-999");
	}); 
	$("#telefone").bind('click', function(e){
			$("#telefone").setMask("(99) 9999-9999");
			$("#telefone2").setMask("(99) 99999-9999");
	}); 
	$("#telefone").bind('keyup', function(e){
		
		if($("#telefone").val() == "(11" || $("#telefone").val() == "(11) 9"){
			$("#telefone").hide();
			$("#telefone2").show();
			$("#telefone2").focus();
			$("#telefone2").val($("#telefone").val());
			$("#telefone").val("");
		}
		
	}); 
	$("#telefone2").bind('keyup', function(e){
		
		if($("#telefone2").val() == "(1" || $("#telefone2").val() == "" || $("#telefone2").val() == "(11) 2" || $("#telefone2").val() == "(11) 1" || $("#telefone2").val() == "(11) 3" || $("#telefone2").val() == "(11) 4" || $("#telefone2").val() == "(11) 5" || $("#telefone2").val() == "(11) 6" || $("#telefone2").val() == "(11) 7" || $("#telefone2").val() == "(11) 8"){
			$("#telefone2").hide();
			$("#telefone").show();
			$("#telefone").focus();
			$("#telefone").val($("#telefone2").val());
			$("#telefone2").val("");
		}
	}); 
});
function script_home() {
	$('div.box-chamada').hover(function() {
		$('div#' + $(this).attr('id')).animate({
			height: '130px',
		}, 500 );
	},function() {
		$('div#' + $(this).attr('id')).animate({
			height: '40px',
		}, 500 );
	});
}

function interacaoInput() {
	$('input[rel=interacao]').focus(function() {
		if ($(this).attr('string-on') != undefined && $(this).attr('string-on') == $(this).val())
			$(this).attr('value', '');
	});

	$('input[rel=interacao]').blur(function() {
		if ($(this).attr('string-on') != undefined && $(this).val() == '')
			$(this).attr('value', $(this).attr('string-on'));
	});

	$('textarea').focus(function() {
		if ($(this).attr('string-on') != undefined && $(this).attr('string-on') == $(this).val())
			$(this).html('');
	});

	$('textarea').blur(function() {
		if ($(this).attr('string-on') != undefined && $(this).val() == '')
			$(this).html($(this).attr('string-on'));
	});
}

function busca_cidade(){
	var estado = $('#estado').val();
	var resposta = "";
	$.ajax({
	  url: "../application/public/php/cidade.php",
	  type: "GET",
	  data: "estado="+estado,
	  success: function(resposta){
	    $('#cidade').html(resposta);
	  }
});
}

function busca_bairro(){
	var cidade = $('#cidade').val();
	var resposta = "";
	$.ajax({
	  url: "../application/public/php/bairro.php",
	  type: "GET",
	  data: "cidade="+cidade,
	  success: function(resposta){
	    $('#bairro').html(resposta);
	  }
});
}
function altera_file(){
	$('#link').hide();
	$('#file').html('<input type="file" name="foto" style="border: 1px solid #ccc;width: 313px; margin-left: -71px;" />');
}
function busca_salao(limite){
	var count = 0;
	var servicos = "";
	var bairros = "";
	var data = $('#data').val();
	var li = $('#limit').val();
	li = parseInt(li);
	if(limite == "li"){
		li = li + 10;
	}
	var limit = li;
	$('#limit').val(li);
	var cat = $('#categoria').val();
	var busca_nome = $('#busca_nome').val();
	var ordem = $('#ordem').val();
	var bairro = [];
	$("input[name='bairro[]']:checked").each(function ()
	{
		if(count != 0){
			bairros = bairros+","+parseInt($(this).val());
		}else{
			bairros = parseInt($(this).val());
		}
		count++;
	});
	var servico = [];
	var count = 0;
	$("input[name='servico[]']:checked").each(function ()
	{
		if(count != 0){
			servicos = servicos+","+parseInt($(this).val());
		}else{
			servicos = parseInt($(this).val());
		}
		count++;
	});
	count = 0;
	var precos = "";
	var precos = [];
	$("input[name='preco[]']:checked").each(function ()
	{
		if(count != 0){
			precos = precos+","+parseInt($(this).val());
		}else{
			precos = parseInt($(this).val());
		}
		count++;
	});
	var resposta = "";
	$.ajax({
	  url: "../application/public/php/salao.php",
	  type: "GET",
	  data: "bairros="+bairros+"&servicos="+servicos+"&cat="+cat+"&precos="+precos+"&ordem="+ordem+"&busca_nome="+busca_nome+"&limit="+limit+"&data="+data,
	  success: function(resposta){
	    $('#saloes').html(resposta);
	    chama_img();
	    
	  }
	});
}
function busca_serv(){
	var count = 0;
	var servicos = "";
	var bairros = "";
	var data = $('#data').val();
	var cat = $('#categoria').val();
	var busca_nome = $('#busca_nome').val();
	var bairro = [];
	$("input[name='bairro[]']:checked").each(function ()
	{
		if(count != 0){
			bairros = bairros+","+parseInt($(this).val());
		}else{
			bairros = parseInt($(this).val());
		}
		count++;
	});
	count = 0;
	var precos = "";
	var precos = [];
	$("input[name='preco[]']:checked").each(function ()
	{
		if(count != 0){
			precos = precos+","+parseInt($(this).val());
		}else{
			precos = parseInt($(this).val());
		}
		count++;
	});
	var resposta = "";
		$.ajax({
		  url: "../application/public/php/servico.php",
		  type: "GET",
		  data: "bairros="+bairros+"&cat="+cat+"&precos="+precos+"&busca_nome="+busca_nome+"&data="+data,
		  success: function(resposta){
		    //alert(resposta);
		    $('#serv').html(resposta);
		  }
	});
	busca_salao();
}
function busca_bar(){
	var count = 0;
	var servicos = "";
	var bairros = "";
	var data = $('#data').val();
	var cat = $('#categoria').val();
	var busca_nome = $('#busca_nome').val();
	var precos = "";
	var precos = [];
	$("input[name='preco[]']:checked").each(function ()
	{
		if(count != 0){
			precos = precos+","+parseInt($(this).val());
		}else{
			precos = parseInt($(this).val());
		}
		count++;
	});
	var resposta = "";
		$.ajax({
		  url: "../application/public/php/bairros.php",
		  type: "GET",
		  data: "precos="+precos+"&cat="+cat+"&busca_nome="+busca_nome+"&data="+data,
		  success: function(resposta){
		    //alert(resposta);
		    $('#barr').html(resposta);
		  }
	});
	busca_serv();
}

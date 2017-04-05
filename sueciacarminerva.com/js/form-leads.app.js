$(document).ready( function() {
	$( "#id_agencia" ).change(function() {	  
	  agencias = JSON.parse(atob($('#jsonagencias').val()));
	  id_agencia = $( "#id_agencia option:selected" ).val();
	  console.log(id_agencia);
	  setAgencia(agencias[id_agencia]);
	});
});

function setAgencia(agencia){
	console.log(agencia);
	if($('#dominio').length ){
	     $('#dominio').val(agencia.dominio1);
	}

	if($('#agencian').length ){
	     $('#agencian').val(agencia.nombre);
	}

	if($('#dir1').length ){
	     $('#dir1').val(agencia.direccion1);
	}

	if($('#dir2').length ){
	     $('#dir2').val(agencia.direccion2);
	}

	if($('#tel1').length ){
	     $('#dir1').val(agencia.telefono1);
	}

	if($('#tel2').length ){
	     $('#dir2').val(agencia.telefono2);
	}

	if($('#logo').length ){
	     $('#logo').val(agencia.imagen);
	}

	if($('#id_agencia_m').length ){
	     $('#id_agencia_m').val(agencia.metrics_id);
	}

	if($('#id_agencia_c').length ){
	     $('#id_agencia_m').val(agencia.cartas_id);
	}

}
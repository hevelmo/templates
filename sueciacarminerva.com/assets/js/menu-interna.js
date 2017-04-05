$(document).ready(main);
$(document).ready(close);
 
var contador = 1;
 
function main () {
	$('#models_sidebar').click(function(){
		if (contador == 1) {
			$('.sidebar').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.sidebar').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('span').click(function(){
		$(this).children('.children').slideToggle();
	});
}

function close () {
	$('.span-cerrar').click(function(){
		if (contador == 1) {
			$('.sidebar').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.sidebar').animate({
				left: '-200%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('span').click(function(){
		$(this).children('.children').slideToggle();
	});
}
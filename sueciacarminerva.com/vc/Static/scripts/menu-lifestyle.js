$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu').click(function(){
		if (contador == 1) {
			$('.lista').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.lista').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.lista').click(function(){
		$(this).children('.children').slideToggle();
	});
}
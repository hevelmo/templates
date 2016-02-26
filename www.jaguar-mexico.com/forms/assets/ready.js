$( document ).ready(function() {
	
	$('#input_date').pickadate({
		formatSubmit: 'yyyy-mm-dd',
		hiddenName: true,
		min: +1,
		max: +30
	});
		$('#input_time').pickatime({
		formatSubmit: 'HH:i',
		hiddenName: true,
		min: [9,0],
		max: [18,0]
	});

});
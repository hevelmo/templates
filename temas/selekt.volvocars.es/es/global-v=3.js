																																		(function(window) {
	"use strict";

	window.formatCurrency = function (number) {
		var str = number.toString(),
			replaceBy = '';

		while (str.length) {
			replaceBy = '$1' + str.substr(Math.max(str.length - 3, 0)) + replaceBy;
			str = str.substr(0, str.length - 3);
		}

		return '1.234&nbsp;&euro;'.replace(/1(.*)234/, replaceBy.substr(2));
	};
	
	window.formatDistance = function (number) {
		var str = Math.round(number).toString(), /* * 1 */
			result = '';

		while (str.length) {
			result = '.' + str.substr(Math.max(str.length - 3, 0)) + result;
			str = str.substr(0, str.length - 3);
		}

		return result.substr(1) + ' km';
	};

	window.formatPower = function (number) {
		var str = Math.round(number).toString(), /*  / 0.7457 */
			result = '';

		while (str.length) {
			result = '.' + str.substr(Math.max(str.length - 3, 0)) + result;
			str = str.substr(0, str.length - 3);
		}

		return result.substr(1) + ' ';
	};

	window.formatNumber = function (number, unit) {
		var str = number.toString(),
			result = '';

		while (str.length) {
			result = '.' + str.substr(Math.max(str.length - 3, 0)) + result;
			str = str.substr(0, str.length - 3);
		}

		return result.substr(1);
	};

	
	function toSlug(str) {
		return $("<div/>").html(str).text()				/* html_entitiy_decode */
			.replace(/[áàâãå]/g, 'a')					/* toASCII */
			.replace(/[äæ]/g, 'ae')
			.replace(/[ç]/g, 'c')
			.replace(/[ð]/g, 'd')
			.replace(/[éèêë]/g, 'e')
			.replace(/[íìîï]/g, 'i')
			.replace(/[ñ]/g, 'n')
			.replace(/[óòôõ]/g, 'o')
			.replace(/[öø]/g, 'oe')
			.replace(/[þ]/g, 'p')
			.replace(/[\u0161]/g, 's')
			.replace(/[úùû]/g, 'u')
			.replace(/[ü]/g, 'ue')
			.replace(/[ýÿ]/g, 'y')
			.replace(/[ß]/g, 'ss')
			.replace(/[ÁÀÂÃÅ]/g, 'A')
			.replace(/[ÄÆ]/g, 'Ae')
			.replace(/[Ç]/g, 'C')
			.replace(/[Ð]/g, 'D')
			.replace(/[ÉÈÊË]/g, 'E')
			.replace(/[ÍÌÎÏ]/g, 'I')
			.replace(/[Ñ]/g, 'N')
			.replace(/[ÓÒÔÕ]/g, 'O')
			.replace(/[ÖØ]/g, 'Oe')
			.replace(/[Þ]/g, 'P')
			.replace(/[\u0160]/g, 'S')
			.replace(/[ÚÙÛ]/g, 'U')
			.replace(/[Ü]/g, 'Ue')
			.replace(/[Ý\u0178]/g, 'Y')
			.replace(/^\u00a0+|\u00a0$/, '')
			.replace(/[\u0080-\uffff]/g, '_')
			.replace(/^\s+/, '').replace(/\s+$/, '')	/* trim */
			.replace(/\s+/g, '-')						/* toSlug */
			.replace(/[^a-z0-9_-]+/ig, '')
			.replace(/-{2,}/g, '-');
	}

	function toLocaleString(val) {
		if (typeof(val) === 'number') {
			val = val.toString(10);
		}
		if (typeof(val) === 'string') {
			return val.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1.');
		} else {
			return '';
		}
	}

	var searchForms = {};

	$('.mdx-searchForm').each(function () {
		var form = this,
			elems = this.elements,
			i,
			urlCache = {},
			dontRefresh = false;

		searchForms[form.id] = new SearchForm({
			id: form.id,
			mKey: '1-27626-1334853',
			
			zipValidation: /.*/, 
			locale: 'es',
			translations: {
				'from': 'de ',
				'to': 'hasta ',
				'doors': '',
				'searchzip': '',
				'reset': 'Nueva búsqueda'
			},
			debugging: false,
			vehiclesFoundElems: [],
			preProcess:[
				function(query) {
					query['allModels'] = '1';
											query['manufacturer'] = '64';
										query['country'] = '198';
					query['unitSystem'] = 'metric';
					query['currency'] = 'EUR';
					
					
					
				}
			],
			postProcess: [
				function (query, json) {
					var manuName = '',
						modelNames = [];

					if (json['manufacturer']) {
						if (query['manufacturer']) {
							for (var i = 0; i < json['manufacturer']['option'].length; i++) {
								if (json['manufacturer']['option'][i]['@selected'] === 'yes') {
									manuName = json['manufacturer']['option'][i]['#'];
									break;
								}
							}
						}
					}

					$('.model-select .line li').each(function () {
						$(this).find('.stock').text('0');
					});

					$('.model-select input, .model-select-simple input:not(:checked)').addClass('disabled').prop('disabled', true);
					$('.model-select input, .model-select-simple input:not(:checked)').parent().addClass('notFound');
					if (json['model']) {
						for (var i = 0; i < jsonArrayLength(json['model']['option']); i++) {
							if (jsonArray(json['model']['option'], i)['@selected'] === 'yes') {
								modelNames.push(toSlug(jsonArray(json['model']['option'], i)['#']));
								$('#model-' + jsonArray(json['model']['option'], i)['@value'].replace(/\|\|/g, '-')).removeClass('disabled').prop('disabled', false);
							}
							$('#model-count-' + jsonArray(json['model']['option'], i)['@value'].replace(/\|\|/g, '-')).html(
								formatNumber(jsonArray(json['model']['option'], i)['@found'])
							);
							if (jsonArray(json['model']['option'], i)['@found'] > 0) {
								$('#model-' + jsonArray(json['model']['option'], i)['@value'].replace(/\|\|/g, '-')).removeClass('disabled').prop('disabled', false).parent().removeClass('notFound');
							} else if (jsonArray(json['model']['option'], i)['@found'] == 0) {
								$('#model-' + jsonArray(json['model']['option'], i)['@value'].replace(/\|\|/g, '-')).removeClass('disabled').prop('disabled', false);
							}
						}
					}
					
					$('#model-others').removeClass('disabled').prop('disabled', false).parent().removeClass('notFound');
					
					$(form).attr('action', $(form).data('root-url') + '/' + toSlug(manuName) + '/' + (modelNames.length === 0 ? '' : modelNames.join('-')));

					var params = $(form).serializeArray(), i,
						modelQuery = [];

					for (i = 0; i < params.length; i++) {
						if (params[i].name != 'model[]' && params[i].value != '') {
							modelQuery.push(params[i].name + '=' + params[i].value);
						}
					}
					$(form).find('.model-select header a, .model-select .button-a.stock').each(function () {
						$(this).attr('href', $(this).data('link') + (modelQuery.length > 0 ? '&' : '') + getFormQuery(['model[]']));
					});

					$(form).find('.mdx-submit').attr('href', $(form).attr('action') + '?' + getFormQuery());
					$('a[data-reset-url]').each(function () {
						$(this).attr('href', $(this).data('reset-url') + '?' + getFormQuery());
					})

					if (parseInt(json.found['#'], 10) === 0) {
						$('.totalVehiclesFound').parent().addClass('disabled').prop('disabled', true);
					} else {
						$('.totalVehiclesFound').parent().removeClass('disabled').prop('disabled', false);
					}

					if (json['model']) {
						(function () {
							var $select = $('.select-model-dropdown select')
							
							$select.find('option').prop('disabled', true);

							$(form).find('.model-select .line header a').each(function () {
								var models = $(this).data('models').split('||');

								$(this).addClass('disabled');
								for (var i = 0; i < jsonArrayLength(json['model']['option']); i++) {
									if (models.indexOf(jsonArray(json['model']['option'], i)['@value']) != -1) {
										$(this).removeClass('disabled');
										$select.find('option[value="' + jsonArray(json['model']['option'], i)['@value'] + '"]').prop('disabled', false);
									}
								}
							});

							$(form).find('.model-select-simple .line input').each(function () {
								var models = $(this).val().split('||');

								$(this).addClass('disabled');
								for (var i = 0; i < jsonArrayLength(json['model']['option']); i++) {
									if (models.indexOf(jsonArray(json['model']['option'], i)['@value']) != -1) {
										$(this).removeClass('disabled');
										$select.find('option[value="' + jsonArray(json['model']['option'], i)['@value'] + '"]').prop('disabled', false);
									}
								}
							});
						})();
					}

					$(form).find('select').trigger('chosen:updated');

					$(form).find('.totalVehiclesFound').css({ transition:'transform 200ms linear', '-webkit-transition':'-webkit-transform 200ms linear', transform:'translateX(-12px)' }).animate({ opacity:0 }, 200, function () {
						$(this).css({ transition:'none', '-webkit-transition':'none', transform:'translateX(12px)' });
						setTimeout((function (which) { return function () {
							$(which, json)
								.text(($(document.body).data('route') === '/es/vehicles' ? '%1 Resultados' : '%1 Resultados coincidentes con su búsqueda').replace('%1', formatNumber(json['found']['#'])))
								.css({ transition:'transform 200ms linear', '-webkit-transition':'-webkit-transform 200ms linear', transform:'translateX(0px)' })
								.animate({ opacity:1 }, 200);
						}; })(this, json), 50);
					});
					
									}
			]
		});

		searchForms[form.id].customSelectFields[''] = { updateOptions: function (elem, json, q) { return elem.selectedIndex; } };
		
					searchForms[form.id].customExtras['model[]'] = {
				isAvailable: function (json, q, elem) {
					return true;
				},
				isChecked: function (json, q, elem) {
					return elem.checked;
				},
				setQuery: function (q, checked, elems) {
					var model = [];
					for (var i = 0; i < elems.length; i++) {
						if (elems[i].checked) {
							model.push(elems[i].value);
						}
					}
					q['model'] = model.join('||');
				}
			};
				
		searchForms[form.id].customExtras['warrantyProgram'] = {
			isAvailable: function (json, q) {
									if (json['warrantyProgram']) {
						for (var i = 0; i < jsonArrayLength(json['warrantyProgram']['option']); i++) {
							if (jsonArray(json['warrantyProgram']['option'], i)['@value'] == 31) {
								return true;
							}
						}
					}
					return false;
							},
			isChecked: function (json, q) {
									return (q['warrantyProgram'] == '31');
							},
			setQuery: function (q, checked) {
									if (checked) { q['warrantyProgram'] = '31'; }
							}
		};

		for (i = 0; i < elems.length; i++) {
			if (elems[i].name.toLowerCase() === 'zip') {
				continue;
			} else if (elems[i].name.toLowerCase() === 'searchstring') {
				$(elems[i])
					.keypress(function (e) {
						if ((e.which || e.keyCode) == 13) {
							if (!dontRefresh) { searchForms[form.id].refresh(this.name); }
							return false;
						}
					})
					.blur(function () {
						if (!dontRefresh) { searchForms[form.id].refresh(this.name); }
					});
			} else if (elems[i].nodeName.toUpperCase() === 'SELECT' || (elems[i].nodeName.toUpperCase() === 'INPUT' && (elems[i].type.toLowerCase() === 'text' || elems[i].type.toLowerCase() === 'checkbox'))) {
				$(elems[i]).change(function () {
					if (!dontRefresh) { searchForms[form.id].refresh(this.name); }
				});
			}
		}

		if (window.localStorage.getItem('results-view') != "list") {
			form.elements['view'].value = window.localStorage.getItem('results-view');
		} else {
			form.elements['view'].value = '';
		}

		$(form).find('.mdx-submit').click(function (e) {
			if (searchForms[form.id].isRefresh() || $(this).hasClass('disabled')) {
				e.preventDefault();
			} else if ($(form).find('input[name="zip"]').val() === '') {
				alert('');
				e.preventDefault();
			
			} else {
				typeof ga !== 'undefined' && ga('send', 'event', 'Search', 'click', 'Button Search', '1' );			}
		});
		$(form).find('.model-select .line header a').click(function (e) {
			if (searchForms[form.id].isRefresh() || $(this).hasClass('disabled')) {
				e.preventDefault();
			} else {
				typeof ga !== 'undefined' && ga('send', 'event', 'Search', 'click', 'Button Search', '1' );			}
		});

		$(form).find('.mdx-save-search').click(function () {
			if ($(form).find('input[name="zip"]').val() === '') {
				alert('');
				return false;
			}

			typeof ga !== 'undefined' && ga('send', 'event', 'Search', 'click', 'Button Save search', '1' );
			var query = getFormQuery(['view']);

			if (query.length === 0 || query === 'manufacturer=64') {
				alert('Por favor, seleccione al menos uno de los criterios de búsqueda.');
				return false;
			}
		
			for (var i = 9; i >= 1; i--) {
				if (window.localStorage.getItem('saved-searches-' + i) == query) {
					alert('Su búsqueda se ha guardado');
					return;
				}
			}

			for (var i = 9; i >= 1; i--) {
				if (window.localStorage.getItem('saved-searches-' + i)) {
					window.localStorage.setItem('saved-searches-' + (i + 1), window.localStorage.getItem('saved-searches-' + i));
				}
			}

			window.localStorage.setItem('saved-searches-1', query);

			alert('Su búsqueda se ha guardado');
			
			updateToolNavi();
			
			return false;
		});

		function getFormQuery(ignore) {
			var disabled = $(form).find(':input:disabled').removeAttr('disabled'),
				params = $(form).serializeArray(), i, j,
				query = [];

			disabled.attr('disabled', 'disabled');

			nextParam: for (i = 0; i < params.length; i++) {
				if (params[i].value == '') { continue; }
				if (ignore) {
					for (j = 0; j < ignore.length; j++) {
						if (params[i].name == ignore[j]) {
							continue nextParam;
						}
					}
				}
				query.push(params[i].name + '=' + encodeURIComponent(params[i].value));
			}
			return query.join('&');
		}

		window.getSearchFormQuery = function (ignore) {
			return getFormQuery(ignore);
		};

		$(form).find('.mdx-reset-search').click(function () {
			typeof ga !== 'undefined' && ga('send', 'event', 'Search', 'click', 'Button Reset search', '1' );
			var elems = $(form)[0].elements;

			dontRefresh = true;

			for (var i = 0; i < elems.length; i++) {
				switch (elems[i].nodeName.toUpperCase()) {
					case 'SELECT':
						if (elems[i].name == 'radius') {
							elems[i].selectedIndex = 1;	/* 50 miles */
						} else if (elems[i].name == 'manufacturer') {
							elems[i].selectedIndex = $('#search-manufacturer option').index($('#search-manufacturer option[value="64"]'));
						} else {
							elems[i].selectedIndex = -1;
						}
						$(elems[i]).trigger('chosen:updated');
						break;
					case 'INPUT':
						switch ($(elems[i]).attr('type').toLowerCase()) {
							case 'checkbox':
																elems[i].checked = false;
								break;
							case 'text':
								elems[i].value = '';
								break;
						}
						break;
				}
			}

			setTimeout(function() {
				$(form).find('.slider').each(function () {
					var range = $(this).noUiSlider('options').range;
						
					$(this).val([range.min, range.max]);
					$(this).trigger('set');
				});
			}, 100);

			$(this).blur();

			setTimeout(function() {
				dontRefresh = false;
				searchForms[form.id].refresh();
			}, 200);
			
			return false;
		});

		$(form).find('.slider').on('slide set', function (event, ui) {
			var $slider = $(this),
				inputFrom = $(this).data('input-from'),
				inputTo = $(this).data('input-to'),
				optMin = $(this).data('min'),
				optMax = $(this).data('max'),
				optRange = $(this).data('range'),
				str;

			if (typeof $slider.val() === 'number') {
				if (inputFrom) { elems[inputFrom].value = (Math.round($slider.val()) == Math.round(optMin) ? '' : Math.round($slider.val())); }
				if (inputTo) { elems[inputTo].value = (Math.round($slider.val()) == Math.round(optMax) ? '' : Math.round($slider.val())); }
			} else {
				if (inputFrom) { elems[inputFrom].value = (Math.round($slider.val()[0]) == Math.round(optMin) ? '' : Math.round($slider.val()[0])); }
				if (inputTo) { elems[inputTo].value = (Math.round($slider.val()[1]) == Math.round(optMax) ? '' : Math.round($slider.val()[1])); }
			}

			switch (inputFrom) {
				case 'price_from':
					if (elems[inputFrom].value && elems[inputTo].value) {
						$(form).find('.price-label').html(formatCurrency(Math.round(elems[inputFrom].value)) + ' - ' + formatCurrency(Math.round(elems[inputTo].value)));
					} else if (elems[inputFrom].value) {
						$(form).find('.price-label').html('Desde ' + formatCurrency(Math.round(elems[inputFrom].value)));
					} else if (elems[inputTo].value) {
						$(form).find('.price-label').html('Hasta ' + formatCurrency(Math.round(elems[inputTo].value)));
					} else {
						$(form).find('.price-label').html('');
					}
					break;
				case 'km_from':
					if (elems[inputFrom].value && elems[inputTo].value) {
						$(form).find('.mileage-label').html(formatDistance(Math.round(elems[inputFrom].value)) + ' - ' + formatDistance(Math.round(elems[inputTo].value)));
					} else if (elems[inputFrom].value) {
						$(form).find('.mileage-label').html('Desde ' + formatDistance(Math.round(elems[inputFrom].value)));
					} else if (elems[inputTo].value) {
						$(form).find('.mileage-label').html('Hasta ' + formatDistance(Math.round(elems[inputTo].value)));
					} else {
						$(form).find('.mileage-label').html('');
					}
					break;
				case 'kw_from':
					if (elems[inputFrom].value && elems[inputTo].value) {
						$(form).find('.power-label').html(formatPower(Math.round(elems[inputFrom].value)) + ' - ' + formatPower(Math.round(elems[inputTo].value)));
					} else if (elems[inputFrom].value) {
						$(form).find('.power-label').html('Desde ' + formatPower(Math.round(elems[inputFrom].value)));
					} else if (elems[inputTo].value) {
						$(form).find('.power-label').html('Hasta ' + formatPower(Math.round(elems[inputTo].value)));
					} else {
						$(form).find('.power-label').html('');
					}
					break;
				case 'reg_date_from':
					if (elems[inputFrom].value && elems[inputTo].value) {
						$(form).find('.firstreg-label').html(elems[inputFrom].value + ' - ' + elems[inputTo].value);
					} else if (elems[inputFrom].value) {
						$(form).find('.firstreg-label').html('Desde ' + elems[inputFrom].value);
					} else if (elems[inputTo].value) {
						$(form).find('.firstreg-label').html('Hasta ' + elems[inputTo].value);
					} else {
						$(form).find('.firstreg-label').html('');
					}
					break;
				case 'modelYear_from':
					if (elems[inputFrom].value && elems[inputTo].value) {
						$(form).find('.firstreg-label').html(elems[inputFrom].value + ' - ' + elems[inputTo].value);
					} else if (elems[inputFrom].value) {
						$(form).find('.firstreg-label').html('Desde ' + elems[inputFrom].value);
					} else if (elems[inputTo].value) {
						$(form).find('.firstreg-label').html('Hasta ' + elems[inputTo].value);
					} else {
						$(form).find('.firstreg-label').html('');
					}
					break;
				case 'emission_from':
					if (elems[inputFrom].value && elems[inputTo].value) {
						$(form).find('.emission-label').html(elems[inputFrom].value + ' - ' + elems[inputTo].value + ' g/km');
					} else if (elems[inputFrom].value) {
						$(form).find('.emission-label').html('Desde ' + elems[inputFrom].value + ' g/km');
					} else if (elems[inputTo].value) {
						$(form).find('.emission-label').html('Hasta ' + elems[inputTo].value + ' g/km');
					} else {
						$(form).find('.emission-label').html('');
					}
					break;
				default:
				 	console.log($(this).val()); //.noUiSlider('options'));
					// alert(inputFrom);
			}

			if (event.type === 'set') {
				if (!dontRefresh) { searchForms[form.id].refresh(); }
			}
		});

		if ($(this).data('refresh-on-load') === 'on') {
			searchForms[form.id].refresh();
		}

	    /* Search mask */
    	(function(){
        	$('[class^="model-select"]').each(function(){
            	var
	            root = $(this),
    	        inputs = root.find('input[type=checkbox]'),
        	    wrap = $('<div class="select-model-dropdown"/>'),
            	select = $('<select/>',{
                	name: "",
	                multiple: true,
    	            'data-placeholder': 'Seleccionar modelo'
        	    }).appendTo(wrap);

				select.change(function () {
					var i;

					for (i = 0; i < this.options.length; i++) {
						$('#model-' + this.options[i].value).prop('checked', this.options[i].selected);
					}
					
					searchForms[form.id].refresh();
				});

	            inputs.each(function(){
    	            var labelP = $(this).parent('label'),
						labelN = $(this).next('label');
        	        var option = $('<option/>',{
            	        value: $(this).attr('value'),
                	    html: labelP.find('.model').text() || labelP.text() || labelN.find('.model').text() || labelN.text(),
						selected: $(this).prop('checked'),
						disabled: $(this).prop('disabled')
                	});
                	select.append(option);

					$(this).change(function () {
						var options = select[0].options;
						for (var i = 0; i < options.length; i++) {
							if (options[i].value == this.value) {
								options[i].selected = this.checked;
							}
						}
						select.prop('disabled', false);
						select.trigger('chosen:updated');
					});
				});

	            root.append(wrap);
    	        select.each(function () {
					var $select = $(this),
						$field = $('<div />').addClass('multiSelect'),
						$selectedList = $('<ul />').addClass('selectedList'),
						$dropdownList = $('<ul />').addClass('dropdownList');
			
					$selectedList.on('click', 'li', function (event) {
						if ($select.prop('disabled')) {
							return;
						}
					
						var value = $(this).data('value');
			
						if (!value) {
							if ($dropdownList.children('li').length > 0) {
								$selectedList.addClass('hidden');
								$dropdownList.removeClass('hidden');
							}
							return false;
						}
					
						$select.find('option').each(function () {
							if (this.value === value) {
								this.selected = false;
							}
							
							updateField();
						});
						
						$select.trigger('change');
			
						return false;
					});
			
					$dropdownList.on('click', 'li', function (event) {
						if ($select.prop('disabled') || $(this).hasClass('disabled')) {
							return;
						}
			
						var value = $(this).data('value');
			
						$select.find('option').each(function () {
							if (this.value === value) {
								this.selected = true;
							}
							
							updateField();
						});
						
						$select.trigger('change');
						
						return false;
					});
					
					$('body').on('click', function () {
						if (!$dropdownList.hasClass('hidden')) {
							$selectedList.removeClass('hidden');
							$dropdownList.addClass('hidden');
						}
					});
			
					$field
						.append($selectedList)
						.append($dropdownList);
			
					updateField();
			
					$select
						.css({ display: 'none' })
						.on('chosen:updated', function () {
							updateField();
						})
						.after($field);
			
					function updateField () {
						var selectedListHasItems = false,
							dropdownListHasItems = false;
			
						$selectedList.html('').removeClass('hidden');
						$dropdownList.html('').addClass('hidden');
			
						$select.find('option').each(function () {
							var $item = $('<li />')
										.data('value', this.value)
										.html(this.innerHTML);
			
							if (this.disabled) {
								$item.addClass('disabled');
							}
			
							if (this.selected) {
								$selectedList.append($item);
								selectedListHasItems = true;
							} else {
								$dropdownList.append($item);
								dropdownListHasItems = true;
							}
						});
						
						if (!selectedListHasItems) {
							$selectedList.append($('<li />').html($select.data('placeholder')).addClass('adder'));
						} else if (dropdownListHasItems) {
							$selectedList.append($('<li />').html('...').addClass('adder'));	// Hier könnte auch "Add more" stehen
						}
					}
				});
			});
    	}());

		(function () {
			var advancedSearchDummy = $('<div />').css({ display: 'none' }).appendTo(document.body),
				advancedSearchElems = [];

			$(form).find('.mdx-quick-search').click(function () {
				typeof ga !== 'undefined' && ga('send', 'event', 'Search', 'click', 'Button Quick search', '1' );
				$(form).find('.advancedSearch').slideUp(300, function () {
					advancedSearchDummy.append($(this).children());

					sessionStorage.setItem('searchMode', 'quick');

					searchForms[form.id].refresh();
				});
				$(form).find('.quickSearch').slideDown(300);
				$("html, body").animate({
  					scrollTop: $('#searchForm').offset().top - 65
				});

				return false;
			});

			$(form).find('.mdx-advanced-search').click(function () {
				typeof ga !== 'undefined' && ga('send', 'event', 'Search', 'click', 'Button Advanced search', '1' );
				for (var i = 0; i < advancedSearchElems.length; i++) {
					advancedSearchElems[i].parent.append(advancedSearchElems[i].elem);
				}
				$(form).find('.advancedSearch').slideDown(300);
				$(form).find('.quickSearch').slideUp(300);
				$("html, body").animate({
  					scrollTop: $('#searchForm').offset().top - 65
				});

				sessionStorage.setItem('searchMode', 'advanced');

				searchForms[form.id].refresh();

				return false;
			});

			$(form).find('.advancedSearch').each(function () {
				advancedSearchElems.push({
					parent: $(this),
					elem: $(this).children()
				});
			});

			if ((sessionStorage.getItem('searchMode') || '') !== 'advanced') {
				$.each(advancedSearchElems, function () {
					$(this.elem).add($(this.elem).find('input, select')).each(function () {
						if ($(this).prop('name') && (new RegExp("[?&]" + $(this).prop('name') + '=[^&].*$')).test(window.location.search)) {
							sessionStorage.setItem('searchMode', 'advanced');
							return false;
						}
					});
				})
			}

			if ((sessionStorage.getItem('searchMode') || '') !== 'advanced') {
				$(form).find('.advancedSearch').each(function () {
					advancedSearchDummy.append($(this).children());
				});
			} else {
				$(form).find('.advancedSearch').each(function () { this.style.display = 'block'; }); // css({ display: 'block'});
				$(form).find('.quickSearch').css({ display: 'none'});
			}
		})();

		// Auto suggestion for ZIP field in search forms
		(function () {
			$(form).find('input[name="zip"]').each(function () {
				var $zipField = $(this),
					autoSuggestTimeout = false,
					autoSuggestRequest = false,
					autosuggestionClicked = false,
					activeZip = -1,
					windowPosition = false;
	
				$(document.documentElement).click(function(event) {
					var autoSuggestionElem = $zipField.next('.autoSuggestion').get(0),
						zipFieldElem = $zipField.get(0);
					
					if (autoSuggestionElem && autoSuggestionElem !== event.target && !$.contains(autoSuggestionElem, event.target) && zipFieldElem !== event.target) {
						$zipField.next('.autoSuggestion').remove();
					}	
				});
				$zipField
					.bind('keydown', function (event) {
						if (event.which === 13) {
							var val = $zipField.next('.autoSuggestion').find('li').eq(activeZip).data('value');
							if (val) {
								$zipField.val(val);
								$zipField.next('.autoSuggestion').remove();
								searchForms[form.id].refresh();
							}
							return false;
						} else if (event.which === 37 || event.which === 38) {
							$zipField.next('.autoSuggestion').find('li').eq(activeZip).removeClass('activeZip');
							if (activeZip == 0) activeZip = $zipField.next('.autoSuggestion').find('li').length - 1;
							else activeZip--;
							$zipField.next('.autoSuggestion').find('li').eq(activeZip).addClass('activeZip');
							windowPosition = $(window).scrollTop();
							if ($zipField.next('.autoSuggestion').find('.activeZip')[0].scrollIntoView) {
								$zipField.next('.autoSuggestion').find('.activeZip')[0].scrollIntoView(false);
							}
							$(window).scrollTop(windowPosition);
							return false;
						} else if (event.which === 39 || event.which === 40) {
							$zipField.next('.autoSuggestion').find('li').eq(activeZip).removeClass('activeZip');
							if (activeZip == $zipField.next('.autoSuggestion').find('li').length - 1) activeZip = 0;
							else activeZip++;
							$zipField.next('.autoSuggestion').find('li').eq(activeZip).addClass('activeZip');
							windowPosition = $(window).scrollTop();
							if ($zipField.next('.autoSuggestion').find('.activeZip')[0].scrollIntoView) {
								$zipField.next('.autoSuggestion').find('.activeZip')[0].scrollIntoView(false);
							}
							$(window).scrollTop(windowPosition);
							return false;
						} else {
							if (autoSuggestTimeout !== false) {
								clearTimeout(autoSuggestTimeout);
								autoSuggestTimeout = false;
							}
							autoSuggestTimeout = setTimeout(autoSuggest, 300);
						}
					})
					.focus(function (event) {
						autoSuggest();
						autosuggestionClicked = false;
					})
					.blur(function (event) {
						if (!autosuggestionClicked) {
						
							if ($zipField.val() != '') {
								if ($zipField.next('.autoSuggestion').find('li').length == 1 && $zipField.next('.autoSuggestion').find('li').data('value') != '') {
									var val = $zipField.next('.autoSuggestion').find('li').eq(activeZip).data('value');
									if (val) {
										$zipField.val(val);
									}
								}
							}
							
							$zipField.next('.autoSuggestion').remove();
							searchForms[form.id].refresh();
						}
					});
					
				function autoSuggest() {
					activeZip = 0;
	
					if ($zipField.val().length === 0) {
						$zipField.next('.autoSuggestion').remove();
						return;
					}
	
					autoSuggestTimeout = false;
					if (autoSuggestRequest !== false) {
						autoSuggestRequest.abort();
						autoSuggestRequest = false;
					}
	
					$.ajax({
						type: "GET",
						url: '/soap/geo/',
						dataType : 'jsonp',
						data: 'call=getByZip&country=GB&limit=50&zip=' + $zipField.val()
					}).done(function (json) {
						var $out = $('<ul></ul>'),
							nothingFound = true;
	
						$out.mousedown(function (event) {
							autosuggestionClicked = true;
						});
	
						// Show ZIP results
						if (json.items) {
							$.each(json.items, function () {
								if (this.zip) {
									$out.append(
										$('<li data-value="' + this.zip + '" />').text(this.zip)
									)
								}
							});
							if (json.found > 0) {
								nothingFound = false;
							}
						}
	
						if (nothingFound) {
							$out.append(
								$('<li class="error" data-value="" />').text('You must enter a valid postcode to perform a search')
							);	
						} else {
							$out.on('click', 'li', function (event) {
								$zipField.val($(event.target).data('value'));
								$zipField.next('.autoSuggestion').remove();
								searchForms[form.id].refresh();
							});
						}
						
						$out.find('li').first().addClass('activeZip');
	
						$zipField.next('.autoSuggestion').remove();
						$zipField.after($('<div class="autoSuggestion"></div>').append($out));
					});
				}
			});
		})();
	});

	$('#search-alert-form .slider').on('slide set', function (event, ui) {
		var $slider = $(this),
			elems = document.getElementById('search-alert-form').elements,
			inputFrom = $(this).data('input-from'),
			inputTo = $(this).data('input-to'),
			optMin = $(this).data('min'),
			optMax = $(this).data('max'),
			optRange = $(this).data('range'),
			$handler = $(this).find('.ui-slider-handle'),
			str;

		if (typeof $slider.val() === 'number') {
			if (inputFrom) { elems[inputFrom].value = (Math.round($slider.val()) == Math.round(optMin) ? '' : Math.round($slider.val())); }
			if (inputTo) { elems[inputTo].value = (Math.round($slider.val()) == Math.round(optMax) ? '' : Math.round($slider.val())); }
		} else {
			if (inputFrom) { elems[inputFrom].value = (Math.round($slider.val()[0]) == Math.round(optMin) ? '' : Math.round($slider.val()[0])); }
			if (inputTo) { elems[inputTo].value = (Math.round($slider.val()[1]) == Math.round(optMax) ? '' : Math.round($slider.val()[1])); }
		}

		switch (inputFrom) {
			case 'preis_ab':
				if (elems[inputFrom].value && elems[inputTo].value) {
					$('#search-alert-form .preis-label').html(formatCurrency(Math.round(elems[inputFrom].value)) + ' - ' + formatCurrency(Math.round(elems[inputTo].value)));
				} else if (elems[inputFrom].value) {
					$('#search-alert-form .preis-label').html('Desde ' + formatCurrency(Math.round(elems[inputFrom].value)));
				} else if (elems[inputTo].value) {
					$('#search-alert-form .preis-label').html('Hasta ' + formatCurrency(Math.round(elems[inputTo].value)));
				} else {
					$('#search-alert-form .preis-label').html('');
				}
				break;
			case 'km_ab':
				if (elems[inputFrom].value && elems[inputTo].value) {
					$('#search-alert-form .km-label').html(formatDistance(Math.round(elems[inputFrom].value)) + ' - ' + formatDistance(Math.round(elems[inputTo].value)));
				} else if (elems[inputFrom].value) {
					$('#search-alert-form .km-label').html('Desde ' + formatDistance(Math.round(elems[inputFrom].value)));
				} else if (elems[inputTo].value) {
					$('#search-alert-form .km-label').html('Hasta ' + formatDistance(Math.round(elems[inputTo].value)));
				} else {
					$('#search-alert-form .km-label').html('');
				}
				break;
			case 'kw_ab':
				if (elems[inputFrom].value && elems[inputTo].value) {
					$('#search-alert-form .kw-label').html(formatPower(Math.round(elems[inputFrom].value)) + ' - ' + formatPower(Math.round(elems[inputTo].value)));
				} else if (elems[inputFrom].value) {
					$('#search-alert-form .kw-label').html('Desde ' + formatPower(Math.round(elems[inputFrom].value)));
				} else if (elems[inputTo].value) {
					$('#search-alert-form .kw-label').html('Hasta ' + formatPower(Math.round(elems[inputTo].value)));
				} else {
					$('#search-alert-form .kw-label').html('');
				}
				break;
			case 'modelYear_from':
				if (elems[inputFrom].value && elems[inputTo].value) {
					$('#search-alert-form .firstreg-label').html(elems[inputFrom].value + ' - ' + elems[inputTo].value);
				} else if (elems[inputFrom].value) {
					$('#search-alert-form .firstreg-label').html('Desde ' + elems[inputFrom].value);
				} else if (elems[inputTo].value) {
					$('#search-alert-form .firstreg-label').html('Hasta ' + elems[inputTo].value);
				} else {
					$('#search-alert-form .firstreg-label').html('');
				}
				break;
			case 'ez_ab':
				if (elems[inputFrom].value && elems[inputTo].value) {
					$('#search-alert-form .ez-label').html(elems[inputFrom].value + ' - ' + elems[inputTo].value);
				} else if (elems[inputFrom].value) {
					$('#search-alert-form .ez-label').html('Desde ' + elems[inputFrom].value);
				} else if (elems[inputTo].value) {
					$('#search-alert-form .ez-label').html('Hasta ' + elems[inputTo].value);
				} else {
					$('#search-alert-form .ez-label').html('');
				}
				break;
			case 'emission_from':
				if (elems[inputFrom].value && elems[inputTo].value) {
					$('#search-alert-form .emission-label').html(elems[inputFrom].value + ' - ' + elems[inputTo].value + ' g/km');
				} else if (elems[inputFrom].value) {
					$('#search-alert-form .emission-label').html('Desde ' + elems[inputFrom].value + ' g/km');
				} else if (elems[inputTo].value) {
					$('#search-alert-form .emission-label').html('Hasta ' + elems[inputTo].value + ' g/km');
				} else {
					$('#search-alert-form .emission-label').html('');
				}
				break;
			default:
				alert(inputFrom);
		}
	});

	var outTimeouts = {},
		inTimeouts = {};
	$('#financing .slider').on('set', function (event, ui) {
		var i = 0,
			timeout,
			$elem = $("#financing .finance-plan tr");
		
		for (timeout in outTimeouts) {
			if (outTimeouts.hasOwnProperty(timeout) && typeof(outTimeouts[timeout]) !== 'undefined') {
				clearTimeout(outTimeouts[timeout]);
				outTimeouts[timeout] = undefined;
				$elem.eq(timeout).css({
					"opacity": '0'
				});
			}
		}
		for (timeout in inTimeouts) {
			if (outTimeouts.hasOwnProperty(timeout) && typeof(inTimeouts[timeout]) !== 'undefined') {
				clearTimeout(inTimeouts[timeout]);
				inTimeouts[timeout] = undefined;
				$elem.eq(timeout).css({
					"opacity": '1'
				});
			}
		}
		
		/*
			.css({
				"transition" : "opacity 200ms linear"
			})
		*/
		$elem
			.stop(true, true)
			.each(function(idx){
				outTimeouts[idx] = setTimeout((function(which) { return function(){
					$(which).animate({
						"opacity" : "0"
					}, 200);
				}; })(this), 50 + (i * 100));
				
				i++;
			});
		
		i = Math.ceil(i / 6);
		
		$elem.each(function(idx){
				inTimeouts[idx] = setTimeout((function(which){ return function(){
					$(which).animate({
						"opacity" : "1"
					}, 200);
				}; })(this), 50 + (i * 100));
				
				i++;
			});
	});
	
	// Prev/Next-Button
	window.vehicleDetailLink = function (currentPage, currentVehicleOnPage, vehiclesPerPage) {
		currentPage = parseInt(currentPage, 10);
		currentVehicleOnPage = parseInt(currentVehicleOnPage, 10);
		vehiclesPerPage = parseInt(vehiclesPerPage, 10);

		var currentVehiclePosition = (((currentPage - 1) * vehiclesPerPage) + currentVehicleOnPage) + 1;

		if (!$('#list').data('search-params')) {
			window.localStorage.setItem('prevNext-currentVehiclePosition', '');
			window.localStorage.setItem('prevNext-queryString', '');
		} else {
			window.localStorage.setItem('prevNext-currentVehiclePosition', currentVehiclePosition);
			window.localStorage.setItem('prevNext-queryString', $('#list').data('search-params'));
		}

		var detailsUrls = [];
		$('#list .vehicleItem').each(function () {
			detailsUrls.push($(this).data('link'))
		});
		window.localStorage.setItem('prevNext-urls', detailsUrls.join('::'));
	};
	
	(function () {
		var backURL = window.localStorage.getItem('backURL');

		if (backURL) {
			$('.backLink').each(function () {
				$(this).attr('href', backURL);
			});
		}

		if (!window.localStorage.getItem('prevNext-currentVehiclePosition')) {
			return;
		}

		$('.page-details .details-header nav .prev a, .page-details .details-header nav .next a')
			.click(function () {
				if ($(this).hasClass('disabled')) {
					return false;
				}
			})
			.removeClass('hidden');

		var currentVehiclePosition = parseInt(window.localStorage.getItem('prevNext-currentVehiclePosition'), 10);

		var detailsUrls = [];
		if (window.localStorage.getItem('prevNext-urls')) {
			detailsUrls = window.localStorage.getItem('prevNext-urls').split('::') || [];
		}

		if (currentVehiclePosition > 1) {
			if (currentVehiclePosition - 2 < detailsUrls.length) {
				$('.page-details .details-header nav .prev a')
					.attr('href', detailsUrls[currentVehiclePosition - 2])
					.click(function () {
						window.localStorage.setItem('prevNext-currentVehiclePosition', currentVehiclePosition - 1);
					})
					.removeClass('disabled');
			} else {
				$.ajax({
					type: 'GET',
					dataType: 'json',
					url: '/es/vehiculos-ocasion/xhr-prevnext/99999'.replace('99999', currentVehiclePosition - 1) + '?' + window.localStorage.getItem('prevNext-queryString') + '&max=1'
				})
				.done(function(json) {
					if (json.length > 0 && json[0] !== '') {
						$('.page-details .details-header nav .prev a')
							.attr('href', json[0])
							.click(function () {
								window.localStorage.setItem('prevNext-currentVehiclePosition', currentVehiclePosition - 1);
							})
							.removeClass('disabled');
					}
				});
			}
		}

		if (currentVehiclePosition < detailsUrls.length) {
			$('.page-details .details-header nav .next a')
				.attr('href', detailsUrls[currentVehiclePosition])
				.click(function () {
					window.localStorage.setItem('prevNext-currentVehiclePosition', currentVehiclePosition + 1);
				})
				.removeClass('disabled');
		} else {
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: '/es/vehiculos-ocasion/xhr-prevnext/99999'.replace('99999', currentVehiclePosition + 1) + '?' + window.localStorage.getItem('prevNext-queryString') + '&max=1'
			})
			.done(function(json) {
				if (json.length > 0 && json[0] !== '') {
					$('.page-details .details-header nav .next a')
						.attr('href', json[0])
						.click(function () {
							window.localStorage.setItem('prevNext-currentVehiclePosition', currentVehiclePosition + 1);
						})
						.removeClass('disabled');
				}
			});
		}
	})();

	/* Financing */
	$('#financing button').click(function () {
		if ($('#financing').hasClass('disabled')) {
			return false;
		}

		$('#financing').addClass('disabled').find('input, select').prop('disabled', true);

		var downPayment = $('#financing-downPayment').val(),
			term = $('#financing-term').val(),
			annualMileage = $('#financing-annualMileage').val();

		$.ajax({
			url: $('#financing').data('xhr-url') + '?CAPcode=' + $('#financing').data('cap-code') + '&firstRegistration=' + $('#financing').data('first-registration') + '&mileage=' + $('#financing').data('mileage') + '&vehiclePrice=' + $('#financing').data('vehicle-price') + '&vendorNumber=' + $('#financing').data('vendor-number') + '&downPayment=' + downPayment + '&term=' + term + '&annualMileage=' + annualMileage,
			dataType: 'json'
		})
		.done(function (json) {
			$('#financing').removeClass('disabled').find('input, select').prop('disabled', false);

			if (json.error) {
				alert(json.error);
				return;
			}

			$('.record-2, .record-11, .record-2 .notifications, .record-11 .notifications').addClass('hidden');

			if (json.records) {
				$.each(json.records, function (key) {
					$('.record-' + key + ' .financing-maturity-monthly')
						.html(this.maturity_monthly)
						.parents('tr').first()[(this.maturity_monthly ? 'removeClass' : 'addClass')]('hidden');
				
					$('.record-' + key + ' .financing-monthly-installment')
						.html(this.monthly_installment_formatted)
						.parents('tr').first()[(this.monthly_installment ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-down-payment')
						.html(this.down_payment_formatted)
						.parents('tr').first()[(this.down_payment ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-total-deposit')
						.html(this.total_deposit_formatted)
						.parents('tr').first()[(this.total_deposit ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-net-amount')
						.html(this.net_amount_formatted)
						.parents('tr').first()[(this.net_amount ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-amount-interest')
						.html(this.amount_interest_formatted)
						.parents('tr').first()[(this.amount_interest ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-total-amount')
						.html(this.total_amount_formatted)
						.parents('tr').first()[(this.total_amount ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-maturity')
						.html(this.maturity_formatted)
						.parents('tr').first()[(this.maturity ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-nominal-interest')
						.html(this.nominal_interest_formatted)
						.parents('tr').first()[(this.nominal_interest ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-effective-interest')
						.html(this.effective_interest_formatted)
						.parents('tr').first()[(this.effective_interest ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-down-payment-contribution')
						.html(this.down_payment_contribution_formatted)
						.parents('tr').first()[(this.down_payment_contribution ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-last-monthly-installment')
						.html(this.last_monthly_installment_formatted)
						.parents('tr').first()[(this.last_monthly_installment ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-mileage-charge')
						.html(this.excess_mileage_charge_formatted)
						.parents('tr').first()[(this.excess_mileage_charge ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key + ' .financing-annual-mileage')
						.html(this.annual_mileage_formatted)
						.parents('tr').first()[(this.annual_mileage ? 'removeClass' : 'addClass')]('hidden');


					$('.record-' + key + ' .financing-maturity')
						.html(this.maturity)
						.parents('tr').first()[(this.maturity ? 'removeClass' : 'addClass')]('hidden');

					$('.record-' + key).removeClass('hidden');
				});
			}

			if (json.query.notifications) {
				$.each(json.query.notifications, function (key) {
					var notification = '';

					$.each(this, function () {
						if (this.type === 'adjust') {
							switch (this.item) {
								case 'downPayment':
									notification += 'The deposit has been adjusted to &pound;' + this['new'] + ', the ' + (this['new'] < this.old ? 'maximum' : 'minimum') + ' allowable.<br />';
									break;
								case 'term':
									notification += 'The term has been adjusted to ' + this['new'] + ', the ' + (this['new'] < this.old ? 'maximum' : 'minimum') + ' allowable for the annual mileage requested.<br />';
									break;
								case 'term_not_available':
									notification += 'The term has been adjusted as the requested term is not available for this vehicle on this product.<br />';
									break;
								default:
									notification += 'The ' + this.item + ' has been adjusted to ' + this['new'] + ', the ' + (this['new'] < this.old ? 'maximum' : 'minimum') + ' allowable.<br />';
									break;
							}
						}
					});
					$('.record-' + key + ' .notifications').html(notification).removeClass('hidden');
				});
			}

			/*
			$('#financing-downPayment').val(json.query.downPayment);
			$('#financing-term option').prop('selected', '').filter('[value=' + json.query.term + ']').prop('selected', true);
			$('#financing-annualMileage option').prop('selected', false).filter('[value=' + json.query.annualMileage + ']').prop('selected', true);
			*/
		});
		
		return false;
	});
	
	/*
	$('#dealer-zip, #search-alert-postal-code').blur(function () {
		
		if (this.value && !/^(GIR|[a-zA-Z]\d[a-zA-Z\d]?|[a-zA-Z]{2}\d[a-zA-Z\d]?)[ ](\d[a-zA-Z]{0,2})??$/.test(this.value)) {
			this.value = '';
			alert('Please enter a valid postcode');
		}
	});
	*/

	$('a').click(function () {
		if ($(this).hasClass('notFound')) {
			return false;
		}
	});
/*
	(function () {
		var lastSearch, zip;
		
		lastSearch = localStorage.lastSearch;
		if (lastSearch) {
			zip = lastSearch.match(/(?:^|[?&])zip=([^&]+)/);
			if (zip && zip.length === 2) {
				$('.volvoSelektStock').each(function () {
					$(this).attr('href', $(this).attr('href') + '&zip=' + decodeURIComponent(zip[1]) + '&radius=80');
				});
			}
		}
	})();
*/
})(window);
/*jslint browser: true, devel: true, maxerr: 9999, maxlen: 200, strict: true */
/*
	AJAX-Search-Mask-Refresh v3

	Last modification 04.03.2012 by JeDu

	Tested in FF16, CH22, IE6/7/8/9, OP11.5, SF5

	Normaler Reset-Button mit Aktualisieren der Suchmaske:
		mdxSearchForm.insertRefreshButton('bauart');

	Nur Auswahl zurücksetzen ohne Suchmasken-Reload:
		mdxSearchForm.insertRefreshButton('sort', true);

	Mehrere Felder über einen Reset-Button zurücksetzen (der Reset-Button wird hinter dem letzten Feld in der Liste eingefügt):
		mdxSearchForm.insertRefreshButton(['km_from', 'km_to']);
*/

function SearchForm(_config) {
	var	_this = this,
		_refreshing = false;

	// Create a dummy-config-object if the _config object is invalid
	if (!_config || typeof(_config) !== 'object') { _config = {}; }

	this.id = _config.id || 'suchmaske';												// <form>-ID
	this.mKey = _config.mKey;															// Market Key (SERVER-KID-MODID)
	this.dKey = _config.dKey || '';														// Dealer Key (SERVER-KID-MODID)
	this.locale = _config.locale || 'de';												// %mdx_localeshort%
	this.translations = _config.translations || {};										// Translations object (keys: 'from', 'to', 'doors', 'searchzip', 'reset')
	this.preProcess = _config.preProcess || [];											// Function or Array of Functions
	this.postProcess = _config.postProcess || [];										// Function or Array of Functions
	this.showVehiclesFoundInSelect = _config.showVehiclesFoundInSelect || false;		// Show vehicles found for each select option (on/off)
	this.showVehiclesFoundInCheckbox = _config.showVehiclesFoundInCheckbox || false;	// Show vehicles found for each extras label (on/off)
	this.debugging = _config.debugging || false;										// Debugging (on/off)
	this.vehiclesFoundElems = _config.vehiclesFoundElems || ['vehiclesFound'];
	this.noVehiclesFoundElems = _config.noVehiclesFoundElems || ['noVehiclesFound'];
	this.domain = _config.domain || '';
	this.interface = _config.interface || '/soap/kfz/';
	this.zipValidation = _config.zipValidation || /^\d+$/;								// Regex for validating ZIP codes

	if (typeof this.zipValidation === 'string') {
		this.zipValidation = new RegExp(this.zipValidation);
	}

	this.countryMapping = {
		'ad': '5', 'ae': '222', 'af': '80', 'ag': '9', 'ai': '7', 'al': '2', 'am': '11', 'an': '150', 'ao': '6', 'ar': '10', 'as': '4', 'at': '14', 'au': '13', 'aw': '12', 'az': '15',
		'ba': '27', 'bb': '19', 'bd': '18', 'be': '21', 'bf': '34', 'bg': '33', 'bh': '17', 'bi': '35', 'bj': '23', 'bm': '24', 'bn': '32', 'bo': '26', 'br': '30', 'bs': '16', 'bt': '25', 'bw': '28', 'by': '20', 'bz': '22',
		'ca': '38', 'cf': '41', 'cg': '49', 'ch': '205', 'cl': '43', 'cm': '37', 'cn': '44', 'co': '47', 'cr': '52', 'cu': '55', 'cv': '39', 'cy': '56', 'cz': '57',
		'de': '1', 'dj': '59', 'dk': '58', 'dm': '60', 'do': '61', 'dz': '3',
		'ec': '62', 'ee': '67', 'eg': '63', 'eh': '233', 'er': '66', 'es': '198', 'et': '68',
		'fi': '72', 'fj': '71', 'fk': '69', 'fm': '138', 'fo': '70', 'fr': '73',
		'ga': '77', 'gb': '223', 'gd': '85', 'ge': '79', 'gf': '74', 'gh': '81', 'gi': '82', 'gl': '84', 'gm': '78', 'gn': '89', 'gp': '86', 'gq': '65', 'gr': '83', 'gt': '88', 'gu': '87', 'gw': '90', 'gy': '91',
		'hk': '96', 'hn': '95', 'hr': '54', 'ht': '92', 'hu': '97',
		'id': '100', 'ie': '103', 'il': '104', 'in': '99', 'iq': '102', 'ir': '101', 'is': '98', 'it': '105',
		'jm': '106', 'jo': '108', 'jp': '107',
		'ke': '110', 'kg': '114', 'kh': '36', 'ki': '111', 'km': '48', 'kn': '179', 'kr': '112', 'kw': '113', 'ky': '40', 'kz': '109',
		'la': '115', 'lb': '117', 'lc': '180', 'li': '121', 'lk': '199', 'lr': '119', 'ls': '118', 'lt': '122', 'lu': '123', 'lv': '116', 'ly': '120',
		'ma': '143', 'mc': '140', 'md': '139', 'mg': '126', 'mh': '132', 'mk': '125', 'ml': '130', 'mm': '145', 'mn': '141', 'mo': '124', 'mp': '158', 'mq': '133', 'mr': '134', 'ms': '142', 'mt': '131', 'mu': '135', 'mv': '129', 'mw': '127', 'mx': '137', 'my': '128', 'mz': '144',
		'na': '146', 'nc': '151', 'ne': '154', 'nf': '157', 'ng': '155', 'ni': '153', 'nl': '149', 'no': '159', 'np': '148', 'nr': '147', 'nu': '156', 'nz': '152',
		'om': '160',
		'pa': '164', 'pe': '167', 'pf': '75', 'pg': '165', 'ph': '168', 'pk': '161', 'pl': '170', 'pm': '181', 'pn': '169', 'pr': '172', 'pt': '171', 'pw': '162', 'py': '166',
		'qa': '173',
		're': '174', 'ro': '175', 'ru': '176', 'rw': '177',
		'sa': '186', 'sb': '194', 'sc': '189', 'sd': '200', 'se': '204', 'sg': '191', 'sh': '178', 'si': '193', 'sk': '192', 'sl': '190', 'sm': '184', 'sn': '187', 'so': '195', 'sr': '201', 'st': '185', 'sv': '64', 'sy': '206', 'sz': '203',
		'td': '42', 'tg': '212', 'th': '210', 'tj': '208', 'tk': '213', 'tm': '218', 'tn': '216', 'to': '214', 'tr': '217', 'tt': '215', 'tv': '219', 'tw': '207', 'tz': '209',
		'ua': '221', 'ug': '220', 'us': '224', 'uy': '226',
		'vc': '182', 've': '229', 'vg': '231', 'vi': '232', 'vn': '230', 'vu': '228',
		'ws': '183',
		'ye': '234',
		'za': '196', 'zm': '235', 'zu': '227', 'zw': '236'

		/*
			 50 = Congo, the Democratic Republic of the
			241 = EU
			 94 = Holy See (Vatican City State)
			237 = Kazakstan
			238 = Montenegro
			239 = Serbian
		
			192 / 240 = Slovenia (si)
		*/
	};

	this.customSelectFields = {
		'customer': { updateOptions: null },
		'sort': { updateOptions: null },
		'radius': { updateOptions: null },
		'max': { updateOptions: null },
		'bauart': {
			updateOptions: function (elem, json, q) {
				clearOptions(elem);

				var anyOptionSelected = false;
				var id;
				var ctypes = {};
				var ctypesUsed = {};
				var noOfCtypes = json['ctype'] ? jsonArrayLength(json['ctype']['option']) : 0;
				var option;

				if (json['ctype']) {
					for (var i = 0; i < noOfCtypes; i++) {
						id = jsonArray(json['ctype']['option'], i)['@value'];
						ctypes[id] = document.createElement('optgroup');
						ctypes[id].label = jsonArray(json['ctype']['option'], i)['#'].replace('&lt;', '<').replace('&gt;', '>');
						ctypesUsed[id] = false;
					}
				}

				if (json['build']) {
					for (var i = 0; i < jsonArrayLength(json['build']['option']); i++) {
						var option = document.createElement('option');
						option.value = jsonArray(json['build']['option'], i)['@value'];
						option.text = jsonArray(json['build']['option'], i)['#'];
						option.selected = jsonArray(json['build']['option'], i)['@selected'];
						if (typeof(ctypes[jsonArray(json['build']['option'], i)['@ctype']]) === 'undefined') {
							elem.appendChild(option);
						} else {
							ctypes[jsonArray(json['build']['option'], i)['@ctype']].appendChild(option);
							ctypesUsed[jsonArray(json['build']['option'], i)['@ctype']] = true;
						}
						option.innerHTML = jsonArray(json['build']['option'], i)['#'];

						if (jsonArray(json['build']['option'], i)['@selected'] === 'yes') {
							anyOptionSelected = true;
						}
					}
				}

				for (var i in ctypes) {
					if (ctypesUsed[i]) { elem.appendChild(ctypes[i]); }
				}

				if (!anyOptionSelected) { elem.selectedIndex = 0; } // Fix WebKit selection bug (maybe bug 23721?)
			}
		},
		'model[]': {
			updateOptions: function (elem, json, q) {
				clearOptions(elem);

				var anyOptionSelected = false;
				var id;
				var manufacturers = {};
				var noOfManufacturers = json['manufacturer'] ? jsonArrayLength(json['manufacturer']['option']) : 0;
				var option;

				if (json['manufacturer']) {
					for (var i = 0; i < noOfManufacturers; i++) {
						id = jsonArray(json['manufacturer']['option'], i)['@value'];
						manufacturers[id] = {
							elem: document.createElement('optgroup'),
							name: jsonArray(json['manufacturer']['option'], i)['#'],
							used: false
						};

						manufacturers[id].elem.label = jsonArray(json['manufacturer']['option'], i)['#'].replace('&lt;', '<').replace('&gt;', '>');
					}
				}

				if (json['model']) {
					for (var i = 0; i < jsonArrayLength(json['model']['option']); i++) {
						var option = document.createElement('option');
						option.value = jsonArray(json['model']['option'], i)['@value'];
						option.text = jsonArray(json['model']['option'], i)['#'];
						option.selected = jsonArray(json['model']['option'], i)['@selected'];
						if (typeof(manufacturers[jsonArray(json['model']['option'], i)['@manufacturer']].elem) === 'undefined') {
							elem.appendChild(option);
						} else {
							manufacturers[jsonArray(json['model']['option'], i)['@manufacturer']].elem.appendChild(option);
							manufacturers[jsonArray(json['model']['option'], i)['@manufacturer']].used = true;
						}
						option.innerHTML = jsonArray(json['model']['option'], i)['#'];

						if (jsonArray(json['model']['option'], i)['@selected'] === 'yes') {
							anyOptionSelected = true;
						}
					}
				}

				var manufacturerArray = [];
				for (var i in manufacturers) {
					if (manufacturers[i].used) {
						manufacturerArray.push(manufacturers[i]);
					}
				}

				manufacturerArray = manufacturerArray.sort(function (a, b) {
					if (a.name < b.name) { return -1; }
					if (a.name > b.name) { return 1; }
					return 0;
				});

				for (var i = 0; i < manufacturerArray.length; i++) {
					elem.appendChild(manufacturerArray[i].elem);
				}

				if (!anyOptionSelected) { elem.selectedIndex = 0; } // Fix WebKit selection bug
			}
		},
		'doors_grouped': {
			updateOptions: function (elem, json, q) {
				clearOptions(elem);

				if (json['doors']) {
					var group23Available = false;
					var group45Available = false;
					var otherDoors = [];

					for (var i = 0; i < jsonArrayLength(json['doors']['option']); i++) {
						switch (jsonArray(json['doors']['option'], i)['@value']) {
							case '2':
							case '3':
								group23Available = true;
								break;
							case '4':
							case '5':
								group45Available = true;
								break;
							default:
								otherDoors.push(jsonArray(json['doors']['option'], i)['@value']);
						}
					}

					if (group23Available) { addOption(elem, '2||3', '2/3' + getTranslation('doors'), q['doors'] === '2||3'); }
					if (group45Available) { addOption(elem, '4||5', '4/5' + getTranslation('doors'), q['doors'] === '4||5'); }

					for (var i = 0; i < otherDoors.length; i++) {
						addOption(elem, otherDoors[i], otherDoors[i] + getTranslation('doors'), q['doors'] === otherDoors[i]);
					}
				}
			}
		},
		'first_reg_age': {
			updateOptions: function (elem, json, q) {
				clearOptions(elem);

				if (json['reg_date_from'] || json['reg_date_to']) {
					var regDateFrom = parseInt((json['reg_date_from'] ? jsonArray(json['reg_date_from']['option'], 0) : jsonArray(json['reg_date_to']['option'], 0))['@value'], 10);
					var regDateTo = parseInt((json['reg_date_to'] ? jsonArray(json['reg_date_to']['option'], jsonArrayLength(json['reg_date_to']['option']) - 1) : jsonArray(json['reg_date_to']['option'], jsonArrayLength(json['reg_date_to']['option']) - 1))['@value'], 10); 
					var thisYear = (new Date()).getFullYear();
					var selectedYear = 0;

					if (json['reg_date_from']) {
						for (var i = 0; i < jsonArrayLength(json['reg_date_from']['option']); i++) {
							if (jsonArray(json['reg_date_from']['option'], i)['@selected'] === 'yes') {
								selectedYear = jsonArray(json['reg_date_from']['option'], i)['@value'];
								break;
							}
						}
					}

					for (var i = regDateTo, j = 1; i > regDateFrom; i--, j++) {
						addOption(
							elem,
							(i - 1) + '-01-01',
							(thisYear - i) + 1,
							((i - 1) == selectedYear)
						);
					}
				}
			}
		},
		'reg_date_from': { /* as well as 'reg_date_from', 'ez_ab', 'ez_bis', 'doors' referenced after the object declaration */
			updateOptions: function (elem, json, q) {
				clearOptions(elem);

				var name = getParamTranslate(elem.name);

				if (json[name]) {
					// Keine Verbrauchswert-Optionen anzeigen, wenn keine Treibstoffart und kein Verbrauchswert ausgewählt ist
					if (!q['gas'] && !q['consCombined_from'] && !q['consCombined_to'] && (name === 'consCombined_from' || name === 'consCombined_to')) {
						return 0;
					}

					var text = '';
					for (var i = 0; i < jsonArrayLength(json[name]['option']); i++) {
						switch (name) {
							case 'reg_date_from':
							case 'price_from':
							case 'km_from':
							case 'kw_from':
								text = getTranslation('from') + jsonArray(json[name]['option'], i)['#'];
								break;
							case 'reg_date_to':
							case 'price_to':
							case 'km_to':
							case 'kw_to':
								text = getTranslation('to') + jsonArray(json[name]['option'], i)['#'];
								break;
							case 'consCombined_from':
							case 'consCombined_to':
								var unit;
								var gas = q['gas'];
								var unitSystem = q['unitSystem'] || 'metric';

								if (gas) {
									gas = '|' + gas.toString() + '|';

									switch (q['unitSystem']) {
										case 'imperial':
											unit = [];
											if (	// Kraftstoff mit l
												gas.indexOf('|1|') !== -1 ||	// Benzin
												gas.indexOf('|2|') !== -1 ||	// Diesel
												gas.indexOf('|4|') !== -1 ||	// Autogas (LPG)
												gas.indexOf('|5|') !== -1 ||	// Methanol
												gas.indexOf('|7|') !== -1 ||	// Super
												gas.indexOf('|9|') !== -1 ||	// Hybrid
												gas.indexOf('|12|') !== -1 ||	// Ethanol

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('mpg');
											}
											if (	// Kraftstoff mit kg
												gas.indexOf('|6|') !== -1 ||	// Wasserstoff
												gas.indexOf('|10|') !== -1 ||	// Erdgas (CNG)

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('kg/100km');
											}
											if (	// Kraftstoff mit kW
												gas.indexOf('|3|') !== -1 ||	// Elektro
												gas.indexOf('|9|') !== -1 ||	// Hybrid

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('mi/kWh');
											}
											unit = unit.join(';');
											break;
										case 'customary':
											unit = [];
											if (	// Kraftstoff mit l
												gas.indexOf('|1|') !== -1 ||	// Benzin
												gas.indexOf('|2|') !== -1 ||	// Diesel
												gas.indexOf('|4|') !== -1 ||	// Autogas (LPG)
												gas.indexOf('|5|') !== -1 ||	// Methanol
												gas.indexOf('|7|') !== -1 ||	// Super
												gas.indexOf('|9|') !== -1 ||	// Hybrid
												gas.indexOf('|12|') !== -1 ||	// Ethanol

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('mpg (us)');
											}
											if (	// Kraftstoff mit kg
												gas.indexOf('|6|') !== -1 ||	// Wasserstoff
												gas.indexOf('|10|') !== -1 ||	// Erdgas (CNG)

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('mi/kg');
											}
											if (	// Kraftstoff mit kW
												gas.indexOf('|3|') !== -1 ||	// Elektro
												gas.indexOf('|9|') !== -1 ||	// Hybrid

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('kWh/mi');
											}
											unit = unit.join(';');
											break;
										default:
											unit = [];
											if (	// Kraftstoff mit l
												gas.indexOf('|1|') !== -1 ||	// Benzin
												gas.indexOf('|2|') !== -1 ||	// Diesel
												gas.indexOf('|4|') !== -1 ||	// Autogas (LPG)
												gas.indexOf('|5|') !== -1 ||	// Methanol
												gas.indexOf('|7|') !== -1 ||	// Super
												gas.indexOf('|9|') !== -1 ||	// Hybrid
												gas.indexOf('|12|') !== -1 ||	// Ethanol

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('l');
											}
											if (	// Kraftstoff mit kg
												gas.indexOf('|6|') !== -1 ||	// Wasserstoff
												gas.indexOf('|10|') !== -1 ||	// Erdgas (CNG)

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('kg');
											}
											if (	// Kraftstoff mit kW
												gas.indexOf('|3|') !== -1 ||	// Elektro
												gas.indexOf('|9|') !== -1 ||	// Hybrid

												gas.indexOf('|8|') !== -1 ||	// kein Antrieb
												gas.indexOf('|13|') !== -1		// Flexible Fuel
											) {
												unit.push('kW');
											}
											unit = unit.join('/') + '/100km';
											break;
									}
								}
								text = (name === 'consCombined_from' ? getTranslation('from') : getTranslation('to')) + jsonArray(json[name]['option'], i)['@value'] + ' ' + (unit || '');
								break;
							case 'emission_from':
								text = getTranslation('from') + jsonArray(json[name]['option'], i)['@value'] + ' g CO²/km';
								break;
							case 'emission_to':
								text = getTranslation('to') + jsonArray(json[name]['option'], i)['@value'] + ' g CO²/km';
								break;
							case 'doors':
								text = jsonArray(json[name]['option'], i)['#'] + getTranslation('doors');
								break;
							default:
								text = jsonArray(json[name]['option'], i)['#'];
						}

						addOption(
							elem,
							jsonArray(json[name]['option'], i)['@value'],
							text,
							jsonArray(json[name]['option'], i)['@selected'] === 'yes'
						);
					}
				}
			}
		}
	};
	this.customSelectFields['build'] = this.customSelectFields['bauart'];
	this.customSelectFields['doors'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['reg_date_to'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['ez_ab'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['ez_bis'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['price_from'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['price_to'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['km_from'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['km_to'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['kw_from'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['kw_to'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['consCombined_from'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['consCombined_to'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['emission_from'] = this.customSelectFields['reg_date_from'];
	this.customSelectFields['emission_to'] = this.customSelectFields['reg_date_from'];

	this.customExtras = {
		'seven_seats': {
			isAvailable: function (json, q, elem) {
				if (json['seats']) {
					var value;
					for (var i = 0; i < jsonArrayLength(json['seats']['option']); i++) {
						value = jsonArray(json['seats']['option'], i)['@value'];
						if (value === '7') { return true; }
					}
				}
				return false;
			},
			isChecked: function (json, q, elem) {
				return (q['seats'] === '7');
			},
			setQuery: function (q, checked) {
				if (checked) { q['seats'] = '7'; }
			}
		},
		'automatic': {
			isAvailable: function (json, q, elem) {
				if (json['gears']) {
					var value;
					for (var i = 0; i < jsonArrayLength(json['gears']['option']); i++) {
						value = jsonArray(json['gears']['option'], i)['@value'];
						if (value === '1' || value === '7' || value === '1||7') { return true; }
					}
				}
				return false;
			},
			isChecked: function (json, q, elem) {
				return this.checked;
			},
			setQuery: function (q, checked, elem) {
				if (checked) { q['gears'] = '1||7'; }
				this.checked = checked;
			}
		},
		'sideairbags': {
			isAvailable: function (json, q)
			{
				if (json['airbags'])
				{
					var value;
					for (var i = 0; i < jsonArrayLength(json['airbags']['option']); i++)
					{
						value = jsonArray(json['airbags']['option'], i)['@value'];
						if (value >= 4) { return true; }
					}
				}
				return false;
			},
			checked: false,
			isChecked: function (json, q)
			{
				return this.checked;
			},
			setQuery: function (q, checked)
			{
				if (checked) { q['airbags'] = '{>=4}'; }
				this.checked = checked;
			}
		}
	};

	this.resetFields = {};
	this.insertRefreshButton = function (field, justReset) {
		var	searchForm = document.getElementById(_this.id),
			resetElem = document.createElement('div'),
			lastField, fieldName, elem;

		if (typeof(field) === 'string') {
			elem = searchForm.elements[field];
			if (typeof(elem) === 'undefined') {
				throw 'mdxSearchForm.insertRefreshButton(): No field of name "' + field + '" exist.';
				return;
			} else if (typeof(elem.nodeName) === 'undefined') {
				throw 'mdxSearchForm.insertRefreshButton(): ' + elem.length + ' fields of name "' + field + '" exist.';
				return;
			}
			if (
				(elem.nodeName.toUpperCase() === 'SELECT' && elem.selectedIndex > 0) ||
				(elem.nodeName.toUpperCase() === 'INPUT' && (elem.type.toLowerCase() === 'text' || elem.type.toLowerCase() === 'email' || elem.type.toLowerCase() === 'tel') && elem.value != '') ||
				(elem.nodeName.toUpperCase() === 'INPUT' && elem.type.toLowerCase() === 'checkbox' && elem.checked)
			) {
				resetElem.className = 'resetEnabled';
				resetElem.setAttribute('title', getTranslation('reset'));
			} else {
				resetElem.className = 'resetDisabled';
				resetElem.setAttribute('title', '');
			}
			lastField = field;
			fieldName = field;
		} else if (typeof(field) === 'object') {
			var enabled = false;
			for (var f in field) {
				lastField = field[f];
				elem = searchForm.elements[lastField];
				if (typeof(elem.nodeName) === 'undefined') {
					throw 'mdxSearchForm.insertRefreshButton(): ' + elem.length + ' fields of name "' + field + '" exist.';
					return;
				}
				if (
					(elem.nodeName.toUpperCase() === 'SELECT' && elem.selectedIndex > 0) ||
					(elem.nodeName.toUpperCase() === 'INPUT' && (elem.type.toLowerCase() === 'text' || elem.type.toLowerCase() === 'email' || elem.type.toLowerCase() === 'tel') && elem.value != '') ||
					(elem.nodeName.toUpperCase() === 'INPUT' && elem.type.toLowerCase() === 'checkbox' && elem.checked)
				) {
					enabled = true;
					break;
				}
			}
			if (enabled) {
				resetElem.className = 'resetEnabled';
				resetElem.setAttribute('title', getTranslation('reset'));
			} else {
				resetElem.className = 'resetDisabled';
				resetElem.setAttribute('title', '');
			}
			fieldName = field.join(';');
		}

		resetElem.onclick = function () {
			var elem;

			if (this.className === 'resetEnabled') {
				if (typeof(field) === 'string') {
					elem = document.getElementById(_this.id).elements[field];
					if (elem.nodeName.toUpperCase() === 'SELECT') {
						elem.selectedIndex = 0;
					} else if (elem.nodeName.toUpperCase() === 'INPUT') {
						if (elem.type.toLowerCase() === 'text' || elem.type.toLowerCase() === 'email' || elem.type.toLowerCase() === 'tel') {
							elem.value = '';
						} if (elem.type.toLowerCase() === 'checkbox') {
							elem.checked = false;
						}
					}

					lastField = field;
				} else if (typeof(field) === 'object') {
					for (var f in field) {
						lastField = field[f];
						elem = document.getElementById(_this.id).elements[lastField];
						if (elem.nodeName.toUpperCase() === 'SELECT') {
							elem.selectedIndex = 0;
						} else if (elem.nodeName.toUpperCase() === 'INPUT') {
							if (elem.type.toLowerCase() === 'text' || elem.type.toLowerCase() === 'email' || elem.type.toLowerCase() === 'tel') {
								elem.value = '';
							} if (elem.type.toLowerCase() === 'checkbox') {
								elem.checked = false;
							}
						}
					}
				}

				if (!justReset) {
					_this.refresh(lastField);
				} else {
					this.className = 'resetDisabled';
					this.setAttribute('title', '');
				}
			}
		}
		_this.resetFields[fieldName] = searchForm.elements[lastField].parentNode.appendChild(resetElem);
	};

	this.isRefresh = function () {
		return _refreshing;
	};

	this.getQuery = function (preProcess, which) {
		// Initialize the query-string object.
		var query = {
			'gw': 'search_form',
			'mkey': _this.mKey,
			'dkey': _this.dKey,
			'allow_no_price': '1',
			'noAvTs': '1',
			'show_extras': '29,seven_seats,10,420,44,13,73,automatic,25,545,50,561,441,102,421,35,37,432,578,67,442,414,522,hybrid,418,429,8,540,99,metallic,has_pic,vat,36,51,340,641,423,private_ad,614,64,38,sideairbags,53,39,60,31,62,148,46,47,accident,611,607,609,577,371,42,43,hasOffer,625,796,526,433,425,141,165,813,816,96,97,814,817,52,818,426,100,546,888',
			'locale': _this.locale,
			'language': _this.languageMapping[_this.locale.toLowerCase()] || 1,
			'xsl': '/userdata/11111/layout/xhr/xml2json_searchform.xsl'
		};

		var searchForm = document.getElementById(_this.id),
			selectElems = searchForm.getElementsByTagName('SELECT'),
			inputElems = searchForm.getElementsByTagName('INPUT'),
			labelElems = searchForm.getElementsByTagName('LABEL'),
			elem;

		// Extend the query-string by custom Extra-CHECKBOX-fields
		for (var extra in _this.customExtras) {
			if (typeof(_this.customExtras[extra].setQuery) === 'function' && searchForm[extra]) {
				_this.customExtras[extra].setQuery(query, (searchForm[extra] && searchForm[extra].checked), searchForm[extra]);
			}
		}

		// Extend the query-string object by SELECT-fields
		for (var i = 0; i < selectElems.length; i++) {
			elem = selectElems[i];
			if (
				(elem.name.length > 0) &&
				(elem.selectedIndex >= 0) &&
				(elem.options[elem.selectedIndex].value.length > 0)
			) {
				if (elem.multiple) {
					query[getParamTranslate(elem.name)] = '';
					for (var j = 0; j < elem.options.length; j++) {
						if (elem.options[j].selected) {
							query[getParamTranslate(elem.name)] += '||' + elem.options[j].value;
						}
					}
					query[getParamTranslate(elem.name)] = query[getParamTranslate(elem.name)].substr(2);
				} else {
					query[getParamTranslate(elem.name)] = elem.options[elem.selectedIndex].value;
				}
			}
			if (preProcess) {
				selectElems[i].disabled = 'true';
			}
		}

		// Extend the query-string object by Custom-SELECT-fields
		for (var i = 0; i < selectElems.length; i++) {
			elem = selectElems[i];
			if (_this.customSelectFields[elem.name] && typeof(_this.customSelectFields[elem.name].setQuery) === 'function') {
				// _this.customSelectFields[elem.name].setQuery(elem, query);
				_this.customSelectFields[elem.name].setQuery.call(_this, elem, query);
			}
		}

		// Extend the query-string object by INPUT- and CHECKBOX-fields
		for (var i = 0; i < inputElems.length; i++) {
			elem = inputElems[i];

			// (elem.name !== 'search_vehicles' && elem.name !== 'version' && elem.name !== 'max' && elem.name !== 'sort' && elem.name !== 'request_uid' && elem.name !== 'logLimit') &&
			if (
				(elem.name.length > 0) &&
				(elem.value.length > 0) &&
				(elem.type !== 'checkbox' || (elem.checked && !_this.customExtras[elem.name])) &&
				(elem.type !== 'radio' || elem.checked) &&
				(!/^(search_vehicles|version|max|sort|request_uid|logLimit)$/.test(elem.name)) &&
				(elem.name !== 'zip' || (_this.zipValidation.test(elem.value)))
			) {
				if (elem.name.substr(elem.name.length - 2) === '[]') {
					query[getParamTranslate(elem.name)] = (query[getParamTranslate(elem.name)] ? query[getParamTranslate(elem.name)] + '||' : '') + elem.value;
				} else {
					query[getParamTranslate(elem.name)] = elem.value;
				}
			}
			if (preProcess && elem.type !== 'hidden') {
				elem.disabled = 'true';
				if (elem.type === 'checkbox' || elem.type === 'radio') {
					if (elem.parentNode.nodeName.toUpperCase() === 'LABEL') {
						addClass(elem.parentNode, 'DISABLED');
					}
					if (elem.id) {
						for (var j = 0; j < labelElems.length; j++) {
							if (labelElems[j].getAttribute('for') === elem.id) {
								addClass(labelElems[j], 'DISABLED');
							}
						}
					}
				}
			}
		}

		// Reset model if manufacturer has been changed
		if (typeof(which) !== 'undefined' && which === 'manufacturer') {
			query['model'] = null;
		}

		if (preProcess) {
			if (typeof(_this.preProcess) === 'function') {
				_this.preProcess.call(_this, query);
			} else if (Object.prototype.toString.call(_this.preProcess) === '[object Array]') {
				for (var i = 0; i < _this.preProcess.length; i++) {
					if (typeof(_this.preProcess[i]) === 'function') {
						_this.preProcess[i].call(_this, query);
					}
				}
			}
		}

		if (searchForm.elements['state'] || searchForm.elements['district'] || searchForm.elements['region']) {
			query['addRegions'] = '1';
		}

		// Convert some Dealer group parameters to SOAP parameters
		if (!query['manufacturer'] && query['model']) {
			query['model'] = null;
		}
		if (query['days_in_stock']) {
			query['created_timestamp'] = Math.floor((new Date()).getTime() / 1000) - (parseInt(query['days_in_stock'], 10) * 24 * 60 * 60);
			query['days_in_stock'] = null;
		}
		if (query['country'] && typeof query['country'] === 'string') {
			query['country'] = _this.countryMapping[query['country'].toLowerCase()] || query['country'];
		}
		if (query['pr_days']) {
			query['lastPriceChange'] = '{>=' + Math.floor((new Date()).getTime() / 1000) - (parseInt(query['pr_days'], 10) * 24 * 60 * 60).toString() + '}';
			query['pr_days'] = null;
		}
		if (query['pr_value']) {
			query['price'] = '{<=lastPrice-' + query['pr_value'] + '}';
			query['pr_value'] = null;
		}
		if (query['lower_dealer_price']) {
			if (parseInt(query['lower_dealer_price'], 10) > 1) {
				query['dealer_price'] = '{<=price-' + query['lower_dealer_price'] + ' AND dealer_price > 0}';
			} else {
				query['price'] = '{>dealer_price}';
			}
			query['lower_dealer_price'] = null;
		}
		if (query['lower_internal_dealer_price']) {
			if (parseInt(query['lower_internal_dealer_price'], 10) > 1) {
				query['internal_dealer_price'] = '{<=price-' + query['lower_internal_dealer_price'] + ' AND internalDealerPrice > 0}';
			} else {
				query['price'] = '{>internalDealerPrice}';
			}
			query['lower_internal_dealer_price'] = null;
		}
		
		return query;
	};

	this.refresh = function (which) {
		_refreshing = true;

		var searchForm = document.getElementById(_this.id),
		selectElems = searchForm.getElementsByTagName('SELECT'),
		inputElems = searchForm.getElementsByTagName('INPUT'),
		labelElems = searchForm.getElementsByTagName('LABEL');

		if (which) {
			for (var r in _this.resetFields) {
				if ((';' + r + ';').indexOf(';' + which + ';') != -1) {
					_this.resetFields[r].className = 'resetLoading';
					_this.resetFields[r].setAttribute('title', '');
					break;
				}
			}
		}

		var query = _this.getQuery(true, which);

		// Request data from server
		httpRequest(_this.domain + _this.interface + getQueryString(query), function (json, details) {
			json = json['mdx_form'];

			var elem;

			// Output the number of found vehicles
			for (var i = 0; i < _this.vehiclesFoundElems.length; i++) {
				if (document.getElementById(_this.vehiclesFoundElems[i])) {
					document.getElementById(_this.vehiclesFoundElems[i]).innerHTML = json['found']['#'];
				}
			}
			for (var i = 0; i < _this.noVehiclesFoundElems.length; i++) {
				if (document.getElementById(_this.noVehiclesFoundElems[i])) {
					document.getElementById(_this.noVehiclesFoundElems[i]).style.display = (json['found']['#'] === 0) ? 'block' : 'none';
				}
			}
			for (var i = 0; i < inputElems.length; i++) {
				if (inputElems[i].type === 'submit' || inputElems[i].type === 'button') {
					inputElems[i].value = inputElems[i].value.replace(/[0-9]+/, json['found']['#']);
				}
			}

			var name = '';
			var anyOptionSelected;
			for (var i = 0; i < selectElems.length; i++) {
				elem = selectElems[i];
				if (_this.customSelectFields[elem.name] && typeof _this.customSelectFields[elem.name].updateOptions === 'function') {
					_this.customSelectFields[elem.name].updateOptions.call(_this, elem, json, query);
				}
				else if (_this.customSelectFields[elem.name] && _this.customSelectFields[elem.name].updateOptions === null) {
					/* do nothing */
				}
				else {
					clearOptions(elem);
					name = getParamTranslate(elem.name);
					anyOptionSelected = false;
					if (json[name] && json[name]['option']) {
						for (var j = 0; j < jsonArrayLength(json[name]['option']); j++) {
							addOption(
								elem,
								jsonArray(json[name]['option'], j)['@value'],
								jsonArray(json[name]['option'], j)['#'] + (_this.showVehiclesFoundInSelect && jsonArray(json[name]['option'], j)['@found'] != '' ? ' (' + jsonArray(json[name]['option'], j)['@found'] + ')' : ''),
								jsonArray(json[name]['option'], j)['@selected'] === 'yes'
							);
							if (jsonArray(json[name]['option'], j)['@selected'] === 'yes') {
								anyOptionSelected = true;
							}
						}
					}
					if (!anyOptionSelected) {
						elem.selectedIndex = 0;
					}
				}
				elem.disabled = '';
			}

			var checked = false;
			var disabled = true;
			var found = 0;
			for (var i = 0; i < inputElems.length; i++) {
				elem = inputElems[i];
				if (elem.type !== 'hidden' && !_this.customExtras[elem.name]) {
					name = getParamTranslate(elem.name);
					if (name.length > 0 && elem.type === 'checkbox') {
						checked = false;
						disabled = true;
						found = 0;
						
						for (var j = 0; j < jsonArrayLength(json['extras']['extra']); j++) {
							if (jsonArray(json['extras']['extra'], j)['@id'] === name) {
								checked = (jsonArray(json['extras']['extra'], j)['@checked'] === 'yes');
								disabled = (jsonArray(json['extras']['extra'], j)['@disabled'] === 'yes');
								found = parseInt(jsonArray(json['extras']['extra'], j)['@found'], 10);
								break;
							}
						}
						
						elem.checked = checked ? 'checked' : '';
						if (!disabled) {
							elem.disabled = '';
							if (elem.parentNode.nodeName.toUpperCase() === 'LABEL') {
								removeClass(elem.parentNode, 'DISABLED');
							}
							if (elem.id) {
								for (var j = 0; j < labelElems.length; j++) {
									if (labelElems[j].getAttribute('for') === elem.id) {
										removeClass(labelElems[j], 'DISABLED');
									}
								}
							}
						}
						
						if (_this.showVehiclesFoundInCheckbox && document.querySelector) {
							searchForm.querySelector('.extra-' + elem.name).innerHTML = (found ? found : '');
						}
					} else if (name.length > 0 && elem.type === 'radio') {
						if (elem.value.length === 0) {
							elem.disabled = '';
							if (elem.parentNode.nodeName.toUpperCase() === 'LABEL') {
								removeClass(elem.parentNode, 'DISABLED');
							}
						} else {
							if (json[name] && json[name]['option']) {
								for (var j = 0; j < jsonArrayLength(json[name]['option']); j++) {
									if (jsonArray(json[name]['option'], j)['@value'] == elem.value) {
										elem.disabled = '';
										if (elem.parentNode.nodeName.toUpperCase() === 'LABEL') {
											removeClass(elem.parentNode, 'DISABLED');
										}
										if (jsonArray(json[name]['option'], j)['@selected'] === 'yes') {
											elem.checked = 'checked';
										}
									}
								}
							}
						}
					} else {
						if (elem.name === 'zip') {
							elem.value = json[name]['#'] || getTranslation('searchzip');
						}
						elem.disabled = '';
						if (elem.parentNode.nodeName.toUpperCase() === 'LABEL') {
							removeClass(elem.parentNode, 'DISABLED');
						}
					}
				}
			}

			for (var extra in _this.customExtras) {
				elem = searchForm[extra];

				// if (Object.prototype.toString.call(elem) === '[object NodeList]') { Doesn't work in IE
				if (elem && typeof(elem.length) === 'number' && typeof(elem.item) !== 'undefined' && typeof(elem.nodeName) === 'undefined') {
					for (var i = 0; i < elem.length; i++) {
						if (elem[i] && typeof(_this.customExtras[extra].isChecked) === 'function' && typeof(_this.customExtras[extra].isAvailable) === 'function') {
							elem[i].checked = _this.customExtras[extra].isChecked(json, query, elem[i]);
							if (_this.customExtras[extra].isAvailable(json, query, elem[i]) || elem[i].checked) {
								elem[i].disabled = '';
								if (elem[i].parentNode.nodeName.toUpperCase() === 'LABEL') {
									removeClass(elem[i].parentNode, 'DISABLED');
								}
								for (var j = 0; j < labelElems.length; j++) {
									if (labelElems[j].getAttribute('for') === elem[i].id) {
										removeClass(labelElems[j], 'DISABLED');
									}
								}
							}
						}
					}
				} else {
					if (elem && typeof(_this.customExtras[extra].isChecked) === 'function' && typeof(_this.customExtras[extra].isAvailable) === 'function') {
						elem.checked = _this.customExtras[extra].isChecked(json, query, elem);
						if (_this.customExtras[extra].isAvailable(json, query, elem) || elem.checked) {
							elem.disabled = '';
							if (elem.parentNode.nodeName.toUpperCase() === 'LABEL') {
								removeClass(elem.parentNode, 'DISABLED');
							}
							for (var j = 0; j < labelElems.length; j++) {
								if (labelElems[j].getAttribute('for') === elem.id) {
									removeClass(labelElems[j], 'DISABLED');
								}
							}
						}
					}
				}
			}

			if (typeof(_this.postProcess) === 'function') {
				_this.postProcess.call(_this, query, json);
			} else if (Object.prototype.toString.call(_this.postProcess) === '[object Array]') {
				for (var i = 0; i < _this.postProcess.length; i++) {
					if (typeof(_this.postProcess[i]) === 'function') {
						_this.postProcess[i].call(_this, query, json);
					}
				}
			}

			for (var r in _this.resetFields) {
				var enabled = false,
					fields = r.split(';')

				for (var j = 0; j < fields.length; j++) {
					if (
						(typeof(searchForm.elements[fields[j]].nodeName) !== 'undefined') && (
						(searchForm.elements[fields[j]].nodeName.toUpperCase() === 'SELECT' && searchForm.elements[fields[j]].selectedIndex > 0) ||
						(searchForm.elements[fields[j]].nodeName.toUpperCase() === 'INPUT' && (searchForm.elements[fields[j]].type.toLowerCase() === 'text' || searchForm.elements[fields[j]].type.toLowerCase() === 'email' || searchForm.elements[fields[j]].type.toLowerCase() === 'tel') && searchForm.elements[fields[j]].value != '') ||
						(searchForm.elements[fields[j]].nodeName.toUpperCase() === 'INPUT' && searchForm.elements[fields[j]].type.toLowerCase() === 'checkbox' && searchForm.elements[fields[j]].checked)
					)) {
						enabled = true;
						break;
					}
				}
				if (enabled) {
					_this.resetFields[r].className = 'resetEnabled';
					_this.resetFields[r].setAttribute('title', getTranslation('reset'));
				} else {
					_this.resetFields[r].className = 'resetDisabled';
					_this.resetFields[r].setAttribute('title', '');
				}
			}

			_refreshing = false;
		}, function (e) {
			_refreshing = false;
			if (_this.debugging) {
				console.log(
					'AJAX Error\n\n' +
					e.msg +
					(e.constructor ? '\n\nConstructor: ' + e.constructor : '') +
					(e.sys_msg ? '\n\nSystem message:\n' + e.sys_msg : '') +
					(e.url ? '\n\nURL: ' + e.url : '') +
					(e.responseText ? '\n\nResponse:\n' + e.responseText : '') +
					(e.fileName ? '\n\nFile name: ' + e.fileName : '') +
					(e.lineNumber ? '\n\nLine: ' + e.lineNumber : '') +
					(e.stack ? '\n\nStack: ' + e.stack : '')
				);
			}
		}, { "cache":true });

		function getQueryString(obj) {
			var queryString, param;
			for (param in obj) {
				if (obj[param]) {
					queryString = (queryString ? queryString + '&' : '?') + encodeURIComponent(param) + '=' + encodeURIComponent(obj[param]);
				}
			}
			return (queryString || '');
		}
	};

	/* --- INTERNAL FUNCTIONS --- */

	function getTranslation(token) {
		return (_this.translations[token] || '');
	}
	_this.getTranslation = getTranslation;

	function getParamTranslate(name) {
		if (name.substr(name.length - 2) === '[]') { name = name.substr(0, name.length - 2); }
		return (_this.paramTranslate[name] || name || '');
	}
	_this.getParamTranslate = getParamTranslate;

	// Remove all options from a SELECT-field excepting the first
	function clearOptions(elem, clearAll) {
		var opt = elem.firstChild, nextOpt;
		var removeOpt = !!clearAll;
		while (opt) {
			nextOpt = opt.nextSibling;
			if (removeOpt) {
				elem.removeChild(opt);
			}
			if (opt.nodeName.toLowerCase() == 'option') {
				removeOpt = true;
			}
			opt = nextOpt;
		}
	}
	_this.clearOptions = clearOptions;

	// Add a new option to a SELECT-field
	function addOption(elem, value, text, selected) {
		var option = document.createElement('option');
		option.value = value;
		option.text = text;
		try {
			// standards compliant; doesn't work in IE
			elem.add(option, null);
		} catch (e) {
			// IE only
			elem.add(option);
		}
		option.selected = selected;
		option.innerHTML = text;
		return option;
	}
	_this.addOption = addOption;

	/* --- HELPER FUNCTIONS --- */

	function trim(text) {
		return text.replace(/^\s+/, '').replace(/\s+$/, '');
	}

	function hasClass(node, className) {
		return (new RegExp('(^|\\s)' + className + '(\\s|$)')).test(node.className);
	}

	function addClass(node, className) {
		if (!hasClass(node, className)) {
			return (node.className += (node.className ? ' ' : '') + className);
		}
		return node.className;
	}

	function removeClass(node, className) {
		if (hasClass(node, className)) {
			return (node.className = trim(node.className.replace(new RegExp('(^|\\s)' + className + '(\\s|$)'),' ')));
		}
		return node.className;
	}
}

// Translates dealer group query string parameter names to vehicle server query string parameter names
SearchForm.prototype.paramTranslate = {
	'hersteller': 'manufacturer',
	'bauart': 'build',
	'farbe': 'color',
	'age': 'days_in_stock',
	'dealer_country': 'dealerCountry',
	'customer': 'dkey',
	'companycar': 'companyCar',
	'company_car': 'companyCar',
	'tueren': 'doors',
	'doors_grouped': 'doors',
	'euronorm': 'euroNorm',
	'antrieb': 'gears',
	'getriebe': 'gears',
	'km_ab': 'km_from',
	'km_bis': 'km_to',
	'kw_ab': 'kw_from',
	'kw_bis': 'kw_to',
	'preis_ab': 'price_from',
	'preis_bis': 'price_to',
	'ez': 'reg_date_from',
	'ez_ab': 'reg_date_from',
	'ez_bis': 'reg_date_to',
	'fart': 'selltype',
	'type_series': 'type_series_id',
	'electric_seats': 'electricSeats',
	'parkdistancecontrol': 'parkDistanceControl',
	'park_distance_control': 'parkDistanceControl',
	'bidvehicle': 'bidVehicle',
	'bid_vehicle': 'bidVehicle',
	'warrantyprogram': 'warrantyProgram',
	'warranty_program': 'warrantyProgram'
};

// locale to language mapping
SearchForm.prototype.languageMapping = {
	'cs': '4',
	'da': '15',
	'de': '1',
	'debe': '35',
	'dech': '29',
	'en': '2',
	'enca': '32',
	'enie': '28',
	'enus': '27',
	'es': '11',
	'fr': '3',
	'frbe': '22',
	'frca': '33',
	'it': '12',
	'itch': '31',
	'ja': '34',
	'nb': '8',
	'nl': '16',
	'nlbe': '24',
	'pt': '19',
	'sv': '6',
	'tr': '14',
	'zh': '26'
};
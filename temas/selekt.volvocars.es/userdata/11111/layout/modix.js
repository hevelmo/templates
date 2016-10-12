"use strict";
(function (window, undefined) {
	var mdx;

	if (typeof(window['mdx']) === 'undefined') {
		window['mdx'] = {};
	}
	mdx = window['mdx'];

	mdx.addEvent = function (obj, type, func) {
		if (!obj) { return; }
		if (obj.attachEvent) {
			var rnd = parseInt(Math.random() * 0xffffffff, 16).toString() + parseInt(Math.random() * 0xffffffff, 16).toString() + parseInt(Math.random() * 0xffffffff, 16).toString() + parseInt(Math.random() * 0xffffffff, 16).toString();
			obj['e' + type + func + rnd] = func;
			obj[type + func + rnd] = function() { obj['e' + type + func + rnd](window.event); }
			obj.attachEvent('on' + type, obj[type + func + rnd]);
		} else {
			obj.addEventListener(type, func, false);
		}
	};

	mdx.addLoadEvent = function (func) {
		return mdx.addEvent(window, 'load', func);
	};

	mdx.getElementsByClassName = function (searchClass, node, tag) {
		if (node.getElementsByClassName) {
			return node.getElementsByClassName(searchClass);
		} else {
			var	classElements = [],
				els = node.getElementsByTagName(tag),
				elsLen = els.length,
				pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
			for (var i = 0; i < elsLen; i++) {
				if (pattern.test(els[i].className)) {
					classElements.push(els[i]);
				}
			}
			return classElements;
		}
	};

	mdx.cookie = {
		read: function _read(name) {
			if (navigator.cookieEnabled) {
				var cookie = document.cookie;
				name += '=';
				return (cookie.indexOf(name) !== -1 ? cookie.substring(cookie.indexOf(name) + name.length).split(';', 2)[0] : null);
			}
			return null;
		},
		write: function _write(name, val, expires, path) {
			if (navigator.cookieEnabled) {
				expires = (expires ? '; expires=' + expires : '');
				document.cookie = name + '=' + val + expires + '; path=' + (path || '/');
			}
			return this;
		},
		remove: function (name) {
			alert('Deleting cookies is not supported yet.');
		}
	};

	mdx.trim = function (text) {
		return text.replace(/^\s+/, '').replace(/\s+$/, '');
	};

	mdx.trimComma = function (text) {
		return text.replace(/^(\s+|,|;)/, '').replace(/(\s+|,|;)$/, '');
	};

	mdx.hasClass = function (node, className) {
		if (typeof(node) === 'string') { node = document.getElementById(node); }
		return (new RegExp('(^|\\s)' + className + '(\\s|$)')).test(node.className);
	};

	mdx.addClass = function (node, className) {
		if (typeof(node) === 'string') { node = document.getElementById(node); }
		if (!mdx.hasClass(node, className)) {
			return (node.className += (node.className ? ' ' : '') + className);
		}
		return node.className;
	};

	mdx.removeClass = function (node, className) {
		if (typeof(node) === 'string') { node = document.getElementById(node); }
		if (mdx.hasClass(node, className)) {
			return (node.className = mdx.trim(node.className.replace(new RegExp('(^|\\s)' + className + '(\\s|$)'),' ')));
		}
		return node.className;
	};

	mdx.contains = function (nodeParent, nodeChild) {
		if (typeof(nodeParent.contains) !== 'undefined') {
			return nodeParent.contains(nodeChild);
		} else {
			return !!(nodeParent.compareDocumentPosition(nodeChild) & 16);
		}
	};

	mdx.toSlug = function (str) {
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
			.replace(/-{ldelim}2,{rdelim}/g, '-');
	};

	mdx.dealphabize = function (str) {
		var arr = str.split(' '),
			result = '';

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == 'at') {
				result += '@';
			} else {
				result += arr[i].substr(0, 1).toLowerCase();
			}
		}

		return result.replace(/\,/g, '.');
	};

	mdx.addHomepage = function(url) {
		if(document.all) {
			document.body.style.behavior = 'url(#default#homepage)';
			document.body.setHomePage(url);
			document.body.isHomePage(url);
		} else {
			alert('Diese Funktion wird von Ihrem Browser leider nicht unterstützt.');
		}
	};

	mdx.addFavorite = function (url, title) {
		if (window.sidebar && window.sidebar.addPanel) {
			// Firefox < 23
			window.sidebar.addPanel(title, url, '');
		} else if (window.opera && window.print) {
			// Opera
			var elem = document.createElement('a');
			elem.setAttribute('href', url);
			elem.setAttribute('title', title);
			elem.setAttribute('rel', 'sidebar');
			elem.click();
		} else if (document.all && window.external) {
			// IE
			window.external.AddFavorite(url, title);
		} else {
			alert('Diese Funktion wird von Ihrem Browser leider nicht unterstützt.');
		}
	};

	mdx.stripText = function (text, len, attach) {
		attach = attach || '';

		var retText = text.substr(0, len);

		return retText + (text != retText ? attach : '');
	};

	/*
		roundDec:
			true = Nachkommastellen werden kaufmännisch gerundet
			false = (default) Nachkommastellen werden abgeschnitten (wie bei Math.floor)
	*/
	mdx.formatNumber = function (num, noOfDec, roundDec, decimalSeparator, groupSeparator) {
		var sign = '', decPoint, intPlaces, decPlaces = '', intPlacesOut;

		if (typeof decimalSeparator === 'undefined') { decimalSeparator = ','; }
		if (typeof groupSeparator === 'undefined') { groupSeparator = '.'; }
		if (typeof num == 'string') { num = parseFloat(num); }
		if (typeof noOfDec !== 'number') { noOfDec = 0; }

		if (isNaN(num)) { return ''; }

		if (roundDec) {
			num = Math.round(num * Math.pow(10, noOfDec)) / Math.pow(10, noOfDec);
		}

		if (num < 0) {
			sign = '-';
			num = -num;
		}

		num = num.toString();

		decPoint = num.indexOf('.');
		if (decPoint != -1) {
			intPlaces = num.substr(0, decPoint);
			decPlaces = num.substr(decPoint + 1);
		} else {
			intPlaces = num;
		}

		if (typeof(noOfDec) === 'number') {
			if (decPlaces.length > noOfDec) {
				decPlaces = decPlaces.substr(0, noOfDec)
			} else {
				while (noOfDec > decPlaces.length) {
					decPlaces += '0';
				}
			}
		}

		if (intPlaces.length > 3) {		
			intPlacesOut = intPlaces.substr(intPlaces.length - 3);
		} else {
			intPlacesOut = intPlaces;
		}
		for (var i = intPlaces.length - 6; i >= -2; i -= 3) {
			if (i >= 0) {
				intPlacesOut = intPlaces.substr(i, 3) + groupSeparator + intPlacesOut;
			} else {
				intPlacesOut = intPlaces.substr(0, 3 + i) + groupSeparator + intPlacesOut;
				break;
			}
		}
		return sign + intPlacesOut + (decPlaces != '' ? decimalSeparator + decPlaces : '');
	};

	mdx.unselectable = function (elem) {
		if (elem === undefined) { return; }
		if (typeof(elem) === 'string') { elem = document.getElementById(elem); }
		mdx.addEvent(elem, "selectstart", function () { return false; });
		elem.style.MozUserSelect = "none";
		elem.style.KhtmlUserSelect = "none";
		elem.unselectable = "on";
	};

	mdx.opacity = function (elem, opacity) {
		if (elem === undefined) { return; }
		if (typeof(opacity) !== 'number') {
			opacity = 1.0;
		} else if (opacity < 0.0){
			opacity = 0.0;
		} else if (opacity > 1.0) {
			opacity = 1.0;
		}
		elem.style.opacity = opacity;
		elem.style.filter = "Alpha(style=0, opacity=" + (opacity * 100) + ")";
	};

	mdx.stack = function () {
		if (typeof(console) === 'object' && typeof(console.log) === 'function') {
			try { mdx.mdx.mdx.mdx; } catch (e) { console.log('mdx.stack:\n' + e.stack) }
		}
	};

	mdx.script = function (adr, query) {
		query = query || {};
		if (!query['preventCache']) {
			query['preventCache'] = (new Date()).getTime();
		}

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.src = adr + mdx.queryFromObject(query);
		script.charset = 'UTF-8';
		document.getElementsByTagName('head')[0].appendChild(script);
	};

	mdx.queryFromObject = function (obj) {
		var queryString, param;
		for (param in obj) {
			if (obj[param]) {
				queryString = (queryString ? queryString + '&' : '?') + encodeURIComponent(param) + '=' + encodeURIComponent(obj[param]);
			}
		}
		return (queryString || '');
	};

	mdx.objectFromQuery = function (str) {
		var query = {}, params = str.split('&'), pos;
		for (var i = 0; i < params.length; i++) {
			pos = params[i].indexOf('=');
			query[params[i].substr(0, pos)] = decodeURIComponent(params[i].substr(pos + 1).replace(/\+/g, ' '));
		}
		return query;
	};
	
	mdx.getQueryObject = function (form, checkFieldCallback) {
		var query = {},
			elems = (typeof(form) === 'string' ? document.getElementById(form) : form).elements,
			name,
			value;
	
		for (var e = 0; e < elems.length; e++) {
			name = elems[e].name;
			value = false;
			
			if (elems[e].nodeName && elems[e].name && (typeof checkFieldCallback !== 'function' || checkFieldCallback(elems[e]))) {
				switch (elems[e].nodeName.toLowerCase()) {
					case 'input':
						switch (elems[e].type.toLowerCase()) {
							case 'text':
							case 'tel':
							case 'email':
							case 'hidden':
								if (elems[e].value) {
									value = elems[e].value;
								}
								break;
							case 'radio':
							case 'checkbox':
								if (elems[e].checked && elems[e].value) {
									value = elems[e].value;
								}
								break;
						}
						break;
					case 'textarea':
						value = elems[e].value;
						break;
					case 'select':
						//var selectedOptions = elems[e].options[elems[e].selectedIndex].selectedOptions;
						//for (var i = 0; i < )
						if (elems[e].selectedIndex !== -1 && elems[e].options[elems[e].selectedIndex].value) {
							value = elems[e].options[elems[e].selectedIndex].value;
						}
						break;
				}
				
				if (value !== false) {
					if (name.substr(-2) === "[]") {
						name = name.substr(0, name.length - 2);
						
						if (query[name]) {
							query[name] += '||' + value;
						} else {
							query[name] = value;
						}
					} else {
						query[name] = value; 
					}
				}
			}
		}
		return query;
	};
	
	/*mdx.getQueryObject = function (form) {
		var query = {},
			elems = (typeof(form) === 'string' ? document.getElementById(form) : form).elements;

		for (var e = 0; e < elems.length; e++) {
			if (elems[e].nodeName && elems[e].name) {
				switch (elems[e].nodeName.toLowerCase()) {
					case 'input':
						switch (elems[e].type.toLowerCase()) {
							case 'text':
							case 'hidden':
								if (elems[e].value) {
									query[elems[e].name] = elems[e].value;
								}
								break;
							case 'checkbox':
								if (elems[e].checked && elems[e].value) {
									query[elems[e].name] = elems[e].value;
								}
								break;
						}
						break;
					case 'select':
						if (elems[e].options[elems[e].selectedIndex].value) {
							query[elems[e].name] = elems[e].options[elems[e].selectedIndex].value;
						}
						break;
				}
			}
		}
		return query;
	};*/

	mdx.replaceholder = function (form, placeholderColor) {
		// Nur im IE
		if (!(!!window.attachEvent && !isOpera)) { return; }

		if (typeof(form) === 'string') {
			form = document.getElementById(form);
		}
		if (!form) {
			return;
		}

		placeholderColor = placeholderColor || '#888';

		for (var e in form.elements) {
			if (form.elements[e] && typeof(form.elements[e].nodeName) === 'string' && (
				(form.elements[e].nodeName.toUpperCase() === 'INPUT' && form.elements[e].type.toLowerCase() === 'text') ||
				(form.elements[e].nodeName.toUpperCase() === 'TEXTAREA')
			) && form.elements[e].getAttribute('placeholder')) {
				if (form.elements[e].value.length === 0) {
					form.elements[e].value = form.elements[e].getAttribute('placeholder');
					form.elements[e].style.color = placeholderColor;
				}
				mdx.addEvent(form.elements[e], 'focus', function () {
					if (this.value === this.getAttribute('placeholder')) {
						this.value = '';
						this.style.color = '#000';
					}
				}, false);
				mdx.addEvent(form.elements[e], 'blur', function () {
					if (this.value === '') {
						this.value = this.getAttribute('placeholder');
						this.style.color = placeholderColor;
					}
				}, false);
			}
		}

		var onSubmit = null;
		if (form.onsubmit) {
			onSubmit = form.onsubmit;
			form.onsubmit = function () {};
		}
		// mdx.addEvent(form, 'submit',
		form.onsubmit = ((function (onSubmit) { return function (event) {
			for (var e in this.elements) {
				if (this.elements[e] && typeof(this.elements[e].nodeName) === 'string' && (
					(this.elements[e].nodeName.toUpperCase() === 'INPUT' && this.elements[e].type.toLowerCase() === 'text') ||
					(this.elements[e].nodeName.toUpperCase() === 'TEXTAREA')
				) && this.elements[e].getAttribute('placeholder') && this.elements[e].value === this.elements[e].getAttribute('placeholder')) {
					this.elements[e].value = '';
					this.elements[e].style.color = '#000';
				}
			}

			if (typeof(onSubmit) === 'function') {
				var retValue = onSubmit.call(this);
				if (retValue === false) {
					for (var e in this.elements) {
						if (this.elements[e] && typeof(this.elements[e].nodeName) === 'string' && (
							(this.elements[e].nodeName.toUpperCase() === 'INPUT' && this.elements[e].type.toLowerCase() === 'text') ||
							(this.elements[e].nodeName.toUpperCase() === 'TEXTAREA')
						) && this.elements[e].getAttribute('placeholder')) {
							if (this.elements[e].value.length === 0) {
								this.elements[e].value = this.elements[e].getAttribute('placeholder');
								this.elements[e].style.color = placeholderColor;
							}
						}
					}
					if (event) {
						if (typeof(event.preventDefault) === 'function') {
							event.preventDefault();
						} else {
							event.returnValue = false;
						}
					}
					return false;
				}
			}

			return true;
		} })(onSubmit));
	};

	mdx.submitCleanForm = function (srcForm) {
		var form, elems, elem, value, i;

		if (typeof(srcForm) === 'string') {
			srcForm = document.getElementById(srcForm);
		}

		elems = srcForm.elements;

		form = document.createElement('FORM');
		form.setAttribute('autocomplete', 'off');
		form.setAttribute('method', srcForm.getAttribute('method'));
		form.setAttribute('action', srcForm.getAttribute('action'));

		for (var i = 0; i < elems.length; i++) {
		   if (!elems[i].getAttribute('name')) {
			   continue;
		   }
			switch (elems[i].nodeName.toUpperCase()) {
				case 'SELECT':
					value = elems[i].options[elems[i].selectedIndex].value;
					break;
				case 'INPUT':
					switch (elems[i].getAttribute('type').toLowerCase()) {
						case 'checkbox':
						case 'radio':
							value = (elems[i].checked ? elems[i].value : '');
							break;
						default:
							value = elems[i].value;
							break;
					}
					break;
				case 'TEXTAREA':
					value = elems[i].value;
					break;
			}
			if (value) {
				elem = document.createElement('INPUT');
				elem.setAttribute('type', 'hidden');
				elem.setAttribute('name', elems[i].name);
				elem.setAttribute('value', value);
				form.appendChild(elem);
			}
		}

		document.body.appendChild(form);
		form.submit();
		document.body.removeChild(form);
		return false;
	};

	/* --- Session-ID aus Adresse übernehmen --- */

	var sessionId = /\/go.to\/([0-9a-z]{32})\//.exec(window.location.href);
	if (sessionId && sessionId.length === 2 && sessionId[1] != mdx.cookie.read('MdxUserSession')) {
		mdx.cookie.write('MdxUserSession', sessionId[1]);
	}

	/* --- Browser-Version dem html-Tag hinzufügen --- */

	var	ua = navigator.userAgent,
		isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';

	try {
		mdx.addClass(document.documentElement, 'js');

		var ieVersion = false;

		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null) {
				ieVersion = parseInt(RegExp.$1, 10);
			}
		} else if (navigator.appName == 'Netscape') {
			var ua = navigator.userAgent;
			var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null) {
				ieVersion = parseInt(RegExp.$1, 10);
			}
		}

		if (ieVersion || (!!window.attachEvent && !isOpera)) {
			mdx.addClass(document.documentElement, 'ie');
			mdx.addClass(document.documentElement, 'ie' + (ieVersion || parseInt(/MSIE (\d+\.\d+);/.exec(navigator.userAgent)[1], 10)));

			/* Make HTML5-tags available for older IE versions */
			var html5 = ['abbr','article','aside','audio','canvas','datalist','details','figcaption','figure','footer','header','hgroup','mark','meter','nav','output','progress','section','summary','time','video'], e;
			for (e in html5) {
				document.createElement(html5[e]);
			}
		} else if (isOpera) {
			mdx.addClass(document.documentElement, 'opera');
		} else if (ua.indexOf('AppleWebKit/') > -1) {
			mdx.addClass(document.documentElement, 'webkit');

			if (ua.indexOf('iPhone') > -1) {
				mdx.addClass(document.documentElement, 'ios');
				mdx.addClass(document.documentElement, 'iphone');
			} else if (ua.indexOf('iPod') > -1) {
				mdx.addClass(document.documentElement, 'ios');
				mdx.addClass(document.documentElement, 'ipod');
			} else if (ua.indexOf('iPad') > -1) {
				mdx.addClass(document.documentElement, 'ios');
				mdx.addClass(document.documentElement, 'ipad');
			} else if (ua.indexOf('Android') > -1) {
				mdx.addClass(document.documentElement, 'android');
			}
		} else if (ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1) {
			mdx.addClass(document.documentElement, 'gecko');
			if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
				mdx.addClass(document.documentElement, 'fx' + parseInt(RegExp.$1));
			}
		} else if (ua.indexOf('Blackberry') > -1) {
			mdx.addClass(document.documentElement, 'blackberry');
		}

		if (window.history.length > 1) {
			mdx.addClass(document.documentElement, 'history');
		} else {
			mdx.addClass(document.documentElement, 'nohistory');
		}

		if (
			('MozTransition' in document.documentElement.style) ||
			('WebkitTransition' in document.documentElement.style) ||
			('OTransition' in document.documentElement.style) ||
			('MsTransition' in document.documentElement.style) ||
			('transition' in document.documentElement.style)
		) { mdx.addClass(document.documentElement, 'transition'); }
	} catch (e) { }
})(window);
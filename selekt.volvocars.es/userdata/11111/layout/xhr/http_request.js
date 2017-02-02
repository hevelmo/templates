/*jslint browser: true, devel: true, maxerr: 9999, maxlen: 200, strict: true */
/*
	HTTP-JSON-Request

	Last modification 06.12.2011 by JeDu
	
	Tested in FF2, FF3.5, IE6, IE7, IE8, OP9.6, SF4b, SF5, iPhone

	url:
		/soap/kfz/?gw=search_form&allManufacturers=1&allModels=1&mkey=1-9370-199994&manufacturer=31&model=&xsl=../../../userdata/15130/layout/js/xml2json.xsl&preventCache=1253530372240

	callback:
		function (jsObj) { ... }

	errCallback (optional):
		function (e) { ... }

	options (optional):
		debug: true/false (default: true)
		parse: true/false (default: true)
		async: true/false (default: true)
		cache: true/false (default: false)
		postData: queryString (default: null)
		langId: string (default: de)
*/

var _httpRequestCache = {}, _httpRequestRetry = false;

function httpRequest(url, callback, errCallback, options) {
	if (typeof(url) !== "string")			{ return error("InvalidURL"); }
	if (typeof(callback) !== "function")		{ return error("NoCallbackSpecified"); }

	if (options === undefined) { options = {}; }
	if (typeof(options.debug) !== 'boolean')	{ options.debug = true; }
	if (typeof(options.parse) !== 'boolean')	{ options.parse = true; }
	if (typeof(options.async) !== 'boolean')	{ options.async = true; }
	if (typeof(options.cache) !== 'boolean')	{ options.cache = false; }
	if (typeof(options.postData) !== 'string')	{ options.postData = null; }
	if (typeof(options.langId) !== 'string')	{ options.langId = 'de'; }

	var xmlHttp = null;

	if (options.cache) {
		log("ProcessCachedResponse");
		xmlHttp = { 'responseText':_httpRequestCache[url.replace(/preventCache=[0-9]+/, '') + (options.postData !== null ? '#' + options.postData : '')] };
		if (xmlHttp.responseText !== undefined) {
			processResponse(true);
			log("Done");
			return function () { return true; };
		}
	}

	// function: Firefox, Opera; object: Safari, IE7+
	if ((typeof(XMLHttpRequest) === "function") || (typeof(XMLHttpRequest) === "object")) {
		log("InitXmlHttpRequestObject");
		try {
			xmlHttp = new XMLHttpRequest();
		} catch (e) {
			return error("InitXmlHttpRequestObject", e);
		}
	}
	// IE6
	else if (typeof(ActiveXObject) === 'function') {
		log("InitMsXmlHttpComponent");
		var progIDs = ["MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
		for (var i = 0; i < progIDs.length; i++) {
			try {
				xmlHttp = new ActiveXObject(progIDs[i]);
				break;
			} catch (e) {}
		}
		if (!xmlHttp) {
			return error("InitMsXmlHttpComponent");
		}
	} else {
		return error("NoXmlHttpComponentAvailable");
	}

	try {
		if (typeof(xmlHttp.overrideMimeType) === "function") {
			xmlHttp.overrideMimeType("text/plain");
			// xmlHttp.overrideMimeType("application/json");
		}
	}
	catch (e) {}

	try {
		log("InitOnReadyStateChange");
		xmlHttp.onreadystatechange = function() {
			if (!options.async) { return; }

			log("ReadyStateChangedTo" + ['Unsent', 'Opened', 'HeadersReceived', 'Loading', 'Done'][xmlHttp.readyState], (xmlHttp.readyState > 1 && typeof(xmlHttp.status) === 'number' ? xmlHttp.status : undefined), (xmlHttp.readyState > 1 && typeof(xmlHttp.responseText) === 'string' ? xmlHttp.responseText.length : undefined));

			if (xmlHttp.readyState === 4) {
				switch (xmlHttp.status) {
					case 0:	// Network error or Access to local files
						if (!xmlHttp.responseText) {
							error("NetworkError");
							break;
						}

					case 200:
						if (processResponse(false) && options.cache) {
							/*
								Cache will be written after the data were successfully processed,
								to make sure the server returned valid data.
							*/
							_httpRequestCache[url.replace(/preventCache=[0-9]+/, '') + (options.postData !== null ? '#' + options.postData : '')] = xmlHttp.responseText;
						}
						break;

					// IE specific status codes
					case 12029:
					case 12030:
					case 12031:
					case 12152:
					case 12159:
						httpRequest(url, callback, errCallback, options);
						break;

					default:
						if (xmlHttp.status) {
							error("UnsupportedStatusCode", null, { statusCode:xmlHttp.status, statusText:xmlHttp.statusText });
						} else {
							error("StatusCodeNotAvaiable", null, { statusText:xmlHttp.statusText });
						}
				}

				xmlHttp.onreadystatechange = new Function();	// Fix memory leak in IE
				xmlHttp = null;
				log("Done");
			}
		};
	} catch (e) {
		return error("InitOnReadyStateChange", e);
	}

	log("OpeningXmlHttpRequest");
	if (options.postData === null) {
		try { xmlHttp.open('GET', url, options.async); } catch (e) { return error("OpeningXmlHttpRequest", e); }
	} else {
		try { xmlHttp.open('POST', url, options.async); } catch (e) { return error("OpeningXmlHttpRequest", e); }

		log("SettingRequestHeader");
		try { xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"); } catch (e) { return error("SettingRequestHeader", e); }
	}

	try {
		// Function: All modern browsers; Object: Old IE versions
		if (typeof(xmlHttp.setRequestHeader) === "function" || typeof(xmlHttp.setRequestHeader) === "object") {
			xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		}
	} catch (e) { }

/*
	Not allowed
	log("SettingRequestHeader");
	try { xmlHttp.setRequestHeader("Connection", "close"); } catch (e) { return error("SettingRequestHeader", e); }
*/

	log("SendingRequest");
	try { xmlHttp.send(options.postData); } catch (e) { return error("SendingRequest", e); }

	log("WaitingForResponse");

	if (!options.async) {
		processResponse(false);
		log("Done");
	}

	return abort;

	function abort() {
		try {
			if (xmlHttp !== null && typeof(xmlHttp.abort) === 'function') {
				xmlHttp.onreadystatechange = new Function();	// Fix memory leak in IE
				log("AbortingRequest");
				xmlHttp.abort();
				xmlHttp = null;
			} else if (options.debug) {
				return error("AbortingNotPossible", e);
			}
		} catch (e) {
			return error("AbortingRequest", e);
		}

		return true;
	}

	function processResponse(fromCache) {
		if (options.parse) {
			// Fix Modix-SOAP-Bug
			if (!_httpRequestRetry && (xmlHttp.responseText === 'missing XSL path' || xmlHttp.responseText ===  'missing XML string')) {
				_httpRequestRetry = true;
				httpRequest(url, callback, errCallback, options);
				return;
			}
			_httpRequestRetry = false;

			log("ParsingJsonNative");
			try {
				if ((typeof(JSON) === "object") && (typeof(JSON.parse) === "function")) {
					var jsObj = JSON.parse(xmlHttp.responseText);
				} else {
					throw new TypeError('JSON.parse');
				}
			} catch (e) {
				log("ParsingJsonEval");
				try {
					var jsObj = eval("(" + xmlHttp.responseText + ")");
				} catch (e) {
					return error("ServerReturnedInvalidData", e, { responseText:xmlHttp.responseText });
				}
			}
		} else {
			try {
				var jsObj = xmlHttp.responseText;
			} catch (e) {
				return error("ServerReturnedInvalidData", e);
			}
		}

		log("ProcessResponse");
		try {
			callback(jsObj, { "url":url, "fromCache":fromCache, "options":options });
		} catch (e) {
			return error("DataProcessingFailed", e);
		}
		log("ResponseProcessed");

		return true;
	}

	/* Helper functions */

	function log(msgId) {
		if (options.debug) {
			var msg;
			if (/^[A-Za-z0-9]+$/.test(msgId)) {
				switch (msgId) {
					case "ProcessCachedResponse":
						switch (options.langId) {
							case 'de':	msg = "Die zwischengespeicherte Server-Antwort wird verarbeitet..."; break;
							default:		msg = "Processing cached server response..."; break;
						}
					case "InitXmlHttpRequestObject":
						switch (options.langId) {
							case 'de':	msg = "Initialisiere XMLHttpRequest-Objekt..."; break;
							default:		msg = "Initializing XMLHttpRequest object..."; break;
						}
						break;
					case "InitMsXmlHttpComponent":
						switch (options.langId) {
							case 'de':	msg = "Initialisiere Microsoft XML HTTP-Komponente..."; break;
							default:		msg = "Initializing Microsoft XML HTTP component..."; break;
						}
						break;
					case "InitOnReadyStateChange":
						switch (options.langId) {
							case 'de':	msg = "Richte JSON-Verarbeitungsfunktion ein..."; break;
							default:		msg = "Setting JSON processing function..."; break;
						}
						break;
					case "ReadyStateChangedToUnsent":
						switch (options.langId) {
							case 'de':	msg = "Anfragestatus ist zu 'unsent' gewechselt..."; break;
							default:		msg = "Ready state changed to 'unsent'..."; break;
						}
						break;
					case "ReadyStateChangedToOpened":
						switch (options.langId) {
							case 'de':	msg = "Anfragestatus ist zu 'opened' gewechselt..."; break;
							default:		msg = "Ready state changed to 'opened'..."; break;
						}
						break;
					case "ReadyStateChangedToHeadersReceived":
						switch (options.langId) {
							case 'de':	msg = "Anfragestatus ist zu 'headers_received'" + (arguments[1] ? " (Status: " + arguments[1] + ")" : "") + " gewechselt..."; break;
							default:		msg = "Ready state changed to 'headers_received'" + (arguments[1] ? " (status: " + arguments[1] + ")" : "") + "..."; break;
						}
						break;
					case "ReadyStateChangedToLoading":
						switch (options.langId) {
							case 'de':	msg = "Anfragestatus ist zu 'loading'" + (arguments[1] || arguments[2] ? " (" + (arguments[1] ? "Status: " + arguments[1] : "") + (arguments[1] && arguments[2] ? "; " : "") + (arguments[2] ? arguments[2] + " Bytes übertragen": "") + ")": "") + " gewechselt..."; break;
							default:		msg = "Ready state changed to 'loading'" + (arguments[1] || arguments[2] ? " (" + (arguments[1] ? "status: " + arguments[1] : "") + (arguments[1] && arguments[2] ? "; " : "") + (arguments[2] ? arguments[2] + " bytes transfered": "") + ")": "") + "..."; break;
						}
						break;
					case "ReadyStateChangedToDone":
						switch (options.langId) {
							case 'de':	msg = "Anfragestatus ist zu 'done'" + (arguments[1] || arguments[2] ? " (" + (arguments[1] ? "Status: " + arguments[1] : "") + (arguments[1] && arguments[2] ? "; " : "") + (arguments[2] ? arguments[2] + " Bytes übertragen": "") + ")": "") + " gewechselt..."; break;
							default:		msg = "Ready state changed to 'done'" + (arguments[1] || arguments[2] ? " (" + (arguments[1] ? "status: " + arguments[1] : "") + (arguments[1] && arguments[2] ? "; " : "") + (arguments[2] ? arguments[2] + " bytes transfered": "") + ")": "") + "..."; break;
						}
						break;
					case "ParsingJsonNative":
						switch (options.langId) {
							case 'de':	msg = "Anasyle der JSON-Antwortdaten (Nativ)..."; break;
							default:		msg = "Parsing the JSON response (native)..."; break;
						}
						break;
					case "ParsingJsonEval":
						switch (options.langId) {
							case 'de':	msg = "Analyse der JSON-Antwortdaten (eval())..."; break;
							default:		msg = "Parsing the JSON response (eval())..."; break;
						}
						break;
					case "ProcessResponse":
						switch (options.langId) {
							case 'de':	msg = "Die Server-Antwort wird verarbeitet..."; break;
							default:		msg = "Processing server response..."; break;
						}
						break;
					case "ResponseProcessed":
						switch (options.langId) {
							case 'de':	msg = "Die Server-Antwort wurde erfolgreich verarbeitet..."; break;
							default:		msg = "Server response successful processed..."; break;
						}
						break;
					case "OpenXmlHttpRequest":
						switch (options.langId) {
							case 'de':	msg = "Öffnen der XML-Http-Anfrage..."; break;
							default:		msg = "Opening the XML Http request..."; break;
						}
						break;
					case "SettingRequestHeader":
						switch (options.langId) {
							case 'de':	msg = "Einstellen des XML-Http-Anfrage-Headers..."; break;
							default:		msg = "Setting the XML Http request header..."; break;
						}
						break;
					case "SendingRequest":
						switch (options.langId) {
							case 'de':	msg = "Server-Anfrage wird gesendet..."; break;
							default:		msg = "Sending the server request..."; break;
						}
						break;
					case "WaitingForResponse":
						switch (options.langId) {
							case 'de':	msg = "Warte auf die Server-Antwort..."; break;
							default:		msg = "Waiting for the server response..."; break;
						}
						break;
					case "AbortingRequest":
						switch (options.langId) {
							case 'de':	msg = "Server-Anfrage wird abgebrochen..."; break;
							default:		msg = "Aborting the server request..."; break;
						}
						break;
					case "Done":
						msg = ""; break;
					default:
						msg = msgId;
				}
			} else {
				msg = msgId;
			}

			window.status = msg;
		}
	}

	function error(msgId, e, infosObj) {
		var errObj = { "url":url, "id":msgId };

		switch (msgId) {
			case "InvalidURL":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Ungültige URL."; break;
					default:		errObj["msg"] = "Invalid URL."; break;
				}
				break;
			case "NoCallbackSpecified":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Keine Callback-Funktion spezifiziert."; break;
					default:		errObj["msg"] = "No callback function specified."; break;
				}
				break;
			case "InitXmlHttpRequestObject":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Fehler während der Initialisierung des XMLHttpRequest-Objekts."; break;
					default:		errObj["msg"] = "Error while initializing XMLHttpRequest object."; break;
				}
				break;
			case "InitMsXmlHttpComponent":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Keine XML-HTTP-Komponente gefunden."; break;
					default:		errObj["msg"] = "No XML HTTP component found."; break;
				}
				break;
			case "NoXmlHttpComponentAvailable":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Keine XML-HTTP-Komponente verfügbar."; break;
					default:		errObj["msg"] = "No XML HTTP component available."; break;
				}
				break;
			case "ServerReturnedInvalidData":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Der Server hat ungültige Daten zurückgeliefert."; break;
					default:		errObj["msg"] = "Server returned invalid data."; break;
				}
				break;
			case "DataProcessingFailed":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Fehler beim Verarbeiten der Server-Antwort."; break;
					default:		errObj["msg"] = "Error while processing the server response."; break;
				}
				break;
			case "NetworkError":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Netzwerkfehler."; break;
					default:		errObj["msg"] = "Network error."; break;
				}
				break;
			case "UnsupportedStatusCode":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Der Server hat einen nicht unterstützten Status-Code zurückgeliefert."; break;
					default:		errObj["msg"] = "Server returned unsupported status code."; break;
				}
				break;
			case "StatusCodeNotAvaiable":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Kein Status-Code deklariert."; break;
					default:		errObj["msg"] = "Status code not declared."; break;
				}
				break;
			case "InitOnReadyStateChange":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Fehler während der Initialisierung von onReadyStateChange."; break;
					default:		errObj["msg"] = "Error while initializing onReadyStateChange."; break;
				}
				break;
			case "OpeningXmlHttpRequest":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Fehler beim Öffnen einer neuen Server-Anfrage."; break;
					default:		errObj["msg"] = "Error opening a new server request."; break;
				}
				break;
			case "SettingRequestHeader":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Fehler beim Setzen des Anfrage-Headers."; break;
					default:		errObj["msg"] = "Error while setting the request header."; break;
				}
				break;
			case "SendingRequest":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Fehler beim Senden der Server-Anfrage."; break;
					default:		errObj["msg"] = "Error sending the server request."; break;
				}
				break;
			case "AbortingNotPossible":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Abbrechen nicht möglich."; break;
					default:		errObj["msg"] = "Aborting not possible."; break;
				}
				break;
			case "AbortingRequest":
				switch (options.langId) {
					case 'de':	errObj["msg"] = "Fehler beim Abbrechen der Server-Anfrage."; break;
					default:		errObj["msg"] = "Error while aborting the server request."; break;
				}
				break;
			default:
				errObj["msg"] = msgId;
		}

		if (e && e.name)		{ errObj["constructor"] = e.name; }
		if (e && e.message)	{ errObj["sys_msg"] = e.message; }
		if (e && e.stack)	{ errObj["sys_msg"] = e.stack; }

		if (infosObj) {
			for (i in infosObj) {
				errObj[i] = infosObj[i];
			}
		}

		log(errObj["msg"]);
		if (typeof(errCallback) === 'function') {
			try {
				errCallback(errObj);
			} catch (e) {}
		}

		return false;
	}
}

function jsonArray(node, index) {
	if (Object.prototype.toString.call(node) === '[object Array]' && index >= 0 && index < node.length) {
		return node[index];
	}
	return (index == 0 ? node : null);
}

function jsonArrayLength(node) {
	return (Object.prototype.toString.call(node) === '[object Array]' ? node.length : (typeof(node) === 'undefined' ? 0 : 1));
}
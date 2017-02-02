(function($){
	'use strict';

	if (!("ontouchstart" in document.documentElement)) {
	    $(document.documentElement).addClass('no-touch');
	} else {
		$(document.documentElement).addClass('touch');
	}

	(function () {
		if ((sessionStorage.getItem('searchMode') || '') === 'advanced') {
			$('head').append('<style type="text/css">.search-mask .options > *.advancedSearch, .advancedSearch, .actions li.advancedSearch { display:block; } .search-mask .options > *.quickSearch, .quickSearch, .actions li.quickSearch { display:none; }');
		} else {
			$('head').append('<style type="text/css">.search-mask .options > *.advancedSearch, .advancedSearch, .actions li.advancedSearch { display:none; } .search-mask .options > *.quickSearch, .quickSearch, .actions li.quickSearch { display:block; }');
		}
	})();

	(function () {
		window.addVehicleToNotepadAndCompare = function (chiffre, button){
			var animEnd = $("#toolNavi ." + button),
				animEndOffset = animEnd.offset(),
				original = $(".vehicle" + chiffre + " ." + button),
				originalOffset = original.offset(),
				clone = $('<div class="clone" />').css({
					"position" : "absolute",
					"left" : originalOffset.left + "px",
					"top" : originalOffset.top + "px",
					"z-index" : "999",
					"width" : original.outerWidth() + "px",
					"height" : original.outerHeight() + "px",
					"border" : "1px solid #000"
				});
				
				clone.appendTo("body");
				
				clone.animate({
					"top" : animEndOffset.top + "px",
					"left" : animEndOffset.left + "px"
				}, 800, function(){
					clone.remove();
				});
		};
		
		window.isOnNotepad = function (chiffre) {
			var chiffres = (localStorage.getItem('notepadChiffres') || '').split('||');
			
			for (var i = 0; i < chiffres.length; i++) {
				if (chiffres[i] === chiffre) {
					return true;
				}
			}
			return false;
		};

		window.toggleNotepad = function (chiffre, page) {
			var chiffres = (localStorage.getItem('notepadChiffres') || '').split('||'),
				isOnNotepad = false,
				pos;

			if (chiffres.length === 1 && chiffres[0] === '') {
				chiffres = [];
			}
			
			for (var i = 0; i < chiffres.length; i++) {
				if (chiffres[i] === chiffre) {
					isOnNotepad = true;
					pos = i;
				}
			}

			if (isOnNotepad) {
				chiffres.splice(pos, 1);
			} else {				
				chiffres.push(chiffre);
				if(page == "list"){
					addVehicleToNotepadAndCompare(chiffre, "favs");
				}
			}
			localStorage.setItem('notepadChiffres', chiffres.join('||'));

			updateToolNavi();

			return !isOnNotepad;
		};

		window.getNotepadChiffres = function () {
			return localStorage.getItem("notepadChiffres");
		};

		window.isOnCompare = function (chiffre) {
			var chiffres = (localStorage.getItem('compareChiffres') || '').split('||');
			
			for (var i = 0; i < chiffres.length; i++) {
				if (chiffres[i] === chiffre) {
					return true;
				}
			}
			return false;
		};

		window.toggleCompare = function (chiffre, error, headline, page) {
			var chiffres = (localStorage.getItem('compareChiffres') || '').split('||'),
				isOnCompare = false,
				pos;
			
			
			if (chiffres.length === 1 && chiffres[0] === '') {
				chiffres = [];
			}
	
			for (var i = 0; i < chiffres.length; i++) {
				if (chiffres[i] === chiffre) {
					isOnCompare = true;
					pos = i;
				}
			}
			
			if (isOnCompare) {
				chiffres.splice(pos, 1);
			} else {
				if(chiffres.length >= 3){
					alert(error, headline);
	
					return false;
				} else {
					chiffres.push(chiffre);
					if(page == "list"){
						addVehicleToNotepadAndCompare(chiffre, "compare");
					}					
				}
			}
				
			localStorage.setItem('compareChiffres', chiffres.join('||'));
	
			updateToolNavi();
	
			return !isOnCompare;			
		};

		window.getCompareChiffres = function () {
			return localStorage.getItem("compareChiffres");
		};
		
		window.updateToolNavi = function () {
			var notepadChiffres = (localStorage.getItem('notepadChiffres') || '').split('||'),
				compareChiffres = (localStorage.getItem('compareChiffres') || '').split('||'),
				noOfSavedSearches,
				button;
				
			for (noOfSavedSearches = 10; noOfSavedSearches > 0; noOfSavedSearches--) {
				if (window.localStorage.getItem('saved-searches-' + noOfSavedSearches)) {
					break;
				}
			}

			if (notepadChiffres.length === 1 && notepadChiffres[0] === '') {
				notepadChiffres = [];
			}
			if (compareChiffres.length === 1 && compareChiffres[0] === '') {
				compareChiffres = [];
			}

			if (notepadChiffres.length > 0) {
				var button = $('.notepadCount').html(' (' + notepadChiffres.length + ')').parent();
				
				button.css({ 'opacity': '', 'cursor': '', 'text-decoration': '' }).attr('href', button.data('link') + '?chiffre=' + getNotepadChiffres());
			} else {
				var button = $('.notepadCount').html('').parent();
				
				$('.notepadCount').parent().css({ 'opacity': '0.3', 'cursor': 'default', 'text-decoration': 'none' }).attr('href', '#');
			}
			if (compareChiffres.length > 0) {
				button = $('.compareCount').html(' (' + compareChiffres.length + ')').parent();
				
				button.css({ 'opacity': '', 'cursor': '', 'text-decoration': '' }).attr('href', button.data('link') + '?chiffre=' + getCompareChiffres());
			} else {
				button = $('.compareCount').html('').parent();
				
				$('.compareCount').parent().css({ 'opacity': '0.3', 'cursor': 'default', 'text-decoration': 'none' }).attr('href', '#');
			}
			if (noOfSavedSearches > 0) {
				button = $('.searchesCount').html(' (' + noOfSavedSearches + ')').parent();
				
				button.css({ 'opacity': '', 'cursor': '', 'text-decoration': '' }).attr('href', button.data('link'));
			} else {
				button = $('.searchesCount').html('').parent();
				
				$('.searchesCount').parent().css({ 'opacity': '0.3', 'cursor': 'default', 'text-decoration': 'none' }).attr('href', '#');
			}
		};

		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (searchElement, fromIndex) {
				if ( this === undefined || this === null ) {
					throw new TypeError( '"this" is null or not defined' );
				}
		
				var length = this.length >>> 0; // Hack to convert object.length to a UInt32
		
				fromIndex = +fromIndex || 0;
		
				if (Math.abs(fromIndex) === Infinity) {
					fromIndex = 0;
				}
		
				if (fromIndex < 0) {
					fromIndex += length;
					if (fromIndex < 0) {
						fromIndex = 0;
					}
				}
		
				for (;fromIndex < length; fromIndex++) {
				if (this[fromIndex] === searchElement) {
				return fromIndex;
				}
			}
		
				return -1;
			};
		}
	}());
}(jQuery));
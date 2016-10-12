(function($){
    'use strict';

	window.analyticsCookieActivated = function () {
		var optoutmultiMatch, c2Match;
	
		if (document.cookie) {
			var optoutmultiMatch = document.cookie.match(/OPTOUTMULTI=([^;]+)/);
			if (optoutmultiMatch && optoutmultiMatch.length === 2 && typeof optoutmultiMatch[1] === 'string') {
				c2Match = decodeURIComponent(optoutmultiMatch[1]).match(/c2:(\d+)/);
				if (c2Match && c2Match.length === 2) {
					return c2Match[1] === '0';
				}
			}
		}
		return false;
	};


	$('.touchi').click(function () {
		$(this).siblings('.warrantyInfo').toggleClass('visible');
	});

	$('.financingQuickLink').css({ cursor: 'pointer' }).click(function (e) {
		$("html, body").animate({
			"scrollTop" : ($('#financingBox').parent().get(0).offsetTop - 80)					
		});
		$('#financingBox').parents('.togglable').addClass('opened').find('.toggler, .togglable-content').addClass('opened');
		e.preventDefault();
	});

    /* SVG fallback */
    window.svgeezy.init(false, 'png');

    /* External links should open in a new window */
    $('a[rel*="external"]').click(function(e){
        e.preventDefault();
        window.open($(this).attr('href'));
    });

    /* Simple spam protection for mailto: links */
    $('a[href^="mailto:"]').each(function(){
        var
        mail = $(this).attr('href').replace('mailto:',''),
        replaced = mail.replace('/at/','@');
        $(this).attr('href','mailto:' + replaced);
        if($(this).text() === mail) {
            $(this).text(replaced);
        }
    });

    /* Chosen select for <select> elements */
    var customSelects = $('select.select-a, .field select:not([multiple])');
    customSelects.chosen({
        'width': '100%',
        'max_selected_options': 1,
        'allow_single_deselect': true,
		'disable_search': true
    });

    /* We have to remove options with "label" attribute when chosen is active and reload */
    if (customSelects.eq(0).data('chosen')) {
        customSelects.find('option[label]').removeAttr('label');
        customSelects.trigger('chosen:updated');
    }
	
	$('.field select[multiple]').each(function () {
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

	/* SUBMIT SEARCH ALERT */
	(function(){
		$("#search-alert-form").submit(function(e){
			if(this.elements["email"].value != ""){
				$.post($(this).data("link"), $("#search-alert-form").serialize(),function(msg) {
					document.getElementById('search-alert-content').innerHTML = msg;
				});
			} else {
				alert($(this).data("error"));
			}
			e.preventDefault();
		});
    }());
	
	/* Share Hide/Show */
	(function(){
		$(".share").click(function(e){
			$(this).toggleClass('on');
			$(this).find('.shareContent').slideToggle();
			
			e.preventDefault();
		});
    }());
		
	/* Banner Animation */
	(function(){
		var timer = false,
			duration = 10000;
			
		function autoFade(duration){
			if(timer !== false){
				clearTimeout(timer);
			}
			
			timer = setTimeout(function(){
				timer = false;
				
				fadeToNext();
				
				autoFade(duration);
			}, duration);
		}
		
		function fadeToNext() {
			var $crt = $("#mainBanner .animItem.fade"),
				$parent = $("#mainBanner");
			
			if ($crt.next(".animItem").length > 0) {
				$crt.removeClass("fade").next(".animItem").addClass("fade");
			} else {
				$parent.find(".animItem").first().addClass("fade");
				$crt.removeClass("fade");
			}
		}
		
		$(document).ready(function () {
			if ($("#mainBanner .animItem").size() > 1) {
				autoFade(duration);
				
				$("#mainBanner").mouseenter(function(){
					clearTimeout(timer);
					timer = false;			
				}).mouseleave(function(){
					autoFade(duration);
				});
			}	
		});
	}());

    /* Lightbox for galleries - swipebox*/
    (function(){		
		/* Bind swipebox to hiden image gallery on detail page */	   
		$('.vehicle-details .general .gallery li a').swipebox({ hideCloseButtonOnMobile : false, hideBarsDelay: 9999999, afterOpen: function () { $('#swipebox-action').css({ display: 'block' }); } });

		/* Detail Main Image Open Swipebox */
		$('.vehicle-details .general .photo > a').click(function(e){
			$(".vehicle-details .general .gallery li a").eq(0).trigger("click", e);
			
			e.preventDefault();
		});
		
		/* Detail Gallery Image Open Swipebox */
		$('.gallery .imageSlideWrap .items a').click(function(e){
			$(".vehicle-details .general li a").eq($(".gallery .imageSlideWrap .items a").index(this)).trigger("click");
			
			e.preventDefault();
		});
    }());
	
	/* Box toggling */
    (function(){		
		$(document).ready(function(){
			/* Result list */
			$("#list .items").on("click", "article > .toggler, .preview > button", function(e){
				var $toggler = $(this),
					$parent = $toggler.parents("article");
				
				$parent.find(".togglable-content, .toggler").andSelf().toggleClass("opened");
				
				e.preventDefault();
			});
			
			$("#list .items").on("click", "article .extended .close > button", function(e){
				var $buttonClose = $(this),
					$parent = $buttonClose.parents("article");
			
				$parent.find(".extended.togglable-content, .toggler").andSelf().removeClass("opened");					
			});
			
			/* Detail list */
			$(".page-details").on("click", "section.togglable > .toggler", function(e){
				var $toggler = $(this),
					$parent = $toggler.parents("section.togglable");
				
				$parent.find(".togglable-content, .toggler").andSelf().toggleClass("opened");
				
				e.preventDefault();
			});
		});
    }());
	
	/* Open dealer address by clicking on dealer name */
	(function(){		
		$(document).ready(function(){
			$("#dealerContact .info h4").click(function(e){
				$(".location.togglable, .location .toggler, .location .content.togglable-content").addClass("opened");
				
				$("#routeIframe").find('iframe').attr('src', $("#route").data('frame-link'));
				
				$("html, body").animate({
					"scrollTop" : ($(".location.togglable").offset().top - 65)					
				});
			});
		});
    }());
	
	/* Add iframe on detail page */
    (function(){		
		$(document).ready(function(){
			$("#route").click(function(e){
				$("#routeIframe").find('iframe').attr('src', $(this).data('frame-link'));
				
				//e.stopPropagation();
			});
		});
    }());
	
	/* Delete from Notepad */
    (function(){		
		window.deleteVehicleFromList = function (elem, chiffre){
			var chiffreList = getNotepadChiffres();
					
			$(elem).parents(".vehicle" + chiffre).slideUp(500, function(){
				$("#list").find(".vehicle" + chiffre).remove();
			});
				
			if (window.history && window.history.replaceState) {
				if(chiffreList){
					window.history.replaceState(null, null, "?chiffre=" + chiffreList);
				} else {
					window.history.replaceState(null, null, $("#notepadMain").data("url"));

					$("#list .items").append('<li class="noVehicles">' + $("#notepadMain").data("no-vehicles") + '</li>');
				}
			}
		}
    }());
	
	/* Load vehicle data on list/notepad (ajax) */
    (function(){		
		window.getVehicleData = function (elem, view, chiffre){
			var $vehicle = $(elem).parents(".vehicle" + chiffre),
				$frame = $vehicle.find(".extended.togglable-content .tabs > ." + view);
			
			$vehicle.find(".extended.togglable-content .tabs > section").removeClass("active");
			$frame.addClass("active");
			
			if(!$frame.data('loaded')){
				$frame.append('<div class="preloader"></div>');
			}
			
			$vehicle.find(".extended.togglable-content > nav a").removeClass("active");
			$(elem).addClass("active");
			
			if(!$frame.data('loaded')){						
				$.ajax({
					type: "GET",
					url: $("#list").data("vehicle-url"),
					dataType : "text",
					data: "chiffre=" + chiffre + "&view=" + view
				}).done(
					(function(chiffre, view, $frame){
						return function(text){
							$vehicle.find("tabs .preloader").remove();
							
							$frame.data("loaded", true).html(text);
						}; 
					})(chiffre, view, $frame)
				);
			}
		};
		
		window.getAllVehicleData = function (elem, chiffre){
			var $vehicle = $(elem).parents(".vehicle" + chiffre),
				$tabContent = $vehicle.find('.extended .tabs'),
				$navTabs = $vehicle.find('.extended nav li.isTab a');
			
			if (!$vehicle.data('loaded')) {
				$tabContent.append('<div class="preloader active"></div>');
				
				$.ajax({
					type: "GET",
					url: $("#list").data("vehicle-url"),
					dataType : "text",
					data: "chiffre=" + chiffre + "&view=getAll"
				}).done(function(text){
					$vehicle.data('loaded', true);
					
					$tabContent.html(text);
						
					$tabContent.children().first().addClass('active');
					$tabContent.children().each(function () {
						var $tabCnt = $(this);
						
						$navTabs.each(function () {
							if ($(this).data('tab') == $tabCnt.data('tab')) {
								$(this).parent().fadeIn();
							}
						});									
					});
					
					$vehicle.find('.extended nav li.isTab a[data-tab="' + $tabContent.children().first().data('tab') + '"]').addClass('active');
				});
			}
		};
    }());
	
	/* Image Slide on detail page */
    (function(){		
		$(document).ready(function(){
			var $elementsToUpdate = $(".imageSlideWrap, .imageSlide .items.slide"),
				$slideWrap = $(".imageSlideWrap"),
				$parent = $slideWrap.parent(),									
				$slide = $(".imageSlide"),
				$slideElements = $(".imageSlide .items.slide"),
				$slideElementsSmartPhone = $(".imageSlide .items.slide > li"),									
				totalSlideElemsSmartPhone = $slideElementsSmartPhone.size(),
				totalSlideElems = $slideElements.size(),
				slideCount = 1,
				animates = false;
			
			reCalculateSliderProperties();
			
			$("#prevSlide").click(function(e){
				imageSlide("prev");
				
				e.preventDefault();
			});
			
			$("#nextSlide").click(function(e){
				imageSlide("next");
				
				e.preventDefault();
			});
			
			function imageSlide(state, curSlideCount){
				if (!curSlideCount) {
					if (!animates) {
						animates = true;
						
						if(state === "next"){
							if (totalSlideElems > slideCount) {
								slideCount++;
							} else {
								animates = false;
								return false;
							}
						} else {
							// BUG = "slideCount" need to be fixed by scrolling in smart version and resizing to desktop												
							if (slideCount != 1 && slideCount <= totalSlideElems) {
								slideCount--;
							} else {
								animates = false;
								return false;
							}
						}
						
						if (slideCount >= totalSlideElems){
							$slide.animate({
								"margin-left" : -($parent.innerWidth() * (totalSlideElems - 1)) + "px"
							}, 1000, function(){
								animates = false;
							});
							
							$("#prevSlide").removeClass("disable");
							$("#nextSlide").addClass("disable");
							
							animates = false;
							
							return false;
						} else if (slideCount <= 1) {
							$slide.animate({
								"margin-left" : "0px"
							}, 1000, function(){
								animates = false;
							});
							
							$("#nextSlide").removeClass("disable");
							$("#prevSlide").addClass("disable");
							
							animates = false;
						} else {
							$("#prevSlide, #nextSlide").removeClass("disable");
							
							$slide.animate({
								"margin-left" : -($parent.innerWidth() * (slideCount - 1)) + "px"
							}, 1000, function(){
								animates = false;
							});
						}
					} else {
						return false;
					}
				} else {
					return slideCount - 1;
				}
			}
			
			function reCalculateSliderProperties(){
				$elementsToUpdate.css({
					"width" : $parent.innerWidth() + "px",
					"overflow" : "hidden"	
				});
				
				if ($(window).innerWidth() <= 600) {
					var curCount = imageSlide('', "getCurrentCount");
					
					if(curCount != 1){
						$("#prevSlide").removeClass("disable");
					}
					
					$("#nextSlide").removeClass("disable");
					
					totalSlideElems = totalSlideElemsSmartPhone;
					
					$slide.css({
						"width" : ($parent.innerWidth() * (1 + Math.ceil(totalSlideElems / $slideElements.size())) * $slideElements.size()) + "px",
						"margin-left" : -($parent.innerWidth() * curCount) + "px"
					});

					$slideElements.css({
						"width" : $parent.innerWidth() * (1 + Math.ceil(totalSlideElems / $slideElements.size())) + "px"
					});

					$slideElementsSmartPhone.css({
						"width" : $parent.innerWidth() + "px"
					});
				} else {								
					var curCount = imageSlide('', "getCurrentCount");
					
					totalSlideElems = $slideElements.size();
					
					if(curCount >= totalSlideElems){	// Count/scroll fix for switch between smart and desktop version e.g. sCount = 4, dCount = 2
						curCount = totalSlideElems - 1;
						
						$("#nextSlide").addClass("disable");
					}
					
					$slide.css({
						"width" : ($parent.innerWidth() * totalSlideElems) + "px",
						"margin-left" : -($parent.innerWidth() * curCount) + "px"
					});
					
					$slideElements.css({
						"width" : Math.floor($slide.innerWidth() / $slideElements.size()) + "px"
					});
					
					$slideElementsSmartPhone.css({
						"width" : "33.3333%"
					});
				}
			}
			
			$(window).resize(function(){										
				reCalculateSliderProperties();
			});
		});
    }());

    /* Dealer search */
    (function(){
        var root = $('div.dealer-search'),
        results = root.find('section.results'),
        breakpoint = 850;

        if (root.length === 0) {
            return;
        }

        results.scroller();

        function updateHeight(){

            if ($(window).width() <= breakpoint) {
                root.css('height','auto');
            }
            else {
                /* update height to fit the whole UI on screen */
                root.css('height', parseInt($(window).height(),10));
            }

            results.scroller('reset');
        }

        $(window).on('resize.dealersearch', $.debounce(50, updateHeight));

        updateHeight();
    }());

    /* Sliders */
    (function() {
		$('.slider').each(function () {
			var $slider = $(this),
				$parent = $slider.parent(),
				$from = $parent.find('.inputFrom'),
				$to = $parent.find('.inputTo'),
				format = { decimals: 0, thousand: '' },
				settings = {
					connect: true,
					format: wNumb(format)
				},
				extsettings = {
					'range': {
						'min': $slider.data('min'),
						'max': $slider.data('max')
					},
					'start': $slider.data('values'),
					'step': $slider.data('step')
				};
		
			jQuery.extend(settings, extsettings);
			
			$slider.noUiSlider(settings);
		
			if (settings.connect === true || settings.connect === 'lower') {
				$slider.Link('lower').to($from, null, wNumb({ decimals: 0 }));
			}
			if (settings.connect === true || settings.connect === 'upper') {
				$slider.Link('upper').to($to, null, wNumb({ decimals: 0 }));
			}
			/*
			$slider.on({
				slide: function () {
					var sliderSettingsJSON = extsettings,
						$inputFrom = $slider.parents('form').prop('elements')[$slider.data('input-from')],
						$inputTo = $slider.parents('form').prop('elements')[$slider.data('input-to')],
						$sliderMin = $slider.val()[0],
						$sliderMax = $slider.val()[1];
						
					if (sliderSettingsJSON.range.min == $sliderMin.val()) {
						$inputFrom.val(($slider.data('all') ? $slider.data('all') : 'All'));
					}
					
					if (sliderSettingsJSON.range.max == $sliderMax.val()) {
						$inputTo.val(($slider.data('all') ? $slider.data('all') : 'All'));
					}
				},
				set: function () {						
					var sliderSettingsJSON = extsettings,
						$inputFrom = $slider.parents('form').prop('elements')[$slider.data('input-from')],
						$inputTo = $slider.parents('form').prop('elements')[$slider.data('input-to')],
						$sliderMin = $slider.val()[0],
						$sliderMax = $slider.val()[1];
					
					if (sliderSettingsJSON.range.min == $sliderMin) {
						$inputFrom.val(($slider.data('all') ? $slider.data('all') : 'All'));	
					}
					
					if (sliderSettingsJSON.range.max == $sliderMax) {
						$inputTo.val(($slider.data('all') ? $slider.data('all') : 'All'));
					}
				}
			});
			*/
			$slider.trigger('set');
		
			$parent.find('input.from, input.to').on('blur', function (e) {
				e.preventDefault();
		
				if ($(this).val() === '') {
					var values = $(this).parents('.range').find('.slider').val();
					
					if ($(this).hasClass('from')) {
						$(this).val(values[0]);
					} else if ($(this).hasClass('to')) {
						$(this).val(values[1]);
					}
				}
			});
		});
    }());

    /* Togglable comparison */
    (function(){
        $('div.comparison-full caption').on('click', function(e){
            var t = $(e.target).closest('table');
            t.toggleClass('opened');
			/*
			crash in IE9
			if (mdx.hasClass(t.get(0), 'opened')) {
            	this.className = 'opened';
			} else {
				this.className = '';
			}
			*/
        });
		
		/*
		crash in IE9
		if ($('div.comparison-full table.opened caption').get(0)) {
			$('div.comparison-full table.opened caption').get(0).className = 'opened';
		}
		*/
    }());

    /* Content lightbox */
    (function(){
        function onkeydown(e){
            if (e.keyCode === 27) {
                closeLightbox();
            }
        }

        function openLightbox(el){
            closeLightbox();
            $(el).addClass('active');
            $('body').addClass('modal-overlay-visible').on('keydown.modaloverlay', onkeydown);
        }

        function closeLightbox(){
            $('.modal-overlay.active').removeClass('active');
            $('body').removeClass('modal-overlay-visible').off('keydown.modaloverlay');
        }

        $('.modal-overlay').append('<button type="button" class="close">Close</button>');

        $('.modal-overlay').on('click','.close, .cancel', function(e){
            e.preventDefault();
            closeLightbox();
        });

        $('.modal-trigger').on('click', function(e){
            e.preventDefault();
            openLightbox($(this).attr('href'));
        });
    }());
	
	(function () {
		$(window).resize(sizeCheck);
		sizeCheck();
	
		function sizeCheck() {
			$('noscript').each(function () {
				var	minWidth = $(this).data('min-width'),
					maxWidth = $(this).data('max-width'),
					winWidth = $(window).width();

				if (!minWidth && !maxWidth) {
					return;
				} else {
					if (!minWidth) {
						minWidth = 0;
					}
					if (!maxWidth) {
						maxWidth = 99999;
					}
				}

				if (winWidth >= minWidth && winWidth <= maxWidth) {
					$(this).replaceWith($(this).text());
				}
			});
		}
	})();

	window.alert = function (message, headline) {
		var overlay = $('<div class="alertOverlay" />'),
			alertOverlayInner = $('<div class="alertOverlayInner" />'),
			overlayMessage = $('<div class="alertMessage" />'),			
			overlayHeadline = (headline ? $('<div class="alertHead" />').text(headline) : false),
			overlayContent = $('<div class="alertContent" />').text(message),
			submitButton = $('<a href="#" class="alertSubmit button-a">OK</a>').click(function () {
				$(this).parents('div.alertOverlay').remove();
				return false;
			});

		alertOverlayInner.appendTo(overlay);
		overlayMessage.appendTo(alertOverlayInner);
		if (overlayHeadline) {
			overlayHeadline.prependTo(overlayMessage);
		}
		overlayContent.appendTo(overlayMessage);
		submitButton.appendTo(overlayMessage);
		overlay.appendTo("body");
		
		setTimeout(function () {
			overlay.css({ opacity: 1.0 });
			overlayMessage.css({ transform: 'scale(1.0)', '-webkit-transform': 'scale(1.0)' });
		}, 50);
	};
	
	/*Image animation*/
	(function(){
		function bannerAnim($elem, $filter, duration, imgRatio){
			var properties = getFormat($elem),
				totalElems = $elem.children().size(),
				hover = false,
				timer = false;
			
			function getFormat($elem){
				$elem.css({
					"width" : "auto"
				});
				
				var elemWidth = $elem.outerWidth(),
					elemHeight = Math.floor(elemWidth * (imgRatio ? imgRatio : 0.22));
				
				return { 'width' : elemWidth + 'px', 'height' : elemHeight + 'px' }	
			}
			
			function setStyles($elem, styles){
				styles.overflow = 'hidden';
				
				$elem.css(styles);
			}
			
			$(window).resize(function(){
				getFormat($elem);
				setStyles($elem, getFormat($elem));
			});
			
			if(totalElems > 1){
				$elem.mouseover(function(){
					hover = true;			
					
					clearTimeout(timer);
					timer = false;			
				}).mouseout(function(){
					hover = false;
					
					autoFade(duration);
				});
			}
			
			function autoFade(duration){
				if(timer !== false){
					clearTimeout(timer);
				}
				
				timer = setTimeout(function(){
					timer = false;
					
					animFade();
				}, duration);	
			}
			
			function animFade(){
				var $current = $elem.find(".fade"),
					idx = $current.index() + 1;
				
				if(idx >= totalElems){
					$filter.first().css({
						"opacity" : 1
					});
				} else {
					$current.next().css({
						"opacity" : 1
					});						
				}
				
				$current.animate({
					"opacity" : 0
				}, function(){					
					$current.removeClass("fade");
					
					if(idx >= totalElems){
						$filter.first().addClass("fade");
					} else {
						$current.next().addClass("fade");						
					}
				});
				
				clearTimeout(timer);				
				timer = false;
				
				if(!hover){
					autoFade(duration);
				}
			}
			
			getFormat($elem);
			setStyles($elem, getFormat($elem));
			
			if(totalElems > 1){
				autoFade(duration);
			}
		}
		
		bannerAnim($("#mainPageAnim"), $(".animItem"), 10000, 0.41);
		bannerAnim($("#subPageAnim"), $(".animItem"), 10000);
	})();
	
	(function () {
		/* Suchparameter speichern */

		var searchParams = $('#list').data('search-params')
		if (searchParams) {
			localStorage.setItem('lastSearch', searchParams)
		}

		/* Topangebote entsprechend der Suche anzeigen */

		var $placeholder = $('#topOfferPlaceholder'),
			url = $placeholder.data('url');

		if (url) {
			$.ajax({
				url: url + '&' + (localStorage.getItem('lastSearch') || '')
			})
			.done(function (data) {
				$placeholder.html(data);
			});
		}
	})();

	(function () {
		if ($('#youtubevideos').length > 0) {
			$('#youtubevideos').youTubeChannel({
				userName: $('#youtubevideos').data('channel'),
				channel: "uploads",
				hideAuthor: true,
				numberToDisplay: 100,
				linksInNewWindow: true,
				loadingText: "Loading..."
			});
		}
	})();

	// Auto suggestion for ZIP field in search alert and find a dealer forms
	(function () {
		$('.form-dealer-search input[name="zipcode"], .form-search-alert input[name="zip"]').each(function () {
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
					var checkedZip;

					if (event.which === 13) {
						var val = $zipField.next('.autoSuggestion').find('li').eq(activeZip).data('value');
						if (val) {
							$zipField.val(val);
							$zipField.next('.autoSuggestion').remove();

							if ($zipField.val()) {
								checkedZip = $zipField.val();
								$.ajax({
									type: "GET",
									url: '/soap/geo/',
									dataType : 'jsonp',
									data: 'call=getByZip&country=GB&limit=1&zip=' + $zipField.val()
								}).done(function (json) {
									if (checkedZip === $zipField.val() && json.found !== 1) {
										$zipField.val('');
										alert('Please enter a valid postcode');
									}
								});
							}
						}
						return false;
					} else if (event.which === 37 || event.which === 38) {
						$zipField.next('.autoSuggestion').find('li').eq(activeZip).removeClass('activeZip');
						if (activeZip == 0) activeZip = $zipField.next('.autoSuggestion').find('li').length - 1;
						else activeZip--;
						$zipField.next('.autoSuggestion').find('li').eq(activeZip).addClass('activeZip');
						windowPosition = $(window).scrollTop();
						$zipField.next('.autoSuggestion').find('.activeZip')[0].scrollIntoView(false);
						$(window).scrollTop(windowPosition);
						return false;
					} else if (event.which === 39 || event.which === 40) {
						$zipField.next('.autoSuggestion').find('li').eq(activeZip).removeClass('activeZip');
						if (activeZip == $zipField.next('.autoSuggestion').find('li').length - 1) activeZip = 0;
						else activeZip++;
						$zipField.next('.autoSuggestion').find('li').eq(activeZip).addClass('activeZip');
						windowPosition = $(window).scrollTop();
						$zipField.next('.autoSuggestion').find('.activeZip')[0].scrollIntoView(false);
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
					var checkedZip;

					if (!autosuggestionClicked) {
					
						if ($zipField.val() != '') {
							if ($zipField.next('.autoSuggestion').find('li').length == 1 && $zipField.next('.autoSuggestion').find('li').data('value') != '') {
								var val = $zipField.next('.autoSuggestion').find('li').eq(activeZip).data('value');
								if (val) {
									$zipField.val(val);
								}
							}

							if ($zipField.val()) {
								checkedZip = $zipField.val();
								$.ajax({
									type: "GET",
									url: '/soap/geo/',
									dataType : 'jsonp',
									data: 'call=getByZip&country=GB&limit=1&zip=' + $zipField.val()
								}).done(function (json) {
									if (checkedZip === $zipField.val() && json.found !== 1) {
										$zipField.val('');
										alert('Please enter a valid postcode');
									}
								});
							}
						}
						
						$zipField.next('.autoSuggestion').remove();
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
						});
					}
					
					$out.find('li').first().addClass('activeZip');

					$zipField.next('.autoSuggestion').remove();
					$zipField.after($('<div class="autoSuggestion"></div>').append($out));
				});
			}
		});
	})();

	if ($('#vehicleItems .vehicleItem').length > 0) {
		setTimeout(scrollFix, 0);
		$(window).load(scrollFix);
	}

	function scrollFix() {
		var $list;
	
		if ($('#list').is(':visible')) {
			$list = $('#list');
			window.scrollTo(0, Math.round($list.offset().top - 100));
		} else {
			$list = $('#listSimple');
			window.scrollTo(0, Math.round($list.offset().top - 60));
		}
	}
}(jQuery));
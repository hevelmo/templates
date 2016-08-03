define([], function() {
    var e= {
        timers: {
            DEFAULT_TIMER: 200, MENU_OPEN: 500, MENU_TIMEOUT: 250, BIGMENU_SLIDEDOWN: 3e3, SCROLL_TO: 750, LINEUP_FADE: 1e3, FAKE_INTERVAL: 3e4, FAKE_TIMEOUT: 1e4, LANDING_TABLES_INIT: 1e3, SERVICES_TIMEOUT: 1e4
        }
        , ui: {
            FONT_BASE:16, MOBILE_BREAKPOINT:48, LARGE_BREAKPOINT:64, FANCYBOX_THUMB_WIDTH:50, FANCYBOX_THUMB_HEIGHT:50, FANCYBOX_360_WIDTH:925, MOBILE_PADDING:15, CURVE_PADING:15, CURVE_IMAGE_PADING:10, LINEUP_LEFTS:[8, -38, -12, -1, 13, -3, -51], LINEUP_BOTTOMS:[22, 9, 1, -10, -5, 0, 17], LINEUP_PADDING_LEFTS:[0, 0, 0, 20, 35, 30, 0], LINEUP_MARGIN_TOPS:[-5, 0, 10, 15, 10, 0, -5], TOOLTIP: {
                arrow: !1, content: '<h3 class="tooltipster-title"></h3><p class="tooltipster-text"></p>', maxWidth: 200, position: "left", touchDevices: !1
            }
            , PICKER_DAY_ES: {
                previousMonth: "Mes anterior", nextMonth: "Siguiente Mes", months: ["Enero", "Febrero", "Mazro", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
            }
            , SELECT_TYPES: {
                STATES: "estados", DEALERS: "concesionarias", MODELS: "modelos", YEARS: "anios", VERSIONS: "versiones"
            }
            , CONTROL_TYPES: {
                INPUT: "input", TEXT: "text", SELECT: "select", RANGE: "range", IMAGE: "image"
            }
            , AUTOCOMPLETE_OPTIONS: {
                componentRestrictions: {
                    country: "mx"
                }
            }
            , MAX_VERSIONS_TO_SHOW:4
        }
        , logic: {
            VALID_HASHES:function() {
                var e=["#modelos", "#propietarios", "#antes-de-comprar", "#prueba-de-manejo"];
                return window.is_financing_active&&e.push("#cotizar"), e
            }
            (), INSTAGRAM_MAX:6, VALID_HASHES_SCROLL:["#accesorios", "#mantenimiento", "#testdrive"]
        }
        , templates: {
            FINANCING_COMPANY_TEMPLATE:"<th>${company_name}</th>", FINANCING_COMPANY_LABEL:'<td class="m-table__label">${company_name}</td>', FINANCING_COMPANY_VALUE:'<td data-column="${company_term}">${company_value}</td>', TESTDRIVE_DEALER_TEMPLATE:'<li class="m-dealers-list__item">                           <a href="#" class="m-dealers-list__item__link js-testdrive-dealer-link" data-dealerid="${dealer_id}" data-dealername="${dealer_name}" data-dealeraddress="${dealer_address}">                             <p class="m-dealers-list__item__title">${dealer_name}</p>                             <p class="m-dealers-list__item__address">${dealer_address}</p>                             <p class="m-dealers-list__item__address">${dealer_state}</p>                           </a>                         </li>', LANDING_TESTDRIVE_DEALER_TEMPLATE:'<li class="m-dealers-list__item">                           <a href="#" class="m-dealers-list__item__link js-landing-testdrive-dealer-link" data-dealerid="${dealer_id}" data-dealername="${dealer_name}" data-dealeraddress="${dealer_address}">                             <p class="m-dealers-list__item__title">${dealer_name}</p>                             <p class="m-dealers-list__item__address">${dealer_address}</p>                             <p class="m-dealers-list__item__address">${dealer_state}</p>                           </a>                         </li>', FAKE_ALERT_TEMPLATE:'<div class="m-fake-alert js-fake-alert js-fake-alert-${fake_id}">             <a href="${fake_link}" class="m-fake-alert__link">               <p class="m-fake-alert__text">${fake_text}</p>             </a>             <div class="m-fake-alert__close js-fake-alert-close"></div>           </div>', INSTAGRAM_TEMPLATE:'<div class="pure-u-1-2 pure-u-md-1-3">             <div class="m-instagram-box">               <a href="${insta_image}" rel="gallery-instagram" data-fancybox-title="${insta_title}" class="m-instagram-box__link js-instagram-link">                 <div class="m-instagram-box__image">                   <div class="m-instagram-box__image__icon">                     <i class="fa fa-expand m-instagram-box__image__icon__expand"></i>                   </div>                   <img src="${insta_image}" alt="${insta_title}" class="m-instagram-box__image__picture">                 </div>                 <div class="m-instagram-box__info">                   <p class="m-instagram-box__info__title">${insta_account}</p>                   <p class="m-instagram-box__info__text">${insta_title}</p>                 </div>               </a>             </div>           </div>', CONCESSIONAIRE_ITEM_TEMPLATE:'<li class="m-concessionaires__list-item js-concessionaire-item" data-identifier="${identifier}">           <i class="fa fa-angle-right m-concessionaires__list-item-arrow"></i>           <div class="pure-g">             <div class="pure-u-md-2-5 pure-u-1-1">               <div class="m-concessionaires__list-item-image">                 <img src="${thumbnail}" title="${name}">               </div>             </div>             <div class="pure-u-md-3-5 pure-u-1-1">               <div class="m-concessionaires__list-item-address">                 <h3 class="m-concessionaires__list-item-address__title">                   <span>${name}</span>                 </h3>                 <address>                   <span class="address">${address}</span><br>                   <span class="address">${state_name}</span><br>                   <span class="phone">${phone}</span>                 </address>               </div>             </div>           </div>         </li>', SPECIAL_OFFERS_NEAREST_ITEM_TEMPLATE:'<li class="m-dealers-list__item js-concessionaire-item" data-identifier="${identifier}">           <a href="#" class="m-dealers-list__item__link">             <p class="m-dealers-list__item__title">${name}</p>             <p class="m-dealers-list__item__address">${address}</p>             <p class="m-dealers-list__item__address">${state_name}</p>           </a>         </li>', SPECIAL_OFFERS_SELECT_MODEL_TEMPLATE:'<li class="m-special-offer-select-model__item m-special-offer-select-model__item--hover">         <span class="m-special-offer-select-model__name bold">${name}</span>         <img class="m-special-offer-select-model__image fl-r" src="${image}" alt=""/>       </li>'
        }
        , messages: {
            SELECT_STATES: "Estado", SELECT_DELARES: "Concesionaria", SELECT_MODEL: "Modelo", SELECT_YEAR: "Año", SELECT_VERSION: "Versión", SENDING: "Enviando...", GETTING: "Obteniendo...", FIELD_REQUIRED: "Campo requerido", NAME_ERROR: "Verifica tu nombre o apellido", EMAIL_ERROR: "Verifica tu correo", PHONE_ERROR: "Verifica tu teléfono", CONCESSIONAIRES_LOADING: "Cargando concesionarias...", CONCESSIONAIRES_ERRROR: "Ocurrió un error inesperado, lo estamos solucionando.", SPECIAL_OFFERS_NO_CONCESSIONAIRES_FOUND: "Debes ser más precisio con tu búsqueda", ERROR_360: "El 360 no se puede visualizar en dispositivos móviles. Por favor intenta en una computadora de escritorio."
        }
        , concessionaires: {
            map: {
                LAT: 19.42539, LNG: -99.12348, ZOOM: 12, MARKER_ICON: (window.baseURL||"")+"/img/frontend/concessionaires/marker-regular.png", MARKER_ICON_ACTIVE: (window.baseURL||"")+"/img/frontend/concessionaires/marker-active-bg.png", MOBILE_HEIGHT: 350, FILTER_DISTANCE: .1
            }
            , select: {
                PLACEHOLDER: "Selecciona una concesionaria"
            }
        }
        , special_offers: {
            FILTER_DISTANCE: .1
        }
        , analytics: {
            SOURCE_FOOTER: "Newsletter footer"
        }
        , facebook_financing: {
            ID: "6027345961752", VALUE: "3.00", CURRENCY: "MXN"
        }
        , facebook_special_offer: {
            ID: "6038683561952", VALUE: "0.00", CURRENCY: "MXN"
        }
        , facebook_testdrive: {
            ID: "6018816845952", VALUE: "5.00", CURRENCY: "MXN"
        }
        , facebook_testdrive_ciaz: {
            ID: "6035846898952", VALUE: "0.00", CURRENCY: "MXN"
        }
        , twitter_testdrive: {
            CIAZ: {
                PID: "l5h3p", AMMOUNT: "0", QUANTITY: "0"
            }
        }
        , twitter_special_offers: {
            PID: "nu81r", AMMOUNT: "0", QUANTITY: "0"
        }
        , accounts: {
            INSTAGRAM_ID: "26745515", INSTAGRAM_TOKEN: "26745515.1a4d736.0f8e5e0446e34e429ec328b6a929db9a"
        }
    }
    ;
    return e
}

);
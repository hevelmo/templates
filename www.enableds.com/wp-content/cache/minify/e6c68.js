jQuery(function(a){return"undefined"!=typeof wc_add_to_cart_params&&void a(document).on("click",".add_to_cart_button",function(){var b=a(this);if(b.is(".ajax_add_to_cart")){if(!b.attr("data-product_id"))return!0;b.removeClass("added"),b.addClass("loading");var c={};return a.each(b.data(),function(a,b){c[a]=b}),a(document.body).trigger("adding_to_cart",[b,c]),a.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),c,function(c){if(c){var d=window.location.toString();if(d=d.replace("add-to-cart","added-to-cart"),c.error&&c.product_url)return void(window.location=c.product_url);if("yes"===wc_add_to_cart_params.cart_redirect_after_add)return void(window.location=wc_add_to_cart_params.cart_url);b.removeClass("loading");var e=c.fragments,f=c.cart_hash;e&&a.each(e,function(b){a(b).addClass("updating")}),a(".shop_table.cart, .updating, .cart_totals").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}}),b.addClass("added"),wc_add_to_cart_params.is_cart||0!==b.parent().find(".added_to_cart").length||b.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),e&&a.each(e,function(b,c){a(b).replaceWith(c)}),a(".widget_shopping_cart, .updating").stop(!0).css("opacity","1").unblock(),a(".shop_table.cart").load(d+" .shop_table.cart:eq(0) > *",function(){a(".shop_table.cart").stop(!0).css("opacity","1").unblock(),a(document.body).trigger("cart_page_refreshed")}),a(".cart_totals").load(d+" .cart_totals:eq(0) > *",function(){a(".cart_totals").stop(!0).css("opacity","1").unblock()}),a(document.body).trigger("added_to_cart",[e,f,b])}}),!1}return!0})});;window.jQuery(document).ready(function($){$('body').on('adding_to_cart',function(event,$button,data){$button&&$button.hasClass('vc_gitem-link')&&$button.addClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').addClass('vc-woocommerce-add-to-cart-loading').append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>'));}).on('added_to_cart',function(event,fragments,cart_hash,$button){if('undefined'===typeof($button)){$button=$('.vc-gitem-add-to-cart-loading-btn');}
$button&&$button.hasClass('vc_gitem-link')&&$button.removeClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').removeClass('vc-woocommerce-add-to-cart-loading').find('.vc_wc-load-add-to-loader-wrapper').remove();});});;!function(e){"use strict";var t="uncodeAI",i=";path=",a=document,n=e.innerWidth,r=screen.width,o=screen.height,c={},s,d=!1,l=!1,u=navigator.cookieEnabled,h=function(){for(var e=0,t=a.cookie.split(";"),i=/^\suncodeAI\.([^=]+)=(.*?)\s*$/,n={},r;e<t.length;++e)(r=t[e].match(i))&&(n[r[1]]=r[2]);return n},g=function(e,t){e=Math.max(parseFloat(e||1,10),.01);var i=a.documentElement,r=function(){var e=a.createElement("div"),t={width:"1px",height:"1px",display:"inline-block"};for(var i in t)e.style[i]=t[i];return e},o=a.createElement("div"),c=o.appendChild(r());o.appendChild(r()),i.appendChild(o);for(var s=o.clientHeight,d=Math.floor(n/s),l=d/2,u=0,h=[d];u++<1e3&&(Math.abs(l)>e||o.clientHeight>s);)d+=l,c.style.width=d+"em",l/=(o.clientHeight>s?1:-1)*(l>0?-2:2),h.push(d);return i.removeChild(o),d},p=function(e,t){for(var i=0,a=(e||"").split(","),n=/(\d+(?:\.\d+)?)(px)?/i,r=[],o;i<a.length;++i)(o=a[i].match(n))&&r.push(parseFloat(o[1],10));return r.sort(function(e,t){return e-t})},m=function(){return"devicePixelRatio"in e?e.devicePixelRatio:"deviceXDPI"in e&&"logicalXDPI"in e?e.deviceXDPI/e.logicalXDPI:1},v=function(e,t){return t*Math.round(10*e/t)/10};u&&(c=h()),void 0!==c.images&&(d=!0);for(var f=0,b=a.getElementsByTagName("script");f<b.length;++f)if(b[f].id==t){var k=m(),x="2880",A="2880";if(i+=b[f].getAttribute("data-home"),"true"==b[f].getAttribute("data-async")&&(u=!1),u&&(a.cookie=t+".screen="+r+i),e.uncodeScreen=r,!b[f].getAttribute("data-disable-images")){var I=p(b[f].getAttribute("data-breakpoints-images")),M=Math.max(r,o),P=null;do{if(M>(P=I.pop()))break;x=P,k>1&&(A=P*k)}while(I.length)}if(k>1?(u&&(a.cookie=t+".images="+A+i),e.uncodeImages=A):(u&&(a.cookie=t+".images="+x+i),e.uncodeImages=x),u){if(c=h(),s=c.css||"-",!("css"in c&&c.css&&"-"!=c.css||b[f].getAttribute("data-disable-css"))){var y=n/g(parseFloat(b[f].getAttribute("data-em-precision")||.5,10)/100);s=r+"x"+o+"@"+Math.round(10*y)/10}a.cookie=t+".css="+s+i}break}}(this);
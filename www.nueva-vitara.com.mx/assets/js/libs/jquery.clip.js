/**
 * @author alexander.farkas
 * @version 1.0
 */


(function($){
	var calcClipAuto = [
		function(){return 0;},
		function(elem){return $(elem).outerWidth();},
		function(elem){return $(elem).outerHeight();},
		function(elem){return 0;}
	],
	calcNumClip = function(prop, elem) {
		return ((/em/.test(prop))) ? 
			(parseFloat($.css(elem, 'fontSize'), 10) || 1) * (parseFloat(prop, 10) || 0) :
			(parseInt(prop, 10) || 0);
	};
	
	var calcClip = function(css, fx, isEnd) {
		var ret = [];
		if(css === 'auto') {
			css = 'rect(auto auto auto auto)';
		}
		css = css.replace(/rect\(|\)/g, '').split(/,\s*|\s/);
		if(isEnd) {
			fx.endClipStyle = 'rect('+ css.join(' ') +')';
		}
		for(var i = 0; i < css.length; i++) {
			ret[i] = (css[i] !== 'auto') ? 
			calcNumClip(css[i], fx.elem) : 
			calcClipAuto[i](fx.elem);
		}
	
		return ret;
	};
	
	jQuery.fx.step.clip = function(fx) {
		if(!fx.clipInit) {
			fx.start = calcClip($.css(fx.elem, 'clip'), fx);
			fx.end = calcClip(fx.end, fx, true);
			fx.elmStyle = fx.elem.style;
			fx.clipInit = true;
		}
		
		fx.elmStyle.clip = 'rect('+ ( fx.pos * (fx.end[0] - fx.start[0]) + fx.start[0] ) +'px '+ (fx.pos * (fx.end[1] - fx.start[1]) + fx.start[1]) +'px '+ (fx.pos * (fx.end[2] - fx.start[2]) + fx.start[2]) +'px '+ (fx.pos * (fx.end[3] - fx.start[3]) + fx.start[3]) +'px)';
		
		if(fx.pos === 1 && fx.endClipStyle) {
			//fx.elmStyle.clip = fx.endClipStyle;
		}
	};
})(jQuery);
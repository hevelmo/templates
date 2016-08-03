define([], function() {
    var e = {};
    return e.loadCss = function(e) {
        var t = document.createElement("link");
        t.type = "text/css", t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
    }, e.requireQueue = function(e, t) {
        function n(e, r) {
            e.length ? require([e.shift()], function(t) {
                r.push(t), n(e, r)
            }) : t.apply(null, r)
        }
        n(e, [])
    }, e.isMobile = function() {
        return !!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, e.template = function(e, t) {
        var n = function(e) {
            return t[e.replace(/\$|\{|\}/g, "")]
        };
        return e.replace(/\$\{.*?\}/g, n)
    }, e.trackConversionEvent = function(e, t, n) {
        var r = {};
        r.value = e, r.currency = t, _fbq.push(["track", n, r])
    }, e.trackTwitterConversionEvent = function(e, t, n) {
        twttr.conversion.trackPid(e, {
            tw_sale_amount: t,
            tw_order_quantity: n
        })
    }, e.isIE = function() {
        var e = navigator.userAgent.toLowerCase();
        return -1 != e.indexOf("msie") ? parseInt(e.split("msie")[1]) : !1
    }, e.getParameter = function(e) {
        for (var t = {}, n = [], r = location.search.substr(1).split("&"), i = 0, o = r.length; o > i; i++) n = r[i].split("="), "" !== n[0] && n[1] && (t[n[0]] = decodeURIComponent(n[1]));
        return e ? t[e] : t
    }, e
});
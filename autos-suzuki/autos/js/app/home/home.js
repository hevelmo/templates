define(["jquery", "slick", "fancybox", "fancybox-thumbs", "fancybox-media", "app/modules/config", "app/modules/utils", "app/ui/ui", "app/services/services"], function(i, e, n, s, t, a, o, l, c) {
    var u = null,
        p = null,
        r = null,
        d = null,
        h = null,
        m = null,
        f = null,
        g = null,
        _ = null,
        T = null,
        v = function() {
            r.resize(function() {
                l.isResponsive() ? d.hasClass("slick-initialized") || A() : (d.hasClass("slick-initialized") && d.slick("unslick"), E())
            }), T.bind("click", function(e) {
                e.preventDefault(), null == p || i(this).hasClass("m-button--disabled") || (l.setButtonLoadingStyle(i(this), a.messages.GETTING, !0), c.instagramService(a.logic.INSTAGRAM_MAX, p, I))
            })
        },
        A = function() {
            d.slick({
                accessibility: !1,
                infinite: !1,
                slide: ".js-home-showcase-car",
                speed: a.timers.DEFAULT_TIMER
            })
        },
        E = function() {
            var e = m.length,
                n = Math.round(e / 2),
                s = 100 / e,
                t = 0;
            a.ui.CURVE_PADING * n;
            m.each(function(e) {
                n > e ? t++ : t--, i(this).css({
                    width: s + "%",
                    left: s * e + "%",
                    zIndex: t
                }), i(this).find("img").css({
                    left: a.ui.LINEUP_LEFTS[e] + "px",
                    bottom: a.ui.LINEUP_BOTTOMS[e] + "px"
                }), i(this).find("span").css({
                    paddingLeft: a.ui.LINEUP_PADDING_LEFTS[e] + "px",
                    marginTop: a.ui.LINEUP_MARGIN_TOPS[e] + "px"
                })
            }), h.fadeTo(a.timers.LINEUP_FADE, 1)
        },
        I = function(e) {
            var n = [];
            return e.data ? (i.each(e.data, function(i, e) {
                var s = e.caption.from.username,
                    t = e.caption.text,
                    l = e.images.standard_resolution.url;
                n.push(o.template(a.templates.INSTAGRAM_TEMPLATE, {
                    insta_account: s,
                    insta_title: t,
                    insta_image: l
                }))
            }), _.append(n), p = e.pagination.next_max_id, void l.removeButtonLoadingStyle(T, !0)) : (T.hide(), !1)
        },
        x = function(i) {
            var e = "; " + document.cookie,
                n = e.split("; " + i + "=");
            return 2 == n.length ? n.pop().split(";").shift() : void 0
        },
        y = function(i, e, n) {
            var s, t;
            n ? (s = new Date, s.setTime(s.getTime() + 24 * n * 60 * 60 * 1e3), t = "; expires=" + s.toGMTString()) : t = "", document.cookie = i + "=" + e + t + "; path=/"
        },
        M = function() {
            var i = void 0 == x("showpop");
            _$popup.length && i && (_$popup.fancybox({
                padding: 0,
                maxWidth: 800,
                overlayShow: !0,
                helpers: {
                    media: {}
                },
                afterClose: function() {
                    _runAnalyticsOut()
                }
            }), setTimeout(function() {
                _$popup.trigger("click"), _runAnalytics(), y("showpop", !1, 1)
            }, 500))
        };
    return {
        init: function() {
            u = this, r = i(window), d = i(".js-home-showcase-cars"), h = i(".js-showcase-cars-container"), m = i(".js-home-showcase-car"), f = i(".js-generic-slider-home"), g = i(".js-instagram-link"), _ = i(".js-instagram-grid"), T = i(".js-load-more"), _$popup = i(".js-popup"), i(document).ready(function() {
                M()
            }), l.isResponsive() ? A() : E(), f.slick({
                accessibility: !1,
                dots: !0,
                slide: ".js-generic-slide-home",
                speed: a.timers.DEFAULT_TIMER
            }), c.instagramService(a.logic.INSTAGRAM_MAX, null, I), g.fancybox({
                padding: 0,
                helpers: {
                    thumbs: {
                        width: a.ui.FANCYBOX_THUMB_WIDTH,
                        height: a.ui.FANCYBOX_THUMB_HEIGHT
                    }
                }
            }), v()
        }
    }
});
define(["jquery", "select2", "simpleSlider", "moment", "pikaday", "accounting", "app/modules/config", "app/modules/utils", "app/analytics/analytics", "app/validations/validations", "app/services/services"], function(e, n, a, t, i, l, c, o, s, r, u) {
    var d = null,
        g = null,
        p = null,
        f = 10,
        T = {
            state: "",
            state_id: "",
            state_key: "",
            dealer: "",
            dealer_id: "",
            model: "",
            version: "",
            version_id: "",
            year: "",
            price: 0,
            deposit: 10,
            credit: 0,
            client_name: "",
            client_lastname: "",
            client_phone: "",
            client_email: "",
            client_want_drive: 0,
            client_want_drive_date: "",
            client_want_news: 0
        },
        m = null,
        _ = null,
        E = null,
        S = null,
        h = null,
        v = null,
        y = null,
        D = null,
        b = null,
        C = null,
        O = null,
        F = null,
        L = null,
        P = null,
        Y = null,
        N = null,
        j = null,
        w = null,
        V = null,
        k = null,
        R = null,
        M = null,
        I = null,
        A = null,
        B = null,
        x = null,
        U = null,
        X = null,
        G = null,
        z = null,
        K = null,
        q = null,
        $ = null,
        H = null,
        J = function() {
            N.bind("click", function(n) {
                n.preventDefault(), e(this).hasClass("m-button--disabled") || (S.hide(), d.putDataToElement(j, c.ui.CONTROL_TYPES.TEXT, T.model), d.putDataToElement(w, c.ui.CONTROL_TYPES.TEXT, T.version), d.putDataToElement(V, c.ui.CONTROL_TYPES.TEXT, T.year), d.putDataToElement(k, c.ui.CONTROL_TYPES.TEXT, d.formatMoney(T.price)), d.putDataToElement(R, c.ui.CONTROL_TYPES.TEXT, T.deposit.toString() + "%"), d.putDataToElement(M, c.ui.CONTROL_TYPES.TEXT, d.formatMoney(d.getCredit(T.price, T.deposit))), h.fadeIn(), e("body").append('<img style="display:none;" src="https://tags.w55c.net/rs?id=d25095e599574bf1b6a042d883847c2a&t=cart" />'), o.isMobile() && m.animate({
                    scrollTop: 0
                }, c.timers.SCROLL_TO))
            }), _$financing_to_step_one.bind("click", function(e) {
                e.preventDefault(), h.hide(), S.fadeIn()
            }), A.bind("click", function(e) {
                e.preventDefault(), v.hide(), h.fadeIn()
            }), q.change(function() {
                q.is(":checked") ? (z.show(), r.toggleItemForVaidate(I, K, !0)) : (z.hide(), r.toggleItemForVaidate(I, K, !1))
            }), B.bind("click", function(n) {
                if (n.preventDefault(), !e(this).hasClass("m-button--disabled") && r.validateFinancingStepTwo()) {
                    d.setFinancingDataValue("client_name", x.val()), d.setFinancingDataValue("client_lastname", U.val()), d.setFinancingDataValue("client_phone", X.val()), d.setFinancingDataValue("client_email", G.val()), q.is(":checked") ? d.setFinancingDataValue("client_want_drive", 1) : d.setFinancingDataValue("client_want_drive", 0), d.setFinancingDataValue("client_want_drive_date", K.val()), $.is(":checked") ? d.setFinancingDataValue("client_want_news", 1) : d.setFinancingDataValue("client_want_news", 0);
                    var a = {
                        car_model_bnp_identifier: T.model,
                        car_version_bnp_identifier: T.version_id,
                        year: T.year,
                        state_bnp_identifier: T.state_id,
                        concessionaire_id: T.dealer_id,
                        engagement: T.deposit,
                        car_version_bnp_name: T.version,
                        car_price: T.price,
                        name: T.client_name,
                        lastname: T.client_lastname,
                        phone: T.client_phone,
                        email: T.client_email,
                        source: "Financiamiento",
                        drive: T.client_want_drive,
                        date: T.client_want_drive_date,
                        newsletter: T.client_want_news
                    };
                    u.financingService(a, d.showFinancingTable, d.financingError), s.sendCotizacionModel(T.model, T.price, T.dealer, q.is(":checked")), g.setButtonLoadingStyle(e(this), c.messages.SENDING, !1)
                }
            })
        };
    return {
        init: function() {
            d = this, g = require("app/ui/ui"), m = e("html, body"), _ = e(".js-financing-bnp-loading"), E = e(".js-financing-bnp-error"), S = e(".js-financing-step-1"), h = e(".js-financing-step-2"), v = e(".js-financing-step-3"), y = e(".js-select-financing-states"), D = e(".js-select-financing-dealers"), b = e(".js-select-financing-model"), C = e(".js-select-financing-year"), O = e(".js-select-financing-version"), F = e(".js-financing-price-formated"), L = e(".js-range-financing"), P = e(".js-financing-price-deposit"), Y = e(".js-financing-percent"), N = e(".js-financing-do-step-one"), _$financing_to_step_one = e(".js-financing-back-to-one"), j = e(".js-financing-model-label"), w = e(".js-financing-version-label"), V = e(".js-financing-year-label"), k = e(".js-financing-price-label"), R = e(".js-financing-deposit-label"), M = e(".js-financing-credit-label"), I = e(".js-financing-form-step-2"), x = e(".js-financing-name"), U = e(".js-financing-lastname"), X = e(".js-financing-phone"), G = e(".js-financing-email"), z = e(".js-financing-date-fieldset"), K = e(".js-financing-date"), q = e(".js-financing-want-drive"), $ = e(".js-financing-want-news"), A = e(".js-financing-back-to-two"), B = e(".js-financing-submit"), H = e(".js-financing-table"), L.bind("slider:changed", function(e, n) {
                f = n.value, d.putDataToElement(P, c.ui.CONTROL_TYPES.INPUT, d.formatMoney(d.getEngagement(T.price, f))), d.putDataToElement(Y, c.ui.CONTROL_TYPES.TEXT, f.toString()), d.setFinancingDataValue("deposit", f), d.setFinancingDataValue("credit", d.getEngagement(T.price, f))
            }), y.on("change", function(n) {
                var a = e(this).find("option:selected");
                u.getDealersByState(a.data("key"), d.putDataToSelect, !0, D), N.addClass("m-button--disabled"), d.setFinancingDataValue("state", a.text()), d.setFinancingDataValue("state_id", a.val()), d.setFinancingDataValue("state_key", a.data("key"))
            }), D.on("change", function(n) {
                var a = e(this).find("option:selected");
                d.setFinancingDataValue("dealer_id", a.val()), d.setFinancingDataValue("dealer", a.text()), null != e(this).val() && e(this).val().length > 0 ? N.removeClass("m-button--disabled") : N.addClass("m-button--disabled")
            }), b.on("change", function(n) {
                var a = e(this).find("option:selected"),
                    t = d.getYearsByModel(a.val());
                d.putDataToSelect(C, t, c.messages.SELECT_YEAR, c.ui.SELECT_TYPES.YEARS), C.trigger("change"), d.setFinancingDataValue("model", a.text())
            }), C.on("change", function(n) {
                var a = e(this).find("option:selected"),
                    t = d.getVersionsByYearModel(b.find("option:selected").val(), a.val());
                d.putDataToSelect(O, t, c.messages.SELECT_VERSION, c.ui.SELECT_TYPES.VERSIONS), O.trigger("change"), d.setFinancingDataValue("year", a.text())
            }), O.on("change", function(n) {
                var a = e(this).find("option:selected");
                d.putDataToElement(F, c.ui.CONTROL_TYPES.INPUT, d.formatMoney(a.data("price"))), d.putDataToElement(P, c.ui.CONTROL_TYPES.INPUT, d.formatMoney(a.data("price"))), d.putDataToElement(P, c.ui.CONTROL_TYPES.INPUT, d.formatMoney(d.getEngagement(a.data("price"), f))), d.setFinancingDataValue("version", a.text()), d.setFinancingDataValue("version_id", a.val()), d.setFinancingDataValue("price", a.data("price")), d.setFinancingDataValue("credit", d.getEngagement(a.data("price"), f))
            }), J()
        },
        setFinancingDataValue: function(e, n) {
            T[e] = n
        },
        getFinancingDataValue: function(e) {
            return T[e]
        },
        getFinancingData: function() {
            E.hide(), _.show(), u.getStates(d.putDataToSelect, !0, y), u.getBnpCarsData(d.initFinancingForm, d.blockFinancingForm)
        },
        initFinancingForm: function(e) {
            _.hide(), E.hide(), h.hide(), v.hide(), S.show(), p = e;
            var n = d.getModelsFromBnpObject(p);
            d.putDataToSelect(b, n, c.messages.SELECT_MODEL, c.ui.SELECT_TYPES.MODELS), b.trigger("change")
        },
        showFinancingTable: function(e) {
            var n = [],
                a = [];
            n.push("<th></th>");
            for (company in e) {
                var t = "";
                t += "<tr>", t += o.template(c.templates.FINANCING_COMPANY_LABEL, {
                    company_name: company
                });
                for (var i = [], l = 0; l < e[company][0].Opciones.length; l++) i.push(o.template(c.templates.FINANCING_COMPANY_TEMPLATE, {
                    company_name: e[company][0].Opciones[l].Plazo
                })), t += o.template(c.templates.FINANCING_COMPANY_VALUE, {
                    company_term: e[company][0].Opciones[l].Plazo,
                    company_value: d.formatMoney(parseFloat(e[company][0].Opciones[l].Importe))
                });
                n.push(i), t += "</tr>", a.push(t)
            }
            H.find("thead tr").html(n[0] + n[1]), H.find("tbody").html(a), g.removeButtonLoadingStyle(B, !1), h.hide(), v.show(), o.trackConversionEvent(c.facebook_financing.VALUE, c.facebook_financing.CURRENCY, c.facebook_financing.ID), o.isMobile() && m.animate({
                scrollTop: 0
            }, c.timers.SCROLL_TO)
        },
        financingError: function() {
            v.hide(), h.show(), g.removeButtonLoadingStyle(B, !1)
        },
        getModelsFromBnpObject: function(e) {
            var n = [];
            for (model in e[(new Date).getFullYear().toString()]) n.push(model);
            return n
        },
        getYearsByModel: function(e) {
            var n = [];
            for (year in p) p[year].hasOwnProperty(e) && n.push(year);
            return n.reverse()
        },
        getVersionsByYearModel: function(e, n) {
            return p[n][e]
        },
        getEngagement: function(e, n) {
            return e * n * .01
        },
        getCredit: function(e, n) {
            return e * (100 - n) * .01
        },
        putDataToSelect: function(e, n, a, t) {
            var i = d.formatToSelect(n, t);
            switch (e.next().hasClass("select2") && (t === c.ui.SELECT_TYPES.STATES ? e.find("option:gt(0)").remove() : e.find("option").remove(), e.select2("destroy")), e.select2({
                placeholder: a,
                data: i
            }), t) {
                case c.ui.SELECT_TYPES.STATES:
                    d.addKeyToSelect(e, n, "key", "key", c.ui.SELECT_TYPES.STATES);
                    break;
                case c.ui.SELECT_TYPES.VERSIONS:
                    d.addKeyToSelect(e, n, "price", "precio", c.ui.SELECT_TYPES.VERSIONS)
            }
            e.trigger("change")
        },
        formatToSelect: function(e, n) {
            var a = [],
                t = "",
                i = "";
            switch (n) {
                case c.ui.SELECT_TYPES.STATES:
                    t = "bnp_identifier", i = "name";
                    break;
                case c.ui.SELECT_TYPES.DEALERS:
                    t = "id", i = "name";
                    break;
                case c.ui.SELECT_TYPES.VERSIONS:
                    t = "id", i = "version"
            }
            if (e)
                for (var l = 0; l < e.length; l++) {
                    if (n != c.ui.SELECT_TYPES.MODELS && n != c.ui.SELECT_TYPES.YEARS) var o = {
                        id: e[l][t],
                        text: e[l][i]
                    };
                    else var o = {
                        id: e[l],
                        text: e[l]
                    };
                    a.push(o)
                }
            return a
        },
        addKeyToSelect: function(n, a, t, i, l) {
            var o = -1,
                s = 0;
            l === c.ui.SELECT_TYPES.STATES && (o = 0, s = 1), n.find("option").each(function(n) {
                n > o && e(this).attr("data-" + t, a[n - s][i])
            })
        },
        blockFinancingForm: function() {
            _.hide(), S.hide(), E.show()
        },
        formatMoney: function(e) {
            return l.formatMoney(e)
        },
        putDataToElement: function(e, n, a) {
            switch (n) {
                case c.ui.CONTROL_TYPES.INPUT:
                    e.val(a);
                    break;
                case c.ui.CONTROL_TYPES.TEXT:
                    e.text(a)
            }
        }
    }
});
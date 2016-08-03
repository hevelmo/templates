define(["jquery", "parsley", "app/modules/config"], function(e, t, a) {
    var r = null,
        n = {},
        s = null,
        o = null,
        i = null,
        l = null,
        f = function(t) {
            var r = e(t.$element[0]).parent().find(".js-error");
            if ("boolean" != typeof t.validationResult) {
                if ("boolean" != typeof t.validationResult[0].assert.requirements) switch (console.log(t.validationResult[0].assert.requirements), t.validationResult[0].assert.requirements) {
                    case "^[a-zA-Z ñáéíóúÁÉÍÓÚ]+$":
                        r.text(a.messages.NAME_ERROR);
                        break;
                    case "email":
                        r.text(a.messages.EMAIL_ERROR);
                        break;
                    case 10:
                        r.text(a.messages.PHONE_ERROR)
                } else r.text(a.messages.FIELD_REQUIRED);
                r.show()
            } else r.hide()
        },
        c = function(t) {
            t.length > 0 && (t.parsley().on("form:success", function() {
                t.find(".js-error").hide()
            }), t.parsley().on("form:error", function() {
                e.each(this.fields, function(e) {
                    f(this)
                })
            }))
        };
    return {
        init: function() {
            r = this, s = e("#form-financing-step-2"), o = e("#testdrive-stetp-3-form"), l = e("#form-footer-newsletter"), i = e("#landing-testdrive-step-2-form"), _$form_contact = e("#form-contact"), _$form_no_special_offers = e("#no-special-offers-form"), c(s), c(o), c(l), c(i), c(_$form_contact), c(_$form_no_special_offers)
        },
        validateFinancingStepTwo: function() {
            return s.parsley().validate()
        },
        validateSendTestdrive: function() {
            return o.parsley().validate()
        },
        validateSendLandingTestdrive: function() {
            return i.parsley().validate()
        },
        validateFooterNewsletter: function() {
            return l.parsley().validate()
        },
        validateContactForm: function() {
            return _$form_contact.parsley().validate()
        },
        toggleItemForVaidate: function(e, t, a) {
            e.parsley().destroy(), t.attr("data-parsley-required", a), e.parsley(), c(e)
        },
        validate: function(e, t) {
            var a = e.is("form") ? e : e.closest("form");
            return 0 === a.length ? !1 : t || (t = a.attr("id")) ? (n[t] || (c(a), n[t] = a), a.parsley().validate()) : !1
        }
    }
});
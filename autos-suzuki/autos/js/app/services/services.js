define(["jquery", "app/modules/config"], function(e, n) {
    var c=null;
    return {
        init:function() {
            c=this
        }
        , getStates:function(c, o, a) {
            e.ajax( {
                method:"GET", url:window.baseAPIURL+"/states", dataType:"json", cache:!0, success:function(e) {
                    o?c(a, e.content.states, n.messages.SELECT_STATES, n.ui.SELECT_TYPES.STATES): c(e.content.states)
                }
                , error:function(e) {
                    console.log(e)
                }
            }
            )
        }
        , getDealers:function(n) {
            e.ajax( {
                method:"GET", url:window.baseAPIURL+"/concessionaires", dataType:"json", cache:!0, success:function(e) {
                    n(e.content.concessionaires)
                }
                , error:function(e) {
                    console.log(e)
                }
            }
            )
        }
        , getDealersByState:function(c, o, a, t) {
            e.ajax( {
                method:"GET", url:window.baseAPIURL+"/states/"+c+"/concessionaires", dataType:"json", cache:!0, success:function(e) {
                    a?o(t, e.content.concessionaires, n.messages.SELECT_DELARES, n.ui.SELECT_TYPES.DEALERS): o(e.content.concessionaires)
                }
                , error:function(e) {
                    console.log(e)
                }
            }
            )
        }
        , getBnpCarsData:function(c, o) {
            e.ajax( {
                method:"GET", url:"https://cotiza.cotizadorbnpparibas-pf.com.mx/webVehiculos/bnp/vehiculos/consult?marca=SUZUKI&serviceType=2", dataType:"jsonp", cache:!1, timeout:n.timers.SERVICES_TIMEOUT, success:function(n) {
                    e.isEmptyObject(n)?o(): c(n)
                }
                , error:function(e) {
                    console.log(e), o()
                }
            }
            )
        }
        , financingService:function(n, c, o) {
            e.ajax( {
                method:"POST", url:window.baseAPIURL+"/financing", data:n, dataType:"json", cache:!1, success:function(n) {
                    "OK"===n.status?(e("body").append('<img style="display:none;" src="https://tags.w55c.net/rs?id=feb04cbf322f4060b45368e59a0a16c3&t=checkout&tx='+n.id+'&price=0"/>'), c(n.content.bnp_result)): o()
                }
                , error:function(e) {
                    console.log(e), o()
                }
            }
            )
        }
        , testdriveService:function(n, c, o) {
            e.ajax( {
                method:"POST", url:window.baseAPIURL+"/testdrive", data:n, dataType:"json", cache:!1, success:function(e) {
                    c(e)
                }
                , error:function(e) {
                    console.log(e), o()
                }
            }
            )
        }
        , galleryService:function(n, c, o, a) {
            e.ajax( {
                method:"GET", url:window.baseAPIURL+"/queries/models/"+c+"/"+n+"/"+o+"/pictures", dataType:"json", cache:!0, success:function(e) {
                    a(n, e.content)
                }
                , error:function(e) {
                    console.log(e)
                }
            }
            )
        }
        , newsletterService:function(n, c, o, a) {
            var t= {
                name: n, email: c, source: o
            }
            ;
            e.ajax( {
                method:"POST", url:window.baseAPIURL+"/newsletter", data:t, dataType:"json", cache:!1, success:function(e) {
                    a(e)
                }
                , error:function(e) {
                    console.log(e)
                }
            }
            )
        }
        , contactService:function(n, c, o, a, t, s, i, r, u, d, l, f, T, m) {
            var p= {
                car_model_id: n, city: c, delegation: o, contact_department_id: a, email: t, message: s, name: i, lastname: r, newsletter: u, phone: l, concessionaire_id: d, source: f
            }
            ;
            e.ajax( {
                method:"POST", url:window.baseAPIURL+"/contact", data:p, dataType:"json", cache:!1, success:function(e) {
                    T()
                }
                , error:function(e) {
                    m()
                }
            }
            )
        }
        , quotesService:function(n) {
            e.ajax( {
                method:"GET", url:window.baseURL+"/quotes/random", dataType:"json", cache:!1, success:function(e) {
                    n(e.quote)
                }
                , error:function(e) {
                    console.log(e)
                }
            }
            )
        }
        , instagramService:function(c, o, a) {
            var t="https://api.instagram.com/v1/users/"+n.accounts.INSTAGRAM_ID+"/media/recent/?access_token="+n.accounts.INSTAGRAM_TOKEN+"&count="+c+"&max_id="+o;
            null===o&&(t="https://api.instagram.com/v1/users/"+n.accounts.INSTAGRAM_ID+"/media/recent/?access_token="+n.accounts.INSTAGRAM_TOKEN+"&count="+c), e.ajax( {
                method:"GET", url:t, dataType:"jsonp", cache:!1, success:function(e) {
                    a(e)
                }
                , error:function(e) {
                    console.log(e)
                }
            }
            )
        }
        , concessionairesService:function(n) {
            return e.ajax( {
                method:"GET", data:n|| {}
                , url: window.baseURL+"/concesionarias/all", dataType: "json", cache: !1
            }
            )
        }
        , specialOfferService:function(n, c) {
            return e.ajax( {
                method:"GET", data:c|| {}
                , url: window.baseURL+"/promociones/"+n+".json", dataType: "json", cache: !1
            }
            )
        }
        , saveSpecialOfferService:function(n) {
            return e.ajax( {
                method:"POST", data:n|| {}
                , url: window.baseAPIURL+"/special-offer", dataType: "json", cache: !1
            }
            )
        }
    }
}

);
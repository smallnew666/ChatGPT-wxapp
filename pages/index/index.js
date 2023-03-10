(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"], {
    "15a1": function(t, s, e) {
        "use strict";
        e.d(s, "b", (function() {
            return n
        })),
        e.d(s, "c", (function() {
            return a
        })),
        e.d(s, "a", (function() {
            return i
        }));
        var i = {
            uniPopup: function() {
                return e.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(e.bind(null, "a83a"))
            }
        },
        n = function() {
            var t = this.$createElement;
            this._self._c
        },
        a = []
    },
    1780 : function(t, s, e) {
        "use strict"; (function(t, s) {
            var i = e("4ea4");
            e("cbc9");
            i(e("66fd"));
            var n = i(e("58fe"));
            t.__webpack_require_UNI_MP_PLUGIN__ = e,
            s(n.
        default)
        }).call(this, e("bc2e")["default"], e("543d")["createPage"])
    },
    5345 : function(t, s, e) {},
    "58fe": function(t, s, e) {
        "use strict";
        e.r(s);
        var i = e("15a1"),
        n = e("74b8");
        for (var a in n)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(s, t, (function() {
                return n[t]
            }))
        } (a);
        e("73d6");
        var o = e("f0c5"),
        u = Object(o["a"])(n["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
        s["default"] = u.exports
    },
    "73d6": function(t, s, e) {
        "use strict";
        var i = e("5345"),
        n = e.n(i);
        n.a
    },
    "74b8": function(t, s, e) {
        "use strict";
        e.r(s);
        var i = e("f66b"),
        n = e.n(i);
        for (var a in i)["default"].indexOf(a) < 0 &&
        function(t) {
            e.d(s, t, (function() {
                return i[t]
            }))
        } (a);
        s["default"] = n.a
    },
    f66b: function(t, s, e) {
        "use strict"; (function(t) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }),
            s.
        default = void 0;
            var e = {
                data: function() {
                    return {
                        apiurl: "只需要配置此处url",
                        apisucc: !1,
                        apibut: "需要先进行API配置才能使用",
                        sentext: "先配置api",
                        apiadj: "在此输入你的APIKEY",
                        api: "",
                        msgLoad: !0,
                        anData: {},
                        animationData: {},
                        showTow: !1,
                        msgList: [{
                            my: !1,
                            msg: "你好呀,想问什么就问吧"
                        }],
                        msgContent: "",
                        msg: ""
                    }
                },
                onLoad: function() {
                    var s = this;
                    try {
                        wx.showShareMenu({
                            withShareTicket:true,
                            //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
                            menus:["shareAppMessage","shareTimeline"]
                        }),
                        this.apibut = "连接成功",
                        this.apisucc = !0,
                        this.sentext = "发送",
                        this.msgLoad = !1,
                        this.setsklocal(this.api),
                        value = "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",
                        value && (console.log(value), this.api = value, this.apiset(), this.apibut = "连接成功", this.apisucc = !0, this.sentext = "发送", this.msgLoad = !1, this.setsklocal(this.api))
                    } catch(e) {
                        console.log(e)
                    }
                    t.request({
                        url: this.apiurl,
                        method: "GET",
                        success: function(t) {
                            console.log(t),
                            s.apiadj = t.data
                        }
                    })
                },
                methods: {
                    setsklocal: function(s) {
                        t.setStorage({
                            key: "sk",
                            data: s,
                            success: function(t) {
                                console.log("success", t)
                            }
                        })
                    },
                    clopop: function() {
                        this.$refs.popup.close("center")
                    },
                    openpop: function() {
                        this.$refs.popup.open("center")
                    },
                    apiset: function() {
                        var s = this;
                        this.$refs.popup.close("center"),
                        this.apibut = "api检测中";
                        var e = JSON.stringify({
                            msg: "你好",
                            openaikey: this.api
                        });
                        t.request({
                            url: this.apiurl + "/message",
                            data: e,
                            method: "POST",
                            success: function(t) {
                                console.log("suc", t, t.data.code),
                                200 == t.data.code ? (s.apibut = "连接成功", s.apisucc = !0, s.sentext = "发送", s.msgLoad = !1, s.setsklocal(s.api)) : s.apibut = "连接失败，请检查apikey后重试"
                            }
                        })
                    },
                    sendMsg: function() {
                        var s = this;
                        if ("" == this.msg) return 0;
                        if (1 == this.msgLoad) return this.$u.toast("请先配置api再进行使用"),
                        0;
                        this.sentext = "请求中",
                        this.msgList.push({
                            msg: this.msg,
                            my: !0
                        }),
                        this.msgContent += this.msg,
                        console.log(this.msgContent),
                        this.msgLoad = !0,
                        this.msg = "";
                        var e = JSON.stringify({
                            msg: this.msgContent,
                            openaikey: this.api
                        });
                        t.request({
                            url: this.apiurl + "/message",
                            data: e,
                            method: "POST",
                            success: function(t) {
                                if (200 == t.data.code) {
                                    console.log(e);
                                    var e = t.data.resmsg.choices[0].message.content;
                                    s.msgList.push({
                                        msg: e,
                                        my: !1
                                    }),
                                    s.msgContent += e + "\n",
                                    s.msgLoad = !1,
                                    s.sentext = "发送"
                                } else s.apibut = "连接失败，请检查apikey后重试",
                                s.apisucc = !1
                            }
                        })
                    }
                }
            };
            s.
        default = e
        }).call(this, e("543d")["default"])
    }
},
[["1780", "common/runtime", "common/vendor"]]]);

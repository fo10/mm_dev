/* Galleria Folio Theme 2013-01-08 | http://galleria.io/license/ | (c) Aino */
(function (a) {
    Galleria.addTheme({
        name: "folio",
        author: "Galleria",
        css: "galleria.folio.css",
        defaults: {
            transition: "pulse",
            thumbCrop: "width",
            imageCrop: !1,
            carousel: !1,
            show: !1,
            easing: "galleriaOut",
            fullscreenDoubleTap: !1,
            trueFullscreen: !1,
            _webkitCursor: !1,
            _animate: !0,
            thumbheight_overwrite:148 
        },
        init: function (b) {
            Galleria.requires(1.28, "This version of Folio theme requires Galleria version 1.2.8 or later"), this.addElement("preloader", "loaded", "close")
                .append({
                container: "preloader",
                preloader: "loaded",
                stage: "close"
            });
            var c = this,
                d = this.$("stage"),
                e = this.$("thumbnails"),
                f = this.$("images"),
                g = this.$("info"),
                h = this.$("loader"),
                i = this.$("target"),
                j = 0,
                k = i.width(),
                l = 0,
                m = b.show,
                n = window.location.hash.substr(2),
                o = function (b) {
                    c.$("info")
                        .css({
                        left: Math.max(20, a(window)
                            .width() / 2 - b / 2 + 10),
                        marginBottom: c.getData()
                            .video ? 40 : 0
                    })
                }, p = function (a) {
                    return Math.min.apply(window, a)
                }, q = function (a) {
                    return Math.max.apply(window, a)
                }, r = function (b, c) {
                    c = a.extend({
                        speed: 400,
                        width: 190,
                        onbrick: function () {},
                        onheight: function () {},
                        delay: 0,
                        debug: !1
                    }, c), b = a(b);
                    var d = b.children(),
                        e = b.width(),
                        f = Math.floor(e / c.width),
                        g = [],
                        h, i, j, k, l = {
                            "float": "none",
                            position: "absolute",
                            display: Galleria.SAFARI ? "inline-block" : "block"
                        };
                    if (b.data("colCount") === f) return;
                    b.data("colCount", f);
                    if (!d.length) return;
                    for (h = 0; h < f; h++)
                    g[h] = 0;
                    b.css("position", "relative"), d.css(l)
                        .each(function (b, d) {
                        d = a(d);
                        for (h = f - 1; h > -1; h--)
                        g[h] === p(g) && (i = h);
                        j = {
                            top: g[i],
                            left: c.width * i
                        };
                        if (typeof j.top != "number" || typeof j.left != "number") return;
                        c.speed ? window.setTimeout(function (a, b, c) {
                            // console.log('');

                            return function (d) {
                                Galleria.utils.animate(a, c, {
                                    easing: "galleriaOut",
                                    duration: b.speed,
                                    complete: b.onbrick
                                })
                            }
                        }(d, c, j), b * c.delay) : (d.css(j), c.onbrick.call(d)), d.data("height") || d.data("height", 148), g[i] += 148;//console.log(g[i])
                        //(d, c, j), b * c.delay) : (d.css(j), c.onbrick.call(d)), d.data("height") || d.data("height", d.outerHeight(!0)), g[i] += d.data("height");console.log(d.data("height"))
                    }), k = q(g); console.log('asdf'+q(g))
                    if (k < 0) return;
                    if (typeof k != "number") return;
                    c.speed ? b.animate({
                        height: q(g)
                    }, c.speed, c.onheight) : (b.height(q(g)), c.onheight.call(b))
                };
            this.bind("fullscreen_enter", function (a) {
                this.$("container")
                    .css("height", "100%")
            }), this.bind("fullscreen_exit", function (b) {
                this.getData()
                    .iframe && (a(this._controls.getActive()
                    .container)
                    .find("iframe")
                    .remove(), this.$("container")
                    .removeClass("iframe")), g.hide(), a(c._controls.getActive()
                    .container)
                    .hide(), e.css("left", 0), d.css("left", -1e4)
            }), this.bind("loadstart", function (a) {
                Galleria.TOUCH && this.$("image-nav")
                    .toggle( !! a.galleriaData.iframe)
            }), this.bind("thumbnail", function (f) {
                this.addElement("plus");
                var g = f.thumbTarget,
                    h = this.$("plus")
                        .css({
                        display: "block"
                    })
                        .insertAfter(g),
                    k = a(g)
                        .parent()
                        .data("index", f.index);
                b.showInfo && this.hasInfo(f.index) && h.append("<span>" + this.getData(f.index)
                    .title + "</span>"), l = l || a(g)
                    .parent()
                    .outerWidth(!0), a(g)
                    .css("opacity", 0), k.unbind(b.thumbEventType), Galleria.IE ? h.hide() : h.css("opacity", 0), Galleria.TOUCH ? k.bind("touchstart", function () {
                    h.css("opacity", 1)
                })
                    .bind("touchend", function () {
                    h.hide()
                }) : k.hover(function () {
                    Galleria.IE ? h.show() : h.stop()
                        .css("opacity", 1)
                }, function () {
                    Galleria.IE ? h.hide() : h.stop()
                        .animate({
                        opacity: 0
                    }, 300)
                }), j++, this.$("loaded")
                    .css("width", j / this.getDataLength() * 100 + "%"), j === this.getDataLength() && (this.$("preloader")
                    .fadeOut(100), e.data("colCount", null), r(e, {
                    width: l,
                    speed: b._animate ? 400 : 0,
                    onbrick: function () {
                        var f = this,
                            g = a(f)
                                .find("img");
                        window.setTimeout(function (f) {
                        	console.log(f.attr('src'));
                            return function () {
                                Galleria.utils.animate(f, {
                                    opacity: 1
                                }, {
                                    duration: b.transition_speed
                                }), f.parent()
                                    .unbind("mouseup click")
                                    .bind(Galleria.TOUCH ? "mouseup" : "click", function () {
                                    e.css("left", -1e4), d.css("left", 0);
                                    var b = a(this)
                                        .data("index");
                                    c.enterFullscreen(function () {
                                        c.show(b)
                                    })
                                })
                            }
                        }(g), b._animate ? g.parent()
                            .data("index") * 100 : 0)
                    },
                    onheight: function () {
                        i.height(e.height());
                    }
                }))
            }), this.bind("loadstart", function (a) {
                a.cached || h.show()
            }), this.bind("data", function () {
                j = 0
            }), this.bind("loadfinish", function (c) {
                h.hide(), g.hide(), this.hasInfo() && b.showInfo && this.isFullscreen() && g.fadeIn(b.transition ? b.transitionSpeed : 0), o(a(c.imageTarget)
                    .width())
            }), !Galleria.TOUCH && !b._webkitCursor && (this.addIdleState(this.get("image-nav-left"), {
                left: -100
            }), this.addIdleState(this.get("image-nav-right"), {
                right: -100
            }), this.addIdleState(this.get("info"), {
                opacity: 0
            })), this.$("container")
                .css({
                width: b.width,
                height: "auto"
            }), b._webkitCursor && Galleria.WEBKIT && !Galleria.TOUCH && this.$("image-nav-right,image-nav-left")
                .addClass("cur"), Galleria.TOUCH && this.setOptions({
                transition: "fadeslide",
                initialTransition: !1
            }), this.$("close")
                .click(function () {
                c.exitFullscreen()
            }), Galleria.History && n && (d.css("left", 0), e.css("left", -1e4), this.$("preloader")
                .hide(), this.enterFullscreen(function () {
                this.show(parseInt(n, 10))
            })), a(window)
                .resize(function () {
                if (c.isFullscreen()) {
                    c.getActiveImage() && o(c.getActiveImage()
                        .width);
                    return
                }
                var a = i.width();
                a !== k && (k = a, r(e, {
                    width: l,
                    delay: 50,
                    debug: !0,
                    onheight: function () {
                        i.height(e.height())
                    }
                }))
            })
        }
    })
})(jQuery);
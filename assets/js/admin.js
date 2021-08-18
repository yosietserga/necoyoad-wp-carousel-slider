(() => {
    "use strict";
    class t {
        constructor(t) {
            this.element = t, this.cssClasses = {
                IS_ACTIVE: "is-active",
                MAIN: "shapla-tooltip",
                BOTTOM: "shapla-tooltip--bottom",
                LEFT: "shapla-tooltip--left",
                RIGHT: "shapla-tooltip--right",
                TOP: "shapla-tooltip--top"
            }, this.init()
        }
        handleMouseEnter_(t) {
            let e = t.target.getBoundingClientRect(),
                s = e.left + e.width / 2,
                i = e.top + e.height / 2,
                o = this.element.offsetWidth / 2 * -1,
                a = this.element.offsetHeight / 2 * -1;
            this.element.classList.contains(this.cssClasses.LEFT) || this.element.classList.contains(this.cssClasses.RIGHT) ? i + a < 0 ? (this.element.style.top = "0", this.element.style.marginTop = "0") : (this.element.style.top = i + "px", this.element.style.marginTop = a + "px") : s + o < 0 ? (this.element.style.left = "0", this.element.style.marginLeft = "0") : (this.element.style.left = s + "px", this.element.style.marginLeft = o + "px"), this.element.classList.contains(this.cssClasses.TOP) ? this.element.style.top = e.top - this.element.offsetHeight - 10 + "px" : this.element.classList.contains(this.cssClasses.RIGHT) ? this.element.style.left = e.left + e.width + 10 + "px" : this.element.classList.contains(this.cssClasses.LEFT) ? this.element.style.left = e.left - this.element.offsetWidth - 10 + "px" : this.element.style.top = e.top + e.height + 10 + "px", this.element.classList.add(this.cssClasses.IS_ACTIVE)
        }
        hideTooltip_() {
            this.element.classList.remove(this.cssClasses.IS_ACTIVE)
        }
        init() {
            if (!this.element) return;
            let e = this.element.getAttribute("data-tooltip-for");
            if (e) this.forElement_ = document.getElementById(e);
            else {
                let e = this.element.getAttribute("data-tooltip") || this.element.getAttribute("title"),
                    s = t.createUUID(),
                    i = document.createElement("div");
                i.classList.add(this.cssClasses.MAIN), i.setAttribute("data-tooltip-for", s), i.setAttribute("role", "tooltip"), i.innerText = e, document.body.appendChild(i), this.forElement_ = this.element, this.forElement_.setAttribute("data-tooltip-target", s), this.forElement_.removeAttribute("data-tooltip"), this.forElement_.removeAttribute("title"), this.element = i
            }
            this.forElement_ && (this.forElement_.hasAttribute("tabindex") || this.forElement_.setAttribute("tabindex", "0"), this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this), this.boundMouseLeaveAndScrollHandler = this.hideTooltip_.bind(this), this.forElement_.addEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("touchend", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("mouseleave", this.boundMouseLeaveAndScrollHandler, !1), window.addEventListener("scroll", this.boundMouseLeaveAndScrollHandler, !0), window.addEventListener("touchstart", this.boundMouseLeaveAndScrollHandler))
        }
        static createUUID() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
                const e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            }))
        }
        static register() {
            let e = document.querySelectorAll("[data-tooltip-for], [data-tooltip]");
            e.length && e.forEach((e => new t(e)))
        }
    }
    const e = t;
    let s = document.querySelectorAll(".cs-tooltip");
    s.length && s.forEach((t => new e(t)))
})(),
function(t) {
    "use strict";
    t(document).on("click", ".accordion-header", (function() {
        t(this).toggleClass("active");
        var e = t(this).next();
        parseInt(e.css("max-height")) > 0 ? (e.css("max-height", "0"), e.css("overflow", "hidden")) : (e.css("max-height", e.prop("scrollHeight") + "px"), e.css("overflow", "visible"))
    }))
}(jQuery),
function(t) {
    "use strict";
    var e, s, i, o, a, n, l = t("body"),
        d = t("#contentButtonModal");
    l.on("click", ".necoyoad-carousel-slider__add-slide", (function(e) {
        e.preventDefault(), t.ajax({
            url: ajaxurl,
            method: "POST",
            data: {
                action: "add_content_slide",
                task: "add-slide",
                post_id: t(this).data("post-id")
            },
            success: function() {
                window.location.reload(!0)
            }
        })
    })), l.on("click", ".carousel_slider__delete_slide", (function(e) {
        e.preventDefault(), t.ajax({
            url: ajaxurl,
            method: "POST",
            data: {
                action: "add_content_slide",
                task: "delete-slide",
                post_id: t(this).data("post-id"),
                slide_pos: t(this).data("slide-pos")
            },
            success: function() {
                window.location.reload(!0)
            }
        })
    })), l.on("click", ".carousel_slider__move_top", (function(e) {
        e.preventDefault(), t.ajax({
            url: ajaxurl,
            method: "POST",
            data: {
                action: "add_content_slide",
                task: "move-slide-top",
                post_id: t(this).data("post-id"),
                slide_pos: t(this).data("slide-pos")
            },
            success: function() {
                window.location.reload(!0)
            }
        })
    })), l.on("click", ".carousel_slider__move_up", (function(e) {
        e.preventDefault(), t.ajax({
            url: ajaxurl,
            method: "POST",
            data: {
                action: "add_content_slide",
                task: "move-slide-up",
                post_id: t(this).data("post-id"),
                slide_pos: t(this).data("slide-pos")
            },
            success: function() {
                window.location.reload(!0)
            }
        })
    })), l.on("click", ".carousel_slider__move_down", (function(e) {
        e.preventDefault(), t.ajax({
            url: ajaxurl,
            method: "POST",
            data: {
                action: "add_content_slide",
                task: "move-slide-down",
                post_id: t(this).data("post-id"),
                slide_pos: t(this).data("slide-pos")
            },
            success: function() {
                window.location.reload(!0)
            }
        })
    })), l.on("click", ".carousel_slider__move_bottom", (function(e) {
        e.preventDefault(), t.ajax({
            url: ajaxurl,
            method: "POST",
            data: {
                action: "add_content_slide",
                task: "move-slide-bottom",
                post_id: t(this).data("post-id"),
                slide_pos: t(this).data("slide-pos")
            },
            success: function() {
                window.location.reload(!0)
            }
        })
    })), l.on("click", ".slide_image_add", (function(n) {
        n.preventDefault();
        var l = t(this);
        s = l.closest(".slide_bg_wrapper"), o = s.find(".content_slide_canvas"), i = s.find(".background_image_id"), a = s.find(".delete-bg-img"), e || (e = wp.media({
            title: l.data("title"),
            button: {
                text: l.data("button-text")
            },
            multiple: !1
        })).on("select", (function() {
            var t = e.state().get("selection").first().toJSON();
            o.css("background-image", "url(" + t.url + ")"), i.val(t.id), a.removeClass("hidden")
        })), e.open()
    })), l.on("click", ".delete-bg-img", (function(e) {
        e.preventDefault(), s = t(this).closest(".slide_bg_wrapper"), o = s.find(".content_slide_canvas"), i = s.find(".background_image_id"), a = s.find(".delete-bg-img"), o.css("background-image", ""), i.val("0"), a.addClass("hidden")
    })), l.on("change", ".background_image_position", (function() {
        var e = t(this).val();
        s = t(this).closest(".slide_bg_wrapper"), (o = s.find(".content_slide_canvas")).css("background-position", e)
    })), l.on("change", ".background_image_size", (function() {
        var e = t(this).val();
        s = t(this).closest(".slide_bg_wrapper"), (o = s.find(".content_slide_canvas")).css("background-size", e)
    })), t(".addContentButton").on("click", (function(e) {
        e.preventDefault();
        var s = (n = t(this).closest(".button_config")).find(".button_text").val(),
            i = n.find(".button_url").val(),
            o = n.find(".button_target").val(),
            a = n.find(".button_type").val(),
            l = n.find(".button_size").val(),
            r = n.find(".button_color").val();
        d.find("#_button_text").val(s), d.find("#_button_url").val(i), d.find("#_button_target").val(o), d.find("#_button_type").val(a), d.find("#_button_size").val(l), d.find("#_button_color").val(r), d.addClass("is-active")
    })), t("#saveContentButton").on("click", (function(t) {
        if (t.preventDefault(), !n) return d.removeClass("is-active"), !1;
        var e = d.find("#_button_text").val(),
            s = d.find("#_button_url").val(),
            i = d.find("#_button_target").val(),
            o = d.find("#_button_type").val(),
            a = d.find("#_button_size").val(),
            l = d.find("#_button_color").val();
        n.find(".button_text").val(e), n.find(".button_url").val(s), n.find(".button_target").val(i), n.find(".button_type").val(o), n.find(".button_size").val(a), n.find(".button_color").val(l), d.removeClass("is-active")
    })), t(".slide-color-picker").each((function() {
        s = t(this).closest(".slide_bg_wrapper"), o = s.find(".content_slide_canvas"), t(this).wpColorPicker({
            palettes: ["#2196F3", "#009688", "#4CAF50", "#F44336", "#FFEB3B", "#00D1B2", "#000000", "#ffffff"],
            change: function(t, e) {
                o.css("background-color", e.color.toString())
            }
        })
    })), t(document).on("change", ".link_type", (function(e) {
        var s = t(this),
            i = s.val(),
            o = s.closest(".tab-content-link"),
            a = o.find(".ContentCarouselLinkFull"),
            n = o.find(".ContentCarouselLinkButtons");
        "full" === i ? (n.hide(), a.show()) : "button" === i ? (a.hide(), n.show()) : (a.hide(), n.hide())
    }))
}(jQuery),
function(t) {
    "use strict";
    var e, s = t("#carousel_slider_gallery_btn"),
        i = o(s.data("ids"));

    function o(t) {
        if (t) {
            var e = new wp.shortcode({
                    tag: "gallery",
                    attrs: {
                        ids: t
                    },
                    type: "single"
                }),
                s = wp.media.gallery.attachments(e),
                i = new wp.media.model.Selection(s.models, {
                    props: s.props.toJSON(),
                    multiple: !0
                });
            return i.gallery = s.gallery, i.more().done((function() {
                i.props.set({
                    query: !1
                }), i.unmirror(), i.props.unset("orderby")
            })), i
        }
        return !1
    }
    s.on("click", (function(a) {
        a.preventDefault();
        var n = {
            title: s.data("create"),
            state: "gallery-edit",
            frame: "post",
            selection: i
        };

        function l() {
            e.toolbar.get("view").set({
                insert: {
                    style: "primary",
                    text: s.data("save"),
                    click: function() {
                        var a = e.state().get("library"),
                            n = "";
                        a.each((function(t) {
                            n += t.id + ","
                        })), this.el.innerHTML = s.data("progress"), t.ajax({
                            type: "POST",
                            url: ajaxurl,
                            data: {
                                ids: n,
                                action: "carousel_slider_save_images",
                                post_id: s.data("id")
                            },
                            success: function() {
                                i = o(n), t("#_carousel_slider_images_ids").val(n), e.close()
                            },
                            dataType: "html"
                        }).done((function(e) {
                            t(".carousel_slider_gallery_list").html(e)
                        }))
                    }
                }
            })
        }(e || i) && (n.title = s.data("edit")), (e = wp.media(n).open()).menu.get("view").unset("cancel"), e.menu.get("view").unset("separateCancel"), e.menu.get("view").get("gallery-edit").el.innerHTML = s.data("edit"), e.content.get("view").sidebar.unset("gallery"), l(), e.on("toolbar:render:gallery-edit", (function() {
            l()
        })), e.on("content:render:browse", (function(t) {
            t && (t.sidebar.on("ready", (function() {
                t.sidebar.unset("gallery")
            })), t.toolbar.on("ready", (function() {
                "gallery-library" === t.toolbar.controller._state && t.toolbar.$el.hide()
            })))
        })), e.state().get("library").on("remove", (function() {
            0 === e.state().get("library").length && (i = !1, t.post(ajaxurl, {
                ids: "",
                action: "carousel_slider_save_images",
                post_id: s.data("id")
            }))
        }))
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = t("body"),
        s = t("#CarouselSliderModal"),
        i = t("#_images_urls_btn"),
        o = t("#carouselSliderGalleryUrlTemplate").html();
    i.on("click", (function(e) {
        e.preventDefault(), s.css("display", "block"), t("body").addClass("overflowHidden")
    })), s.on("click", ".carousel_slider-close", (function(e) {
        e.preventDefault(), s.css("display", "none"), t("body").removeClass("overflowHidden")
    }));
    var a = t(window).height() - 148;
    t(".carousel_slider-modal-body").css("height", a + "px"), e.on("click", ".add_row", (function() {
        t(this).closest(".carousel_slider-fields").after(o)
    })), e.on("click", ".delete_row", (function() {
        t(this).closest(".carousel_slider-fields").remove()
    })), t("#carousel_slider_form").sortable()
}(jQuery),
function(t) {
    "use strict";
    t(document).on("click", '[data-toggle="modal"]', (function(e) {
        e.preventDefault(), t(t(this).data("target")).addClass("is-active")
    })), t(document).on("click", '[data-dismiss="modal"]', (function(e) {
        e.preventDefault(), t(this).closest(".modal").removeClass("is-active")
    }))
}(jQuery),
function(t) {
    "use strict";
    var e = t("#_carousel_slider_slide_type"),
        s = t("#section_images_settings"),
        i = t("#section_url_images_settings"),
        o = t("#section_images_general_settings"),
        a = t("#section_post_query"),
        n = t("#section_video_settings"),
        l = t("#section_product_query"),
        d = t("#section_content_carousel"),
        r = t("#_post_query_type"),
        c = t("#field-_post_date_after"),
        u = t("#field-_post_date_before"),
        h = t("#field-_post_categories"),
        _ = t("#field-_post_tags"),
        f = t("#field-_post_in"),
        p = t("#field-_posts_per_page"),
        v = t("#_product_query_type"),
        m = t("#field-_product_query"),
        g = t("#field-_product_categories"),
        b = t("#field-_product_tags"),
        w = t("#field-_product_in"),
        y = t("#field-_products_per_page");
    if (e.on("change", (function() {
            s.hide("fast"), i.hide("fast"), o.hide("fast"), a.hide("fast"), n.hide("fast"), l.hide("fast"), d.hide("fast"), "image-carousel" === this.value && (s.slideDown(), o.slideDown()), "image-carousel-url" === this.value && (i.slideDown(), o.slideDown()), "post-carousel" === this.value && a.slideDown(), "video-carousel" === this.value && n.slideDown(), "product-carousel" === this.value && (l.slideDown(), m.show()), "hero-banner-slider" === this.value && d.slideDown()
        })), "post-carousel" === e.val()) {
        var x = r.val();
        "date_range" === x && (c.show(), u.show()), "post_categories" === x && h.show(), "post_tags" === x && _.show(), "specific_posts" === x && (f.show(), p.hide())
    }
    if (r.on("change", (function() {
            c.hide("fast"), u.hide("fast"), h.hide("fast"), _.hide("fast"), f.hide("fast"), p.show("fast"), "date_range" === this.value && (c.slideDown(), u.slideDown()), "post_categories" === this.value && h.slideDown(), "post_tags" === this.value && _.slideDown(), "specific_posts" === this.value && (f.slideDown(), p.hide("fast"))
        })), "product-carousel" === e.val()) {
        var k = v.val();
        "query_porduct" === k && m.show(), "product_categories" === k && g.show(), "product_tags" === k && b.show(), "specific_products" === k && w.show()
    }
    v.on("change", (function() {
        m.hide("fast"), g.hide("fast"), b.hide("fast"), w.hide("fast"), y.show("fast"), "query_porduct" === this.value && m.slideDown(), "product_categories" === this.value && g.slideDown(), "product_tags" === this.value && b.slideDown(), "specific_products" === this.value && (w.slideDown(), y.hide("fast"))
    }))
}(jQuery),
function(t) {
    "use strict";
    t(".cs-tooltip").each((function() {})), t("select.select2").each((function() {
        t(this).select2()
    })), t(".shapla-toggle").each((function() {
        "closed" === t(this).attr("data-id") ? t(this).accordion({
            collapsible: !0,
            heightStyle: "content",
            active: !1
        }) : t(this).accordion({
            collapsible: !0,
            heightStyle: "content"
        })
    })), t(".shapla-tabs").tabs({
        hide: {
            effect: "fadeOut",
            duration: 200
        },
        show: {
            effect: "fadeIn",
            duration: 200
        }
    }), t(".datepicker").each((function() {
        t(this).datepicker({
            dateFormat: "MM dd, yy",
            changeMonth: !0,
            changeYear: !0,
            onClose: function(e) {
                t(this).datepicker("option", "minDate", e)
            }
        })
    })), t(".color-picker").each((function() {
        t(this).wpColorPicker({
            palettes: ["#2196F3", "#009688", "#4CAF50", "#F44336", "#FFEB3B", "#00D1B2", "#000000", "#ffffff"]
        })
    }))
}(jQuery);
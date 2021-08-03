(() => {
    var e, l, r, i, t, s, a, n;
    e = window.wp.blocks, window.wp.i18n, l = window.wp.editor, r = window.wp.element, 
    i = window.wp.components, t = r.createElement, s = window.carousel_slider_gutenberg_block, 
    a = i.TextControl, n = l.InspectorControls, e.registerBlockType("necoyoad-carousel-slider/slider", {
        title: s.block_title,
        icon: "slides",
        category: "common",
        attributes: {
            sliderID: {
                type: "integer",
                default: 0
            },
            sliderName: {
                type: "string",
                default: ""
            }
        },
        edit: function(e) {
            var l = e.attributes.sliderID, r = e.attributes.sliderName, i = [];
            function o(e) {}
            function d(e) {
                var l = e.target.getAttribute("id").split("-"), r = document.getElementById("necoyoad-carousel-slider-filter-container-" + l[l.length - 1]);
                document.getElementById("necoyoad-carousel-slider-sliderFilter-" + l[l.length - 1]).focus(), 
                r.style.display = "block";
            }
            function c(l) {
                e.setAttributes({
                    sliderID: parseInt(l.target.getAttribute("data-slider_id")),
                    sliderName: l.target.innerText
                });
                var r = l.target.parentNode.parentNode.getAttribute("id").split("-"), i = document.getElementById("necoyoad-carousel-slider-filter-container-" + r[r.length - 1]), t = document.getElementById("necoyoad-carousel-slider-sliderFilter-sidebar");
                t && (t.value = ""), i.style.display = "none";
            }
            function u(e) {
                var l = e.target.getAttribute("id").split("-");
                document.getElementById("necoyoad-carousel-slider-filter-container-" + l[l.length - 1]).style.display = "none";
            }
            function p(e) {
                var l = e.target.value, r = e.target.parentNode.parentNode.parentNode;
                r.querySelector(".necoyoad-carousel-slider-filter-option-container").style.display = "block", 
                r.style.display = "block", _.each(s.sliders, function(e, i) {
                    var t = r.querySelector("[data-slider_id='" + e.value + "']");
                    0 <= e.label.toLowerCase().indexOf(l.toLowerCase()) ? t.style.display = "block" : t.style.display = "none";
                });
            }
            l || (l = ""), r || (r = "");
            var m = [];
            _.each(s.sliders, function(e, l) {
                m.push(t("li", {
                    className: "necoyoad-carousel-slider-filter-option",
                    "data-slider_id": e.value,
                    onMouseDown: c
                }, e.label + " ( ID: " + e.value + " )"));
            });
            var f = t("div", {
                id: "necoyoad-carousel-slider-filter-input-main",
                className: "necoyoad-carousel-slider-filter-input"
            }, t(a, {
                id: "necoyoad-carousel-slider-sliderFilter-main",
                placeHolder: s.select_slider,
                className: "necoyoad-carousel-slider-filter-input-el blocks-select-control__input",
                onChange: o,
                onClick: d,
                onKeyUp: p,
                onBlur: u
            }), t("span", {
                id: "necoyoad-carousel-slider-filter-input-icon-main",
                className: "necoyoad-carousel-slider-filter-input-icon",
                onClick: d,
                dangerouslySetInnerHTML: {
                    __html: "&#9662;"
                }
            }), t("div", {
                id: "necoyoad-carousel-slider-filter-container-main",
                className: "necoyoad-carousel-slider-filter-option-container"
            }, t("ul", null, m))), g = t("div", {
                id: "necoyoad-carousel-slider-filter-input-sidebar",
                className: "necoyoad-carousel-slider-filter-input"
            }, t(a, {
                id: "necoyoad-carousel-slider-sliderFilter-sidebar",
                placeHolder: s.select_slider,
                className: "necoyoad-carousel-slider-filter-input-el blocks-select-control__input",
                onChange: o,
                onClick: d,
                onKeyUp: p,
                onBlur: u
            }), t("span", {
                id: "necoyoad-carousel-slider-filter-input-icon-sidebar",
                className: "necoyoad-carousel-slider-filter-input-icon",
                onClick: d,
                dangerouslySetInnerHTML: {
                    __html: "&#9662;"
                }
            }), t("div", {
                id: "necoyoad-carousel-slider-filter-container-sidebar",
                className: "necoyoad-carousel-slider-filter-option-container"
            }, t("ul", null, m))), b = t(n, {}, t("span", null, s.selected_slider), t("br", null), t("span", null, r), t("br", null), t("hr", null), t("label", {
                for: "necoyoad-carousel-slider-sliderFilter-sidebar"
            }, s.filter_slider), g);
            return "" === l ? i.push(t("div", {
                style: {
                    width: "100%"
                }
            }, t("img", {
                className: "necoyoad-carousel-slider-block-logo",
                src: s.block_logo
            }), t("div", null, s.block_title), f)) : i.push(t("div", {
                className: "necoyoad-carousel-slider-iframe-container"
            }, t("div", {
                className: "necoyoad-carousel-slider-iframe-overlay"
            }), t("iframe", {
                className: "necoyoad-carousel-slider-iframe",
                src: s.site_url + "?carousel_slider_preview=1&carousel_slider_iframe=1&slider_id=" + l,
                height: "0",
                width: "500",
                scrolling: "no"
            }))), i.push(b), [ i ];
        },
        save: function(e) {
            var l = e.attributes.sliderID;
            if (!l) return "";
            var r = "[carousel_slide id=" + parseInt(l) + "]";
            return t("div", null, r);
        }
    });
})();
jQuery("body").find(".necoyoad-carousel-slider").each(function() {
    let a = jQuery(this), e = a.data("auto-width"), t = parseInt(a.data("stage-padding"));
    if (t = t > 0 ? t : 0, jQuery().owlCarousel && (a.owlCarousel({
        stagePadding: t,
        nav: a.data("nav"),
        dots: a.data("dots"),
        margin: a.data("margin"),
        loop: a.data("loop"),
        autoplay: a.data("autoplay"),
        autoplayTimeout: a.data("autoplay-timeout"),
        autoplaySpeed: a.data("autoplay-speed"),
        autoplayHoverPause: a.data("autoplay-hover-pause"),
        slideBy: a.data("slide-by"),
        lazyLoad: a.data("lazy-load"),
        autoWidth: e,
        navText: [ '<svg class="necoyoad-carousel-slider-nav-icon" viewBox="0 0 20 20"><path d="M14 5l-5 5 5 5-1 2-7-7 7-7z"></path></use></svg>', '<svg class="necoyoad-carousel-slider-nav-icon" viewBox="0 0 20 20"><path d="M6 15l5-5-5-5 1-2 7 7-7 7z"></path></svg>' ],
        responsive: {
            320: {
                items: a.data("colums-mobile")
            },
            600: {
                items: a.data("colums-small-tablet")
            },
            768: {
                items: a.data("colums-tablet")
            },
            993: {
                items: a.data("colums-small-desktop")
            },
            1200: {
                items: a.data("colums-desktop")
            },
            1921: {
                items: a.data("colums")
            }
        }
    }), "hero-banner-slider" === a.data("slide-type"))) {
        let e = a.data("animation");
        e.length && (a.on("change.owl.carousel", function() {
            a.find(".necoyoad-carousel-slider-hero__cell__content").removeClass("animated " + e).hide();
        }), a.on("changed.owl.carousel", function(t) {
            setTimeout(function() {
                jQuery(t.target).find(".necoyoad-carousel-slider-hero__cell__content").eq(t.item.index).show().addClass("animated " + e);
            }, a.data("autoplay-speed"));
        }));
    }
    jQuery().magnificPopup && ("product-carousel" === a.data("slide-type") ? jQuery(this).find(".magnific-popup").magnificPopup({
        type: "ajax"
    }) : "video-carousel" === a.data("slide-type") ? jQuery(this).find(".magnific-popup").magnificPopup({
        type: "iframe"
    }) : jQuery(this).find(".magnific-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        },
        zoom: {
            enabled: !0,
            duration: 300,
            easing: "ease-in-out"
        }
    }));
});
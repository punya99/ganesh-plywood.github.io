var module_57430745140 = function() {
    var __hs_messages = {};
    i18n_getmessage = function() {
        return hs_i18n_getMessage(__hs_messages, hsVars.language, arguments)
    }, i18n_getlanguage = function() {
        return hsVars.language
    }, jQuery(document).ready((function() {
        function buildSlider_() {
            jQuery(".banner-slider-wrapper").slick({
                dots: !0,
                arrows: !1,
                autoplay: !0,
                infinite: !0,
                loop: !0,
                autoplaySpeed: 4e3,
                speed: 800,
                slidesToShow: 1,
                slidesToScroll: 1
            })
        }
        jQuery.fn.slick ? buildSlider_() : jQuery.getScript("https://cdn2.hubspot.net/hub/5724847/hub_generated/template_assets/9451968488/1600680461915/EN-US/WEBSITE_2019/Coded/Slick.js", (function() {
            jQuery.when(jQuery.fn.slick).then((function() {
                buildSlider_()
            }))
        }))
    }))
}();
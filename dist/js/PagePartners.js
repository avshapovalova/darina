const PagePartners = {
    init: function () {
        console.log('PagePartners.init')
        this.initBanner()
        RedsMenu.init()
        this.handleAccordionsDocs()

    },

    initBanner: function () {
        $(document).ready(function () {
            $(".js-banner").owlCarousel({
                nav: false,
                dots: true,
                dotsContainer: '.js-banner-dots',
                items: 1,
            })
        });
    },

    handleAccordionsDocs: function () {
        $('.js-docs-accordion').on('click', function(){
            $(this).toggleClass('m-open')
        })
            },

}

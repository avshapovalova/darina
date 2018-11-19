const PagePartners = {
  init: function() {
    console.log('PagePartners.init')
    this.initBanner()
    RedsMenu.init()
  },

  initBanner: function(){
    $(document).ready(function(){
      $(".js-banner").owlCarousel({
        nav: false,
        dots: true,
        dotsContainer: '.js-banner-dots',
        items: 1,
      })
    });
  },
}

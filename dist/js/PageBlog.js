const PageBlog = {
  init: function() {
    console.log('PageBlog.init')
    this.initBanner()
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

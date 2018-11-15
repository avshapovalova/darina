const PageProductCard = {
  init: function() {
    console.log('PageProductCard.init')
    this.initSliderProducts()
    this.initSliderVideo()
  },

  initSliderProducts: function(){
    $(document).ready(function(){
      $(".js-slider-products").owlCarousel({
        nav: false,
        dots: true,
        dotsContainer: '.js-slider-products-dots',
        items: 1,
      })
    });
  },

  initSliderVideo: function(){
    $(document).ready(function(){
      $(".js-slider-video").owlCarousel({
        nav: false,
        dots: true,
        dotsContainer: '.js-slider-video-dots',
        items: 1,
      })
    });
  },
}

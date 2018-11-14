const PageProductCard = {
  init: function() {
    console.log('PageProductCard.init')
    this.initSliderProducts()
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
}

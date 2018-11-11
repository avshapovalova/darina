const PageProductCard = {
  init: function() {
    console.log('PageProductCard.init')
    this.initSliderVideo()
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

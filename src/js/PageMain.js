const PageMain = {
  init: function() {
    console.log('PageMain.init')
    this.initBanner()
    this.initSliderNews()
    this.initSliderHits()
    this.initSliderVideo()
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

  initSliderNews: function(){
    $(document).ready(function(){
      $(".js-slider-news").owlCarousel({
        nav: false,
        dots: true,
        dotsContainer: '.js-slider-news-dots',
        items: 1,
      })
    });
  },

  initSliderHits: function(){
    $(document).ready(function(){
      $(".js-slider-hits").owlCarousel({
        nav: false,
        dots: true,
        dotsContainer: '.js-slider-hits-dots',
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

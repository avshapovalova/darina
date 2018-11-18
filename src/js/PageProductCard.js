const PageProductCard = {
  init: function() {
    console.log('PageProductCard.init')
    this.initSliderProducts()
    this.initSliderVideo()
    this.initGallery()
    RedsMenu.init()
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

  initGallery: function(){
    $('.js-make-zoom').on('click', function(){
      $('.js-slider-products .owl-item.active > a').click();
    })

    $('.js-slider-products').magnificPopup({
      delegate: 'a',
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      },
      image: {
        titleSrc: function(item) {
        }
      }
    });
  },
}

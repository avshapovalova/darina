const PageCatalog = {
  init: function() {
    console.log('PageCatalog.init')
    this.initSliderWidth()
    this.initSliderLength()
    this.initSliderHeight()

  },

  initSliderWidth: function(){
    noUiSlider.create(document.getElementById('slider-width'), {
      start: [50, 60],
      connect: true,
      range: {
        'min': 50,
        'max': 60
      }
    });
  },
  initSliderLength: function(){
    noUiSlider.create(document.getElementById('slider-length'), {
      start: [50, 60],
      connect: true,
      range: {
        'min': 50,
        'max': 60
      }
    });
  },
  initSliderHeight: function(){
    noUiSlider.create(document.getElementById('slider-height'), {
      start: [50, 60],
      connect: true,
      range: {
        'min': 50,
        'max': 60
      }
    });
  },

}


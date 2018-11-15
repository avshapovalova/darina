const PageCatalog = {
  init: function() {
    console.log('PageCatalog.init')
    this.initSliderRange()
  },

  initSliderRange: function(){
    noUiSlider.create(document.getElementById('slider-width'), {
      start: [20, 80],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
    });
  },

}


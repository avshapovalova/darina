const PageCatalog = {
  init: function() {
    console.log('PageCatalog.init')
    this.initSlider('slider-width', 10, 90, 0, 100)
    this.initSlider('slider-length', 0, 100, 0, 100)
    this.initSlider('slider-height', 50, 80, 0, 100)
    this.handleAddToCompare()
  },

  handleAddToCompare: function() {
    var isLimit = function() {
      return true;
    };
    const $toCompareLink = $('.product-card__tocompare-add');
    $toCompareLink.on('click', function() {
      if (isLimit()) {
        $(this).parent().addClass('compare-limit');
        return false;
      }
    });
  },

  initSlider: function(id, from, to, min, max){
    const el = document.getElementById(id)
    el.setAttribute('data-from', from)
    el.setAttribute('data-to', to)

    noUiSlider.create(el, {
      start: [from, to],
      connect: true,
      range: {
        'min': min,
        'max': max
      }
    }).on('slide', function(values){
      const from = Math.round(values[0])
      const to = Math.round(values[1])
      el.setAttribute('data-from', from)
      el.setAttribute('data-to', to)
    })
  },
}


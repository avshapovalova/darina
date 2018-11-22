const PageService = {
  init: function() {
    console.log('PageService.init')
    this.initSliderInstruction()
    window.requestAnimationFrame(function(){
      this.initInstructionHeights()
    }.bind(this))
  },

  initSliderInstruction: function(){
    $(".js-slider-instruction").owlCarousel({
      nav: false,
      dots: true,
      dotsContainer: '.js-slider-instruction-dots',
      responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0:{
          items:1
        },
        640:{
          items:3
        },
        1440:{
          items:5
        }
      },
    })
  },

  initInstructionHeights() {
    $('.instruction__title').matchHeight();

    const $el = $('.js-instructions')
    const $uls = $el.find('.instruction__ul')
    const $ulsLength = $uls.length

    let maxRowLength = 0
    $uls.each(function(){
      const $ul = $(this)
      const length = $ul.find('li').length
      if (length > maxRowLength) maxRowLength = length
    })

    const heights = []
    for(let i = 0; i < $ulsLength; i++) {
      const rowHeights = []
      const $ul = $uls.eq(i)
      if ($ul) {
        for(let j = 0; j < maxRowLength; j++) {
          const $li = $ul.find('li').eq(j)
          if ($li) {
            rowHeights[j] = $li.outerHeight()
          }
        }
      }
      heights.push(rowHeights)
    }

    const maxHeights = []
    for (let i = 0; i < maxRowLength; i++) {
      for (let j = 0; j < $ulsLength; j++) {
        if (!maxHeights[i] || heights[j][i] > maxHeights[i]) maxHeights[i] = heights[j][i]
      }
    }

    console.log(maxHeights)
    $uls.each(function(ulIndex){
      const $ul = $(this)
      $ul.find('li').each(function(liIndex){
        $(this).height(maxHeights[liIndex])
      })
    })
  },
}

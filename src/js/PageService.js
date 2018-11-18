const PageService = {
  init: function() {
    console.log('PageService.init')
    this.initInstructionHeights()
  },

  initInstructionHeights() {
    const $el = $('.js-instructions')
    const heights = []
    const $uls = $el.find('.instruction__ul')
    const $ulsLength = $uls.length

    let maxRowLength = 0
    $uls.forEach(function($ul){
      const length = $ul.find('li').length
      if (length > maxRowLength) maxRowLength = length
    })

    for(let i = 0; i < $ulsLength; i++) {
      const rowHeights = []
    }
    for(let i = 0; i < maxRowLength; i++) {}
  }
}

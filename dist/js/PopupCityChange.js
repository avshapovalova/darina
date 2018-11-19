const PopupCityChange = {

  init: function() {
    const self = this
    const $button = $('.js-header-city')
    const $cityPopup = $('.js-city-popup')
    $button.on('click', function(){
      self.open()
    })
    $cityPopup.find('.js-ok').on('click', this.close)
    $cityPopup.find('.js-select').on('click', function(){
      $cityPopup.find('.city-popup__part1').hide()
      $cityPopup.find('.city-popup__part2').show()
    })
  },

  open: function() {
    const $cityPopup = $('.js-city-popup')
    $cityPopup.addClass('m-open')
    $cityPopup.find('.city-popup__part1').show()
    $cityPopup.find('.city-popup__part2').hide()
    Shader.open()
  },

  close: function() {
    const $cityPopup = $('.js-city-popup')
    $cityPopup.removeClass('m-open')
    Shader.close()
  },

}
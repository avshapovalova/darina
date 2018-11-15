const App = {
  init: function() {
    console.log('App.init')
    this.initSidebar()
    this.initCityChange()
    this.handleShader()
  },

  initSidebar: function() {
    const self = this
    const $sidebarButtonOpen = $('.js-sidebar-open')
    const $sidebarButtonClose = $('.js-sidebar-close')
    const $mobileBurger = $('.js-mobile-burger')

    $mobileBurger.on('click', function(){
      self.openSidebar()
    })

    $sidebarButtonOpen.on('click', function(){
      self.openSidebar()
    })

    $sidebarButtonClose.on('click', function(){
      self.closeSidebar()
    })
  },

  initCityChange: function() {
    const self = this
    const $button = $('.js-header-city')
    $button.on('click', function(){
      self.openCityPopup()
    })
  },

  handleShader: function() {
    const self = this
    $(Shader).on('close', function(){
      self.closeSidebar()
      self.closeCityPopup()
    })
  },

  openCityPopup: function() {
    const $cityPopup = $('.js-city-popup')
    $cityPopup.addClass('m-open')
    Shader.open()
  },

  closeCityPopup: function() {
    const $cityPopup = $('.js-city-popup')
    $cityPopup.removeClass('m-open')
    Shader.close()
  },

  openSidebar: function() {
    const $sidebar = $('.js-sidebar')
    $sidebar.addClass('m-open')
    Shader.open()
  },

  closeSidebar: function() {
    const $sidebar = $('.js-sidebar')
    $sidebar.removeClass('m-open')
    Shader.close()
  },
}

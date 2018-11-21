const App = {
  init: function() {
    console.log('App.init')
    this.initSidebar()
    PopupCityChange.init()
    this.handleShader()
    this.handleAccordions()
    this.initHeaderSearch()
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

    handleShader: function() {
        const self = this
        $(Shader).on('close', function(){
            self.closeSidebar()
            PopupCityChange.close()
        })
    },

    openSidebar: function() {
        const $sidebar = $('.js-sidebar')
        // $('body').addClass('m-fixed')
        $sidebar.addClass('m-open')
        Shader.open()
    },

    closeSidebar: function() {
        const $sidebar = $('.js-sidebar')
        // $('body').removeClass('m-fixed')
        $sidebar.removeClass('m-open')
        Shader.close()
    },

    handleAccordions: function() {
        $('.js-accordion').on('click', function(){
            $(this).toggleClass('m-color-red').next().toggleClass('m-open')
        })
    },

    initHeaderSearch: function(){
        const self = this
        const $headerLeft = $('.js-header-left')
        const $headerIconSearch = $('.js-header-icon')
        const $headerSearch = $('.js-search-open')
        const $headerIconClose = $('.js-header-icon-close')

        $headerIconSearch.on('click', function () {
            event.preventDefault()
            $headerLeft.addClass('m-close')
            $headerSearch.addClass('m-open')
        })

        $headerIconClose.on('click', function(){
            $headerLeft.removeClass('m-close')
            $headerSearch.removeClass('m-open')
        })
    },
}

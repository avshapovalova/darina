const App = {
    init: function() {
        console.log('App.init')
        this.initSidebar()
        PopupCityChange.init()
        this.handleShader()
        this.handleAccordions()
        this.handleAccordionsQuestions()
        this.handleReds()
        this.handleSubmenu()
        this.initHeaderSearch()
        this.initMap()
    },

    handleSubmenu: function() {
        const $sidebarLink = $('.sidebar__li > .sidebar__item > a');
        $sidebarLink.on('click', function() {
            const $subMenu = $(this).closest('.sidebar__li').find('.m-sub');
            if (!$subMenu.length) {
                return true;
            }
            $subMenu.toggleClass('opened');
            return false;
        });
    },

    handleReds: function() {
        let $panel = $('.reds__panel');
        const parentWidth = $panel.outerWidth();
        const redItemsCount = $panel.find('a').length;
        $panel.find('a').each(function(e, o) {
            $(o).outerWidth(parentWidth/redItemsCount-5);
        });
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

    handleAccordionsQuestions: function() {
        $('.js-accordion-questions').on('click', function(){
            $(this).toggleClass('m-open')
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

    initMap: function () {
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.76, 37.64],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 7
            });
        }
    }
}

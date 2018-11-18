const RedsMenu = {
  $el: '',
  $panel: '',
  top: 0,
  left: 0,
  height: 0,
  init: function() {
    this.$el = $('.reds')
    this.$panel = $('.reds__panel')
    this.handleWindowScroll();
    this.handleClickLink();
  },

  handleWindowScroll: function(){
    const marginTop = parseInt(this.$el.css('marginTop'))
    this.top = this.$el.offset().top + marginTop + 10
    this.left = this.$el.offset().left
    this.height = this.$el.outerHeight()
    this.$el.height(this.$panel.outerHeight())
    this.$panel.width(this.$panel.outerWidth())

    const onScroll = (function(){
      const scrollTop = $(window).scrollTop()
      scrollTop >= this.top ? this.fix() : this.unfix()
    }).bind(this)
    onScroll()

    $(document).on('scroll', onScroll)
  },

  handleClickLink: function(){
    const self = this
    this.$el.on('click', 'a', function(e){
      e.preventDefault();
      const name = $(this).attr('href').substr(1)
      const $target = $('[name='+name+']')
      if ($target.length) {
        const isFixed = $target.offset().top >= self.top
        $('html, body').animate({ scrollTop: $target.offset().top - (isFixed ? (self.height + 25) : 25) }, 200)
      }
    })
  },

  fix: function(){
    this.$panel.addClass('m-fixed').css({ left: this.left })
  },

  unfix: function(){
    this.$panel.removeClass('m-fixed').css({ left: 'auto' })
  },
}
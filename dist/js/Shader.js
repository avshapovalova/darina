const Shader = {
  $el: '',

  init: function(){
    const self = this
    this.$el = $('.js-shader')
    this.$el.on('click', function(){
      $(Shader).trigger('close')
      self.close()
    })
  },

  open: function(){
    this.$el.addClass('m-active')
  },

  close: function(){
    this.$el.removeClass('m-active')
  }
}
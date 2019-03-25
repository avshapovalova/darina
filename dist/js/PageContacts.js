const PageContacts = {
  init: function() {
    console.log('PageContacts.init')
    this.handleSubmit()
  },

  handleSubmit: function () {
    $('form.contact-us__form').on('submit', function(e) {
      e.preventDefault();
      $.magnificPopup.open({
        items: {
          src: '#submit-ok',
          type:'inline'
        },
        modal: true,
        callbacks: {
          beforeOpen: function () {
            this.st.mainClass = this.st.mainClass + ' popup-style__bg';
          }
        }
      });
    });
  }
}

import Component from '@ember/component';

export default Component.extend({

  share: null,

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }

});

import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service('store'),

  share: null,

  account: computed('shareLotId', function() {
    return this.get('store').queryRecord('user', {});
  }),

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
      this.set('quantity', null); // trigger on open, only make holding request on open as well!
    },
    sell: function() {
      let trade = this.get('store').createRecord('sale', {
        shareLotId: this.get('share.id')
      });
      trade.save();
    }
  }

});

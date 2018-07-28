import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service('store'),

  share: null,

  account: computed('shareLotId', function() {
    return this.get('store').queryRecord('user', {});
  }),

  totalCost: computed('share', 'quantity', function() {
    return this.get('share.price') * this.get('quantity');
  }),

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
      this.set('quantity', null); // trigger on open, only make holding request on open as well!
    },
    buy: function() {
      let trade = this.get('store').createRecord('purchase', {
        trackName: this.get('share.trackName'),
        artist: this.get('share.artist'),
        quantity: this.get('quantity')
      });
      trade.save();
    }
  }

});

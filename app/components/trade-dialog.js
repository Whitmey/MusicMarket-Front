import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service('store'),

  share: null,

  account: computed('shareLotId', function() {
    return this.get('store').queryRecord('user', {});
  }),

  holding: computed('share', 'isShowingModal', function() {
    return this.get('store').queryRecord('share', {
      trackName: this.get('share.trackName'),
      artist: this.get('share.artist')
    });
  }),

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
      this.set('quantity', null);
    },
    buy: function() {
      let trade = this.get('store').createRecord('share', {
        trackName: this.get('share.trackName'),
        artist: this.get('share.artist'),
        quantity: this.get('quantity')
      });
      trade.save();
    },
    sell: function() {
      // sell endpoint
    }
  }

});

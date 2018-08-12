import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service('store'),

  share: null,

  loading: false,
  displaySuccess: false,

  account: computed('shareLotId', function() {
    return this.get('store').queryRecord('user', {});
  }),

  totalCost: computed('share', 'quantity', function() {
    return this.get('share.price') * this.get('quantity');
  }),

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
      this.set('quantity', null); // trigger on open!
    },
    buy: function() {
      this.set('loading', true);
      let trade = this.get('store').createRecord('purchase', {
        trackName: this.get('share.trackName'),
        artist: this.get('share.artist'),
        quantity: this.get('quantity')
      });
      trade.save().then(() => {
        this.get('store').findAll('song', { reload: true });
        this.get('store').queryRecord('user', {}, { reload: true });
      });
      let success = () => {
        this.set('loading', false);
        this.set('displaySuccess', true);
      };
      let end = () => {
        this.toggleProperty('isShowingModal');
      };
      setTimeout(success, 2000);
      setTimeout(end, 5000);
    }
  }

});

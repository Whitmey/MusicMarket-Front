import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  store: service('store'),

  share: null,

  account: computed('shareLotId', function() {
    // if share lot id -> get current quantity by share lot ID
    // else get quantity by all share lots
    return this.get('store').queryRecord('user', {});
  }),

  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    sell: function() {
      if (this.get('shareLotId')) {
        // sell by share lot id
      }
      else {
        // sell all
      }
    }
  }

});

import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({

  classNames: [ 'balance-view' ],

  store: service('store'),

  account: computed(function() {
    return this.get('store').queryRecord('user', {});
  })

});

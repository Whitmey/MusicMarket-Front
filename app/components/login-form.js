import Component from '@ember/component';
import Ember from 'ember';

const { inject } = Ember;

export default Component.extend({

  session: inject.service('session'),

  actions: {
    authenticate: function() {
      const credentials = this.getProperties('username', 'password');
      const authenticator = 'authenticator:jwt'; // or 'authenticator:jwt'

      this.get('session').authenticate(authenticator, credentials);
    }
  }

});

import Route from '@ember/routing/route';
import Ember from 'ember';

const { inject } = Ember;

export default Route.extend({

  session: inject.service('session'),

  actions: {
    authenticate: function(username, password) {
      this.set('username', username);
      this.set('password', password);
      const credentials = this.getProperties('username', 'password');
      const authenticator = 'authenticator:jwt'; // or 'authenticator:jwt'

      this.get('session').authenticate(authenticator, credentials).then(() => {
        this.transitionTo('portfolio');
      });
    }
  }

});

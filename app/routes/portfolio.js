import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {

  model() {
    return RSVP.hash({
      portfolio: this.get('store').queryRecord('portfolio', {}),
      account: this.get('store').queryRecord('user', {})
    });
  }

});

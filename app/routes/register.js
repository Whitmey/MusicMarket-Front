import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    register: function(email, password, username) {
      console.log(email);
      let user = this.get('store').createRecord('user', { email: email, password: password, username: username });

      user.save();
        // .then(() => {
        //   this.transitionTo('login');
        // });
    }
  }

});

import DS from 'ember-data';

export default DS.Model.extend({

  email: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  balance: DS.attr()

});

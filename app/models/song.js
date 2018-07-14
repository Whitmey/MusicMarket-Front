import DS from 'ember-data';

export default DS.Model.extend({

  position: DS.attr(),
  trackname: DS.attr(),
  artist: DS.attr(),
  streams: DS.attr(),
  price: DS.attr()

});

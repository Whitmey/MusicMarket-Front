import DS from 'ember-data';

export default DS.Model.extend({

  position: DS.attr(),
  trackName: DS.attr(),
  artist: DS.attr(),
  streams: DS.attr(),
  price: DS.attr(),
  change: DS.attr(),
  changeAsPercent: DS.attr()

});

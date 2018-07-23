import DS from 'ember-data';

export default DS.Model.extend({

  shareId: DS.attr(),
  shareLotId: DS.attr(),
  userId: DS.attr(),
  trackName: DS.attr(),
  artist: DS.attr(),
  quantity: DS.attr(),
  value: DS.attr(),
  profitLoss: DS.attr()

});

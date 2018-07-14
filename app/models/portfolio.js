import DS from 'ember-data';

export default DS.Model.extend({

  shares: DS.attr(),
  totalPortfolioValue: DS.attr(),
  totalProfitOrLoss: DS.attr()

});

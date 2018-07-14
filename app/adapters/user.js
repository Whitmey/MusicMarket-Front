import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  urlForCreateRecord() {
    return 'http://localhost:8000/register';
  }

});

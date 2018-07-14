import RESTAdapter from './application';

export default RESTAdapter.extend({

  urlForQueryRecord(store, type, query) {
    return 'http://localhost:8000/portfolio';
  }

});

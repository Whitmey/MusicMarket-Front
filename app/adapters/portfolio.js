import RESTAdapter from './application';

export default RESTAdapter.extend({

  urlForQueryRecord() {
    return 'http://localhost:8000/portfolio';
  }

});

import RESTAdapter from './application';

export default RESTAdapter.extend({

  urlForCreateRecord() {
    return 'http://localhost:8000/sell'
  }

});

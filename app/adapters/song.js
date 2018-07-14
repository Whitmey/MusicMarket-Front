import RESTAdapter from './application';

export default RESTAdapter.extend({

  urlForFindAll() {
    return 'http://localhost:8000/songs';
  }

});

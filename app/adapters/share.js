import RESTAdapter from './application';

export default RESTAdapter.extend({

  urlForCreateRecord() {
    return 'http://localhost:8000/buy';
  },

  urlForQueryRecord(query) {
    return `http://localhost:8000/holding/${query.trackName}/${query.artist}`;
  }

});

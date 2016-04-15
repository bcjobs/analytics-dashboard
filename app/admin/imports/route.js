import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Route.extend({
  queryParams: {
    at: {
      refreshModel: true
    }
  },
  model({at}) {
    var currentDate = moment().format(DATE_FORMAT);
    return this.store.ajax({
      url: '/api/v1.0/reports/raw',
      query: {
        at: at || currentDate
      }
    }).then(rawData => ({
        rawData
    })).catch(error =>{
      var body = error.responseJSON;
      if (body && body.code) {
        return {
          error: body
        };
      }
      throw error;
    });
  },
  setupController(controller, {rawData}) {
    var reports = rawData.sources
    controller.setProperties({
      reports,
    });
  }
});

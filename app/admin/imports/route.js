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
    var yesterday =  moment().subtract(1, 'days').startOf('day').format(DATE_FORMAT);
    return this.store.ajax({
      url: '/api/v1.0/reports/ads',
      query: {
        at: at || yesterday
      }
    }).catch(error =>{
      var body = error.responseJSON;
      if (body && body.code) {
        return {
          error: body
        };
      }
      throw error;
    });
  }
});

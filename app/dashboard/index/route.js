import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  queryParams: {
    at: {
      refreshModel: true
    }
  },

  beforeModel() {
    $('body').addClass('loading');
  },

  model(params) {
    var range = this.modelFor('dashboard');
    var at = params.at || range.endsAt;
    return this.store.ajax({
      url: `/api/v1.0/reports/trends`,
      query: {
        at: at,
        type: 'Software'
      }
    }).then(trends => ({
      trends,
      range
    })).catch(error => {
      // handle not found error gracefully
      var body = error.responseJSON;
      if (body && body.code) {
        return {
          range: range,
          error: body
        };
      }
      throw error;
    });
  },

  afterModel() {
    $('body').removeClass('loading');
  },

  setupController(controller, {trends, range, error}) {
    controller.setProperties({
      trends,
      range,
      error
    });
  }
});

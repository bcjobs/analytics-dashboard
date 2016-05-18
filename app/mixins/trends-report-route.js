import Ember from 'ember';
import $ from 'jquery';

export default Ember.Mixin.create({
  queryParams: {
    at: {
      refreshModel: true
    }
  },

  beforeModel() {
    $('.spinner-loader').removeClass('hidden');
    $('.spinner-container').removeClass('hidden');
    $('body').addClass('loading');
  },

  model(params) {
    var range = this.modelFor('dashboard');
    var at = params.at || range.endsAt;
    return this.store.ajax({
      url: `/api/v1.0/reports/trends`,
      query: {
        at: at,
        filter: this.get('reportType')
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
    $('.spinner-loader').addClass('hidden');
    $('.spinner-container').addClass('hidden');
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

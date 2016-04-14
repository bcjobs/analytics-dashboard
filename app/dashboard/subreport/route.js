import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    at: {
      refreshModel: true
    }
  },
  beforeModel() {
    $('body').addClass('loading');
  },
  model(params){
    var range = this.modelFor('dashboard');
    var trend = params.trend;
    var subject = params.subject.toLowerCase();
    var at = params.at || range.endsAt;
    var type = params.filter;
    return this.store.ajax({
      url: `/api/v1.0/reports/trends/subreports`,
      query: {
        at: at,
        filter: type,
        trend: trend,
        subject: subject
      }
    }).then(subreport => ({
      subreport,
      range,
      trend,
      subject,
      type
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
  setupController(controller, {subreport, range, error, type}) {
    controller.setProperties({
      subreport,
      range,
      error,
      type
    });
  }
});

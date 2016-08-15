import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  queryParams: {
    at: {
      refreshModel: true
    },
    filter: {
      refreshModel: true
    },
    trend: {
      refreshModel: true
    },
    subject: {
      refreshModel: true
    },
    sector: {
      refreshModel: true
    },
    subsector: {
      refreshModel: true
    }
  },
  beforeModel() {
    $('body').addClass('loading');
    $('.spinner-loader').removeClass('hidden');
    $('.spinner-container').removeClass('hidden');
  },
  model(params){
    var range = this.modelFor('dashboard');
    var trend = params.trend;
    var subject = params.subject.toLowerCase();
    var subsector = params.subsector;
    var sector = params.sector;
    var at = params.at || range.endsAt;
    var type = params.filter;
    return this.store.ajax({
      url: `/api/v1.0/reports/trends/subreports`,
      query: {
        at: at,
        filter: type,
        trend: trend,
        subject: subject,
        sector: sector,
        subsector: subsector
      }
    }).then(subreport => ({
      subreport,
      range,
      trend,
      subject,
      sector,
      subsector,
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
    $('.spinner-loader').addClass('hidden');
    $('.spinner-container').addClass('hidden');
  },
  setupController(controller, {subreport, range, error, type}) {
    controller.setProperties({
      subreport,
      range,
      error,
      type
    });
  },
  actions :{
    switchReport(currentReport/*, at*/){
      this.transitionTo({queryParams: {filter: currentReport === 'Software' ? 'IT' : 'Software'} });
    }
  }
});

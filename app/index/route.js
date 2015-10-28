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
    return Ember.RSVP.resolve(
      Ember.$.getJSON('/api/v1.0/reports/outline?at=' + params.at)
    );
  },

  afterModel() {
    $('body').removeClass('loading');
  }
});

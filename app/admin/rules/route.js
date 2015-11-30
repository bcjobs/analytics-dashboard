import Ember from 'ember';
import $ from 'jquery';

var {Promise} = Ember.RSVP;

export default Ember.Route.extend({
  queryParams: {
    ruleType: {
      refreshModel: true
    }
  },

  model() {
    return this.store.ajax({url: '/api/v1.0/ruleTypes'});
  },

  setupController(controller, model) {
    controller.set('ruleTypes', model);
  }
});

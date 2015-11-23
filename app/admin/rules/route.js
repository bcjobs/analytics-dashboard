import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    ruleType: {
      refreshModel: true
    }
  },

  model() {
    return ["Job Title", "Company Name"];
  },

  setupController(controller, model) {
    controller.set('ruleTypes', model);
  }
});

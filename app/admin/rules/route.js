import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ["Job Title", "Company Name"];
  },

  setupController(controller, model) {
    controller.set('ruleTypes', model);
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      ruleTypes: ["Job Title", "Company Name"],
      ruleType: "Job Title"
    })
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }
});

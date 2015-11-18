import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      ruleTypes: ['Job Title', 'Company Name'],
      ruleType: 'Job Title',
      rules: [{
        isNew: true,
        terms: ['']
      }]
    })
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    search(text) {
      this.controller.set('rules', [{
        terms: ['Sr. Developer', 'Developer II'],
    		action: 'replace',
    		replaceWith: 'Senior Developer'
      },{
        terms: ['C# Developer'],
    		action: 'replace',
    		replaceWith: '.NET Developer'
      }]);
    }
  }
});

import Ember from 'ember';
import $ from 'jquery';

var {Promise} = Ember.RSVP;

export default Ember.Route.extend({
  model() {
    return {
      terms: [],
      action: "replace",
      replaceWith: "",
      ruleType: this.paramsFor('admin.rules').ruleType
    };
  },

  actions: {
    save() {
      var rule = this.controller.get('model');
      this.store.ajax({
        url: `/api/v1.0/rules`,
        method: 'POST',
        data: rule
      }).then(() => {
        this.transitionTo('admin.rules');
      });
    }
  }
});

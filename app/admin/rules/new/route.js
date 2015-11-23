import Ember from 'ember';
import $ from 'jquery';

var {Promise} = Ember.RSVP;

export default Ember.Route.extend({
  model() {
    return {
      terms: [],
      action: "replace",
      replaceWith: ""
    };
  },

  actions: {
    save() {
      var rule = this.controller.get('model');
      Promise.resolve($.ajax({
        url: `/api/v1.0/rules/`,
        method: 'POST',
        data: JSON.stringify(rule)
      })).then(() => {
        this.transitionTo('admin.rules');
      });
    }
  }
});

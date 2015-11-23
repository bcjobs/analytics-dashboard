import Ember from 'ember';
import $ from 'jquery';

var {Promise} = Ember.RSVP;

export default Ember.Route.extend({
  model({rule_id}) {
    return Promise.resolve($.getJSON(`/api/v1.0/rules/${rule_id}`));
  },

  actions: {
    save() {
      var rule = this.controller.get('model');
      Promise.resolve($.ajax({
        url: `/api/v1.0/rules/${rule.id}`,
        method: 'PUT',
        data: JSON.stringify(rule)
      })).then(() => {
        this.transitionTo('admin.rules');
      });
    }
  }
});

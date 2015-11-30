import Ember from 'ember';
import $ from 'jquery';

var {Promise} = Ember.RSVP;

export default Ember.Route.extend({
  model({rule_id}) {
    return this.store.ajax({url: `/api/v1.0/rules/${rule_id}`});
  },

  actions: {
    save() {
      var rule = this.controller.get('model');
      this.store.ajax({
        url: `/api/v1.0/rules/${rule.id}`,
        method: 'PUT',
        data: rule
      }).then(() => {
        this.transitionTo('admin.rules');
      });
    }
  }
});

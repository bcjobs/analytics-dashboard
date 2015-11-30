import Ember from 'ember';
import $ from 'jquery';

var {Promise} = Ember.RSVP;

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model({q}) {
    if (!q) {
      return [];
    }

    return this.store.ajax({
      url: '/api/v1.0/rules',
      query: {
        q: q,
        ruleType: this.paramsFor('admin.rules').ruleType
      }
    });
  },

  actions: {
    search(q) {
      this.transitionTo(this.routeName, {queryParams: {q: q}});
    },

    clearSearch() {
      this.transitionTo(this.routeName, {queryParams: {q: ''}});
    },

    deleteRule(rule) {
      this.store.ajax({
        url: `/api/v1.0/rules/${rule.id}`,
        method: 'DELETE'
      });
      this.controller.get('model').removeObject(rule);
    }
  }
});

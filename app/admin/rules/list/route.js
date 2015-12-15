import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model({q}) {
    return this.store.ajax({
      url: '/api/v1.0/rules',
      query: {
        q: q || undefined,
        ruleType: this.paramsFor('admin.rules').ruleType
      }
    });
  },

  setupController(controller, model) {
    controller.setProperties({
      model: model,
      ruleType: this.paramsFor('admin.rules').ruleType
    });
  },

  actions: {
    search() {
      this.transitionTo(this.routeName, {queryParams: {q: this.controller.get('query')}});
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

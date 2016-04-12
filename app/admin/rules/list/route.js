import Ember from 'ember';
import $ from 'jquery';

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

    deleteDialog(rule) {
      $('.modal').modal();
      this.set('controller.rule', rule);
    },

    confirmDelete() {
      let rule = this.get('controller.rule');
      this.store.ajax({
        url: `/api/v1.0/rules/${rule.id}`,
        method: 'DELETE'
      }).then(() =>{
        this.get('notify').info('Rule successfully deleted.');
        this.controller.get('model').removeObject(rule);
        $('.modal').modal('hide');
      }).catch(err => {
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Unable to delete rule.';
        this.get('notify').alert(errorMessage);
      });
    }
  }
});

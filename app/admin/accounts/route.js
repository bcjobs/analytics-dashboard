import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.ajax({
      url: '/api/v1.0/accounts'
    });
  },
  setupController(controller, model) {
    controller.set('accounts', model);
  }
});

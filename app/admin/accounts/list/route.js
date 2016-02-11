import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.ajax({
      url: '/api/v1.0/accounts'
    }).catch(error => {
      // handle not found error gracefully
      var body = error.responseJSON;
      if (body && body.code) {
        return {
          error: body
        };
      }
      throw error;
    });
  },
  setupController(controller, {model, error}) {
    controller.setProperties({
      model,
      error
    });
  }
});

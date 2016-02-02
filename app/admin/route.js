import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.ajax({
      url: '/api/v1.0/users/me'
    });
  },

  actions: {
    error(err) {
      if (err.status === 401) {
        this.transitionTo('authentication');
      }
    },

    logout() {
      this.store.ajax({
        url: '/api/v1.0/authentication/login',
        method: 'DELETE'
      }).then(() => {
        this.transitionTo('authentication');
      });
    }
  }
});

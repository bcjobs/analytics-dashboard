import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.ajax({
      url: '/api/v1.0/users/me'
    });
  },
  
  afterModel(model) {
    this.get('session').set('user', model);
  },
  
  actions: {
    error(err) {
      if (err.status === 401) {
        this.transitionTo('authentication');
      } else {
        return true;
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

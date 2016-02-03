import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

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

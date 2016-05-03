import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.ajax({
      url: '/api/v1.0/reports/range'
    });
  },
  actions: {
    logout() {
      this.get('store').ajax({
        url: '/api/v1.0/authentication/login',
        method: 'DELETE'
      }).then(() => {
        this.get('session').set('user', null);
      });
    }
  }
});

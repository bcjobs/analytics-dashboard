import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.ajax({
      url: '/api/v1.0/users/me'
    }).then(me => {
      this.get('session').set('user', me);
    }, () => {
      // silently ignore error...user will be treated as if s/he's logged out
    });
  }
});

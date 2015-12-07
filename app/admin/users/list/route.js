import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.ajax({
      url: '/api/v1.0/users'
    });
  },

  actions: {
    deleteUser(user) {
      this.store.ajax({
        url: `/api/v1.0/users/${user.id}`,
        method: 'DELETE'
      });
      this.controller.get('model').removeObject(user);
    }
  }
});

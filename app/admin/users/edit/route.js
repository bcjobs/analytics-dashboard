import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.ajax({
      url: `/api/v1.0/users/${params.user_id}`
    });
  },

  actions: {
    save() {
      var user = this.controller.get('model');
      this.store.ajax({
        url: `/api/v1.0/users/${user.id}`,
        method: 'PUT',
        data: user
      }).then(() => {
        this.transitionTo('admin.users');
      });
    }
  }
});

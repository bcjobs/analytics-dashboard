import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      email: '',
      firstName: '',
      lastName: ''
    };
  },

  actions: {
    save() {
      var user = this.controller.get('model');
      this.store.ajax({
        url: `/api/v1.0/users`,
        method: 'POST',
        data: user
      }).then(() => {
        this.transitionTo('admin.users');
      });
    }
  }
});

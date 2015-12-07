import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.setProperties({
        password: ''
      });
    }
  },

  actions: {
    setPassword() {
      var data = this.controller.getProperties('password', 'token', 'id');
      this.store.ajax({
        url: '/api/v1.0/authentication/password',
        method: 'PUT',
        data: data
      }).then(() => {
        this.controller.set('done', true);
      }).catch(err => {
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Internal Error';
        this.controller.set('errorMessage', errorMessage);
      });
    }
  }
});

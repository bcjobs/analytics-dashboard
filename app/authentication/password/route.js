import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function(controller, isExiting/*, transition*/) {
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
        this.get('notify').info({html:'Your password has been changed! <a href="/authentication">Continue to login</a>', closeAfter: null});
      }).catch(err => {
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Internal Error';
        this.get('notify').alert(errorMessage);
      });
    }
  }
});

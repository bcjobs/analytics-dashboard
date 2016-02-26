import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function(controller, isExiting/*, transition*/) {
    if (isExiting) {
      controller.setProperties({
        email: '',
        password: ''
      });
    }
  },
  notify: Ember.inject.service(),

  actions: {
    login(email, password) {
      this.store.ajax({
        url: `/api/v1.0/authentication/login`,
        method: 'POST',
        data: {email, password}
      }).then(() => {
        this.transitionTo('admin.rules');
      }).catch(err => {
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Internal Error';
        this.get('notify').alert(errorMessage);
      });
    }
  }
});

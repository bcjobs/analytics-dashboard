import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function(controller, isExiting/*, transition*/) {
    if (isExiting) {
      controller.setProperties({
        email: ''
      });
    }
  },
  notify: Ember.inject.service(),

  actions: {
    submit() {
      this.store.ajax({
        url: '/api/v1.0/authentication/resetPassword',
        method: 'POST',
        data: {
          email: this.controller.get('email')
        }
      }).then(() => {
        this.controller.set('done', true);
      }).catch(err => {
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Internal Error';
        this.get('notify').alert(errorMessage);
      });
    }
  }
});

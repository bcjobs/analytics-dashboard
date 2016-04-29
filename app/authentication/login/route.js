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

  actions: {
    login(email, password) {
      this.store.ajax({
        url: `/api/v1.0/authentication/login`,
        method: 'POST',
        data: {email, password}
      }).then(() => {
        this.store.ajax({
          url: '/api/v1.0/users/me'
        }).then(me => {
          this.get('session').set('user', me);
          if(this.get('session.isAdmin')){
            this.transitionTo("admin.rules");
          } else {
            this.transitionTo("dashboard");
          }
        });
      }).catch(err => {
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Internal Error';
        this.get('notify').alert(errorMessage);
      });
    }
  }
});

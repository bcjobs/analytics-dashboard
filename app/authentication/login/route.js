import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(email, password) {
      this.controller.set('errorMessage', null);
      this.store.ajax({
        url: `/api/v1.0/authentication/login`,
        method: 'POST',
        data: {email, password}
      }).then(() => {
        this.transitionTo('admin');
      }).catch(err => {
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Internal Error';
        this.controller.set('errorMessage', errorMessage);
      });
    }
  }
});

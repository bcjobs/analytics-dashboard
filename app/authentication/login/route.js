import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login(email, password) {
      this.controller.set('errorMessage', null);
      Promise.resolve($.ajax({
        url: `/api/v1.0/authentication/login`,
        method: 'POST',
        contentType : 'application/json',
        data: JSON.stringify({email, password})
      })).then(() => {
        this.transitionTo('admin');
      }).catch(err => {
        this.controller.set('errorMessage', 'Error');
      });
    }
  }
});

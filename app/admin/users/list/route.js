import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model() {
    return this.store.ajax({
      url: '/api/v1.0/users'
    });
  },

  actions: {
    deleteDialog(user){
      $('.modal').modal();
      this.set('controller.user', user);
    },
    confirmDelete(){
      let user = this.get('controller.user');
      this.store.ajax({
        url: `/api/v1.0/users/${user.id}`,
        method: 'DELETE'
      }).then(() =>{
        this.get('notify').info('User successfully deleted.');
        this.controller.get('model').removeObject(user);
        $('.modal').modal('hide');
      }).catch(err => {
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Unable to delete user.';
        this.get('notify').alert(errorMessage);
      });
    }
  }
});

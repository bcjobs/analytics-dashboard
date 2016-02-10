import Ember from 'ember';

export default Ember.Service.extend({
  user: null,
  
  isAdmin: Ember.computed('user.roles', function() {
    return this.isInRole('Admin');
  }),
  
  isInRole(role) {
    if (!this.get('user.roles')) {
      return false;
    }
    
    if (!Ember.isArray(this.get('user.roles'))) {
      return false;
    }
    
    return this.get('user.roles').indexOf(role) !== -1;
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error(err) {
      console.log(err);
      if (err.status === 401) {
        this.transitionTo('authentication');
      }
    }
  }
});

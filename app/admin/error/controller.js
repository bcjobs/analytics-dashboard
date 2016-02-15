import Ember from 'ember';

export default Ember.Controller.extend({
  message: Ember.computed({
    get() {
      if (this.get('model.responseJSON.message')) {
        return this.get('model.responseJSON.message');
      } else {
        return 'An unexpected error occurred!';
      }
    }
  })
});

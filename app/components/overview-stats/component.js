import Ember from 'ember';

export default Ember.Component.extend({
  direction: Ember.computed('model.current', 'model.previous', function() {
    var current = this.get('model.current');
    var previous = this.get('model.previous');

    if (current > previous) {
      return 'up';
    }
    else if (previous > current) {
      return 'down';
    }
    else {
      return null;
    }
  })
});

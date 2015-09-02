import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  direction: Ember.computed('current', 'previous', function() {
    var current = this.get('current');
    var previous = this.get('previous');
    if (current > previous) {
      return 'up';
    }
    else if (previous > current) {
      return 'down';
    }
    else {
      return null;
    }
  }),

  differenceRatio: Ember.computed('current', 'previous', function() {
    var current = this.get('current');
    var previous = this.get('previous');
    if (previous === 0) {
      return null;
    }
    var difference = (current - previous);
    return Math.abs(difference / previous);
  })
});

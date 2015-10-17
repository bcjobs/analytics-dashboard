import Ember from 'ember';
import range from 'npm:lodash/utility/range';

var DEFAULT_ITEMS = 10;

export default Ember.Component.extend({
  emptyItems: Ember.computed('model.top', function() {
    var length = this.get('model.top.length');
    if (length >= DEFAULT_ITEMS) {
      return [];
    }
    return range(0,  DEFAULT_ITEMS - length);
  }),
});

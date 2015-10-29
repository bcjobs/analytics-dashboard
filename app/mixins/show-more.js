import Ember from 'ember';
import range from 'npm:lodash/utility/range';

// This mixin contains common computed properties for visible and empty items
// based on list of all items and isShowingAll flag.

export default Ember.Mixin.create({
  isShowingAll: false,

  items: [],

  defaultCount: 5,

  showMoreButton: Ember.computed('items', 'visibleItems', function() {
    return this.get('items').length > this.get('visibleItems').length;
  }),

  visibleItems: Ember.computed('isShowingAll', 'items', 'defaultCount', function() {
    var items = this.get('items') || [];
    if (this.get('isShowingAll')) {
      return items;
    }
    return items.slice(0, this.get('defaultCount'));
  }),

  emptyItems: Ember.computed('items', 'defaultCount', function() {
    var length = this.get('items.length');
    if (length >= this.get('defaultCount')) {
      return [];
    }
    return range(0,  this.get('defaultCount') - length);
  })
});

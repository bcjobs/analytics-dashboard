import Ember from 'ember';
import range from 'npm:lodash/utility/range';

var DEFAULT_ITEMS = 5;

export default Ember.Component.extend({
  isShowingAll: false,

  showMoreButton: Ember.computed('isShowingAll', 'model', function() {
    if (this.get('isShowingAll')) {
      return false;
    }
    return this.get('model').length > DEFAULT_ITEMS;
  }),

  items: Ember.computed('isShowingAll', 'model', function() {
    var model = this.get('model') || [];
    if (this.get('isShowingAll')) {
      return model;
    }
    return model.slice(0, DEFAULT_ITEMS);
  }),

  emptyItems: Ember.computed('items', function() {
    var length = this.get('items.length');
    if (length >= DEFAULT_ITEMS) {
      return [];
    }
    return range(0,  DEFAULT_ITEMS - length);
  }),

  actions: {
    showMore() {
      this.set('isShowingAll', true);
    }
  }
});

import Ember from 'ember';
import ShowMore from 'analytics-dashboard/mixins/show-more';

export default Ember.Component.extend(ShowMore, {
  items: Ember.computed.alias('model.top'),

  actions: {
    showMore() {
      this.set('isShowingAll', true);
    }
  }
});

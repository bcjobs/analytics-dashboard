import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  placement: 'right',
  title: '',
  didInsertElement() {
    this.$().tooltip(this.getProperties('title', 'placement'));
  },
  willDestroyElement() {
    this.$().tooltip('destroy');
  }
});

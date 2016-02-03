import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteRule(rule) {
      this.sendAction('deleteRule', rule);
    }
  }
});

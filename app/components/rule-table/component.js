import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    deleteRule(rule) {
      this.sendAction('deleteRule', rule);
    }
  }
});

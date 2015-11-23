import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  terms: Ember.computed('rule.terms', function() {
    return this.get('rule.terms').join(', ');
  }),

  description: Ember.computed('rule.action', 'rule.replaceWith', function() {
    var {action, replaceWith} = this.get('rule');
    switch (action) {
      case 'replace':
        return `Replace with ${replaceWith}`;
      case 'ignoreValue':
        return 'Ignore value';
      case 'ignoreJob':
        return 'Ignore job';
    }
  }),

  actions: {
    delete() {
      this.sendAction('delete', this.get('rule'));
    }
  }
});

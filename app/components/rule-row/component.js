import Ember from 'ember';

let expandText = "Expand...";
let collapseText = "Collapse...";

export default Ember.Component.extend({
  tagName: 'tr',

  terms: Ember.computed('rule.terms', function() {
    return this.get('rule.terms');
  }),
  toggleText: expandText,
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
    },
    toggleTerm() {
      this.$(`[data-rule="${this.get('rule.id')}"]`).toggle();
      if(this.$(`[data-rule="${this.get('rule.id')}"]`).is(":visible")){
        this.set('toggleText', collapseText);
      } else {
        this.set('toggleText', expandText);
      }
    }
  }
});

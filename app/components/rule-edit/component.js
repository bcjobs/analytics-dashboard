import Ember from 'ember';

export default Ember.Component.extend({
  terms: Ember.computed('rule.terms.[]', function() {
    return this.get('rule.terms');
  }),
  textValue: Ember.computed('rule.terms.[]', function(){
    return this.get('terms').join('\n');
  }),
  rows: Ember.computed('rule.terms.[]', function(){
    return this.get('terms').length + 1 > 10 ? this.get('terms').length + 1: 10;
  }),
  didInsertElement() {
    Ember.$('[data-toggle="tooltip"]').tooltip();
  },
  newTerm: '',
  actions: {
    addTerm() {
      this.get('rule.terms').pushObject(this.get('newTerm'));
      this.set('newTerm', '');
    },
    textEdit(value) {
      // populates the terms array from the text area
      this.set('rule.terms', value.split('\n'));
    }
  }
});

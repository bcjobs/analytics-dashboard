import Ember from 'ember';
import isNumber from 'npm:lodash/lang/isNumber';

export default Ember.Component.extend({
  terms: Ember.computed('rule.terms.[]', function() {
    return this.get('rule.terms');
  }),
  textValue: Ember.computed('rule.terms.[]', function(){
    return this.get('terms').join('\n');
  }),
  rows: Ember.computed('rule.terms.[]', function(){
    return this.get('terms').length + 1 > 10 ? this.get('terms').length + 1: 10
  }),
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

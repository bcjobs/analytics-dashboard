import Ember from 'ember';
import isNumber from 'npm:lodash/lang/isNumber';

export default Ember.Component.extend({
  terms: Ember.computed('rule.terms.[]', function() {
    var terms = this.get('rule.terms').map((term, index) => ({
      value: term,
      index: index,
      canDelete: true
    }));
    terms.push({
      value: '',
      canDelete: false
    });
    return terms;
  }),
  newTerm: '',

  actions: {
    changeTerm({index, value}) {
      var terms = this.get('rule.terms');
      if (isNumber(index)) {
        terms.replace(index, 1, [value]);
      }
      else {
        terms.pushObject(value);
      }
    },

    removeTerm({index}) {
      var terms = this.get('rule.terms');
      terms.removeAt(index, 1);
    }
  }
});

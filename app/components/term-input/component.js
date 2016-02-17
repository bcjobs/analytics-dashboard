import Ember from 'ember';
//~TODO: Need to add 'confirmation' to finishing a rule, currently each keystore is a new rule
export default Ember.Component.extend({
  tagName: 'span',

  ruleType: 'Job Title',

  include: 'all',

  autosubmit: false,

  didInsertElement() {
    var search = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: `/api/v1.0/search?ruleType=${encodeURIComponent(this.get('ruleType'))}&include=${encodeURIComponent(this.get('include'))}&q=%QUERY`,
        wildcard: '%QUERY'
      }
    });

    this.$('.typeahead').typeahead(null, {
      name: 'terms',
      source: search,
      limit: 10
    });

    this.$('.typeahead').bind('typeahead:select', (ev, value) => {
      this.set('value', value);
      this.sendAction('action', value);

      if (this.get('autosubmit')) {
        this.$('.typeahead').submit();
      }
    });
  },

  actions: {
    input(value) {
      this.sendAction('action', value);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  ruleType: 'Job Title',

  didInsertElement() {
    var search = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: `/api/v1.0/search?ruleType=${encodeURIComponent(this.get('ruleType'))}&q=%QUERY`,
        wildcard: '%QUERY'
      }
    });

    this.$('.typeahead').typeahead(null, {
      name: 'terms',
      source: search,
      limit: 10      
    });

    this.$('.typeahead').bind('typeahead:select', (ev, value) => {
      this.sendAction('action', value);
    });
  },

  actions: {
    input(value) {
      this.sendAction('action', value);
    }
  }
});

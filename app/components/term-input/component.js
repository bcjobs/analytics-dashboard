import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  ruleType: 'Job Title',

  include: 'all',

  autosubmit: false,

  search: null,

  typeAhead: Ember.observer('ruleType', function(){
    this.set('search.remote.url', `/api/v1.0/search?ruleType=${encodeURIComponent(this.get('ruleType'))}&include=${encodeURIComponent(this.get('include'))}&q=%QUERY`);
    // Remove old autocomplete field & replace it with new autocomplete field with the new rule type
    this.$('.typeahead').typeahead("destroy");
    this.$('.typeahead').typeahead(null, {
      name: 'terms',
      source: this.get('search'),
      limit: 10
    });

    this.$('.typeahead').bind('typeahead:select', (ev, value) => {
      this.set('value', value);
      this.sendAction('action', value);

      if (this.get('autosubmit')) {
        this.$('.typeahead').submit();
      }
    });
  }),

  didInsertElement() {
    this.set('search', new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: `/api/v1.0/search?ruleType=${encodeURIComponent(this.get('ruleType'))}&include=${encodeURIComponent(this.get('include'))}&q=%QUERY`,
        wildcard: '%QUERY'
      }
    }));

    this.$('.typeahead').typeahead(null, {
      name: 'terms',
      source: this.get('search'),
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

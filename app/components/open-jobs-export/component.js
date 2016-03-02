import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend({
  to: null,
  from: null,
  processed: false,

  startsAt: Ember.computed('range', function() {
    return moment(this.get('range.startsAt')).toDate();
  }),

  endsAt: Ember.computed('range', function() {
    return moment(this.get('range.endsAt')).toDate();
  }),

  processedBy: Ember.computed('processed', function() {
    return this.get('processed') ? "Normalization" : "BotcodeDedupe";
  }),

  didInitAttrs() {
    this.set('from', this.get('endsAt'));
    this.set('to', this.get('endsAt'));
  },

  actions: {
    download() {
      window.location.href = `/api/v1.0/exports/openJobs?from=${moment(this.get('from')).format(DATE_FORMAT)}&to=${moment(this.get('to')).format(DATE_FORMAT)}&processedBy=${this.get('processedBy')}`;
    }
  }
});

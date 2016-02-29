import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend({
  at: null,

  startsAt: Ember.computed('range', function() {
    return moment(this.get('range.startsAt')).toDate();
  }),

  endsAt: Ember.computed('range', function() {
    return moment(this.get('range.endsAt')).toDate();
  }),

  didInitAttrs() {
    this.set('at', this.get('endsAt'));
  },

  actions: {
    download() {
      window.location.href = '/api/v1.0/exports/openJobs?at=' + moment(this.get('at')).format(DATE_FORMAT);
    }
  }
});

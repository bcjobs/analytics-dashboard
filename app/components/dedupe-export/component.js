import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend({
  at: '',

  atDate: Ember.computed('at', 'model', {
    get() {
      if (!this.get('at')){
        this.set('atDate', this.get('endsAt'));
      }

      return moment(this.get('at')).toDate();
    },
    set(key, value) {
      this.set('at', value ? moment(value).format(DATE_FORMAT) : '');
      return value;
    }
  startsAt: Ember.computed('range', function() {
    return moment(this.get('range.startsAt')).toDate();
  }),

  endsAt: Ember.computed('range', function() {
    return moment(this.get('range.endsAt')).toDate();
  }),

  }),

  actions: {
    download() {
      window.location.href = '/api/v1.0/jobs/csv?at=' + this.get('at');
    }
  }
});

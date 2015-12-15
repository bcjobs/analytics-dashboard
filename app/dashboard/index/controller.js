import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Controller.extend({
  queryParams: ['at'],

  at: '',

  atDate: Ember.computed('at', 'range', {
    get() {
      var at = this.get('at');
      var endsAt = this.get('range.endsAt');
      return at ? moment(at).toDate() : moment(endsAt).toDate();
    },
    set(key, value) {
      this.set('at', value ? moment(value).format(DATE_FORMAT) : '');
      return value;
    }
  }),

  startsAt: Ember.computed('range', function() {
    return moment(this.get('range.startsAt')).toDate();
  }),

  endsAt: Ember.computed('range', function() {
    return moment(this.get('range.endsAt')).toDate();
  })
});

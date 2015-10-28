import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Controller.extend({
  queryParams: ['at'],

  at: moment().subtract(1, 'days').format(DATE_FORMAT),
  startDate: moment("2015-08-20").toDate(),
  yesterday: moment().subtract(1, 'days').startOf('day').toDate(),

  atDate: Ember.computed('at', {
    get() {
      var at = this.get('at');
      return at ? moment(at).toDate() : null;
    },
    set(key, value) {
      this.set('at', value ? moment(value).format(DATE_FORMAT) : '');
      return value;
    }
  })
});

import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Controller.extend({
  queryParams: ['at'],

  at: moment().format(DATE_FORMAT),
  today: moment().startOf('day').toDate(),

  atDate: Ember.computed('at', {
    get() {
      var at = this.get('at');
      return at ? new Date(at) : null;
    },
    set(key, value) {
      this.set('at', value ? moment(value).format(DATE_FORMAT) : '');
      return value;
    }
  })
});

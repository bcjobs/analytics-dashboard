import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Controller.extend({
  queryParams: ['at', 'filter', 'trend', 'subject', 'sector', 'subsector'],
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
  })
});

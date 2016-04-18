import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Controller.extend({
  endsAt: moment().subtract(1, 'days').startOf('day').toDate(),
  atDate: Ember.computed('at', {
    get() {
      var at = this.get('at');
      var endsAt = this.get('endsAt');
      return at ? moment(at).toDate() : moment(endsAt).toDate();
    },
    set(key, value) {
      this.set('at', value ? moment(value).format(DATE_FORMAT) : '');
      return value;
    }
  })

});

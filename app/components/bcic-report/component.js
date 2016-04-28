import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

function direction(current, average) {
  if (current > average) {
    return 'up';
  }
  else if (current < average) {
    return 'down';
  }
  else {
    return null;
  }
}

export default Ember.Component.extend({
  classNames: ['bcic-report'],

  openJobsDirection: Ember.computed('model.summary.openJobs.current', 'model.summary.openJobsAverage.current', function() {
    return direction(
      this.get('model.summary.openJobs.current'),
      this.get('model.summary.openJobsAverage.current')
    );
  }),

  newJobsDirection: Ember.computed('model.summary.newJobs.current', 'model.summary.newJobsAverage.current', function() {
    return direction(
      this.get('model.summary.newJobs.current'),
      this.get('model.summary.newJobsAverage.current')
    );
  }),

  newJobsTotal: Ember.computed.or('model.charts.monthly.newJobsTotal', 'model.charts.montly.newJobTotal'),
  openJobsAverage: Ember.computed.or('model.charts.monthly.openJobsAverage', 'model.charts.montly.openJobsAverage'),

  at: Ember.computed('atDate', function(){
    return this.get('atDate') ? moment(this.get('atDate')).format(DATE_FORMAT) : '';
  }),

  startsAt: Ember.computed('range', function() {
    return moment(this.get('range.startsAt')).toDate();
  }),

  endsAt: Ember.computed('range', function() {
    return moment(this.get('range.endsAt')).toDate();
  }),

  isSoftwareReport: Ember.computed('type', function(){
    return this.get('type') === 'Software';
  }),

  actions: {
    logout() {
      this.get('targetObject.store').ajax({
        url: '/api/v1.0/authentication/login',
        method: 'DELETE'
      }).then(() => {
        this.get('session').set('user', null);
      });
    }
  }
});

import Ember from 'ember';
import moment from 'npm:moment';

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

  startsAt: Ember.computed('range', function() {
    return moment(this.get('range.startsAt')).toDate();
  }),

  endsAt: Ember.computed('range', function() {
    return moment(this.get('range.endsAt')).toDate();
  })
});

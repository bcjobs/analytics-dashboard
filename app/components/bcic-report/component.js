import Ember from 'ember';
import range from 'npm:lodash/utility/range';

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

  five: range(0, 5),
  ten: range(0, 10)
});

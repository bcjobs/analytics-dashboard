import Ember from 'ember';
import TrendsReportRoute from 'analytics-dashboard/mixins/trends-report-route';

export default Ember.Route.extend(TrendsReportRoute, {
  reportType: 'IT',
  actions: {
    switchReport(currentReport, at){
      this.transitionTo('dashboard.index', {queryParams: {at: at} });
    }
  }
});

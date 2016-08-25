import Ember from 'ember';
import TrendsReportRoute from 'analytics-dashboard/mixins/trends-report-route';

export default Ember.Route.extend(TrendsReportRoute, {
  reportType: 'Software',
  actions :{
    switchReport(currentReport, at){
      this.transitionTo('dashboard.it-jobs', {queryParams: {at: at, sector: this.get('controller.sector'), subSector: this.get('controller.subSector')} });
    }
  }
});

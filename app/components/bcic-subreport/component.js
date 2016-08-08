import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  classNames: ['bcic-subreport'],
  isCompany: false,
  currentDate: Ember.computed('atDate', function(){
    return moment(this.get('atDate')).subtract(1, 'days').startOf('day').format('MMM D, YYYY');
  }),
  data: Ember.computed('model', 'model.[]', function(){
    var data = this.get('model');
    data.skillChart = data.skills;
    data.titleChart = data.titles;
    data.companyChart = {
      top: data.companies
    };

    // Hide company column when looking at a specific company
    this.set('isCompany', this.get('trend') === 'Company');

    // Remove chart that isn't relevent to current trend
    data[`${this.get('trend').toLowerCase()}Chart`] = null;

    return data;
  }),
  startsAt: Ember.computed('range', function() {
    return moment(this.get('range.startsAt')).toDate();
  }),

  endsAt: Ember.computed('range', function() {
    return moment(this.get('range.endsAt')).toDate();
  }),
  actions: {
    switchReport(currentReport, at){
      this.sendAction('action', currentReport, at);
    },
    logout(){
      this.sendAction('logout');
    }
  }
});

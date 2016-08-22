import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend({
    at: Ember.computed('atDate', function(){
      return this.get('atDate') ? moment(this.get('atDate')).format(DATE_FORMAT) : '';
    }),

    switchReportName: Ember.computed('type', function(){
      return this.get('type') === 'Software' ? "IT Job Report" : "Software Job Report";
    }),

    subsectorList : ["Clean Tech", "Digital Media", "Life Sciences", "Engineering", "ICT", "Other", "Other Tech Sector",
     "Other Apparel", "Other Auction", "Other Automotive", "Other Construction", "Other Consulting",
     "Other Consumer Services", "Other Education", "Other Energy", "Other Engineering Sector", "Other Entertainment",
      "Other Environment", "Other Financial Services", "Other Government", "Other Health", "Other Law", "Other Marketing",
      "Other Real Estate", "Other Retail", "Other Staffing", "Other Supply Chain"],

    sectorList : ["Technology", "Other", "Apparel", "Auction", "Automotive", "Construction", "Consulting", "Consumer Services",
     "Education", "Energy", "Engineering Sector", "Entertainment", "Environment", "Financial Services",
     "Government", "Health", "Law", "Marketing", "Real Estate", "Retail", "Staffing", "Supply Chain"],

  actions: {
    switchReport(currentReport){
      this.sendAction('action', currentReport, this.get('at'));
    },
    logout(){
      this.sendAction('logout');
    }
  }
});

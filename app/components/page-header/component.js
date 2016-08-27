import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend({
    init(){
      this._super();
      this.get('parentView.targetObject.store').ajax({
        url: `/api/v1.0/sectors`
      }).then((sectorList) => {
        this.set('sectorList', sectorList);
      });
    },

    at: Ember.computed('atDate', function(){
      return this.get('atDate') ? moment(this.get('atDate')).format(DATE_FORMAT) : '';
    }),

    switchReportName: Ember.computed('type', function(){
      return this.get('type') === 'Software' ? "IT Job Report" : "Software Job Report";
    }),

    sectorList: null,

  actions: {
    switchReport(currentReport){
      this.sendAction('action', currentReport, this.get('at'));
    },
    logout(){
      this.sendAction('logout');
    }
  }
});

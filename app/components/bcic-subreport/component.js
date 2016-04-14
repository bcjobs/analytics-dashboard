import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  classNames: ['bcic-subreport'],
  currentDate: Ember.computed('atDate', function(){
    return moment(this.get('atDate') - 1).format('MMM D, YYYY');
  }),
  data: Ember.computed('model', 'model.[]', function(){
    var data = this.get('model');
    // Decides what charts to show depending on trend
    if(this.get('trend') === 'Company'){
      data.skillChart = data.skills;
      data.titleChart = data.titles;
    } else if(this.get('trend') === 'Title') {
      data.skillChart = data.skills;
      data.companyChart = {
        top: data.companies
      };
    } else if(this.get('trend') === 'Skill'){
      data.titleChart = data.titles;
      data.companyChart = {
        top: data.companies
      };
    }
    return data;
  }),
  startsAt: Ember.computed('range', function() {
    return moment(this.get('range.startsAt')).toDate();
  }),

  endsAt: Ember.computed('range', function() {
    return moment(this.get('range.endsAt')).toDate();
  })
});

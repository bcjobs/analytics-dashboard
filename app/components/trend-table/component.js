import Ember from 'ember';
import ShowMore from 'analytics-dashboard/mixins/show-more';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend(ShowMore, {
  items: Ember.computed.alias('model'),

  displayPrevious: true,

  displayDownload: Ember.computed('exportSet', 'session.isAdmin', function(){
    return this.get('session.isAdmin') && this.get('exportSet') !== undefined; // prevents download link from appearing if there is no endpoint
  }),

  actions: {
    showMore() {
      this.set('isShowingAll', true);
    },
    downloadCSV(){
      window.location.href = `/api/v1.0/exports/${this.get('exportSet')}?at=${moment(this.get('atDate')).format(DATE_FORMAT)}&type=${this.get('type')}`;
    }
  }
});

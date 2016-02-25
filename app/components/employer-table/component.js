import Ember from 'ember';
import ShowMore from 'analytics-dashboard/mixins/show-more';
import moment from 'npm:moment';
var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend(ShowMore, {
  items: Ember.computed.alias('model.top'),
  loggedIn: function(){
    this.get('parentView.targetObject.store').ajax({
      url: '/api/v1.0/users/me'
    }).then(function(){
      this.set('session.loggedIn', true && this.get('exportSet') !== undefined); // prevents download link from appearing if there is no endpoint
    }.bind(this));
  },
  actions: {
    showMore() {
      this.set('isShowingAll', true);
      this.loggedIn();
    },
    downloadCSV(){
      window.location.href = `/api/v1.0/exports/${this.get('exportSet')}?at=${moment(this.get('atDate')).format(DATE_FORMAT)}&type=${this.get('type')}`;
    }
  }
});

import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model(params) {
    return this.store.ajax({
      url: '/api/v1.0/reports/range'
    });
  }
});

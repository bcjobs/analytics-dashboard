import Ember from 'ember';
import $ from 'jquery';

var {Promise} = Ember.RSVP;

export default Ember.Object.extend({
  ajax({url, method, query, data}) {
    return Promise.resolve($.ajax({
      url: url,
      method: method || 'GET',
      contentType : 'application/json',
      data: query ? query : (data ? JSON.stringify(data) : '')
    }));
  }
});

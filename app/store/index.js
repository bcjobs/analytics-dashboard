import Ember from 'ember';
import $ from 'jquery';

export default Ember.Object.extend({
  ajax({url, method = 'GET', query, data}) {
    return Promise.resolve($.ajax({
      url: url,
      method: method,
      contentType : 'application/json',
      data: query ? query : (data ? JSON.stringify(data) : '')
    }));
  }
})

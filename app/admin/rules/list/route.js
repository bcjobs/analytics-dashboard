import Ember from 'ember';
import $ from 'jquery';

var {Promise} = Ember.RSVP;

export default Ember.Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model({q}) {
    if (!q) {
      return [];
    }

    return Promise.resolve($.getJSON('/api/v1.0/rules', {
      q: q
    }));
  },

  actions: {
    search(q) {
      this.controller.set('q', q);
    }
  }
});

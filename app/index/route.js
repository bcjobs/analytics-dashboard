import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.resolve(
      Ember.$.getJSON('/api/v1.0/reports/outline' + window.location.search)
    );
  }
});

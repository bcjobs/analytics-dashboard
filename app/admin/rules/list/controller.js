import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['q'],

  q: '',
  query: '',
  rule: null
});

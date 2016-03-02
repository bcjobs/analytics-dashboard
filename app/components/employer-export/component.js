import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    download(){
      window.location.href = '/api/v1.0/exports/employers';
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model({rule_id}) {
    return this.store.ajax({url: `/api/v1.0/rules/${rule_id}`});
  },

  actions: {
    save() {
      var rule = this.controller.get('model');
      this.store.ajax({
        url: `/api/v1.0/rules/${rule.id}`,
        method: 'PUT',
        data: rule
      }).then(() => {
        this.transitionTo('admin.rules');
      }).catch(err =>{
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Internal Error';
        this.controller.set('errorMessage', errorMessage);
      });
    }
  }
});

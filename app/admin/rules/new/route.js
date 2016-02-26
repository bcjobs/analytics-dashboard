import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      terms: [],
      action: "replace",
      replaceWith: "",
      ruleType: this.paramsFor('admin.rules').ruleType
    };
  },
  notify: Ember.inject.service(),
  actions: {
    save() {
      var rule = this.controller.get('model');
      this.store.ajax({
        url: `/api/v1.0/rules`,
        method: 'POST',
        data: rule
      }).then(() => {
        this.transitionTo('admin.rules');
      }).catch(err =>{
        var errorMessage = Ember.get(err, 'responseJSON.message') || 'Internal Error';
        this.get('notify').alert(errorMessage);
      });
    }
  }
});

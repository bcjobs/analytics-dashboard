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
  resetController: function(controller, isExiting/*, transition*/) {
    if (isExiting) {
      controller.setProperties({
        errorMessage: null
      });
    }
  },
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
        this.controller.set('errorMessage', errorMessage);
      });
    }
  }
});

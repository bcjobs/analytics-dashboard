import Ember from 'ember';

export default Ember.Controller.extend({
  // Splits usage into array so it can be seperated by line breaks
  currentAccounts: Ember.computed('accounts.@each.usage',function(){
    return this.get('accounts').map((acc) => {
      acc.usage = acc.usage.split('\n');
      return acc;
    });
  })
});

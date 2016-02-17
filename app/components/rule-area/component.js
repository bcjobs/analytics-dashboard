import Ember from 'ember';
//~TODO: Need to add ability to modify terms array

export default Ember.Component.extend({
  textValue: Ember.computed('terms.[]', function(){
    var text = "";
    this.get('terms').map(item => {
      text += `${item.value}\n`;
    });
    return text;
  }),
  rows: Ember.computed('terms.[]', function(){
    return this.get('terms').length + 1;
  })
});

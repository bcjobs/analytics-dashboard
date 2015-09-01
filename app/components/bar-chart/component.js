import Ember from 'ember';
import Chartist from 'npm:chartist';
import moment from 'npm:moment';

export default Ember.Component.extend({
  didInsertElement() {
    var model = this.get('model');
    new Chartist.Bar(this.element, {
      labels: model.map(item => moment(item.x).format('MMM')),
      series: [
        model.map(item => item.y),
      ]
    }, {
      height: '250'
    });
  }
});

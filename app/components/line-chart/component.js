import Ember from 'ember';
import Chartist from 'npm:chartist';
import moment from 'npm:moment';

export default Ember.Component.extend({
  didInsertElement() {
    var model = this.get('model');
    new Chartist.Line(this.element, {
      labels: model.map(item => moment(item.x).format('MMM D')),
      series: [
        model.map(item => item.y),
      ]
    }, {
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.none({}),
      chartPadding: {
        right: 40
      },
      height: '250'
    });
  }
});

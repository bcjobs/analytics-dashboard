import Ember from 'ember';
import Chartist from 'npm:chartist';
import moment from 'npm:moment';
import numeral from 'npm:numeral';
import Tooltip from 'npm:tether-tooltip';

export default Ember.Component.extend({
  didInsertElement() {
    var model = this.get('model');
    var chart = new Chartist.Line(this.element, {
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
    chart.on('draw', data => this.draw(data));
  },
  draw(data) {
    if (data.type === 'point') {
      var datum = this.get('model')[data.index];

      /*jshint unused:false */
      var tooltip = new Tooltip({
        target: data.element._node,
        content: `${moment(datum.x).format('MMM D')}<br>
          ${numeral(datum.y).format('0,0')} Jobs`,
        classes: 'tooltip-theme-arrows chart-tooltip chart-tooltip--line',
        position: 'top center'
      });
    }
  }
});

import Ember from 'ember';
import $ from 'jquery';
import Chartist from 'npm:chartist';
import moment from 'npm:moment';
import numeral from 'npm:numeral';

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

      var $point = $(data.element._node);

      $point.tooltip({
        placement: 'top',
        title: `${moment(datum.x).format('MMM D')}\n${numeral(datum.y).format('0,0')} Jobs`,
        container: this.$(),
      });
    }
  }
});

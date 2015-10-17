import Ember from 'ember';
import Chartist from 'npm:chartist';
import moment from 'npm:moment';
import numeral from 'npm:numeral';

export default Ember.Component.extend({
  didInsertElement() {
    var model = this.get('model');
    var chart = new Chartist.Bar(this.element, {
      labels: model.map(item => moment(item.x).format('MMM')),
      series: [
        model.map(item => item.y),
      ]
    }, {
      height: '250'
    });
    chart.on('draw', data => this.draw(data));
  },
  draw(data) {
    if (data.type === 'bar') {
      var datum = this.get('model')[data.index];

      var $bar = $(data.element._node);

      $bar.tooltip({
        placement: 'top',
        title: `${moment(datum.x).format('MMM YYYY')}\n${numeral(datum.y).format('0,0')} Jobs`,
        container: this.$(),
      });
    }
  }
});

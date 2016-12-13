import Ember from 'ember';
import $ from 'jquery';
import Chartist from 'npm:chartist';
import moment from 'npm:moment';
import numeral from 'npm:numeral';

export default Ember.Component.extend({
  data: Ember.computed('model', function() {
    // Filter out empty data points
    var model = this.get('model').filter(item => { if(item.y !== 0.0) { return item; } });
    return {
      labels: model.map(item => moment(item.x).format('MMM')),
      series: [
        model.map(item => item.y),
      ]
    };
  }),

  didInsertElement() {
    var chart = new Chartist.Bar(this.element, this.get('data'), {
      height: '250'
    });
    chart.on('draw', data => this.draw(data));
    this.chart = chart;
  },

  didUpdate() {
    this.chart.update(this.get('data'));
  },

  draw(data) {
    if (data.type === 'bar') {
      var datum = this.get('model').filter(item => { if(item.y !== 0.0) { return item; } })[data.index];

      var $bar = $(data.element._node);

      $bar.tooltip({
        placement: 'top',
        title: `${moment(datum.x).format('MMM YYYY')}\n${numeral(datum.y).format('0,0')} Jobs`,
        container: this.$(),
      });
    }
  }
});

import Ember from 'ember';
import $ from 'jquery';
import Chartist from 'npm:chartist';
import legend from 'npm:chartist-plugin-legend';
import moment from 'npm:moment';
import numeral from 'npm:numeral';

//Splits chart into seperate years for multiple lines
function yearlyData(data){
  var points = [];
  while(data.length > 12){
    var year = data.splice(0,12);
    points.push({name: moment(year[0].x).format('Y'), data: year.map(item => item.y)});
  }
  points.push({name: moment(data[0].x).format('Y'), data: data});
  return points;
}
export default Ember.Component.extend({
  data: Ember.computed('model', function() {
    var model = this.get('model');
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: yearlyData(model)
    };
  }),

  didInsertElement() {
    var chart = new Chartist.Line(this.element, this.get('data'), {
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.none({}),
      chartPadding: {
        right: 40
      },
      height: '250',
      plugins: [
        legend()
      ]
    }
    );
    chart.on('draw', data => this.draw(data));
    this.chart = chart;
  },

  didUpdate() {
    this.chart.update(this.get('data'));
  },

  draw(data) {
    if (data.type === 'point') {
      var datum = this.get('model')[data.index];

      var $point = $(data.element._node);

      $point.tooltip({
        placement: 'top',
        title: `${moment(datum.x).format('MMM Y')}\n${numeral(datum.y).format('0,0')} Jobs`,
        container: this.$(),
      });
    }
  }
});

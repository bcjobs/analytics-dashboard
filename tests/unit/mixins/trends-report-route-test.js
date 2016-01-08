import Ember from 'ember';
import TrendsReportRouteMixin from '../../../mixins/trends-report-route';
import { module, test } from 'qunit';

module('Unit | Mixin | trends report route');

// Replace this with your real tests.
test('it works', function(assert) {
  var TrendsReportRouteObject = Ember.Object.extend(TrendsReportRouteMixin);
  var subject = TrendsReportRouteObject.create();
  assert.ok(subject);
});

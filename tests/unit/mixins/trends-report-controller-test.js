import Ember from 'ember';
import TrendsReportControllerMixin from '../../../mixins/trends-report-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | trends report controller');

// Replace this with your real tests.
test('it works', function(assert) {
  var TrendsReportControllerObject = Ember.Object.extend(TrendsReportControllerMixin);
  var subject = TrendsReportControllerObject.create();
  assert.ok(subject);
});

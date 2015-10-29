import Ember from 'ember';
import ShowMoreMixin from '../../../mixins/show-more';
import { module, test } from 'qunit';

module('Unit | Mixin | show more');

// Replace this with your real tests.
test('it works', function(assert) {
  var ShowMoreObject = Ember.Object.extend(ShowMoreMixin);
  var subject = ShowMoreObject.create();
  assert.ok(subject);
});

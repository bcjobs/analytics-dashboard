import Ember from 'ember';
import range from 'npm:lodash/utility/range';

export default Ember.Component.extend({
  five: range(0, 5),
  ten: range(0, 10)
});

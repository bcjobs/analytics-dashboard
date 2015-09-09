import Ember from 'ember';
import numeral from 'npm:numeral';

export function formatNumber([number, format]/*, hash*/) {
  return numeral(number).format(format || '0,0');
}

export default Ember.Helper.helper(formatNumber);

import Ember from 'ember';
import numeral from 'npm:numeral';

export function formatNumber([number, format = '0,0']/*, hash*/) {
  return numeral(number).format(format);
}

export default Ember.Helper.helper(formatNumber);

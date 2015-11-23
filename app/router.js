import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('rules', function() {
      this.route('list', {path: '/'});
      this.route('rule', {path: ':rule_id'});
      this.route('new');
    });
  });
});

export default Router;

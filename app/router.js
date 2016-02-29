import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', {path: '/'}, function() {
    this.route('index', {path: '/'});
    this.route('it-jobs');
  });
  this.route('admin', function() {
    this.route('rules', function() {
      this.route('list', {path: '/'});
      this.route('rule', {path: ':rule_id'});
      this.route('new');
    });
    this.route('users', function() {
      this.route('list', {path: '/'});
      this.route('edit', {path: ':user_id'});
      this.route('new');
    });
    this.route('export');
    this.route('accounts');
  });

  this.route('authentication', function() {
    this.route('login', {path: '/'});
    this.route('resetPassword');
    this.route('password');
  });
});

export default Router;

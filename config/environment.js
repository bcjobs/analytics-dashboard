/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'analytics-dashboard',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
    'font-src': "'self' http://fonts.gstatic.com",
    'connect-src': "'self' https://dc.services.visualstudio.com",
    'script-src': "'self' 'unsafe-inline' http://az416426.vo.msecnd.net"
  }


  if (environment === 'development') {
    // Uncomment to enable application insights in dev environment
    // ENV['ember-cli-ai'] = {
    //   instrumentationKey: 'eb509bae-b863-4088-b91e-d9e620a2f1bc'
    // };

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-cli-ai'] = {
      instrumentationKey: '78b5faad-89c3-4309-b973-26fc2cd41cea'
    };
  }

  return ENV;
};

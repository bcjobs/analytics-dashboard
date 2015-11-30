import Store from 'analytics-dashboard/store/index';

export function initialize(container, application) {
  application.register('store:main', Store);
  application.inject('route', 'store', 'store:main');
  application.inject('controller', 'store', 'store:main');
}

export default {
  name: 'store',
  initialize: initialize
};

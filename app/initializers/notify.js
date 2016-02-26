export function initialize(container, application) {
  application.inject('route', 'notify', 'service:notify');
  application.inject('controller', 'notify', 'service:notify');
  application.inject('component', 'notify', 'service:notify');
}

export default {
  name: 'notify',
  initialize: initialize
};

import Ember from 'ember';

export default Ember.Component.extend({
  size: '',
  allowClose: true,

  modalClass: function() {
    var size = this.get('size');
    if (!size) {
      return '';
    }
    return `modal-${size}`;
  }.property('size'),


  didInsertElement() {
    this.modal = this.$('.modal');
    this.modal.modal('hide');
    this.modal.on('hidden.bs.modal', (e) => this.didHide(e));
    this.modal.on('hide.bs.modal', (e) => this.willHide(e));
    this.modal.on('shown.bs.modal', (e) => this.didShow(e));
  },

  willDestroyElement() {
    this.modal.off('hidden.bs.modal');
    this.modal.off('hide.bs.modal');
    this.modal.off('shown.bs.modal');
    this.modal.removeClass('fade');
    this.modal.modal('hide');
  },

  didShow() {
    this.$('[autofocus]').focus();
  },

  willHide(e) {
    if (!this.get('allowClose')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  },

  didHide() {
    this.sendAction('close');
  }
});

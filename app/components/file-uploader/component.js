import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({

  filesDidChange(files) {
    if (Ember.isEmpty(files)) {
      return;
    }

    var uploader = EmberUploader.Uploader.create({
      url: this.get('url'),
      type: this.get('method') ? this.get('method') : 'POST'
    });

    uploader.on('progress', this.progress.bind(this, files[0].name));
    uploader.on('didUpload', this.didUpload.bind(this, files[0].name));
    uploader.on('didError', this.didError.bind(this, files[0].name));
    uploader.upload(files[0]);
  },

  progress(fileName, e) {
    this.sendAction('onProgress', fileName, e.percent);
  },

  didUpload(fileName) {
    this.sendAction('onSuccess', fileName);
  },

  didError(fileName, jqXHR/*, textStatus, errorThrown*/) {
    this.sendAction('onError', fileName, jqXHR.responseJSON.message);
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  uploadProgress: null,
  uploadError: null,
  uploadSuccess: null,
  showUploadButton: Ember.computed.not('uploadProgress'),

  actions: {
    onUploadProgress(fileName, percent) {
      this.setProperties({
        uploadProgress: percent,
        uploadError: null,
        uploadSuccess: null
      });
    },
    onUploadSuccess(fileName) {
      this.setProperties({
        uploadProgress: null,
        uploadError: null,
        uploadSuccess: fileName + ' uploaded successfully!'
      });
    },
    onUploadError(fileName, message) {
      this.setProperties({
        uploadProgress: null,
        uploadError: fileName + ' upload error: ' + message,
        uploadSuccess: null
      });
    }
  }  
});

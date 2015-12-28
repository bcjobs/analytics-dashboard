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
      console.log('onUploadProgress', fileName, percent);
    },
    onUploadSuccess(fileName) {
      this.setProperties({
        uploadProgress: null,
        uploadError: null,
        uploadSuccess: fileName + ' uploaded successfully!'
      });
      console.log('onUploadSuccess', fileName);
    },
    onUploadError(fileName, message) {
      this.setProperties({
        uploadProgress: null,
        uploadError: fileName + ' upload error: ' + message,
        uploadSuccess: null
      });
      console.log('onUploadError', fileName, message);
    }
  }  
});

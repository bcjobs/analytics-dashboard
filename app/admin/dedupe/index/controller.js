import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Controller.extend({

  at: '',

  atDate: Ember.computed('at', 'model', {
    get() {
      if (!this.get('at')){
        this.set('atDate', this.get('endsAt'));
      }

      return moment(this.get('at')).toDate();
    },
    set(key, value) {
      this.set('at', value ? moment(value).format(DATE_FORMAT) : '');
      return value;
    }
  }),

  startsAt: Ember.computed('model', function() {
    return moment(this.get('model.startsAt')).toDate();
  }),

  endsAt: Ember.computed('model', function() {
    return moment(this.get('model.endsAt')).toDate();
  }),

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

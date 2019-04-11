const mongoose = require('mongoose');
const File = new mongoose.Schema({
title: {
  type: String,
  required: true,
  path: {
  type: String,
  require: true,
  },
},

},
 {
  timestamps: true,  
  toObject: {virtuals: true},
  toJSON: {virtuals: true}
});


File.virtual('url').get(function(){
return `htpp://localhost:80/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('file', File);

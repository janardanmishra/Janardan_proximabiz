
const mongoose = require('mongoose');




const mySchema = new mongoose.Schema({
  subject: String,
  stream: String,
  lastModifiedByUserId: String
}, { timestamps: true });



const MyModel = mongoose.model('subjectDetails', mySchema);

module.exports = MyModel;
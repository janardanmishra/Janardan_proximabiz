
const mongoose = require('mongoose');




const mySchema = new mongoose.Schema({
  courseName: String,
  subject: String,
  type: String,
  lastModifiedByUserId: String
}, { timestamps: true });



const MyModel = mongoose.model('trainingCourse', mySchema);

module.exports = MyModel;

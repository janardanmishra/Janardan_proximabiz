var express = require('express');
var router = express.Router();


var SubjectDetails = require('../models/subjectDetails');
var TrainingCourse = require('../models/trainingCourse');



/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});







router.post('/addNewSubject', function (req, res) {

  let sub_Details = new SubjectDetails({ subject: req.body.subject, stream: req.body.stream, lastModifiedByUserId: req.body.lastModifiedByUserId })



  sub_Details.save(function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "Subject Details save successfully", data: result })
    }
  })

});





router.post('/addNewTraining', function (req, res) {


  let traCourse = new TrainingCourse({ courseName: req.body.courseName, subject: req.body.subject, type: req.body.type, lastModifiedByUserId: req.body.lastModifiedByUserId })


  traCourse.save(function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "Subject Details save successfully", data: result })
    }
  })

});





module.exports = router;

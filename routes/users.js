var express = require('express');
var router = express.Router();




var SubjectDetails = require('../models/subjectDetails');
var TrainingCourse = require('../models/trainingCourse');




/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});





router.get('/getAllSubject', function (req, res) {

  SubjectDetails.find({},null, { sort:{ createdAt:1 }}, function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "Subject Details save successfully", data: result })
    }
  })

});




router.get('/getTraining', function (req, res) {

  TrainingCourse.find({}, function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "TrainingCourse Details save successfully", data: result })
    }
  })

});



router.get('/getTrainingBySubject', function (req, res) {

  TrainingCourse.find({ subject: req.params.subject }, function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "TrainingCourse Details save successfully", data: result })
    }
  })

});



router.get('/getTrainingByStream', function (req, res) {

  TrainingCourse.find({ stream: req.params.stream }, function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "TrainingCourse Details save successfully", data: result })
    }
  })

});




router.get('/getTrainingByType', function (req, res) {

  TrainingCourse.find({ type: req.params.type }, function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "TrainingCourse Details save successfully", data: result })
    }
  })

});











module.exports = router;

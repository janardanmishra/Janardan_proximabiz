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



router.post('/getTrainingBySubject', function (req, res) {

  TrainingCourse.find({ subject: req.body.subject }, function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "TrainingCourse Details save successfully", data: result })
    }
  })

});



router.post('/getTrainingByStream', function (req, res) {

  TrainingCourse.find({ stream: req.body.stream }, function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "TrainingCourse Details save successfully", data: result })
    }
  })

});




router.post('/getTrainingByType', function (req, res) {

  TrainingCourse.find({ type: req.body.type }, function (err, result) {
    if (err) {
      res.json({ status: "ERROR", msg: "Getting issue", err: err });
    } else {
      res.json({ status: 200, msg: "TrainingCourse Details save successfully", data: result })
    }
  })

});










module.exports = router;

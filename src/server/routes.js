var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/manageUrSl');
var todayWork = require('./config/db');


var workClass = new todayWork();


router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/getTodayWork', getWork)
router.get('/*', four0four.notFoundMiddleware);


module.exports = router;

//////////////

function getWork(req, res, next) {
  todayWork.find({}, function (err, results) {
    if (err) {
      res.status(401).send(err);
      return;
    }
    res.status(200).send(results);
  });
}

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function (p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}

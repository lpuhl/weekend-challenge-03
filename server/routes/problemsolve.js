var express = require('express');
var router = express.Router();

// data array
// var cats = [{name: 'Luna', trait: 'Feisty'}];


// Routes
router.get('/', function(req, res) {
  res.send(problemSolve);
});

router.post('/', function(req, res) {
  console.log('request: ', req.body);
  // cats.push(req.body);
  res.sendStatus(201);
});

module.exports = router;

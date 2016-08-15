var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: true}));

var solution = {};

app.post('/problemsolve', function (req, res) {
  var problem = req.body;
  problem.firstvalue = Number(problem.firstvalue);
  problem.secondvalue = Number(problem.secondvalue);
  console.log('Problem: ', problem);

  if (problem.type == "add") {
    solution.answer = problem.firstvalue += problem.secondvalue;
  } else if (problem.type == "subtract") {
    solution.answer = problem.firstvalue - problem.secondvalue;
  } else if (problem.type == "multiply") {
    solution.answer = problem.firstvalue * problem.secondvalue;
  } else if (problem.type == "divide") {
    solution.answer = problem.firstvalue / problem.secondvalue;
  }
  res.sendStatus(200);
  console.log('Solution: ', solution.answer);
});

app.get('/problemsolve', function (req, res) {
  res.send(solution);
});


//serve static files
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});

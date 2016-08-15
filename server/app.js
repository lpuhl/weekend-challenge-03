var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: true}));

var solution = 0;

app.post('/problemsolve', function (req, res) {
  var problem = req.body;
  if (problem.type = "add") {
    solution = problem.firstvalue += problem.secondvalue;
  } else if (problem.type = "subtract") {
    solution = problem.firstvalue - problem.secondvalue;
  } else if (problem.type = "multiply") {
    solution = problem.firstvalue * problem.secondvalue;
  } else if (problem.type = "divide") {
    solution = problem.firstvalue / problem.secondvalue;
  }
  res.sendStatus(200);
  console.log(solution);
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

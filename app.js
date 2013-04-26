var express = require("express");
var app = express();
var coords = { lat: 0, lon: 0 };
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(express.logger());
app.use(allowCrossDomain);
app.use(express.bodyParser());
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
  response.render('index', { coords: coords });
});

app.get('/watch', function (request, response) {
  response.render('watch', { coords: coords });
});

app.post('/', function (request, response) {
  try {
    coords = request.body;
  } catch (err) {
    coords = { lat: 0, lon: 0 };
  }

  response.send(coords);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

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

app.get('/', function (request, response) {
  response.send(JSON.stringify(coords));
});

app.post('/', function (request, response) {
  try {
    coords = JSON.parse(request.params);
  } catch (err) {
    coords = { lat: 0, lon: 0 };
  }

  response.send(JSON.stringify(coords));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

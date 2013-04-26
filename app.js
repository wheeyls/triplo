var express = require("express");
var app = express();
var coords = { lat: 0, lon: 0 };
app.use(express.logger());

app.get('/', function (request, response) {
  response.send(JSON.stringify(coords));
});

app.post('/', function (request, response) {
  try {
    coords = JSON.parse(request.params);
  } catch (err) {
    coords = { lat: 0, lon: 0 };
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

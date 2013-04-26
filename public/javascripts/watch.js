(function () {
  window.navigator.geolocation.watchPosition(function (pos) {
    var lat = pos.coords.latitude
      , lon = pos.coords.longitude
      ;
    $.post('http://triplo.herokuapp.com/',
       { lat: lat, lon: lat },
       function (data) {
         $('#holder').html(JSON.stringify(data));
       });
  });
}());

(function () {
  window.navigator.geolocation.watchPosition(function (pos) {
    var lat = pos.coords.latitude
      , lon = pos.coords.longitude
      ;
    $.post('http://triplo.herokuapp.com/',
       { lat: lat, lon: lon },
       function (data) {
         $('#holder').html(JSON.stringify(data) + new Date());
       });
  });
}());

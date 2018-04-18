function myMap() {
var myLatlng = new google.maps.LatLng(39.870835, 32.854405);
var mapOptions = {
  zoom: 16,
  minZoom: 10, // Minimum zoom level allowed (0-20)
  maxZoom: 20, // Maximum soom level allowed (0-20)
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);


var icon = {

    path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
    fillColor: '#fad39e',
    fillOpacity: 0.9,
    anchor: new google.maps.Point(0,0),
    strokeWeight: 0,
    scale: 1.0
}

var marker = new google.maps.Marker({
    position: myLatlng,
    map:map,
    icon: icon
});


// To add the marker to the map, call setMap();
marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Hilal Mahallesi 691.Sokak <br>Ata Apt. No: 3/3 <br>Çankaya/ Ankara<br> <a href='https://www.google.com/maps/dir//Hilal+Mahallesi,+691.+Sokak,+%C3%87ankaya%2FAnkara/@39.8715181,32.8456292,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d345760e2eb805:0xb114824636f27aef!2m2!1d32.854384!2d39.871502'>Yol Tarifi</a>"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });

}
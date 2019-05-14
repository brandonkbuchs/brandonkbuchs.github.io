//leaflet map js

var map = L.map('map', {
  center: [33.55, -82.216],
  zoom: 17,
  zoomControl: false,
  minZoom: 13,
  maxZoom: 20
});

//enter tile layer

var maptile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);

//load GeoJSON file 

function addDataToMap(data, map) {
  var datalayer = L.geoJson(data);
  datalayer.addTo(map);
}

$.getJSON("churchfamilymembers.geojson", function(data) { addDataToMap(data, map); });


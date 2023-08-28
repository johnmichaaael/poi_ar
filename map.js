/*global L*/
var map;

function initmap() {
  map = new L.Map("map");

  var osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  var osmAttrib =
    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {
    minZoom: 2,
    maxZoom: 19,
    attribution: osmAttrib
  });

  map.setView(new L.LatLng(8.360056, 124.868423), 15);
  map.addLayer(osm);

  addMarker(
    8.360056,
    124.868423,
    "<b>Northern Bukidnon State College</b><br>is here"
  );

  addMarker(8.35921, 124.869096, "<b>Building B</b><br>is here");

  addMarker(
    8.359730350656932,
    124.86916568782704,
    "<b>CCS Building</b><br>is here"
  );
}

function addMarker(lat, lon, popupText) {
  var marker = L.marker([lat, lon]).addTo(map);
  marker.bindPopup(popupText).openPopup();
  marker.on("click", function () {
    window.location.href = "ar.html?lat=" + lat + "&lon=" + lon;
  });
}

initmap();

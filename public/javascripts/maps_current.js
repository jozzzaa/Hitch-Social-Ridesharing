

function initMap(element) {

  // Map Initialize

  var map = new google.maps.Map(document.getElementById(element), {
    center: {lat: -37.819806, lng: 144.9614263},
    zoom: 14,
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    styles: [
      {
        "featureType": "landscape.natural",
        "stylers": [
          { "color": "#0e0f1a" }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "color": "#161823" },
          { "lightness": 2 }
        ]
      },{
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#6b6c72" }
        ]
      },{
        "elementType": "labels.icon",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "color": "#161823" },
          { "lightness": 11 }
        ]
      },{
        "featureType": "landscape.man_made",
        "stylers": [
          { "color": "#0e0f1a" }
        ]
      },{
        "featureType": "poi",
        "stylers": [
          { "color": "#0e0f1a" }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "color": "#161823" }
        ]
      },{
        "elementType": "labels.text.stroke",
        "stylers": [
          { "color": "#0e0f1a" }
        ]
      }
    ]
  });

  var infoWindow = "";

  var iconBase = '/images/map_current_location.png';
  var marker = new google.maps.Marker({
    map: map,
    icon: iconBase
  });

 // Geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    marker.setPosition(pos);

    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

// Error Handle
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}

initMap('map');

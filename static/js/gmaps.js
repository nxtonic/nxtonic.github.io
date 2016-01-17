function initialize() {

  var stylesArray = [{
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" },
        { "grayscale": 100 }
      ]
    },{
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        { "weight": 3 },
        { "visibility": "simplified" }
      ]
    },{
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "transit",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "administrative",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    }
  ];

  var mapOptions = {
    center: new google.maps.LatLng(-37.817708, 144.967302),
    zoom: 13,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  var styledMap = new google.maps.StyledMapType(stylesArray,
    {name: "Styled Map"});

  var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);

  var marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
  });

  // Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });

  }

google.maps.event.addDomListener(window, 'load', initialize);

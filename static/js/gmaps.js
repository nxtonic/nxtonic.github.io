function initialize() {

  var stylesArray = [
    {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },
    {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
        { "visibility": "on" }
      ]
    },
    {
      "featureType": "all",
      "elementType": "geometry.stroke",
      "stylers": [
        { "visibility": "simplified" },
        { "weight": .35 }
      ]
    }
  ];

  // -37.821827, 144.962014

  // -37.846895, 144.969171

  var mapOptions = {
    center: new google.maps.LatLng(-37.821827, 144.962014),
    zoom: 12,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  var styledMap = new google.maps.StyledMapType(stylesArray,{name: "Styled Map"});
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });

};

google.maps.event.addDomListener(window, 'load', initialize);

'use strict';

(function () {

  var init = function () {
    var map = document.querySelector('#map-js');

    if(map) {
      map.outerHTML = '<div class="dislocation__map-wrapper dislocation__map-wrapper--interactive" id="map-js"></div>';
      map = document.querySelector('#map-js');

      let scriptMap = document.createElement('script');
      scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdxiZ8JD-Awc3VOchAbkcA54-XHZJYkGY&callback=initMap';
      scriptMap.defer = true;
      scriptMap.async = true;

      window.initMap = function() {
        let coordinates = {lat: 34.8679599, lng: -111.7617165};

        let googleMap = new google.maps.Map(map, {
          center: coordinates,
          zoom: 7
        });

        let mapMarker = new google.maps.Marker({
          position: coordinates,
          map: googleMap,
          icon: 'img/icon-map-marker.svg',
          title: 'Седона'
        });

      };

      document.head.appendChild(scriptMap);
    }
  };

  window.map = {
    init: init,
  }

})();

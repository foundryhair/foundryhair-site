var App = (function (window, document, undefined) {

  'use strict';

  // Only request the API if this element exists
  if ($('#map').length && !Modernizr.touch) {

    // Get latitude and longitude from data attributes
    var map = $('#map'),
      lat = map.data('lat'),
      lng = map.data('lng'),

      mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":50}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"labels.icon","stylers":[{"saturation":"-100"},{"lightness":"-54"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"lightness":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":"-89"},{"lightness":"-55"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":25}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"on"},{"saturation":"-100"},{"lightness":"-51"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}],

      // Map init, configuration
      mapInit = function () {

        var markerLatLng = new google.maps.LatLng(21.3953052, -157.743259),
            mapCenter = new google.maps.LatLng(lat, lng),
            mapOptions = {
              center: mapCenter,
              zoom: 17,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: mapStyles,
              mapTypeControl: false,
              scaleControl: false,
              scrollwheel: false,
              streetViewControl: false,
              rotateControl: false,
              zoomControl: false
            },
            map = new google.maps.Map(document.getElementById("map"), mapOptions),
            marker;

        $('.flip-button').on('click', function() {
          if ($('body').hasClass('postcard-flipped')) {
            setTimeout(function(){
              marker = new google.maps.Marker({
                position: markerLatLng,
                animation: google.maps.Animation.DROP,
                map: map
              });
            }, 500);
          } else {
            marker.setMap(null);
          }
        });
      },

      // Include Google Maps API
      includeAPI = function () {
        var js,
          fjs = document.getElementsByTagName('script')[0];

        if (!document.getElementById('gmap-api')) {
          js = document.createElement('script');
          js.id = 'gmap-api';
          js.setAttribute('async', '');
          js.src = "http://maps.google.com/maps/api/js?v=3&sensor=false&callback=App.mapInit";
          fjs.parentNode.insertBefore(js, fjs);
        }
      };

    includeAPI();
  }

  // Make mapInit() public so we can pass it to
  // the Google Maps API callback param
  return {
    mapInit: mapInit
  };

})(window, document);
export default class MapGen {
  constructor(selector, callback) {
    // Only request the API if this element exists
    // Get latitude and longitude from data attributes
    this.mapSelector = document.querySelector(selector);
    this.callback = callback;

    this.lat = this.mapSelector.getAttribute('data-lat');
    this.lng = this.mapSelector.getAttribute('data-lng');

    this.salonLat = 21.3950662;
    this.salonLng = -157.7430877;

    this.mapView = this.mapSelector.getAttribute('data-view') || 'map';

    this.mapStyles = [{"stylers": [ {"visibility": "off" } ] },{"featureType": "water","stylers": [{"visibility": "on"} ] },{"featureType": "poi","stylers": [ {"visibility": "on"} ]},{"featureType": "transit","stylers": [{ "visibility": "on"}] },{ "featureType": "landscape","stylers": [ { "visibility": "on" } ] },{ "featureType": "road", "stylers": [{ "visibility": "on" } ] },{ "featureType": "administrative",  "stylers": [{ "visibility": "on" } ] },{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:50}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"labels.icon",stylers:[{saturation:"-100"},{lightness:"-54"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi",elementType:"labels.icon",stylers:[{saturation:"-89"},{lightness:"-55"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:25}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"on"},{saturation:"-100"},{lightness:"-51"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}];

    this.includeAPI();

  }
  mapInit() {

    this.mapCenter = new google.maps.LatLng(this.lat, this.lng);

    const mapOptions = {
      center: this.mapCenter,
      zoom: (this.mapSelector.getAttribute('data-zoom')) ? parseInt(this.mapSelector.getAttribute('data-zoom')) : 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: this.mapStyles,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      scrollwheel: false,
      zoomControl: true
    };

    this.map = new google.maps.Map(this.mapSelector, mapOptions);

    // this.salonLat;
    // this.salonLng;

    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.salonLat, this.salonLng),
      animation: google.maps.Animation.DROP,
      map: this.map
    });

    google.maps.event.addDomListener(window, 'resize', () => {
      setTimeout( () => {
        this.center();
      }, 500);
    });

  }

  includeAPI() {
    var js,
        fjs = document.getElementsByTagName('script')[0];

    if (!document.getElementById('gmap-api')) {
      js = document.createElement('script');
      js.id = 'gmap-api';
      js.setAttribute('async', '');
      js.src = `http://maps.google.com/maps/api/js?libraries=geometry&v=3&callback=${this.callback}`;
      fjs.parentNode.insertBefore(js, fjs);
    }
  }

  center() {
    this.map.setCenter(this.mapCenter);
  }

}
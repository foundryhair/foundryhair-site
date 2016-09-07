export default class MapGen {
  constructor(selector, callback) {
    // Only request the API if this element exists
    // Get latitude and longitude from data attributes
    this.mapSelector = document.querySelector(selector);
    this.callback = callback;
    this.isMobile = window.matchMedia( "(max-width: 767px)" ).matches;

    this.lat = this.isMobile? 21.395 : 21.395372;
    this.lng = this.isMobile? -157.7455 : -157.744254;

    this.salonLat = 21.39515;
    this.salonLng = -157.74317;

    this.mapView = this.mapSelector.getAttribute('data-view') || 'map';

    this.includeAPI();

  }
  mapInit() {
    this.mapOptions = {
      mapTypeId: 'roadmap',
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      scrollwheel: false,
      styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
    };
    this.mapOptions.zoom = this.isMobile? 16 : 18;
    this.mapOptions.zoomControl = this.isMobile? false : true;
    this.mapOptions.draggable = this.isMobile? false : true;

    this.mapOptions.center = new google.maps.LatLng(this.lat, this.lng);
    this.map = new google.maps.Map(this.mapSelector, this.mapOptions);

    this.addMarker();

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
    this.map.setCenter(this.mapOptions.center);
  }

  addMarker() {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.salonLat, this.salonLng),
      animation: google.maps.Animation.DROP,
      map: this.map
    });
  }

}
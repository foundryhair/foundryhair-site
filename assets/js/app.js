(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _mapGenerator = require("./lib/map-generator");

var _mapGenerator2 = _interopRequireDefault(_mapGenerator);

var _instagramFeed = require("./lib/instagram-feed");

var _instagramFeed2 = _interopRequireDefault(_instagramFeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window['map'] = new _mapGenerator2.default('#map', 'map.mapInit');

var instagramFeed = new _instagramFeed2.default('instafeed');

var bLazy = new Blazy({
  selector: '.lazyloaded',
  successClass: 'lazyloaded-loaded',
  errorClass: 'lazyloaded-error'
});

},{"./lib/instagram-feed":2,"./lib/map-generator":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InstagramFeed = function () {
  function InstagramFeed(selector) {
    _classCallCheck(this, InstagramFeed);

    this.selector = selector;
    this.domSelector = document.querySelector('#' + selector);

    this.instagramOptions = {
      target: this.selector,
      get: 'user',
      userId: '2150537699',
      clientId: 'd6df1ba940414fbfbbc3c85dce7a0d06',
      resolution: 'standard_resolution',
      sortBy: 'most-liked',
      template: '<div class="feed__image" style="background-image:url({{image}})"></div>'
    };

    if (window.matchMedia("(max-width: 767px)").matches) {
      this.instagramOptions.limit = 20;
      this.instagramOptions.resolution = 'thumbnail';
    }

    this.initFeed();
  }

  _createClass(InstagramFeed, [{
    key: 'initFeed',
    value: function initFeed() {
      var instagramFeed = new Instafeed(this.instagramOptions);
      instagramFeed.run();
    }
  }]);

  return InstagramFeed;
}();

exports.default = InstagramFeed;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapGen = function () {
  function MapGen(selector, callback) {
    _classCallCheck(this, MapGen);

    // Only request the API if this element exists
    // Get latitude and longitude from data attributes
    this.mapSelector = document.querySelector(selector);
    this.callback = callback;

    this.lat = 21.395372;
    this.lng = -157.744254;

    this.latMobile = 21.395;
    this.lngMobile = -157.7455;

    this.salonLat = 21.39515;
    this.salonLng = -157.74317;

    this.mapView = this.mapSelector.getAttribute('data-view') || 'map';

    this.mapStyles = [{ "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "stylers": [{ "visibility": "on" }] }, { "featureType": "road", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "stylers": [{ "visibility": "on" }] }, { featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 50 }] }, { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] }, { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: "landscape", elementType: "all", stylers: [{ visibility: "on" }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "landscape", elementType: "labels.icon", stylers: [{ saturation: "-100" }, { lightness: "-54" }] }, { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 21 }] }, { featureType: "poi", elementType: "labels.icon", stylers: [{ saturation: "-89" }, { lightness: "-55" }] }, { featureType: "road", elementType: "labels.icon", stylers: [{ visibility: "on" }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: .2 }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 25 }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] }, { featureType: "transit.station", elementType: "labels.icon", stylers: [{ visibility: "on" }, { saturation: "-100" }, { lightness: "-51" }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 17 }] }];

    this.includeAPI();
  }

  _createClass(MapGen, [{
    key: 'mapInit',
    value: function mapInit() {
      var _this = this;

      this.mapOptions = {
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: this.mapStyles,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        scrollwheel: false,
        zoomControl: true
      };

      this.mapOptions.center = new google.maps.LatLng(this.lat, this.lng);

      if (window.matchMedia("(max-width: 767px)").matches) {
        this.mapOptions.center = new google.maps.LatLng(this.latMobile, this.lngMobile);
        this.mapOptions.draggable = false;
        this.mapOptions.zoom = 16;
        this.mapOptions.zoomControl = false;
      }

      this.map = new google.maps.Map(this.mapSelector, this.mapOptions);

      this.addMarker();

      google.maps.event.addDomListener(window, 'resize', function () {
        setTimeout(function () {
          _this.center();
        }, 500);
      });
    }
  }, {
    key: 'includeAPI',
    value: function includeAPI() {
      var js,
          fjs = document.getElementsByTagName('script')[0];

      if (!document.getElementById('gmap-api')) {
        js = document.createElement('script');
        js.id = 'gmap-api';
        js.setAttribute('async', '');
        js.src = 'http://maps.google.com/maps/api/js?libraries=geometry&v=3&callback=' + this.callback;
        fjs.parentNode.insertBefore(js, fjs);
      }
    }
  }, {
    key: 'center',
    value: function center() {
      this.map.setCenter(this.mapOptions.center);
    }
  }, {
    key: 'addMarker',
    value: function addMarker() {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.salonLat, this.salonLng),
        animation: google.maps.Animation.DROP,
        map: this.map
      });
    }
  }]);

  return MapGen;
}();

exports.default = MapGen;

},{}]},{},[1])


//# sourceMappingURL=maps/app.js.map

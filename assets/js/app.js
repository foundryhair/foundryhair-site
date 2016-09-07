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
  selector: '.lazyload',
  successClass: 'lazyload--success',
  errorClass: 'lazyload--error'
});

var resizing = false;
window.onresize = function () {
  if (!resizing) {
    resizing = true;
    setTimeout(function () {
      resizing = false;
      bLazy.revalidate();
    }, 500);
  }
};

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
      accessToken: '2150537699.0859844.afc93a81b3bb4c0c9a3fa70de5740b9a',
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
    this.isMobile = window.matchMedia("(max-width: 767px)").matches;

    this.lat = this.isMobile ? 21.395 : 21.395372;
    this.lng = this.isMobile ? -157.7455 : -157.744254;

    this.salonLat = 21.39515;
    this.salonLng = -157.74317;

    this.mapView = this.mapSelector.getAttribute('data-view') || 'map';

    this.includeAPI();
  }

  _createClass(MapGen, [{
    key: 'mapInit',
    value: function mapInit() {
      var _this = this;

      this.mapOptions = {
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        scrollwheel: false,
        styles: [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }]
      };
      this.mapOptions.zoom = this.isMobile ? 16 : 18;
      this.mapOptions.zoomControl = this.isMobile ? false : true;
      this.mapOptions.draggable = this.isMobile ? false : true;

      this.mapOptions.center = new google.maps.LatLng(this.lat, this.lng);
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

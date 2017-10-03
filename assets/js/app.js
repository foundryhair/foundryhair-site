(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*! smooth-scroll v12.1.5 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!(function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)})("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length;t<n;t++){var o=arguments[t];!(function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(o)}return e},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},i=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)},s=function(e){return e?a(e)+e.offsetTop:0},l=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},f=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)};return function(a,d){var m,h,g,p,v,b,y,S={};S.cancelScroll=function(){cancelAnimationFrame(y)},S.animateScroll=function(t,a,r){var f=o(m||n,r||{}),d="[object Number]"===Object.prototype.toString.call(t),h=d||!t.tagName?null:t;if(d||h){var g=e.pageYOffset;f.header&&!p&&(p=document.querySelector(f.header)),v||(v=s(p));var b,y,E,I=d?t:c(h,v,parseInt("function"==typeof f.offset?f.offset():f.offset,10)),O=I-g,A=u(),C=0,w=function(n,o){var r=e.pageYOffset;if(n==o||r==o||(g<o&&e.innerHeight+r)>=A)return S.cancelScroll(),l(t,o,d),f.after(t,a),b=null,!0},Q=function(t){b||(b=t),C+=t-b,y=C/parseInt(f.speed,10),y=y>1?1:y,E=g+O*i(f,y),e.scrollTo(0,Math.floor(E)),w(E,I)||(e.requestAnimationFrame(Q),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),f.before(t,a),S.cancelScroll(),e.requestAnimationFrame(Q)}};var E=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),S.animateScroll(h,g),h=null,g=null)},I=function(t){if(!f()&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(a))&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href)){var n;try{n=r(decodeURIComponent(g.hash))}catch(e){n=r(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?E():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),E()))}},O=function(e){b||(b=setTimeout((function(){b=null,v=s(p)}),66))};return S.destroy=function(){m&&(document.removeEventListener("click",I,!1),e.removeEventListener("resize",O,!1),S.cancelScroll(),m=null,h=null,g=null,p=null,v=null,b=null,y=null)},S.init=function(a){t&&(S.destroy(),m=o(n,a||{}),p=m.header?document.querySelector(m.header):null,v=s(p),document.addEventListener("click",I,!1),e.addEventListener("hashchange",E,!1),p&&e.addEventListener("resize",O,!1))},S.init(d),S}}));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
"use strict";

var _mapGenerator = require("./lib/map-generator");

var _mapGenerator2 = _interopRequireDefault(_mapGenerator);

var _bookingLink = require("./lib/booking-link");

var _bookingLink2 = _interopRequireDefault(_bookingLink);

var _smoothScroll = require("smooth-scroll");

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window['map'] = new _mapGenerator2.default('#map', 'map.mapInit');

var bLazy = new Blazy({
  selector: '.lazyload',
  successClass: 'lazyload--success',
  errorClass: 'lazyload--error',
  breakpoints: [{
    width: 768,
    src: 'data-src-small'
  }]
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

_smoothScroll2.default.init({
  selector: '[smooth-scroll]',
  speed: 500,
  easing: 'easeInOutCubic'
});

var bookingLink = new _bookingLink2.default('.booking-link');

},{"./lib/booking-link":3,"./lib/map-generator":4,"smooth-scroll":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BookingLink = function () {
  function BookingLink(selector) {
    var _this = this;

    _classCallCheck(this, BookingLink);

    this.selector = selector;
    this.elArr = [].concat(_toConsumableArray(document.querySelectorAll(selector)));

    this.elArr.forEach(function (el) {
      _this.setLink(el);
    });
  }

  _createClass(BookingLink, [{
    key: 'setLink',
    value: function setLink(el) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      switch (true) {
        case /android/i.test(userAgent):
          el.href = el.dataset['href-android'];
          break;
        case /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream:
          el.href = el.dataset['href-ios'];
          break;
        default:
          break;
      }
    }
  }]);

  return BookingLink;
}();

exports.default = BookingLink;

},{}],4:[function(require,module,exports){
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

},{}]},{},[2])

//# sourceMappingURL=maps/app.js.map

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*! smooth-scroll v10.0.1 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,n,o,r,a,i,u,c={},l="querySelector"in document&&"addEventListener"in e,s={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},f=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=f(!0,e[o],n[o]):e[o]=n[o])};o>n;n++){var a=arguments[n];r(a)}return e},d=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},h=function(e,t){var n,o,r=t.charAt(0),a="classList"in document.documentElement;for("["===r&&(t=t.substr(1,t.length-2),n=t.split("="),n.length>1&&(o=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document&&1===e.nodeType;e=e.parentNode){if("."===r)if(a){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===r&&e.id===t.substr(1))return e;if("["===r&&e.hasAttribute(n[0])){if(!o)return e;if(e.getAttribute(n[0])===n[1])return e}if(e.tagName.toLowerCase()===t)return e}return null},m=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===i?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return"#"+a},g=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},p=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=Math.max(o-t-n,0),Math.min(o,v()-b())},b=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},v=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},y=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},O=function(e){return e?d(e)+e.offsetTop:0},H=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};c.animateScroll=function(n,o,i){var c=y(o?o.getAttribute("data-options"):null),l=f(t||s,i||{},c),d="[object Number]"===Object.prototype.toString.call(n)?!0:!1,h=d||!n.tagName?null:n;if(d||h){var m=e.pageYOffset;l.selectorHeader&&!r&&(r=document.querySelector(l.selectorHeader)),a||(a=O(r));var b,I,S=d?n:p(h,a,parseInt(l.offset,10)),E=S-m,A=v(),j=0,L=function(t,r,a){var i=e.pageYOffset;(t==r||i==r||e.innerHeight+i>=A)&&(clearInterval(a),H(n,r,d),l.callback(n,o))},w=function(){j+=16,b=j/parseInt(l.speed,10),b=b>1?1:b,I=m+E*g(l.easing,b),e.scrollTo(0,Math.floor(I)),L(I,S,u)},C=function(){clearInterval(u),u=setInterval(w,16)};0===e.pageYOffset&&e.scrollTo(0,0),C()}};var I=function(t){e.location.hash;n&&(n.id=n.getAttribute("data-scroll-id"),c.animateScroll(n,o),n=null,o=null)},S=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(o=h(r.target,t.selector),o&&"a"===o.tagName.toLowerCase()&&o.hostname===e.location.hostname&&o.pathname===e.location.pathname&&/#/.test(o.href))){var a=m(o.hash);if("#"===a){r.preventDefault(),n=document.body;var i=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",i),n.id="",void(e.location.hash.substring(1)===i?I():e.location.hash=i)}n=document.querySelector(a),n&&(n.setAttribute("data-scroll-id",n.id),n.id="",o.hash===e.location.hash&&(r.preventDefault(),I()))}},E=function(e){i||(i=setTimeout(function(){i=null,a=O(r)},66))};return c.destroy=function(){t&&(document.removeEventListener("click",S,!1),e.removeEventListener("resize",E,!1),t=null,n=null,o=null,r=null,a=null,i=null,u=null)},c.init=function(n){l&&(c.destroy(),t=f(s,n||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,a=O(r),document.addEventListener("click",S,!1),e.addEventListener("hashchange",I,!1),r&&e.addEventListener("resize",E,!1))},c});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
"use strict";

var _mapGenerator = require("./lib/map-generator");

var _mapGenerator2 = _interopRequireDefault(_mapGenerator);

var _instagramFeed = require("./lib/instagram-feed");

var _instagramFeed2 = _interopRequireDefault(_instagramFeed);

var _bookingLink = require("./lib/booking-link");

var _bookingLink2 = _interopRequireDefault(_bookingLink);

var _smoothScroll = require("smooth-scroll");

var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

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

_smoothScroll2.default.init({
  selector: '[smooth-scroll]',
  speed: 500,
  easing: 'easeInOutCubic'
});

var bookingLink = new _bookingLink2.default('.booking-link');

},{"./lib/booking-link":3,"./lib/instagram-feed":4,"./lib/map-generator":5,"smooth-scroll":1}],3:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

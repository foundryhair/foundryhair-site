!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Blazy=e()}(this,function(){"use strict";function t(t){setTimeout(function(){var o=t._util;o.elements=a(t.options.selector),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,t.options.container&&f(t.options.container,function(t){l(t,"scroll",o.validateT)}),l(window,"resize",o.saveViewportOffsetT),l(window,"resize",o.validateT),l(window,"scroll",o.validateT)),e(t)},1)}function e(t){for(var e=t._util,n=0;n<e.count;n++){var s=e.elements[n];(o(s)||i(s,t.options.successClass))&&(t.load(s),e.elements.splice(n,1),e.count--,n--)}0===e.count&&t.destroy()}function o(t){var e=t.getBoundingClientRect();return e.right>=v.left&&e.bottom>=v.top&&e.left<=v.right&&e.top<=v.bottom}function n(t,e,o){if(!i(t,o.successClass)&&(e||o.loadInvisible||t.offsetWidth>0&&t.offsetHeight>0)){var n=t.getAttribute(p)||t.getAttribute(o.src);if(n){var a=n.split(o.separator),c=a[m&&a.length>1?1:0],l="img"===t.nodeName.toLowerCase();if(l||void 0===t.src){var u=new Image;u.onerror=function(){o.error&&o.error(t,"invalid"),r(t,o.errorClass)},u.onload=function(){l?t.src=c:t.style.backgroundImage='url("'+c+'")',s(t,o)},u.src=c}else t.src=c,s(t,o)}else o.error&&o.error(t,"missing"),i(t,o.errorClass)||r(t,o.errorClass)}}function s(t,e){r(t,e.successClass),e.success&&e.success(t),f(e.breakpoints,function(e){t.removeAttribute(e.src)}),t.removeAttribute(e.src)}function i(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function r(t,e){t.className=t.className+" "+e}function a(t){for(var e=[],o=document.querySelectorAll(t),n=o.length;n--;e.unshift(o[n]));return e}function c(t){v.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,v.right=(window.innerWidth||document.documentElement.clientWidth)+t}function l(t,e,o){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,o):t.addEventListener(e,o,!1)}function u(t,e,o){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,o):t.removeEventListener(e,o,!1)}function f(t,e){if(t&&e)for(var o=t.length,n=0;o>n&&e(t[n],n)!==!1;n++);}function d(t,e,o){var n=0;return function(){var s=+new Date;e>s-n||(n=s,t.apply(o,arguments))}}var p,v,m;return function(o){if(!document.querySelectorAll){var s=document.createStyleSheet();document.querySelectorAll=function(t,e,o,n,i){for(i=document.all,e=[],t=t.replace(/\[for\b/gi,"[htmlFor").split(","),o=t.length;o--;){for(s.addRule(t[o],"k:v"),n=i.length;n--;)i[n].currentStyle.k&&e.push(i[n]);s.removeRule(0)}return e}}var i=this,r=i._util={};r.elements=[],r.destroyed=!0,i.options=o||{},i.options.error=i.options.error||!1,i.options.offset=i.options.offset||100,i.options.success=i.options.success||!1,i.options.selector=i.options.selector||".b-lazy",i.options.separator=i.options.separator||"|",i.options.container=i.options.container?document.querySelectorAll(i.options.container):!1,i.options.errorClass=i.options.errorClass||"b-error",i.options.breakpoints=i.options.breakpoints||!1,i.options.loadInvisible=i.options.loadInvisible||!1,i.options.successClass=i.options.successClass||"b-loaded",i.options.validateDelay=i.options.validateDelay||25,i.options.saveViewportOffsetDelay=i.options.saveViewportOffsetDelay||50,i.options.src=p=i.options.src||"data-src",m=window.devicePixelRatio>1,v={},v.top=0-i.options.offset,v.left=0-i.options.offset,i.revalidate=function(){t(this)},i.load=function(t,e){var o=this.options;void 0===t.length?n(t,e,o):f(t,function(t){n(t,e,o)})},i.destroy=function(){var t=this,e=t._util;t.options.container&&f(t.options.container,function(t){u(t,"scroll",e.validateT)}),u(window,"scroll",e.validateT),u(window,"resize",e.validateT),u(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},r.validateT=d(function(){e(i)},i.options.validateDelay,i),r.saveViewportOffsetT=d(function(){c(i.options.offset)},i.options.saveViewportOffsetDelay,i),c(i.options.offset),f(i.options.breakpoints,function(t){return t.width>=window.screen.width?(p=t.src,!1):void 0}),t(i)}});
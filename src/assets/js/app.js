require('es6-shim');
import MapGen from "./lib/map-generator";

window['map'] = new MapGen('#map', 'map.mapInit');

$(function(){

  var copyrightCurrentYear = $('.copyright').find('span').html();
  var thisYear = new Date().getFullYear();
  if (copyrightCurrentYear < thisYear) {
    $('.copyright').find('span').html(thisYear);
  }

});

var bLazy = new Blazy({
  selector: '.lazyloaded',
  errorClass: 'lazyloaded-error'
});
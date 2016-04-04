require('es6-shim');

import MapGen from "./lib/map-generator";

window['map'] = new MapGen('#map', 'map.mapInit');

// let instagramFeed = new InstagramFeed('.feed', 'd6df1ba940414fbfbbc3c85dce7a0d06');
let instagramFeed = new Instafeed({
    get: 'user',
    userId: '2150537699',
    clientId: 'd6df1ba940414fbfbbc3c85dce7a0d06',
    resolution: 'standard_resolution',
    template: '<div class="feed__image" style="background-image:url({{image}})"></div>'
});
instagramFeed.run();

// $(function(){

//   var copyrightCurrentYear = $('.copyright').find('span').html();
//   var thisYear = new Date().getFullYear();
//   if (copyrightCurrentYear < thisYear) {
//     $('.copyright').find('span').html(thisYear);
//   }

// });

var bLazy = new Blazy({
  selector: '.lazyloaded',
  successClass: 'lazyloaded-loaded',
  errorClass: 'lazyloaded-error'
});
import MapGen from "./lib/map-generator";
import InstagramFeed from "./lib/instagram-feed";

window['map'] = new MapGen('#map', 'map.mapInit');

let instagramFeed = new InstagramFeed('instafeed');

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
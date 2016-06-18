import MapGen from "./lib/map-generator";
import InstagramFeed from "./lib/instagram-feed";

window['map'] = new MapGen('#map', 'map.mapInit');

let instagramFeed = new InstagramFeed('instafeed');

var bLazy = new Blazy({
  selector: '.lazyloaded',
  successClass: 'lazyloaded-loaded',
  errorClass: 'lazyloaded-error'
});
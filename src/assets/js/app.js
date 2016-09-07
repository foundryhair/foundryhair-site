import MapGen from "./lib/map-generator";
import InstagramFeed from "./lib/instagram-feed";

window['map'] = new MapGen('#map', 'map.mapInit');

let instagramFeed = new InstagramFeed('instafeed');

let bLazy = new Blazy({
  selector: '.lazyload',
  successClass: 'lazyload--success',
  errorClass: 'lazyload--error'
});

let resizing = false;
window.onresize = () => {
  if (!resizing) {
    resizing = true;
    setTimeout(()=>{
      resizing = false;
      bLazy.revalidate()
    }, 500)
  }
}
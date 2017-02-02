import MapGen from "./lib/map-generator";
import InstagramFeed from "./lib/instagram-feed";
import BookingLink from "./lib/booking-link";
import smoothScroll from 'smooth-scroll';

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

smoothScroll.init({
  selector: '[smooth-scroll]',
  speed: 500,
  easing: 'easeInOutCubic'
});

let bookingLink = new BookingLink('.booking-link')
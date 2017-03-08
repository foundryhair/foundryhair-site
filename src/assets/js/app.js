import MapGen from "./lib/map-generator";
import BookingLink from "./lib/booking-link";
import smoothScroll from 'smooth-scroll';

window['map'] = new MapGen('#map', 'map.mapInit');

let bLazy = new Blazy({
  selector: '.lazyload',
  successClass: 'lazyload--success',
  errorClass: 'lazyload--error',
  breakpoints: [
    {
      width: 768,
      src: 'data-src-small'
    }
  ]
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
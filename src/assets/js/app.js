import smoothScroll from 'smooth-scroll';

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

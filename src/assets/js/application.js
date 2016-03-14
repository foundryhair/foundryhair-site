$(function(){

  /*
    FLIP BUTTON CONTROLS
  */
  $('[data-action="flip"]').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('postcard-flipped');
  });

  /*
    INSTAGRAM LOADING
  */
  if ($('.instagram-feed').length) {
    var count,
        target;
    var mqDesktop = window.matchMedia("screen and (min-width: 768px)");
    if (mqDesktop.matches) {
      count  = 20;
      target = '.instagram-feed--desktop';
    } else {
      count  = 8;
      target = '.instagram-feed--mobile';
    }
    $.getJSON('https://api.instagram.com/v1/users/2150537699/media/recent/?client_id=d6df1ba940414fbfbbc3c85dce7a0d06&callback=?',function (insta) {
      $.each(insta.data,function (index,src) {
        if ( index === count ) {
          return false;
        }
        $('<div class="instagram-image" style="background-image:url('+ src.images.standard_resolution.url +')"></div>').appendTo(target);
      });
    });
  }

});

var bLazy = new Blazy({
  selector: '.lazyloaded',
  errorClass: 'lazyloaded-error'
});
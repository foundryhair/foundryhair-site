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
  if ($('#instagram-feed').length && !Modernizr.touch) {
    $.getJSON('https://api.instagram.com/v1/users/2150537699/media/recent/?client_id=d6df1ba940414fbfbbc3c85dce7a0d06&callback=?',function (insta) {
      $.each(insta.data,function (photos,src) {
        if ( photos === 20 ) { return false; }
        $('<div class="instagram-image" style="background-image:url('+ src.images.standard_resolution.url +'"></div>').appendTo('#instagram-feed');
      });
    });
  }

});

var bLazy = new Blazy({
  selector: '.lazyloaded',
  errorClass: 'lazyloaded-error'
});
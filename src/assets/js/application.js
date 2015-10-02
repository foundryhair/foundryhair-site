$('.flip-button').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('postcard-flipped');
});
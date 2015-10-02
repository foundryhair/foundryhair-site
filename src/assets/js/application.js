$('.flip-button').on('click', function(e) {
  e.preventDefault();
  $('.postcard').toggleClass('flipped');
});
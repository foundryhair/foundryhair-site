$(function(){

  var copyrightCurrentYear = $('.copyright').find('span').html();
  var thisYear = new Date().getFullYear();
  if (copyrightCurrentYear < thisYear) {
    $('.copyright').find('span').html(thisYear);
  }

});

var bLazy = new Blazy({
  selector: '.lazyloaded',
  errorClass: 'lazyloaded-error'
});
$(window).scroll(onScroll);
onScroll();

function onScroll(){
  var opacity = ($(window).scrollTop() / $(window).height());
  $('#mainNav').css('background-color', 'rgb(37,41,52,' + opacity + ')');
}

$('body').scrollspy({
  target: '#mainNav',
  offset: 75
});

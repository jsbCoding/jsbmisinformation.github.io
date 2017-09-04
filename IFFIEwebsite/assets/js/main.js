$(document).ready(function() {


// Add jQuery here

/* ----------------------------------------menu */


$('.menu').mouseover(function(){
  $('.menuExpandedWindow').addClass('show')
});
$('.menu').mouseleave(function(){
  $('.menuExpandedWindow').removeClass('show')
});

/* ----------------------------------------event hovering */


$('.homeEvent.homeEventA').mouseover(function(){
  $('.homeEventA').addClass('darken')
});
$('.homeEvent.homeEventA').mouseleave(function(){
  $('.homeEventA').removeClass('darken')
});
$('.homeEvent.homeEventB').mouseover(function(){
  $('.homeEventB').addClass('darken')
});
$('.homeEvent.homeEventB').mouseleave(function(){
  $('.homeEventB').removeClass('darken')
});
$('.homeEvent.homeEventC').mouseover(function(){
  $('.homeEventC').addClass('darken')
});
$('.homeEvent.homeEventC').mouseleave(function(){
  $('.homeEventC').removeClass('darken')
});



















  });

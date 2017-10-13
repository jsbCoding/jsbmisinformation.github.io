$(document).ready(function() {


// Add jQuery here

$( function() {
  $( ".policee" ).draggable({ handle: "p" });
  $( ".police" ).draggable({ cancel: "p.ui-widget-header" });
  $( "div, p" ).disableSelection();
} );
















  });

$(document).ready(function() {


// Add jQuery here
//X BUTTON//////////
$('.xButton.escape').click(function(){
  var object =  $(this).parent();

  $(object).removeClass('show');
    $(object).addClass('hide');

});
//REPORTS///////////

$('.content .readMoreButtonA').click(function(){
  $('.boundWindow.reportWindowA').removeClass('hide');
  $('.boundWindow.reportWindowA').addClass('show');
});

$('.content .readMoreButtonB').click(function(){
  $('.boundWindow.reportWindowB').removeClass('hide');
  $('.boundWindow.reportWindowB').addClass('show');
});

$('.content .readMoreButtonC').click(function(){
  $('.boundWindow.reportWindowC').removeClass('hide');
  $('.boundWindow.reportWindowC').addClass('show');
});

//NEWS/////////


//BOARD MEMBERS///////

$('.boundWindow.boardMember1').click(function(){
  $('.boardMember1 .blue.boardMemberInfo').toggleClass('hide');
});
$('.boundWindow.boardMember2').click(function(){
  $('.boardMember2 .blue.boardMemberInfo').toggleClass('hide');
});
$('.boundWindow.boardMember3').click(function(){
  $('.boardMember3 .blue.boardMemberInfo').toggleClass('hide');
});
$('.boundWindow.boardMember4').click(function(){
  $('.boardMember4 .blue.boardMemberInfo').toggleClass('hide');
});
$('.boundWindow.boardMember5').click(function(){
  $('.boardMember5 .blue.boardMemberInfo').toggleClass('hide');
});
$('.boundWindow.boardMember6').click(function(){
  $('.boardMember6 .blue.boardMemberInfo').toggleClass('hide');
})












  });

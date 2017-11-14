$(document).ready(function() {


// Add jQuery here
//X BUTTON//////////
$('.xButton.escape').click(function(){
  var object =  $(this).parent();

  $(object).removeClass('show');
    $(object).addClass('hide');

});
//REPORTS///////////

$('.readMoreButtonA').click(function(){
  $('.reportWindowA').removeClass('hide');
  $('.reportWindowA').addClass('show');

  $('.imgReportA1').removeClass('hide');
  $('.imgReportA1').addClass('show');
  $('.imgReportA2').removeClass('hide');
  $('.imgReportA2').addClass('show');
});

$('.readMoreButtonB').click(function(){
  $('.reportWindowB').removeClass('hide');
  $('.reportWindowB').addClass('show');

  $('.imgReportB1').removeClass('hide');
  $('.imgReportB1').addClass('show');
  $('.imgReportB2').removeClass('hide');
  $('.imgReportB2').addClass('show');
  $('.imgReportB3').removeClass('hide');
  $('.imgReportB3').addClass('show');
  $('.imgReportB4').removeClass('hide');
  $('.imgReportB4').addClass('show');
});

$('.readMoreButtonC').click(function(){
  $('.reportWindowC').removeClass('hide');
  $('.reportWindowC').addClass('show');

  $('.imgReportC1').removeClass('hide');
  $('.imgReportC1').addClass('show');
  $('.imgReportC2').removeClass('hide');
  $('.imgReportC2').addClass('show');
  $('.imgReportC3').removeClass('hide');
  $('.imgReportC3').addClass('show');

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

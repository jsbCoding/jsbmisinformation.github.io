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
//EQ/////////

$('.eq.readMoreButtonA').click(function(){
  $('.equipmentWindowA').removeClass('hide');
  $('.equipmentWindowA').addClass('show');

  $('.imgEq1').removeClass('hide');
  $('.imgEq1').addClass('show');
  $('.imgEq2').removeClass('hide');
  $('.imgEq2').addClass('show');
});

$('.eq.readMoreButtonB').click(function(){
  $('.equipmentWindowB').removeClass('hide');
  $('.equipmentWindowB').addClass('show');

  $('.imgEq3').removeClass('hide');
  $('.imgEq3').addClass('show');
  $('.imgEq4').removeClass('hide');
  $('.imgEq4').addClass('show');
  $('.imgEq5').removeClass('hide');
  $('.imgEq5').addClass('show');
  $('.imgEq6').removeClass('hide');
  $('.imgEq6').addClass('show');
});

$('.eq.readMoreButtonC').click(function(){
  $('.equipmentWindowC').removeClass('hide');
  $('.equipmentWindowC').addClass('show');

  $('.imgEq7').removeClass('hide');
  $('.imgEq7').addClass('show');
  $('.imgEq8').removeClass('hide');
  $('.imgEq8').addClass('show');
});
$('.eq.readMoreButtonD').click(function(){
  $('.equipmentWindowD').removeClass('hide');
  $('.equipmentWindowD').addClass('show');
});

$('.infoItem1').click(function(){
  $('.siteMap').removeClass('hide');
  $('.siteMap').addClass('show');
});
$('.infoItem2').click(function(){
  $('.terms').removeClass('hide');
  $('.terms').addClass('show');
});
$('.infoItem3').click(function(){
  $('.sponsor').removeClass('hide');
  $('.sponsor').addClass('show');
});
$('.infoItem4').click(function(){
  $('.email').removeClass('hide');
  $('.email').addClass('show');
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

//Run on Document Ready
$(document).ready(function(){  

  //Smooth scrool
  $("html").niceScroll({styler:"fb",cursorcolor:"#000"});

});

//Run on Window Load
$(window).load(function(){
  //Page loader
  $('#page-loader').fadeOut(200, function(){});

  //Fade In load
  $('#content-body').addClass('fadeInUp');  
  
});
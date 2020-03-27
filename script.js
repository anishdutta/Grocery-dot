$(document).ready(function() {
     
    $(".frame2-img").show("slide", { direction: "up" }, 2000);
  
   });
  

 

$(document).ready(function() {
  
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.card1').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1500);
                  
          }
          
      }); 
  
  });
  
});
$(document).ready(function() {
  
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.dash').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},1000);
                  
          }
          
      }); 
  
  });
  
});
$(window).scroll(function(){
 $('.navbar').addClass('navbar-icon1');
 $('.nav-els').addClass('nav-element1');
})
$('.navbar-brand').click(function(){
$('.navbar').removeClass('navbar-icon1');
$('.nav-els').removeClass('nav-element1');
})
$(document).ready(function(){

  // smooth scroll

  $(".clickscroll").click(function() {
    var scrollTo = $(this).attr('href');
    console.log(scrollTo);
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
    }, 2000);
    $('.clickscroll').removeClass('current_item');
    $(this).toggleClass('current_item');
  });

  $('.accordion_main').click(function(event) {
    $(this).parent('.accordion_item').children('.accordion_content').toggleClass('openaccordion');
    $(this).children('.chev_icon').toggleClass('open_box');
  });

  $(document).on('click', '.navigation_handler ul li a', function(event) {
    // event.preventDefault();
    $(this).parent('ul').children('a').removeClass('active_menu_item')
    $(this).addClass('active_menu_item');

  });

});

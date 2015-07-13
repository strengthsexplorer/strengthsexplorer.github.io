$(document).ready(function() {

  /* ANIMATE SCROLL WHEN ANCHOR ELEMENTS ARE CLICKED */
  var page = $('html, body');

  $('.pe-7s-angle-down').click(function() {
    page.animate({
      scrollTop: $('.info').offset().top -65
    }, 1000);
  });

  $('.bookAnchor').click(function() {
    if ($(window).width <= 900) {
      page.animate({
          scrollTop: $(".book").offset().top
            }, 1000);
    } else {
    page.animate({
        scrollTop: $(".book").offset().top - 65
          }, 1000);
        }
  });
  $('.faqAnchor').click(function() {
    if ($(window).width <= 900) {
      page.animate({
          scrollTop: $(".FAQ").offset().top
            }, 1000);
    } else {
    page.animate({
        scrollTop: $(".FAQ").offset().top - 50
      }, 1000);
        }
  });
  $('#backTop').click(function() {
      page.animate({scrollTop: 0 }, 'slow');
      return false;
  });

  /* MAKE THE NAV BAR APPEAR WHEN THE PAGE IS SCROLLED PAST HOME IMAGE */
  $(window).scroll(function() {
      var yScroll = $(window).scrollTop();
      var vh = $('.home').outerHeight() -100;
      var header = $('header');

      if (yScroll >= vh) {
        header.fadeIn(250);
      } else {
        header.fadeOut(250);
      }
  });

  /* TRIGGER MOBILE NAV MENU ON NAV-ICON CLICK */
  $('.mobileNav').click(function(e) {
    e.stopPropagation();
    $('.nav-bar ul').toggleClass('showNav');
  });
  $(document).click(function(){
        $('.nav-bar ul').removeClass('showNav');
    });

});

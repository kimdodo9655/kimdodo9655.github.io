$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var windowWidth = $(window).width();

    if (windowWidth < 700 || scrollTop > 30) {
      $('.sign_area_pc').css('display', 'none');
    } else {
      $('.sign_area_pc').css('display', 'block');
    }
  });

  $(window).resize(function () {
    var windowWidth = $(window).width();

    if (windowWidth > 700) {
      $('.nav_area .inner ul').removeClass('active');
      $('.menu-trigger').removeClass('active');
      $('.sign_area_pc').css('display', 'block');
    } else if (windowWidth <= 700) {
      $('.sign_area_pc').css('display', 'none');
    }
  });

  $('.menu-trigger').each(function () {
    var $this = $(this);

    $this.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
    });
  });

  $('.menu-trigger').on('click', function () {
    if ($('.nav_area .inner ul').hasClass('active')) {
      $('.nav_area .inner ul').removeClass('active');
    } else {
      $('.nav_area .inner ul').addClass('active');
    }
  });
});

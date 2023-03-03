$(document).ready(function () {
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

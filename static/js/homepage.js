$(document).ready(function () {

  // Configure the countdown

  var countdown = $('#snc-countdown');
  var lang = $('body').attr('lang');
  var dataTime = countdown.data('date'); // Date Format : Y/m/d
  countdown.countdown(dataTime, function (event) {
    if (lang == 'en') {
      $(this).html(event.strftime(''
        + '<span class="snc-days">%D <i> Days </i></span> '
        + '<span class="snc-hr">%H <i> Hours </i></span> '
        + '<span class="snc-min">%M <i> Minutes </i></span> '
        + '<span class="snc-sec">%S <i> Seconds </i></span>'
      ));
    } else {
      $(this).html(event.strftime(''
        + '<span class="snc-days">%D <i> Jours </i></span> '
        + '<span class="snc-hr">%H <i> Heures </i></span> '
        + '<span class="snc-min">%M <i> Minutes </i></span> '
        + '<span class="snc-sec">%S <i> Secondes </i></span>'
      ));
    }
  });

  // Scrolling
  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  $(function () {
    $(document).on('click', 'a.page-scroll', function (event) {
      var $anchor = $(this);
      var href = $anchor.attr('href');
      if (! href.startsWith("#")  && href.includes("#")) {
        href = href.substr(href.indexOf("#"));
      }
      $('html, body').stop().animate({
        scrollTop: $(href).offset().top
      }, 1500, 'easeInOutExpo');

      $(".navbar-collapse.collapse.in").removeClass("in");
      event.preventDefault();
    });
  });
});

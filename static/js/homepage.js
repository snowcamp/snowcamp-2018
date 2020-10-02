$(document).ready(function () {

  // Configure the countdown
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var countdown = document.getElementById('snc-countdown');
  var dataTime = countdown.dataset.date; // Date Format : Y/m/d
  var countDownDate = new Date(dataTime).getTime();

  var timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    document.getElementById("cd-days").innerText = Math.floor(distance / (day)),
    document.getElementById("cd-hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("cd-min").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("cd-sec").innerText = Math.floor((distance % (minute)) / second);
    if (distance < 0) {
      clearInterval(timer);
    }
  }, 0);

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

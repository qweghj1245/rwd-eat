$(document).ready(function () {
    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('menushow');
        $('.line1').toggleClass('l1');
        $('.line2').toggleClass('l2');
        $('.line3').toggleClass('l3');
        $(this).css('margin-top', '4px');
    });
    $(window).scroll(
        function(e){
          if ($(window).scrollTop() > 0){
            $(".navbar").addClass("nav-opacity");
          }else{
            $(".navbar").removeClass("nav-opacity");
          }
        }
    );
});
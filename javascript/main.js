// slideshow preferences in services
$(document).ready(function(){
  $('.slideshow_container').slick({
  swipeToSlide: true,
  arrows: false,
  dots: true,
  draggable: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst : true,
  touchMove: true,
  autoplay: true,
  autoplaySpeed: 4 * 1000,
  pauseOnHover: true,
  });
});

// slideshow preferences in bio pages
$(document).ready(function(){
  $('.personal_slider').slick({
    dots: true,
    speed: 300,
    swipeToSlide: true,
    arrows: false,
  });
});

// slideshow preferences in meet the team
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    centerMode: true,
    dots: true,
    variableWidth: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
  });
});

// slide in animation
$(document).ready(function(){

  var $animation_elements = $('.animation-element');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();

    var window_top_position = $window.scrollTop();

    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position + 200)) {
          //console.log('Element class: ' + $element.hasClass('come-in'));
          if (!$element.hasClass('come-in')) {
            $element.addClass('come-in');
          }
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
});

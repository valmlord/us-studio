import $ from "jquery";
import "slick-carousel";

$(".bestsellers-slider").slick({
  arrows: true,
  dots: false,
  autoplay: false,
  rows: 0,
  slidesToShow: 1,
  infinite: true,
  prevArrow: $('.bestsellers-slider__nav-left')
  nextArrow: $('.bestsellers-slider__nav-right')
});

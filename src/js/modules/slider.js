import $ from "jquery";
import "slick-carousel";

$(".bestsellers-slider").slick({
  arrows: false,
  dots: false,
  autoplay: false,
  rows: 0,
  slidesToShow: 1,
  infinite: true,
  //appendDots: $(".promo-slider__thumbnails"),
});

const welcomeSlider = () => {
  if ($('.welcome_slider').length < 0) return;
  $('.welcome_slider').slick({
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><span class="icon-chevron-left"></span></button>',
    nextArrow:
      '<button type="button" class="slick-next"><span class="icon-chevron-right"></span></button>',
    responsive: [
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });
};
export default welcomeSlider;

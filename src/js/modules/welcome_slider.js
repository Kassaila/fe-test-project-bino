const welcomeSlider = () => {
  const $slider = $('.welcome_slider');

  if (!$slider) return;

  const init = () => {
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
          },
        },
      ],
    });
  }

  return {
      init,
  }
};

export default welcomeSlider();
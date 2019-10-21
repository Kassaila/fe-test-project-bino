const welcomeSlider = () => {
  const $slider = $('.welcome_slider');

  if (!$slider) return false;

  const init = () => {
    $('.welcome_slider').slick({
      infinite: false,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow:
        '<button class="slick-prev" aria-label="Prev slide" type="button"><span class="icon-chevron-left"></span></button>',
      nextArrow:
        '<button class="slick-next" aria-label="Next slide" type="button"><span class="icon-chevron-right"></span></button>',
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
  };

  return {
    init,
  };
};

export default welcomeSlider();

const servicesSlider = () => {
  const $win = $(window);
  const $slider = $('.services_slider');
  const option = {
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    vertical: true,
    verticalSwiping: true,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  const _addEventListeners = () => {
    $slider.on('afterChange', function () {
      $(this).find('.slick-current').focus();
    });

    $win.on('beforeprint', () => {
      $slider.slick('unslick');
    });

    $win.on('afterprint', () => {
      $slider.slick(option);
    });
  };

  const init = () => {
    if (!$slider.length) return false;

    $slider.slick(option);

    _addEventListeners();

    return true;
  };

  return {
    init,
  };
};

export default servicesSlider();

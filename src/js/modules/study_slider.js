const studySlider = () => {
  const $slider = $('.study-slider');
  const option = {
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
  };

  const _addEventListeners = () => {
    $slider.on('afterChange', function () {
      $(this).find('.slick-current').focus();
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

export default studySlider();

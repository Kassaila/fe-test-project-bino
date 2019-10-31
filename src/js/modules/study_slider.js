const studySlider = () => {
  const $win = $(window);
  const $slider = $('.study-slider');
  const option = {
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
  };

  const _isFocusable = () => {
    const $slideElements = $slider.find('.slick-current *');

    for (let i = 0; i < $slideElements.length; i += 1) {
      $slideElements[i].focus();
      if ($slideElements[i] === document.activeElement) break;
    }
  };

  const _dotsFocus = () => {
    setTimeout(() => {
      $slider.find('.slick-dots button').attr('tabindex', 0);
    }, 100);
  };

  const _currSlideBlur = () => {
    setTimeout(() => {
      $slider.find('.slick-current').attr('tabindex', -1);
    }, 100);
  };

  const _addEventListeners = () => {
    $slider.on('init', () => {
      _dotsFocus();
      _currSlideBlur();
    });

    $slider.on('afterChange', () => {
      _isFocusable();
      _dotsFocus();
      _currSlideBlur();
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

    _addEventListeners();

    $slider.slick(option);

    return true;
  };

  return {
    init,
  };
};

export default studySlider();

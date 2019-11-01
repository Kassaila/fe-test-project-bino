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

  const _arrowsInit = () => {
    setTimeout(() => {
      const $arrowPrev = $slider.find('.slick-prev');
      const $arrowNext = $slider.find('.slick-next');

      $arrowNext.prependTo($slider);
      $arrowPrev.prependTo($slider);
      if ($arrowNext.lenth > 1) $arrowNext[1].remove();
      if ($arrowPrev.lenth > 1) $arrowPrev[1].remove();
    }, 100);
  };

  const _dotsInit = () => {
    setTimeout(() => {
      const $dots = $slider.find('.slick-dots');

      $dots.prependTo($slider);
      if ($dots.lenth > 1) $dots[1].remove();
    }, 100);
  };

  const _dotsFocus = () => {
    setTimeout(() => {
      const $dots = $slider.find('.slick-dots');

      $dots.find('button').attr('tabindex', 0);
    }, 100);
  };

  const _currSlideBlur = () => {
    setTimeout(() => {
      $slider.find('.slick-current').attr('tabindex', -1);
    }, 100);
  };

  const _addEventListeners = () => {
    $slider.on('init', () => {
      _arrowsInit();
      _dotsInit();
      _dotsFocus();
      _currSlideBlur();
    });

    $slider.on('afterChange', () => {
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

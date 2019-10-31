const welcomeSlider = () => {
  const $win = $(window);
  const $slider = $('.welcome_slider');
  const option = {
    accessibility: true,
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

    $('.to-content').on('click', () => $slider.find('.slick-current').focus());
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

export default welcomeSlider();

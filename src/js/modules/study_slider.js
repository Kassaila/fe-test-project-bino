const studySlider = () => {
  const $slider = $('.study-slider');

  if (!$slider) return;

  const init = () => {
    $slider.slick({
      arrows: false,
      infinite: false,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
      dots: true,
    });
  };

  return {
    init,
  };
};

export default studySlider();

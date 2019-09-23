const servicesSlider = () => {
    const $slider = $('.services_slider');

    if (!$slider) return;

    const init = () => {
        $slider.slick({
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
        });
    }

    return {
        init,
    }
};

export default servicesSlider();
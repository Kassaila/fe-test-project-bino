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
            prevArrow:
                '<button type="button" class="slick-prev"><span class="icon-chevron-left"></span></button>',
            nextArrow:
                '<button type="button" class="slick-next"><span class="icon-chevron-right"></span></button>',
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
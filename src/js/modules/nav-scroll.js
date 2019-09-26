const navScroll = () => {
    const $scrollClass = $('.scroll-to'),
        scrollDelay = 500,
        $win = $(window),
        $header = $('.header');

    const scrollToAnchor = (target) => {
        let winHeight = $win.height(),
            $headerHeight = $header.innerHeight(),
            anchorVal = $(target).offset().top - $headerHeight,
            timeRate = Math.round(Math.abs($win.scrollTop() - anchorVal) / winHeight);

        timeRate = timeRate > 0 ? timeRate : 1;

        if (winHeight * 0.1 < Math.abs($win.scrollTop() - anchorVal)) {
            $('html, body').stop().animate({
                scrollTop: anchorVal
            }, scrollDelay * timeRate);

            return scrollDelay * timeRate;
        }
    }

    const init = () => {
        $scrollClass.on('click', function () {
            let anchorId = $(this).attr('data-anchor');

            scrollToAnchor(anchorId);
        });
    }

    return {
        init,
    }
};

export default navScroll();
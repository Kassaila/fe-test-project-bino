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

    const arrAnchors = () => {
        const $anchors = $('.nav__list [data-anchor]'),
            arr = [];

        $anchors.each(function (i, el) {
            let anchorId = $(el).attr('data-anchor'),
                elHeight = $(`${anchorId}`).innerHeight(),
                elTop = $(`${anchorId}`).offset().top;

            arr[i] = {
                anchorId,
                elHeight,
                elTop
            }
        });

        return arr;
    }

    const navHighlight = (arr) => {
        let winTop = $win.scrollTop();

        arr.forEach(function (el, i) {
            if (el.elTop < winTop && winTop < el.elHeight + el.elTop && !$(`[data-anchor="${el.anchorId}"]`).hasClass('active')) {
                $(`[data-anchor]`).removeClass('active');
                $(`[data-anchor="${el.anchorId}"]`).addClass('active');
            }
        });
    }

    const highlight = () => {
        let arr = arrAnchors();

        $win.resize(() => arr = arrAnchors());
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
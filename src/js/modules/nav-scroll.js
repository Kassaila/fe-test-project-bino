const navScroll = () => {
    const $scrollClass = $('.scroll-to'),
        scrollDelay = 500,
        $win = $(window),
        $header = $('.header');

    const _scrollToAnchor = (target) => {
        let winHeight = $win.height(),
            $headerHeight = $header.innerHeight(),
            anchorVal = $(target).offset().top - $headerHeight + 1,
            timeRate = Math.round(Math.abs($win.scrollTop() - anchorVal) / winHeight);

        timeRate = timeRate > 0 ? timeRate : 1;

        if (winHeight * 0.1 < Math.abs($win.scrollTop() - anchorVal)) {
            $('html, body').stop().animate({
                scrollTop: anchorVal
            }, scrollDelay * timeRate);

            return scrollDelay * timeRate;
        }
    }

    const _arrAnchors = () => {
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

    const _navHighlight = (arr) => {
        let winTop = $win.scrollTop() + $header.innerHeight();

        arr.forEach(function (el, i) {
            let $dataId = $(`[data-anchor="${el.anchorId}"]`);

            if (el.elTop < winTop && winTop < (el.elHeight + el.elTop) && !$dataId.hasClass('active')) {
                $(`[data-anchor]`).removeClass('active');
                $dataId.addClass('active');
            }
        });
    }

    const highlight = () => {
        let arr = _arrAnchors();

        _navHighlight(arr);

        $win.resize(() => {
            arr = _arrAnchors();
            _navHighlight(arr);
        });

        $win.on('scroll', () => _navHighlight(arr));
    }

    const scrollTo = () => {
        $scrollClass.on('click', function () {
            let anchorId = $(this).attr('data-anchor');

            _scrollToAnchor(anchorId);
        });
    }

    return {
        scrollTo,
        highlight,
    }
};

export default navScroll();
const navScroll = () => {
  const $scrollClass = $('.scroll-to');
  const scrollDelay = 300;
  const $win = $(window);
  const $header = $('.header');

  const _scrollToAnchor = (target) => {
    const winHeight = $win.height();
    const headerHeight = $header.innerHeight();
    const anchorVal = $(target).offset().top - headerHeight + 1;
    let timeRate = Math.round(Math.abs($win.scrollTop() - anchorVal) / winHeight);

    timeRate = timeRate > 0 ? timeRate : 1;

    if (winHeight * 0.1 < Math.abs($win.scrollTop() - anchorVal)) {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: anchorVal,
          },
          scrollDelay * timeRate,
        );
    }
    return scrollDelay * timeRate;
  };

  const _arrAnchors = () => {
    const $anchors = $('.nav__list [data-anchor]');
    const arr = [];

    $anchors.each((i, el) => {
      const anchorId = $(el).attr('data-anchor');
      const elHeight = $(`${anchorId}`).innerHeight();
      const elTop = $(`${anchorId}`).offset().top;

      arr[i] = {
        anchorId,
        elHeight,
        elTop,
      };
    });

    return arr;
  };

  const _navHighlight = (arr, headerHeight) => {
    const winTop = $win.scrollTop() + headerHeight;

    arr.forEach((el) => {
      const $dataId = $(`[data-anchor="${el.anchorId}"]`);

      if (
        el.elTop < winTop
        && winTop < el.elHeight + el.elTop
        && !$dataId.hasClass('active')
      ) {
        $('[data-anchor]').removeClass('active');
        $dataId.addClass('active');
      } else if (
        ($dataId.hasClass('active') && winTop > el.elHeight + el.elTop)
        || ($dataId.hasClass('active') && el.elTop > winTop)
      ) {
        $dataId.removeClass('active');
      }
    });
  };

  const highlight = () => {
    let arr = _arrAnchors();
    let headerHeight = $header.innerHeight();

    _navHighlight(arr, headerHeight);

    $win.on('scroll', () => _navHighlight(arr, headerHeight));

    $win.on('resize', () => {
      arr = _arrAnchors();
      headerHeight = $header.innerHeight();
      _navHighlight(arr, headerHeight);
    });

    $('.works_gallery__filter').on('click', () => {
      arr = _arrAnchors();
      headerHeight = $header.innerHeight();
      _navHighlight(arr, headerHeight);
    });
  };

  const scrollTo = () => {
    $scrollClass.on('click', (e) => {
      const anchorId = $(e.target).attr('data-anchor');

      if (!anchorId) return false;

      return _scrollToAnchor(anchorId);
    });
  };

  return {
    scrollTo,
    highlight,
  };
};

export default navScroll();

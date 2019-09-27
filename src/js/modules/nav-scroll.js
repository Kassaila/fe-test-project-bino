const navScroll = () => {
  const $scrollClass = $('.scroll-to');
  const scrollDelay = 300;
  const $win = $(window);
  const $header = $('.header');

  const scrollToAnchor = (target) => {
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

  const arrAnchors = () => {
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

  const navHighlight = (arr, headerHeight) => {
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
    let arr = arrAnchors();
    let headerHeight = $header.innerHeight();

    navHighlight(arr, headerHeight);

    $win.on('scroll', () => navHighlight(arr, headerHeight));

    $win.on('resize', () => {
      arr = arrAnchors();
      headerHeight = $header.innerHeight();
      navHighlight(arr, headerHeight);
    });
  };

  const scrollTo = () => {
    $scrollClass.on('click', (e) => {
      const anchorId = $(e.target).attr('data-anchor');

      scrollToAnchor(anchorId);
    });
  };

  return {
    scrollTo,
    highlight,
  };
};

export default navScroll();

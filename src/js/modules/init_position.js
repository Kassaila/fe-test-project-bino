const pagePosition = () => {
  const $win = $(window);
  const $html = $('html');
  const EL_CLASS_TOP = 'page_top';
  const EL_CLASS_MIDDLE = 'page_middle';
  const EL_CLASS_BOTTOM = 'page_bottom';

  const init = (prop) => {
    const setProp = prop;

    setProp.scrTopHeight = setProp !== undefined
      && setProp.scrTopHeight !== undefined
      && typeof setProp.scrTopHeight === 'number'
      && setProp.scrTopHeight >= 0.1
      && setProp.scrTopHeight <= 1
      ? setProp.scrTopHeight
      : 0.1;
    setProp.scrBottomHeight = setProp !== undefined
      && setProp.scrBottomHeight !== undefined
      && typeof setProp.scrBottomHeight === 'number'
      && setProp.scrBottomHeight >= 0.1
      && setProp.scrBottomHeight <= 1
      ? setProp.scrBottomHeight
      : 0.1;

    const initPosition = () => {
      const $winHeight = $win.height();
      const $winScrollTop = $win.scrollTop();
      const $htmlHeight = $html.height();

      if ($winHeight * setProp.scrTopHeight > $winScrollTop) {
        if (!$html.hasClass(`${EL_CLASS_TOP}`)) {
          $html
            .addClass(`${EL_CLASS_TOP}`)
            .removeClass(`${EL_CLASS_MIDDLE} ${EL_CLASS_BOTTOM}`);
          if (setProp.topCallback) setProp.topCallback();
        }
      } else if ($htmlHeight - $winHeight * setProp.scrBottomHeight < $winScrollTop + $winHeight) {
        if (!$html.hasClass(`${EL_CLASS_BOTTOM}`)) {
          $html
            .addClass(`${EL_CLASS_BOTTOM}`)
            .removeClass(`${EL_CLASS_TOP} ${EL_CLASS_MIDDLE}`);
          if (setProp.bottomCallback) setProp.bottomCallback();
        }
      } else if (!$html.hasClass(`${EL_CLASS_MIDDLE}`)) {
        $html
          .addClass(`${EL_CLASS_MIDDLE}`)
          .removeClass(`${EL_CLASS_TOP} ${EL_CLASS_BOTTOM}`);
        if (setProp.middleCallback) setProp.middleCallback();
      }
    };

    initPosition();
    $win.scroll(initPosition);
    $win.resize(initPosition);
  };

  return {
    init,
  };
};

export default pagePosition();

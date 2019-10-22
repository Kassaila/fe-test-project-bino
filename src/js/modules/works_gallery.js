const worksGallery = () => {
  const $gallery = $('.works_gallery__row');
  const $filterRow = $('.works_gallery__filters_row');
  const BTN_FILTER = '.works_gallery__filter';
  const ACTIVE_CLASS = 'works_gallery__filter_active';
  const GALLERY_BLOCK = '.works_gallery__block';
  const DEFAULT_FILTER_VAL = 'all';

  const _filtering = (filterVal) => {
    const filterEl = `[data-filter="${filterVal}"]`;

    $filterRow
      .find(BTN_FILTER)
      .attr('aria-selected', false)
      .removeClass(ACTIVE_CLASS);

    $filterRow
      .find(filterEl)
      .attr('aria-selected', true)
      .addClass(ACTIVE_CLASS);

    if (filterVal === 'all') {
      $gallery.children(GALLERY_BLOCK).attr('aria-hidden', false).animate({ opacity: 'show' }, 0);
    } else {
      $gallery.children(filterEl).attr('aria-hidden', false).animate({ opacity: 'show' }, 0);
      $gallery
        .children(GALLERY_BLOCK)
        .not(filterEl)
        .attr('aria-hidden', true)
        .animate({ opacity: 'hide' }, 0);
    }
  };

  const _addEventListeners = () => {
    $(BTN_FILTER).on('click', (e) => {
      const clickFilterVal = $(e.target).attr('data-filter');

      _filtering(clickFilterVal);
    });
  };

  const init = () => {
    if (!$gallery.length) return false;

    _filtering(DEFAULT_FILTER_VAL);

    _addEventListeners();

    return true;
  };

  return {
    init,
  };
};

export default worksGallery();

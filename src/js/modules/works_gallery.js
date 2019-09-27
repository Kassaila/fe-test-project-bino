const worksGallery = () => {
  const $gallery = $('.works_gallery__row');
  const $filterRow = $('.works_gallery__filters_row');
  const BTN_FILTER = '.works_gallery__filter';
  const ACTIVE_CLASS = 'works_gallery__filter_active';
  const GALLERY_BLOCK = '.works_gallery__block';
  const DEFAULT_FILTER_VAL = 'all';

  if (!$gallery) return;

  function filteriingGallery(filterVal) {
    const filterEl = `[data-filter="${filterVal}"]`;

    $filterRow
      .children(filterEl)
      .addClass(ACTIVE_CLASS)
      .siblings(BTN_FILTER)
      .removeClass(ACTIVE_CLASS);

    if (filterVal === 'all') {
      $gallery.children(GALLERY_BLOCK).animate({ opacity: 'show' }, 0);
    } else {
      $gallery.children(filterEl).animate({ opacity: 'show' }, 0);
      $gallery
        .children(GALLERY_BLOCK)
        .not(filterEl)
        .animate({ opacity: 'hide' }, 0);
    }
  }

  const init = () => {
    filteriingGallery(DEFAULT_FILTER_VAL);
    $(BTN_FILTER).on('click', (e) => {
      const clickFilterVal = $(e.target).attr('data-filter');

      filteriingGallery(clickFilterVal);
    });
  };

  return {
    init,
  };
};

export default worksGallery();

const worksGallery = () => {
    const $gallery = $('.works_gallery__row'),
        $filterRow = $('.works_gallery__filters_row'),
        BTN_FILTER = '.works_gallery__filter',
        ACTIVE_CLASS = 'works_gallery__filter_active',
        GALLERY_BLOCK = '.works_gallery__block',
        DEFAULT_FILTER_VAL = 'all';

    if (!$gallery) return;

    function filteriingGallery(filterVal) {
        const filterEl = `[data-filter="${filterVal}"]`;

        $filterRow.children(filterEl).addClass(ACTIVE_CLASS).siblings(BTN_FILTER).removeClass(ACTIVE_CLASS);

        if (filterVal === 'all') {
            $gallery.children(GALLERY_BLOCK).animate({ opacity: 'show' }, 0);
        } else {
            $gallery.children(filterEl).animate({ opacity: 'show' }, 0);
            $gallery.children(GALLERY_BLOCK).not(filterEl).animate({ opacity: 'hide' }, 0);
        }
    }

    const init = () => {
        filteriingGallery(DEFAULT_FILTER_VAL);
        $(BTN_FILTER).on('click', function () {
            const clickFilterVal = $(this).attr('data-filter');

            filteriingGallery(clickFilterVal);
        });
    }

    return {
        init,
    }
}

export default worksGallery();
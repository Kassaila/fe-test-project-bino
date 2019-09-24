const worksGallery = () => {
    const $gallery = $('.works_gallery__row'),
        BTN_FILTER = '.works_gallery__filter',
        ACTIVE_CLASS = 'works_gallery__filter_active',
        GALLERY_BLOCK = '.works_gallery__block';

    if (!$gallery) return;

    function filteriingGallery() {
        const filterVal = $(this).attr('data-filter'),
            filterEl = `[data-filter="${filterVal}"]`;

        $(this).addClass(ACTIVE_CLASS).siblings(BTN_FILTER).removeClass(ACTIVE_CLASS);

        if (filterVal === 'all') {
            $gallery.children(GALLERY_BLOCK).animate({ opacity: 'show' }, 0);
        } else {
            $gallery.children(filterEl).animate({ opacity: 'show' }, 0);
            $gallery.children(GALLERY_BLOCK).not(filterEl).animate({ opacity: 'hide' }, 0);
        }
    }

    const init = () => {
        $(window).on('load', () => $('[data-filter="all"]').trigger('click'));
        $(BTN_FILTER).on('click', filteriingGallery);
    }

    return {
        init,
    }
}

export default worksGallery();
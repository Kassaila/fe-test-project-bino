// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import navMobile from './modules/nav_mobile';
import welcomeSlider from './modules/welcome_slider.js';
import pagePosition from './modules/init_position';

($ => {
  // When DOM is ready
  $(() => {
    // navigation mobile
    navMobile();
    // welcome slider
    welcomeSlider();
    // page position
    pagePosition({
      scrTopHeight: 0.1,
      scrBottomHeight: 0.5,
    });
    // gallery filters
    $('.works_gallery__filter').on('click', function () {
      const filter = $(this).attr('data-filter'),
        $gallery = $('.works_gallery__row'),
        ACTIVE_CLASS = 'active';

      $(this).addClass(ACTIVE_CLASS).siblings('.works_gallery__filter').removeClass(ACTIVE_CLASS);

      if (filter === 'all') {
        $gallery.children('.works_gallery__block').animate({ opacity: 'show' }, 0);
      } else {
        $gallery.children(`[data-filter="${filter}"]`).animate({ opacity: 'show' }, 0);
        $gallery.children('.works_gallery__block').not(`[data-filter="${filter}"]`).animate({ opacity: 'hide' }, 0);
      }
    });
    //end
  });
})(jQuery);

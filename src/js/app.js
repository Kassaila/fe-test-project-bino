// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import navMobile from './modules/nav_mobile';
import welcomeSlider from './modules/welcome_slider';
import pagePosition from './modules/init_position';
import servicesSlider from './modules/services_slider';
import worksGallery from './modules/works_gallery';
import studySlider from './modules/study_slider';
import formValidation from './modules/form-validation';
import navScroll from './modules/nav-scroll';

(($) => {
  // When DOM is ready
  $(() => {
    navMobile.init();

    welcomeSlider.init();

    pagePosition.init({
      scrTopHeight: 0.1,
      scrBottomHeight: 0.5,
    });

    servicesSlider.init();

    worksGallery.init();

    studySlider.init();

    formValidation.init();

    navScroll.scrollTo();
    navScroll.highlight();
  });
})(jQuery);

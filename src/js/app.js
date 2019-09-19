// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import navMobile from './modules/nav_mobile';
import welcomeSlider from './modules/welcome_slider.js';

($ => {
  // When DOM is ready
  $(() => {
    // navigation mobile
    navMobile();
    // welcome slider
    welcomeSlider();
  });
})(jQuery);

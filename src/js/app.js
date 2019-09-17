// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import dotsEffect from "./modules/dots";

($ => {
  // When DOM is ready
  $(() => {
    $(".nav__button_mobile").on("click", function() {
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $('.nav__list').animate({opacity:'toggle', height: 'toggle'});
      } else {
        $(this).removeClass("active");
        $('.nav__list').animate({opacity:'toggle', height: 'toggle'});
      }
    });
  });
})(jQuery);

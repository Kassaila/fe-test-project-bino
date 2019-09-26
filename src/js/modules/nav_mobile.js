
const navMobile = () => {

  const $nav = $('.nav__list'),
    $navButton = $('.nav__button_mobile'),
    $navLink = $nav.find('.scroll-to'),
    ACTIVE_CLASS = 'active';

  const init = () => {

    $navButton.on('click', function () {
      if (!$(this).hasClass(ACTIVE_CLASS)) {
        $(this).addClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      } else {
        $(this).removeClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      }
    });

    $navLink.on('click', function () {
      if ($navButton.hasClass(ACTIVE_CLASS)) {
        $navButton.removeClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      }
    });

  }

  return {
    init,
  }

}

export default navMobile();

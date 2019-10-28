const navMobile = () => {
  const $nav = $('.nav__list');
  const $navButton = $('.nav__button_mobile');
  const $navLink = $nav.find('.scroll-to');
  const $lastLink = $($navLink[$navLink.length - 1]);
  const ACTIVE_CLASS = 'active';

  const _addEventListeners = () => {
    $navButton.on('click', () => {
      if (!$navButton.hasClass(ACTIVE_CLASS)) {
        $navButton.addClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      } else {
        $navButton.removeClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      }
    });

    $navLink.on('click', () => {
      if ($navButton.hasClass(ACTIVE_CLASS)) {
        $navButton.removeClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      }
    });

    $lastLink.on('blur', () => {
      if ($navButton.hasClass(ACTIVE_CLASS)) {
        $navButton.focus();
      }
    });
  };

  const init = () => {
    _addEventListeners();
  };

  return {
    init,
  };
};

export default navMobile();

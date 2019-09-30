const navMobile = () => {
  const $nav = $('.nav__list');
  const $navButton = $('.nav__button_mobile');
  const $navLink = $nav.find('.scroll-to');
  const ACTIVE_CLASS = 'active';

  const init = () => {
    $navButton.on('click', () => {
      if (!$navButton.hasClass(ACTIVE_CLASS)) {
        $navButton.addClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      } else {
        $navButton.removeClass(ACTIVE_CLASS);
        $nav.animate({ opacity: 'toggle', height: 'toggle' });
      }
      return true;
    });

    $navLink.on('click', () => {
      if ($navButton.hasClass(ACTIVE_CLASS)) {
        $navButton.removeClass(ACTIVE_CLASS);
        return $nav.animate({ opacity: 'toggle', height: 'toggle' });
      }
      return true;
    });
  };

  return {
    init,
  };
};

export default navMobile();

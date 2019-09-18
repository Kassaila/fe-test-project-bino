
const navMobile = () => {
  const nav = $('.nav__list'),
    navButton = $('.nav__button_mobile'),
    navLink = $('.nav__list a');
  // nav mobile button click
  navButton.on('click', function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      nav.animate({ opacity: 'toggle', height: 'toggle' });
    } else {
      $(this).removeClass('active');
      nav.animate({ opacity: 'toggle', height: 'toggle' });
    }
  });
  // anchor link click
  navLink.on('click', function () {
    if (navButton.hasClass('active')) {
      navButton.removeClass('active');
      nav.animate({ opacity: 'toggle', height: 'toggle' });
    }
  });
}

export default navMobile;

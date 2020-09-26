'use strict';

(function () {
  var closeBtn = document.querySelector('#close-btn-menu-js');
  var toggleBtn = document.querySelector('#toggle-btn-menu-js');
  var nav = document.querySelector('#nav-js');

  function closeNav() {
    nav.classList.remove('main-nav__list--open-js');
    nav.classList.add('main-nav__list--close-js');
    nav.classList.add('main-nav__list--animate-js');

    toggleBtn.classList.remove('main-nav__toggle-button--open-js');
  }

  function openNav() {
    nav.classList.remove('main-nav__list--close-js');
    nav.classList.add('main-nav__list--open-js');
    nav.classList.add('main-nav__list--animate-js');

    toggleBtn.classList.add('main-nav__toggle-button--open-js');
  }

  window.addEventListener('resize', function() {
    nav.classList.remove('main-nav__list--animate-js');
  });

  closeBtn.addEventListener('click', function() {
    closeNav();
  });

  toggleBtn.addEventListener('click', function() {
    if(nav.classList.contains('main-nav__list--close-js')) {
      openNav();
    } else {
      closeNav();
    }
  });

  closeBtn.classList.remove('main-nav__close-button--nojs');
  toggleBtn.classList.remove('main-nav__toggle-button--nojs');
  nav.classList.add('main-nav__list--close-js');
})();

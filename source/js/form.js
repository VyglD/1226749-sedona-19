'use strict';

(function () {
  var UTIL = window.util;
  var BACKEND = window.backend;

  var form = document.querySelector('#form-js');
  var submit = document.querySelector('#form-submit-js');
  var modalWindowError = document.querySelector('#modal-problem-js');
  var modalWindowSuccess = document.querySelector('#modal-ok-js');

  var onLoad = function (response) {};

  var onCloseButtonWindowClick = function (evt) {
    var findModalWindow = function (element) {
      if (element.classList.contains('modal')) {
        UTIL.removeClassFromElement(element, 'modal--open');
      } else {
        findModalWindow(element.parentElement);
      }
    }

    findModalWindow(evt.target);
    evt.target.removeEventListener('click', onCloseButtonWindowClick);
  };

  var showModalWindow = function (element) {
    UTIL.addClassToElement(element, 'modal--open');
    element.querySelector('.modal__button')
            .addEventListener('click', onCloseButtonWindowClick);
  };

  var onSubmitAction = function () {

    Array.prototype.forEach.call(
      form.querySelectorAll('input'),
      function (input) {
        if (!input.validity.valid) {
          input.style.border = '2px solid red';
        } else {
          input.style.border = '';
        }
      }
    );

    if(form.checkValidity()) {
      event.preventDefault();

      showModalWindow(modalWindowSuccess);

      BACKEND.request('POST', new FormData(form), 'https://echo.htmlacademy.ru', onLoad, onLoad);
    } else {
      showModalWindow(modalWindowError);
    }

  };

  if (form) {
    submit.addEventListener('click', onSubmitAction);
  }
})();

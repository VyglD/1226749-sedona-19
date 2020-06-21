'use strict';

(function () {

  var init = function () {
    var removeClassFromElement = function (element, nameClass) {
      if (element && element.classList.contains(nameClass)) {
        element.classList.remove(nameClass);
      }
    };

    var addClassToElement = function (element, nameClass) {
      if (element && !element.classList.contains(nameClass)) {
        element.classList.add(nameClass);
      }
    };

    window.util = {
      removeClassFromElement: removeClassFromElement,
      addClassToElement: addClassToElement,
    }
  };

  window.util = {
    init: init,
  };

})();

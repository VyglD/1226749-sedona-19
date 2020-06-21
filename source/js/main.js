'use strict';

(function () {

  var init = function () {
    var load = true;
    var  modules = [
      window.util,
      window.backend,
      window.menu,
      window.form,
      window.map,
    ];

    setTimeout(function() {

      modules.forEach(function(module) {
        if(!module){
          load = false;
        };
      });

      if (!load) {
        init();
      } else {
        modules.forEach(function(module) {
          module.init();
        });
      }

    }, 0);
  };

  init();

})();

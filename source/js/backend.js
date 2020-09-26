'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };

  var request = function (method, data, url, onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open(method, url);
    xhr.send(data);
  };

  window.backend = {
    request: request,
  };
})();

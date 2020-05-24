var closeBtn = document.querySelector('#close-btn-menu-js');
var toggleBtn = document.querySelector('#toggle-btn-menu-js');
var nav = document.querySelector('#nav-js');
var map = document.querySelector('#map-js');
var form = document.querySelector('#form-js');
var submit = document.querySelector('#form-submit-js');

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

if(map) {
  map.outerHTML = '<div class="dislocation__map-wrapper dislocation__map-wrapper--interactive" id="map-js"></div>';
  map = document.querySelector('#map-js');

  let scriptMap = document.createElement('script');
  scriptMap.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdxiZ8JD-Awc3VOchAbkcA54-XHZJYkGY&callback=initMap';
  scriptMap.defer = true;
  scriptMap.async = true;

  window.initMap = function() {
    let coordinates = {lat: 34.8679599, lng: -111.7617165};

    let googleMap = new google.maps.Map(map, {
      center: coordinates,
      zoom: 7
    });

    let mapMarker = new google.maps.Marker({
      position: coordinates,
      map: googleMap,
      icon: 'img/icon-map-marker.svg',
      title: 'Седона'
    });

  };

  document.head.appendChild(scriptMap);
}

if(form) {
  var inputArray = form.querySelectorAll('input');
  var modalBtnArray =  document.querySelectorAll('.modal__button');
  var modalProblem = document.querySelector('#modal-problem-js');
  var modalOk = document.querySelector('#modal-ok-js');

  submit.addEventListener('click', function(event) {
    let validity = true;

    event.preventDefault();

    for(var i=0; i < inputArray.length; i++) {
      if(!inputArray[i].validity.valid) {
        validity = false;
        modalProblem.classList.add('modal--open');
        break;
      }
    }

    if(validity) {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://echo.htmlacademy.ru');
      xhr.send(new FormData(form));

      xhr.onload = function() {
        console.log(xhr.response);
      };

      modalOk.classList.add('modal--open');
    }
  });

  for(var i=0; i < modalBtnArray.length; i++) {
    modalBtnArray[i].addEventListener('click', function(event) {
      event.target.parentElement.parentElement.classList.remove('modal--open');
    });
  }
}

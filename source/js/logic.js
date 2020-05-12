var closeBtn = document.querySelector('#close-btn-menu');
var toggleBtn = document.querySelector('#toggle-btn-menu');
var nav = document.querySelector('#nav');

function closeNav() {
    nav.classList.remove('main-nav__list--open');
    nav.classList.add('main-nav__list--close');
    nav.classList.add('main-nav__list--animate');
}

function removeAnimate() {
    nav.classList.remove('main-nav__list--animate');
}

nav.classList.add('main-nav__list--close');

document.body.onresize = removeAnimate;

closeBtn.addEventListener('click', function() {
    closeNav();
});

toggleBtn.addEventListener('click', function() {
    if(nav.classList.contains('main-nav__list--close')) {
        nav.classList.remove('main-nav__list--close');
        nav.classList.add('main-nav__list--open');
        nav.classList.add('main-nav__list--animate');
    } else {
        closeNav();
    }
});

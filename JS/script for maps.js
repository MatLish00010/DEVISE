var link = document.querySelector('.address');
var popup = document.querySelector('.window__map');
var close = popup.querySelector('.window__close');

var shadow = document.querySelector('.window__overlay');


// Открытие окна и тени
link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('window-show');
    shadow.classList.add('window__overlay-shadow');
      if (storage) {
        login.value = storage;
        mail.focus();
    } else {
        login.focus();
    }
});


// закрытие окна
close.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('window-show');
    popup.classList.remove('window__error');
    shadow.classList.remove('window__overlay-shadow');
});


// закрытие на esc
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains('window-show')) {
            popup.classList.remove('window-show');
            popup.classList.remove('window__error');
            shadow.classList.remove('window__overlay-shadow');
        }
    }
});


// закрытие при нажатии на тень
shadow.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove('window-show');
    popup.classList.remove('window__error');
    shadow.classList.remove('window__overlay-shadow');
});

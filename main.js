let subBtn = document.querySelector('.btn');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup-close');
let popupSubmit = document.querySelector('.popup-btn');
let products = document.querySelector('.products-btn');
let dropdown = document.querySelector('.dropdown');


subBtn.addEventListener('click', function() {
  popup.classList.toggle('active');
});

// Закрытие popup при нажатии на крестик
popupCloseBtn.addEventListener('click', function() {
  popup.classList.toggle('active');
});

popupSubmit.addEventListener('click', function() {
  popup.classList.toggle('active');
});


// Выпадающий список
products.addEventListener('click', function() {
  dropdown.classList.toggle('hidden');
});

// Слайдер
$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $('.popylar__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  });
});
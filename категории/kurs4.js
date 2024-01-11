let subBtns = document.querySelectorAll('.buy');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup-close');
let popupSubmit = document.querySelector('.popup-btn');

subBtns.forEach((btn) => {
  btn.addEventListener('click', function() {
    popup.classList.toggle('active');
  });
});

// Закрытие popup при нажатии на крестик
popupCloseBtn.addEventListener('click', function() {
  popup.classList.toggle('active');
});

popupSubmit.addEventListener('click', function() {
  popup.classList.toggle('active');
});
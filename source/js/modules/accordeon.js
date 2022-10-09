'use strict';
(function() {
  var accordeon = document.querySelector('.accordeon');
  var accordeonButton = document.querySelector('.accordeon__button');
  if (accordeon) {
    document.addEventListener('click', function(evt) {
      let button;
      if (evt.target.classList.contains('accordeon__button')) {
        button = evt.target;
        evt.preventDefault();
        button.classList.toggle('accordeon__button--opened');
        button.nextElementSibling.classList.toggle('accordeon__content--opened');
      } else if (evt.target.classList.contains('pay__button')) {
        button = evt.target.parentElement;
        evt.preventDefault();
        button.classList.toggle('accordeon__button--opened');
        button.nextElementSibling.classList.toggle('accordeon__content--opened');
      }
    });
  };
})();

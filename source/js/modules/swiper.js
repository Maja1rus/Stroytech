'use strict';
(function() {

  var mainSwiper = new Swiper('.main-slider__container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  var partnersSwiper = new Swiper('.partners-slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
})();
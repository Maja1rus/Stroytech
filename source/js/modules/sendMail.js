const URL = '/udata/custom/send_mail';

// IIFE для отправки письма. Оно нам нужно для того, чтобы переменные не попадали в общую область видимости
(function () {
  const body = document.querySelector('body');
  const popup = document.querySelector('.popup');

  const closePopupHandler = () => {
    popup.classList.remove('active');
    body.classList.remove('popup-open');
    body.style.removeProperty('margin-right');
  }

  const ajaxSend = async (formData) => {
    const fetchResp = await fetch(URL, {
      method: 'POST',
      body: formData
    });
    if (!fetchResp.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
    }
    return await fetchResp.text();
  };

  const successHandler = (answerType) => { // сборка данных модального окна для отправки в функцию (функция лежит в modal.js)
    const popupArr = {};
    console.log(answerType);
    const modal = answerType === 'success' ?
      document.querySelector('.modal--success') :
      document.querySelector('.modal--fail');

    popupArr.modal = modal;
    popupArr.className = 'active';
    popupArr.closeElt = modal.querySelector('.modal__button-close');
    popupArr.overlayElt = modal.querySelector('.modal__overlay');

    return popupArr;
  };

  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      ajaxSend(formData)
        .then((response) => {
          const modal = successHandler('success'); // формируем объект для вызова модального окна
          handleModals(modal); // формируем модальное окно и вешаем все обработчики на это конкретное модальное окно
          form.reset(); // очищаем поля формы 
          if (popup) {
            closePopupHandler()
          }
        })
        .catch((err) => {
          const modal = successHandler('failed');
          handleModals(modal);
          if (popup) {
            closePopupHandler()
          }
        });
    });
  });
})();
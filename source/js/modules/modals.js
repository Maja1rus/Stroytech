function handleModals({ modal, className, closeElt, overlayElt }) {

  const body = document.querySelector('body');
  // scroll
  const documentWidth = parseInt(document.documentElement.clientWidth);
  const windowWidth = parseInt(window.innerWidth);
  const scrollbarWidth = windowWidth - documentWidth;

  const closePopupHandler = () => {
    modal.classList.remove('active');
    body.classList.remove('popup-open');
    body.style.removeProperty('margin-right');
    closeElt.removeEventListener('click', closePopupHandler); // при закрытии окна снимаем слушатель кнопки - он нам больше не нужен
    window.removeEventListener('keydown', escapeHandler); // при закрытии окна снимаем слушатель Эскейпа
    overlayElt.removeEventListener('click', overlayClickHandler); // призакрытии окна снимаем слушатель клика по вуали
  }

  function escapeHandler(e) { // закрытие окна по кнопке escape
    if (e.key === 'Escape') {
      closePopupHandler();
    }
  };

  function overlayClickHandler(e) { // закрытие окна при клике на паранжу
    if (e.target === overlayElt) {
      closePopupHandler();
    }
  };

  const modalPopupHandler = (e) => {
    if (e) e.preventDefault();
    modal.classList.add(className);
    body.classList.add('popup-open');
    body.style.marginRight = `${scrollbarWidth}px`;

    closeElt.addEventListener('click', closePopupHandler); // слушаем клавишу Энтер по кнопке закрытия      

    overlayElt.addEventListener('click', overlayClickHandler); // слушаем клик по паранже       

    window.addEventListener('keydown', escapeHandler); // слушаем клавишу Эскейп
  }

  modalPopupHandler();


  // закрыть модалку со статусом отправки через 30 сек
  if (modal.classList.contains('modal') === true) {
    // setTimeout(closePopupHandler, 15000);
  }

}
// открытие попапа с формой
const popupOpenBtns = document.querySelectorAll('.popup__open')
if (popupOpenBtns.length > 0) {
    const successHandler = () => { // сборка данных модального окна для отправки в функцию (функция лежит в modal.js)
        const popupArr = {};
        popupArr.modal = document.querySelector('.popup');
        popupArr.className = 'active';
        popupArr.closeElt = popupArr.modal.querySelector('.popup__close');
        popupArr.overlayElt = popupArr.modal.querySelector('.popup__content');
        return popupArr;
    };
    popupOpenBtns.forEach(popupOpenBtn => {
        popupOpenBtn.addEventListener('click', () => {
            const modal = successHandler()
            handleModals(modal)
        })
    })
}

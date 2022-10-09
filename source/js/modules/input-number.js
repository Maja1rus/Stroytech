const inputNumberWrap = document.querySelector('.calculator-main__input-number');
if (inputNumberWrap) {
    const inputNumber = inputNumberWrap.querySelector('.input-number');
    const inputNumberMinus = inputNumberWrap.querySelector('.input-number__minus');
    const inputNumberPlus = inputNumberWrap.querySelector('.input-number__plus');
    function increment(){
        inputNumber.value = parseInt(inputNumber.value) + 1;
    }

    function decrement(){
        if (!parseInt(inputNumber.value) <= 0) {
            inputNumber.value = parseInt(inputNumber.value) - 1;
        } else {
            inputNumber.value = 0
        }
    }
    inputNumberMinus.addEventListener('click', decrement);
    inputNumberPlus.addEventListener('click', increment);
}

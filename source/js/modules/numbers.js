(function () {
  const statisticsList = document.querySelector('.statistics__list');
  if (statisticsList) {
    const statisticsItems = statisticsList.querySelectorAll('.statistics__item')
    statisticsItems.forEach(statisticsItem => {
      statisticsFn(statisticsItem)
    })

    function statisticsFn(numberBlock) {
      const number = numberBlock.querySelector('.number');
      if (number) {
        const numberTop = number.getBoundingClientRect().top;
        let start = +number.innerText;
        let end = +number.dataset.max;

        window.addEventListener('scroll', function onScroll() {
          if (window.pageYOffset > numberTop - window.innerHeight / 2) {
            this.removeEventListener('scroll', onScroll);
            const interval = setInterval(function () {
              let del = Math.round(end / 600);
              start = start + del;
              number.innerText = ++start;
              if (start > end) {
                clearInterval(interval);
                number.innerText = end;
              }
            }, 1);
          }
        });
      }

    }
  }
})();
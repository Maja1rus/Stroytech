'use strict';
(function() {
  let tel = document.querySelector('#tel');
  if (tel) {
    var phoneMask = IMask(
      document.getElementById('tel'), {
        mask: '+{7}(000)000-00-00'
      });
  }
})();
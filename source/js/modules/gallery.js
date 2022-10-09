'use strict';
(function() {

  let initializeGallery = function() {
    let galleries = document.querySelectorAll('.lightgallery');
    for (let i = 0; i < galleries.length; i++) {
      lightGallery(galleries[i], {
        thumbnail: true,
        share: false,
        download: false,
      })
    }
  }

  setTimeout(initializeGallery, 0);

})();
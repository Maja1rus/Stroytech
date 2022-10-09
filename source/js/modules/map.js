'use strict';
(function() {
  let yMap;
  const mapElement = document.querySelector('[data-map]');
  if (mapElement) {
      yMap = new YmapsInitializer(mapElement);
  }})();

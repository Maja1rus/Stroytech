const coords = {
  coords: [59.94402758436062, 30.39311255820548],
  name: 'Стройтек',
  description: "Смольный пр., д. 7, пом. 12-н",
};


class YmapsInitializer {
  constructor(container, placeCoords = coords) {
    this.container = container;
    this.coords = placeCoords;
    this.url = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=b0f67f95-d886-4dbf-8fa2-08f53c846901>';
    this.myMap = null;
    this.mapContainer = null;
    this.apiScript = null;
    this.myPlacemark = null;
    this.observer = null;
    this.loadMap = this.loadMap.bind(this);
    this.intersectionHandler = this.intersectionHandler.bind(this);
    this.getElementPosition(this.container);
  }

  addMapDetails(mapCoords) {
    const init = () => {
      this.myMap = new ymaps.Map("map", {
        center: this.coords.coords,
        zoom: 17
      });
      this.myPlacemark = new ymaps.Placemark(this.myMap.getCenter(), {
        hintContent: this.coords.name,
        balloonContent: mapCoords.description
      }, {

        iconLayout: 'default#image',
        iconImageHref: 'img/pin.svg',
        iconImageSize: [42, 42],
        iconImageOffset: [-5, -38]
      });
      this.myMap.geoObjects.add(this.myPlacemark);
      this.myMap.behaviors.disable('scrollZoom');
    }

    ymaps.ready(init);
  }

  changeCenter(newCoords) {
    this.myMap.setCenter(newCoords.coords);
    if (this.myPlacemark) this.myPlacemark = null;
    this.myPlacemark = new ymaps.Placemark(this.myMap.getCenter(), {
      hintContent: newCoords.name,
      balloonContent: newCoords.description
    }, {
      iconLayout: 'default#image',
      iconImageHref: '/img/internal/push_pin.svg',
      iconImageSize: [42, 42],
      iconImageOffset: [-5, -38]
    });
    this.myMap.geoObjects.add(this.myPlacemark);
  }

  loadApikey(url) {
    if (this.apiScript) return;
    this.apiScript = document.createElement('script');
    this.apiScript.src = url;
    this.container.prepend(this.apiScript);
    this.apiScript.onload = () => this.addMapDetails(this.coords);
  }

  getElementPosition(target) {
    this.observer = new IntersectionObserver(this.intersectionHandler);
    this.observer.observe(target);
  }

  intersectionHandler(entries) {
    entries.map(entry => {
      if (entry.isIntersecting) {
        this.createMapContainer();
        this.loadApikey(this.url);
        this.observer.unobserve(this.container);
        this.observer = null;
      }
    })
  }

  loadMap() {
    this.createMapContainer();
    this.loadApikey(this.url);
  }

  createMapContainer() {
    if (this.mapContainer) return;
    this.mapContainer = document.createElement('div');
    this.mapContainer.id = 'map';
    this.mapContainer.setAttribute('style', 'width:100%; height: 100%;');
    this.container.appendChild(this.mapContainer);
  }
}
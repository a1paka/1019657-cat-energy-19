var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [59.938635, 30.323118],
        zoom: 17
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: "Кэт-Энерджи",
    }, {
      iconLayout: "default#image",
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [80, 70],
      iconImageOffset: [0, 0]
    });

  myMap.geoObjects
    .add(myPlacemark);
}

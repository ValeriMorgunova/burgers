
  ymaps.ready(init);

function init(){     

    var myMap;

    myMap = new ymaps.Map("map", {
        center: [59.94, 30.32],
        zoom: 11,
        controls: []
    });
    
    myMap.behaviors.disable('scrollZoom');
    
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
    
    var html  = '<div class="popup">';
        html +=     '<img src="../img/icons/logo.svg" alt="logo" />';
        html +=     '<div class="popup-text">';
        html +=         '<p>MR. BURGER</p>';
        html +=         '<p>ст.м. Адмиралтейская</p>';
        html +=         '<p>ст.м. Площадь Мужества</p>';
        html +=         '<p>ст.м. Международная</p>';
        html +=         '<p>Санкт-Петербург</p>';
        html +=         '<p>Россия</p>';
        html +=         '<p> +7(812)377-13-77</p>';
        html +=     '</div>';
        html += '</div>';

    var myPlacemarkOne = new ymaps.Placemark([59.94, 30.32] , 
        {
         balloonContent: html
        },
        { iconLayout: 'default#image',
          iconImageHref: '../img/icons/map-marker.svg',
          iconImageSize: [40, 51],
          iconImageOffset: [-20, -47],
          balloonLayout: "default#imageWithContent",
          balloonContentSize: [289, 151],
          balloonImageHref: 'http://blog.karmanov.ws/files/APIYaMaps1/min_popup.png',
          balloonImageOffset: [-144, -147],
          balloonImageSize: [289, 151],
          balloonShadow: false });     



    myMap.geoObjects.add(myPlacemarkOne);

    /* var myPlacemarkTwo = new ymaps.Placemark([60.00, 30.40] , {},
        { iconLayout: 'default#image',
          iconImageHref: '../img/icons/map-marker.svg',
          iconImageSize: [40, 51],
          iconImageOffset: [-20, -47] });     

    myMap.geoObjects.add(myPlacemarkTwo);

     var myPlacemarkThree = new ymaps.Placemark([59.86, 30.37] , {},
        { iconLayout: 'default#image',
          iconImageHref: '../img/icons/map-marker.svg',
          iconImageSize: [40, 51],
          iconImageOffset: [-20, -47] });     

    myMap.geoObjects.add(myPlacemarkThree); */

}


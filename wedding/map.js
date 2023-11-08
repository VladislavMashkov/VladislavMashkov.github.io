ymaps.ready(init);
                
                        function init () {
                            var myMap = new ymaps.Map("map", {
                                center: [55.75796408118036, 37.54756698743938],
                                zoom: 18,
                                        controls: []
                            }, {
                                searchControlProvider: 'yandex#search'
                            });
                    
                                //Media Queries
                
                                if (window.matchMedia("(max-width: 1500px)").matches) {
                                    myMap.setCenter([55.75796408118036, 37.54756698743938])
                                };
                                if (window.matchMedia("(max-width: 992px)").matches) {
                                    myMap.setCenter([55.75796408118036, 37.54756698743938])
                                };
                                if (window.matchMedia("(max-width: 767px)").matches) {
                                    myMap.setCenter([55.75796408118036, 37.54756698743938])
                                };
                
                    // Создаем геообъект с типом геометрии "Точка".
                    myGeoObject = new ymaps.GeoObject({
                            // Описание геометрии.
                            geometry: {
                                type: "Point",
                                coordinates: [55.75796408118036, 37.54756698743938]
                            },
                            // Свойства.
                            properties: {
                                // Контент метки.
                                iconContent: 'Туть',
                                hintContent: 'Компания "Туть"'
                              }
                            }, {
                            // Опции.
                            // Иконка метки будет растягиваться под размер ее содержимого.
                            preset: 'islands#redDotIcon',
                            // Метку можно перемещать.
                            draggable: false,
                            // Необходимо указать данный тип макета.
                            //iconLayout: 'default#image',
                                         // Своё изображение иконки метки.
                            //iconImageHref: 'img/pin.png',
                            // Размеры метки.
                            //iconImageSize: [74, 99],
                            // Смещение левого верхнего угла иконки относительно
                            // её "ножки" (точки привязки).
                            //iconImageOffset: [-7, -110]
                          });
                
                    myMap.behaviors
                        // Отключаем часть включенных по умолчанию поведений:
                        //  - drag - перемещение карты при нажатой левой кнопки мыши;
                        //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
                        .disable('scrollZoom')
                
                
                        myMap.geoObjects
                        .add(myGeoObject)
                
                      }
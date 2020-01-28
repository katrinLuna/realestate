'use strict';

(function () {
    let itemInfoElment = document.querySelector('.item-info__text');
    
    let generateInfo = function (data) {
        itemInfoElment.querySelector('.item-info__title').textContent = data.title;
        itemInfoElment.querySelector('.item-info__address').textContent = data.address;
        itemInfoElment.querySelector('.item-info__price').textContent = data.price;
        itemInfoElment.querySelector('.item-info__description').textContent = data.description;
        itemInfoElment.querySelector('.item-info__sellerName').textContent = data.sellerName;

    };

    window.descriptionGenerate = generateInfo;

    // <!-- [{"id":1849621339,
    // "title":"2-к квартира, 85.5 м², 13/24 эт.",
    // "address":"Спартаковская ул., 5/7",
    // "price":"14 150 000 руб.",
    // "description":"Продается 2 комнатная квартира, Общая площадь 85,5 кв.м . Квартира расположена на 13 этаже 22 этажного моно-кирпичного дома, построенного в 2002 году. 2 изолированные комнаты (20 и 15 кв.м.), кухня –столовая 16 кв.м., отличное состояние, полностью готова для проживания (оставляем всю мебель и технику), сделан косметический ремонт, полы в комнатах паркет, кухня – кафель, коридор кафель и ламинат, 2 кондиционера.",
    // "sellerName":"Анна",

    // "images":["http://134.209.138.34/images/large/6329074398.jpg","http://134.209.138.34/images/large/6329074586.jpg","http://134.209.138.34/images/large/6329075095.jpg","http://134.209.138.34/images/large/6329075174.jpg"]}] -->


} ());
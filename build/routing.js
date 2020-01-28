'use strict';

(function () {
    const DATA_URL = 'http://134.209.138.34/item/';
    const ESTATES_LIST_ELEMENT = document.querySelector('.realestate-list');
    const ESTATE_ITEM_PAGE = document.querySelector('.item-info-wrapper');
    let routing = {
        home: 1,
        page: async function (id) {
            ESTATES_LIST_ELEMENT.classList.toggle('visually-hidden');
            let data = await window.downloadData(DATA_URL + id);
            console.log(data);
            // вызов функции генерации страницы
            ESTATE_ITEM_PAGE.classList.toggle('visually-hidden');
        }
    }

    window.routing = routing;

} ());
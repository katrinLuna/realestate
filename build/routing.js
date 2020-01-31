'use strict';

(function () {
    const DATA_URL = 'http://134.209.138.34/item/';
    const ESTATES_LIST_ELEMENT = document.querySelector('.realestate-list');
    const ESTATE_ITEM_PAGE = document.querySelector('.item-info');
    const BACK_BTN = document.querySelector('.item-info__back-btn');

    let routing = {
        page: async function (id) {
            ESTATES_LIST_ELEMENT.classList.toggle('visually-hidden');
            let data = await window.downloadData(DATA_URL + id);
            window.descriptionGenerate(data[0]);
            routing.pageData = data[0];
            ESTATE_ITEM_PAGE.classList.toggle('visually-hidden');
        }
    }

    BACK_BTN.addEventListener('click', function () {
        ESTATES_LIST_ELEMENT.classList.toggle('visually-hidden');
        ESTATE_ITEM_PAGE.classList.toggle('visually-hidden');
    });

    window.routing = routing;

} ());
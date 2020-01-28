'use strict';

(async function () {
    const REQUST_URL = 'http://134.209.138.34/items';
    const ITEM_TEMPLATE = document.querySelector('#realestate-template').content.querySelector('.realestate-item');
    const REALESTATE_LIST = document.querySelector('.realestate-list');
    const DATA_ARRAY = await window.downloadData(REQUST_URL);
    let fragment;

    let generateEstateItems = function () {
        fragment = document.createDocumentFragment();
        
        for (let i = 0; i < DATA_ARRAY.length; i++) {
            let item = ITEM_TEMPLATE.cloneNode(true);
            item.dataset.id = DATA_ARRAY[i].id;
            item.querySelector('.realestate-item__name').textContent = DATA_ARRAY[i].title;
            item.querySelector('.realestate-item__price').textContent = DATA_ARRAY[i].price;
            item.querySelector('.realestate-item__address').textContent = DATA_ARRAY[i].address;
            item.querySelector('.realestate-item__preview').src = DATA_ARRAY[i].previewImage;
            item.querySelector('.realestate-item__id').textContent = DATA_ARRAY[i].id;
            
            item.addEventListener('click', function (evt) {
                window.routing.page(item.dataset.id);
            });

            fragment.appendChild(item);
        }

    };
    
    await generateEstateItems();
    REALESTATE_LIST.appendChild(fragment);
    
}());
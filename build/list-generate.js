'use strict';

(async function () {
    const REQUST_URL = 'http://134.209.138.34/items';
    const ITEM_TEMPLATE = document.querySelector('#realestate-item-template').content.querySelector('.realestate-item');
    const REALESTATE_LIST = document.querySelector('.realestate-list');
    let dataRequest = await window.downloadData(REQUST_URL);
    let fragment;

    let generateEstateItems = function () {
        fragment = document.createDocumentFragment();
        
        for (let i = 0; i < dataRequest.length; i++) {
            let item = ITEM_TEMPLATE.cloneNode(true);
            item.querySelector('.realestate-item__name').textContent = dataRequest[i].title;
            item.querySelector('.realestate-item__price').textContent = dataRequest[i].price;
            item.querySelector('.realestate-item__address').textContent = dataRequest[i].address;
            item.querySelector('.realestate-item__preview').src = dataRequest[i].previewImage;
            item.querySelector('.realestate-item__id').textContent = dataRequest[i].id;
            
            fragment.appendChild(item);
        }

    };
    
    await generateEstateItems();
    REALESTATE_LIST.appendChild(fragment);
    

}());
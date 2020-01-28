'use strict';

(function () {
    let itemInfoElment = document.querySelector('.item-info__text');
    let imgTemplate = document.querySelector('#realestate-template').content.querySelector('.item-info__img-wrapper');
    let imgGallery = document.querySelector('.item-info__gallery-wrapper');

    let generateInfo = function (data) {
        itemInfoElment.querySelector('.item-info__title').textContent = data.title;
        itemInfoElment.querySelector('.item-info__address').textContent = data.address;
        itemInfoElment.querySelector('.item-info__price').textContent = data.price;
        itemInfoElment.querySelector('.item-info__description').textContent = data.description;
        itemInfoElment.querySelector('.item-info__sellerName').textContent = 'Продавец: ' + data.sellerName;
        itemInfoElment.querySelector('.item-info__id').textContent = data.id;
        imgGallery.innerHTML = '';

        let fragment = document.createDocumentFragment();

        for (let i = 0; i < data.images.length; i++) {
            let itemImg = imgTemplate.cloneNode(true);
            let img = itemImg.querySelector('.item-info__img');
            img.src = data.images[i];
            img.alt = data.title;
            fragment.appendChild(itemImg);
        }
        
        imgGallery.appendChild(fragment);
    };

    window.descriptionGenerate = generateInfo;
} ());
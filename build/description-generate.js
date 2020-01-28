'use strict';

(function () {
    let itemInfoElment = document.querySelector('.item-info__text');
    let imgTemplate = document.querySelector('#realestate-template').content.querySelector('.item-info__img');
    let imgGallery = document.querySelector('.item-info__img-gallery');

    let generateInfo = function (data) {
        itemInfoElment.querySelector('.item-info__title').textContent = data.title;
        itemInfoElment.querySelector('.item-info__address').textContent = data.address;
        itemInfoElment.querySelector('.item-info__price').textContent = data.price;
        itemInfoElment.querySelector('.item-info__description').textContent = data.description;
        itemInfoElment.querySelector('.item-info__sellerName').textContent = data.sellerName;
        imgGallery.innerHTML = '';

        let fragment = document.createDocumentFragment();

        for (let i = 0; i < data.images.length; i++) {
            let itemImg = imgTemplate.cloneNode(true);
            itemImg.src = data.images[i];
            itemImg.alt = data.title;
            fragment.appendChild(itemImg);
        }
        
        imgGallery.appendChild(fragment);
    };

    window.descriptionGenerate = generateInfo;
} ());
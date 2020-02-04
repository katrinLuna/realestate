'use strict';

(function () {
    const forwardBtnElement = document.querySelector('.item-info__gallery-forward');
    const backBtnElement = document.querySelector('.item-info__gallery-back');
    const galleryWrapperElement = document.querySelector('.item-info__gallery-wrapper');
    let imgIndex = 0;
    let pageId;
    let imgGalleryLength;
    let shift;

    let resetSlider = function () {
        galleryWrapperElement.style = 'transform: translateX(0)';
    }

    let requireGalleryLength = function () {
        if (pageId !== window.routing.pageData.id) {
            imgIndex = 0;
            pageId = window.routing.pageData.id;
        }
        imgGalleryLength = window.routing.pageData.images.length;
    };

    let setImage = function (imgIndex) {
        shift = imgIndex * 100;
        galleryWrapperElement.style = 'transform: translateX(-' + shift + '%)';
    };

    forwardBtnElement.addEventListener('click', function () {
        requireGalleryLength();

        if (imgIndex < imgGalleryLength - 1) {
            imgIndex +=1;
        } else {
            imgIndex = 0;
        }

        setImage(imgIndex);
    });

    backBtnElement.addEventListener('click', function () {
        requireGalleryLength();

        if (imgIndex < imgGalleryLength && imgIndex != 0) {
            imgIndex -= 1;
        } else {
            imgIndex = imgGalleryLength - 1;
            console.log(imgIndex);
        }

        setImage(imgIndex);
    });

    window.slider = {
        resetSlider: resetSlider
    };
}());
'use strict';

(function () {
    let downloadData = async function (url) {
        let request = await fetch(url);

        if (request.ok) {
            return request.json();
        } else {
            throw new Error('Данные не получены из-за из-за ошибки ' + request.status); 
        };
    }

    window.downloadData = downloadData;
}()); 
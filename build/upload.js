'use strict';

(function () {
    let downloadData = function (url) {
        let request = fetch(url);

        return request.then(result => {
            if (result.ok) {
                return result.json();
            } else {
                console.log(request);
                throw new Error('Данные не получены из-за из-за ошибки ' + request.status); 
            }
        }
        );
    }

    window.downloadData = downloadData;
}()); 

// (function () {
//     let downloadData = async function (url) {
//         let request = await fetch(url);

//         if (request.ok) {
//             return request.json();
//         } else {
//             throw new Error('Данные не получены из-за из-за ошибки ' + request.status); 
//         };
//     }

//     window.downloadData = downloadData;
// }()); 
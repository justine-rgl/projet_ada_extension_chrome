//on attend que la page soit fully loadée pour faire des trucs
document.addEventListener('DOMContentLoaded', function (){  
    //on écoute le bouton pour créer l'objet
    document.querySelector('.increase').addEventListener('click', onclick, false)
    function onclick(){
        chrome.storage.local.set({increase: true})
    };

    // document.querySelector('.decrease').addEventListener('click', onclick, false)
    // function onclick(){
    //     chrome.storage.local.set({decrease: true})
    // };

}, false);
//on attend que la page soit fully loadée pour faire des trucs
document.addEventListener('DOMContentLoaded', function (){  
    //on écoute le bouton pour créer l'objet
    document.querySelector('.increase').addEventListener('click', onclickIncrease, false)
    function onclickIncrease(){
        chrome.storage.local.set({increase: true})
    };

    document.querySelector('.decrease').addEventListener('click', onclickDecrease, false)
    function onclickDecrease(){
        chrome.storage.local.set({decrease: true})
    };

    const toggle = document.querySelector(".toggle");
    toggle.addEventListener("click", onclickToggle, false)
    chrome.storage.local.set({toggle: false})
    function onclickToggle() {
    chrome.storage.local.get(["toggle"]).then((result) => {
        if(result.toggle == false) {
            function appOn() {
                document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
                let media = document.querySelectorAll("img, picture, video");
                media.forEach((mediaItem) => {
                mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
                })
            }

            appOn()
            chrome.storage.local.set({toggle: true})
        }

        else {
             function appOff() {
                document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
                let media = document.querySelectorAll("img, picture, video");
                media.forEach((mediaItem) => {
                mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
                })
            }

            appOff()
            chrome.storage.local.set({toggle: false})

        }
    })
}
}, false);
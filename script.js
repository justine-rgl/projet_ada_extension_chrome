//on écoute le changement du storage déclenché par le bouton de la popup
chrome.storage.local.onChanged.addListener((changes, local) => {
    chrome.storage.local.get('decrease').then((result) => {
        if (result.decrease == true) {
            console.log("result.decrease")
            decreaseTextSize()
            chrome.storage.local.set({'decrease': false})  
        }
    })
    chrome.storage.local.get('increase').then((result) => {
        if (result.increase == true) {
            increaseTextSize()
            chrome.storage.local.set({'increase': false})  
        }
    })
})

chrome.storage.local.onChanged.addListener((changes, local) => {
    chrome.storage.local.get(["toggle"]).then((result) => {
        if (result.toggle == true) {
        function appOn() {
            document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
        
            let media = document.querySelectorAll("img, picture, video");
        
            media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
            })
        }

        appOn()
        } else {
        function appOff() {
            document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
        
            let media = document.querySelectorAll("img, picture, video");
        
            media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
            })
        }

        appOff()
        }
    });
})

function decreaseTextSize() {
    let texts = document.querySelectorAll("h1, h2, h3, h4, h5, h6, txt, text, p, a, li, td");
    for (let i=0 ; i<texts.length ; i++) {
        texts[i].style.fontSize = "10px";
    }
}

function increaseTextSize() {
    let texts = document.querySelectorAll("h1, h2, h3, h4, h5, h6, txt, text, p, a, li, td");
    for (let i=0 ; i<texts.length ; i++) {
        texts[i].style.fontSize = "20px";
    }
}
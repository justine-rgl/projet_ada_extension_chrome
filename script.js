//on écoute le changement du storage déclenché par le bouton de la popup
chrome.storage.local.onChanged.addListener((changes, local) => {
    // chrome.storage.local.get('decrease').then((result) => {
    //     if (result.decrease == true) {
    //         console.log("result.decrease")
    //         decreaseTextSize()
    //         chrome.storage.local.set({'decrease': false})  
    //     }
    // })
    chrome.storage.local.get('increase').then((result) => {
        if (result.increase == true) {
            console.log("result.increase")
            increaseTextSize()
            chrome.storage.local.set({'increase': false})  
        }
    })
})

// function decreaseTextSize() {
//     let texts = document.querySelectorAll("h1, h2, h3, h4, h5, h6, txt, text, p, a, li, td");
//     for (let i=0 ; i<texts.length ; i++) {
//         texts[i].style.fontSize = "5px";
//     }
// }

function increaseTextSize() {
    let texts = document.querySelectorAll("h1, h2, h3, h4, h5, h6, txt, text, p, a, li, td");
    for (let i=0 ; i<texts.length ; i++) {
        texts[i].style.fontSize = "20px";
    }
}

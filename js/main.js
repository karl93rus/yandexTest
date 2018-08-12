//---------------------------- VARIABLES SECTION ----------------------------

// buttons
const devScrlLeft = document.getElementById("device-scroll-left");
const devScrlRight = document.getElementById("device-scroll-right");
const popupClose = document.getElementById("popup-close");
const xiaomiCard = document.getElementById("xiaomi");

// windows
const deviceCards = document.getElementsByClassName("device-cards")[0];
const popupWrapper = document.getElementsByClassName("popup-wrapper")[0];
const popupControls = document.getElementsByClassName("popup-controls")[0];


//---------------------------- FUNCTIONS SECTION ----------------------------


function scrollElement(element, offsetX) {
    element.scrollBy(offsetX, 0);
}


//---------------------------- EVENTS SECTION ----------------------------


devScrlRight.addEventListener("click", () => {
// Smooth scroll right
    let i = 0;
    let start = () => {
        if(i < 20) {
            scrollElement(deviceCards, 10);
            setTimeout(start, 10);
        }
        i++;
    };

    setTimeout(start, 10);
});

devScrlLeft.addEventListener("click", () => {
// Smooth scroll left
    let i = 0;
    let start = () => {
        if(i < 20) {
            scrollElement(deviceCards, -10);
            setTimeout(start, 10);
        }
        i++;
    };

    setTimeout(start, 10);
});

xiaomiCard.addEventListener("click", () => {
    console.log(popupWrapper.className);
    popupWrapper.classList.add("reveal");
    console.log(popupWrapper.className);
});

popupClose.addEventListener("click", () => {
    console.log(popupWrapper.className);
    popupWrapper.classList.remove('reveal');
    console.log(popupWrapper.className);
});
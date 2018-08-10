//---------------------------- VARIABLES SECTION

// buttons
const devScrlLeft = document.getElementById("device-scroll-left");
const devScrlRight = document.getElementById("device-scroll-right");

// windows
const deviceCards = document.getElementsByClassName("device-cards")[0];


//---------------------------- FUNCTIONS SECTION


function scrollElement(element, offsetX) {
    element.scrollBy(offsetX, 0);
}


//---------------------------- EVENTS SECTION


devScrlRight.addEventListener("click", () => {
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
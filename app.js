const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const next = document.getElementById("next");
const back = document.getElementById("back");
const mainImages = document.getElementById("main-images");

/* mainImages.style.backgroundImage = "url('img/01.jpg')"; */

let index = 0;

next.addEventListener("click", () => {
    if (index === 5) {
        index = 0;
    }

    mainImages.style.backgroundImage = `url(img/${images[index++]})`;
});

back.addEventListener("click", () => {
    if (index === 0) {
        index = 5;
    }

    mainImages.style.backgroundImage = `url(img/${images[index--]})`;
});

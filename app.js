const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const next = document.getElementById("next");
const back = document.getElementById("back");
const mainImages = document.getElementById("main-images");
let selector = document.getElementById("selector");

let index = 0; /*  indice */
mainImages.style.backgroundImage = `url(img/${images[index]})`; /* il div che mostra l'immagine parte con l'indice 0 di default */

/* scorrere avanti */
next.addEventListener("click", () => {
    if (index === 4) {
        /*--------------------------------------------- resetta se arrivi alla fine dell'array */
        index = 0;
    } else if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4) {
        index++;
    }

    mainImages.style.backgroundImage = `url(img/${images[index]})`;

    /*  questo if riguarda i thumbnails e muove il selettore nella posizione corretta*/

    if (index === 0) {
        selector.style.left = "0px";
    } else if (index === 1) {
        selector.style.left = "140px";
    } else if (index === 2) {
        selector.style.left = "280px";
    } else if (index === 3) {
        selector.style.left = "420px";
    } else if (index === 4) {
        selector.style.left = "560px";
    }
});

/* scorrere indietro */
back.addEventListener("click", () => {
    if (index === 0) {
        /*--------------------------------------------- resetta se arrivi all'inizio dell'array */
        index = 4;
    } else if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4) {
        index--;
    }

    mainImages.style.backgroundImage = `url(img/${images[index]})`;

    /*  questo if riguarda i thumbnails e muove il selettore nella posizione corretta*/
    if (index === 0) {
        selector.style.left = "0px";
    } else if (index === 1) {
        selector.style.left = "140px";
    } else if (index === 2) {
        selector.style.left = "280px";
    } else if (index === 3) {
        selector.style.left = "420px";
    } else if (index === 4) {
        selector.style.left = "560px";
    }
});

var bild1 = document.getElementById("bild1");
var bild2 = document.getElementById("bild2");
var bild3 = document.getElementById("bild3");
var bild4 = document.getElementById("bild4");

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");

var slide = 1;

function next() {
    slide++;

    if (slide == 2) {
        bild1.style.opacity = "0%";
        bild2.style.opacity = "100%";

        text1.style.opacity = "0%";
        text2.style.opacity = "100%";
    } else if (slide == 3) {
        bild2.style.opacity = "0%";
        bild3.style.opacity = "100%";

        text2.style.opacity = "0%";
        text3.style.opacity = "100%";
    } else {
        bild3.style.opacity = "0%";
        bild1.style.opacity = "100%";

        text3.style.opacity = "0%";
        text1.style.opacity = "100%";
        slide = 1;
    }
}

function prev() {
    slide--;
    if (slide == 0) {
        bild1.style.opacity = "0%";
        bild3.style.opacity = "100%";

        text1.style.opacity = "0%";
        text3.style.opacity = "100%";
    } else if (slide == -1) {
        bild3.style.opacity = "0%";
        bild2.style.opacity = "100%";

        text4.style.opacity = "0%";
        text3.style.opacity = "100%";
    } else {
        bild2.style.opacity = "0%";
        bild1.style.opacity = "100%";

        text2.style.opacity = "0%";
        text1.style.opacity = "100%";
        slide = 1;
    }
}


bildWechseln(3, 2);

function bildWechseln(von, zu) {
    von.style.opacity = "0";
    zu.style.opacity = "100%";
}
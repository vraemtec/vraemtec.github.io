const distancia = 50;
let pasos = 0;
let y = 0;
let ad = 0;
let at = 0;
let yt = 0;
let yb = 0
    // let paso = 0;
const limpiar = (direccion) => {
    clearInterval(direccion);
}
const avanzar = (moverR) => {
    let ava = 0;
    const jugador = document.querySelector(".jugador1");
    const sombra = document.querySelector(".sombra1");
    if (moverR === true) {
        ad = distancia;
        pasos = pasos + ad;
        jugador.style.marginLeft = pasos + "px";
        sombra.style.marginLeft = (pasos - 20) + "px";
    } else {
        ad = 0
    }

}
const retroceder = (moverL) => {
    let eva = 0;
    const jugador = document.querySelector(".jugador1");
    const sombra = document.querySelector(".sombra1");
    if (moverL === true) {
        at = distancia;
        pasos = pasos - at;
        jugador.style.marginLeft = pasos + "px";
        sombra.style.marginLeft = (pasos - 20) + "px";

    } else {
        at = 0
    }
}
const arriba = (yarriba) => {
    const jugador = document.querySelector(".jugador1");
    const sombra = document.querySelector(".sombra1");
    if (yarriba === true) {
        yt = distancia;
        y = y - yt;
        jugador.style.marginTop = y + "px";
    } else {

        yt = 0
    }
}

const abajo = (yabajo) => {
    let eva = 0;
    const jugador = document.querySelector(".jugador1");

    if (yabajo === true) {
        yb = distancia;
        y = y + yb;
        jugador.style.marginTop = y + "px";
    } else {
        yb = 0
    }
}

const inicio = () => {
    let xi = "200";
    let yi = "300";


    const collision = setInterval(() => {

        const sombra = document.querySelector(".jugador1");
        const bola = document.querySelector(".bola1")
        let x1 = sombra.style.marginLeft;
        let y1 = sombra.style.marginTop;
        let x2 = bola.style.marginLeft = xi + "px";
        let y2 = bola.style.marginTop = yi + "px";
        // console.log("x1:", x1, "x2", x2, "y1", y1, "y2", y2)
        if (x1 && x2 && y1 && y2) {
            if (x1 === x2 && y1 === y2) {
                // console.log("x1:", x1, "x2", x2, "y1", y1, "y2", y2)
                xi = Math.floor(Math.random() * (700 - 0)) + 0;
                yi = Math.floor(Math.random() * (300 - 0)) + 0;
                pxi = xi % 5;
                pyi = yi % 5;
                let sxi = (xi - pxi) % 50;
                let syi = (yi - pyi) % 50;
                // console.log("Fija====>", sxi, syi);
                xi = (xi - pxi) - sxi;
                yi = (yi - pyi) - syi;
                // console.log("====>", xi, yi);

                // console.log("coliionado");
                // console.log(xi, yi);
                // bola.style.width = 0
            }
        };
    }, 1000)



}
inicio()
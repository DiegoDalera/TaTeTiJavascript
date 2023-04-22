let textPlayer = document.getElementById('player_text');
let resetBtn = document.getElementById('reset_btn');

let casillas = Array.from(document.getElementsByClassName('casilla'));


const text_x = "x";
const texto_y = "y";
let jugadrActual=text_x;

let espacios = Array(9).fill(null);



const comienzoJuego = () => {
    casillas.forEach(casilla => casilla.addEventListener('click',casillaClick ))

}

function casillaClick(e){
    console.log(e.target);
}

comienzoJuego();


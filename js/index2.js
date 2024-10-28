import { alerta, alerta2, limpiaInput } from '../js/modul.js';

const inputtt = document.getElementById('nombre');
const button = document.getElementById('madre').onclick = (e) => {
    e.preventDefault()
    alerta(inputtt.value);
    limpiaInput(inputtt)
    alerta2()
};



import { alerta, alerta2 } from '../js/modul.js';

const button = document.getElementById('madre').onclick = (e) => {
    e.preventDefault()
    alerta()
    alerta2()
};



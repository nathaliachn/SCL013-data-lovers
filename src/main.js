import dataHarry from './data/potter/potter.js';
import { filterName } from './data.js';
import { filterImagen} from './data.js';

//boton para mostrar personajes con su nombre e imagen
const MuestraPersonajes = document.getElementById("MuestraPersonajes");
const container = document.getElementById("root");


//evento del boton muestrapersonajes para mostrar los personajes
MuestraPersonajes.addEventListener("click", function(){
    document.getElementById('root').innerHTML = " ";
    let condition = MuestraPersonajes.value;
    let traepersonajes = filterName(dataHarry,condition);
    let traeimg = filterImagen(dataHarry,condition);

    for(let i = 0; i< traepersonajes.length; i++){
        container.innerHTML += `<img class="imgPersonaje" src="${traeimg[i]}">`;
        container.innerHTML += `<p class="card"> ${traepersonajes[i]}</p>`;
    }
}, false);


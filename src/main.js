import dataHarry from './data/potter/potter.js';
import { filterName, filterImagen,filterCasa } from './data.js';

//     
const pagPersonajes = document.getElementById('pagPersonajes');
const pagBienvenida = document.getElementById('pagBienvenida');
const pagHistoria = document.getElementById('pagHistoria');


//boton para mostrar personajes con su nombre e imagen
const MuestraPersonajes = document.getElementById("MuestraPersonajes");
const container = document.getElementById("root");

//evento del boton muestrapersonajes para mostrar los personajes
MuestraPersonajes.addEventListener("click", function(){
    document.getElementById('root').innerHTML = " ";
    let condition = MuestraPersonajes.value;
    let traepersonajes = filterName(dataHarry,condition);
    let traeimg = filterImagen(dataHarry,condition);
    pagBienvenida.style.display = "none";
    pagHistoria.style.display = "none";
    pagPersonajes.style.display = "block";
    for(let i = 0; i< traepersonajes.length; i++){
        container.innerHTML += `<div class="card"><img class="imgPersonaje" src="${traeimg[i]}"><p class="namePersonaje"> ${traepersonajes[i]}</p></div>`;
      }
}, false);

const Historia = document.getElementById("Historia");
//evento del boton muestrapersonajes para mostrar los personajes
Historia.addEventListener("click", function(){
    pagBienvenida.style.display = "none";
    pagPersonajes.style.display = "none";
    pagHistoria.style.display = "block";
    
}, false);


const select = document.getElementById('select');

select.addEventListener("change", () =>{
    let condition = select.options[select.selectedIndex].text;
    let resultCasa = filterCasa(dataHarry, condition);
    
    for(let i = 0; i < resultCasa.length; i++){
        container.innerHTML += `<div class="card">${resultCasa[i]}"></div>`;
    }
});


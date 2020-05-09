import dataHarry from './data/potter/potter.js';
import { filterName, filterImagen,filterCasa,filterLinaje, filterGenero, filterEspecie } from './data.js';

//declaración secciones display     
const pagPersonajes = document.getElementById('pagPersonajes');
const pagBienvenida = document.getElementById('pagBienvenida');
const pagHistoria = document.getElementById('pagHistoria');

const Historia = document.getElementById("Historia");
//evento del boton muestrapersonajes para mostrar los personajes
Historia.addEventListener("click", function(){
    pagBienvenida.style.display = "none";
    pagPersonajes.style.display = "none";
    pagHistoria.style.display = "block";
    
}, false);


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
   /*  container.innerHTML += `<div class="card ${traecasa}"><img class="imgPersonaje" src="${traeimg[i]}"><p class="namePersonaje"> ${traepersonajes[i]}</p></div>`; */
  container.innerHTML += `<div class="card"><img class="imgPersonaje" src="${traeimg[i]}"><p class="namePersonaje"> ${traepersonajes[i]}</p></div>`; 
      }
}, false);

//select filtrar por casa
const select1 = document.getElementById('select1');
select1.addEventListener("change", () =>{
    document.getElementById('root').innerHTML = " ";
    let condition = select1.options[select1.selectedIndex].text;
    let resultCasa = filterCasa(dataHarry, condition);
    for(let i = 0; i< resultCasa.length; i++){
        container.innerHTML += `<div class="card"><img class="imgPersonaje" src="${resultCasa[i].image}"><p class="namePersonaje"> ${resultCasa[i].name}</p></div>`;  
   //console.log(resultCasa) 
}
     
});

//select filtrar por Linaje
const select2 = document.getElementById('select2');
select2.addEventListener("change", () =>{
    document.getElementById('root').innerHTML = " ";
    let condition2 = select2.options[select2.selectedIndex].value;
    let resultLinaje = filterLinaje(dataHarry, condition2);
    for(let i = 0; i< resultLinaje.length; i++){
        container.innerHTML += `<div class="card"><img class="imgPersonaje" src="${resultLinaje[i].image}"><p class="namePersonaje"> ${resultLinaje[i].name}</p></div>`;  
} 
});

//select filtrar por Genero
const select3 = document.getElementById('select3');
select3.addEventListener("change", () =>{
    document.getElementById('root').innerHTML = " ";
    let condition3 = select3.options[select3.selectedIndex].value;
    let resultGenero = filterGenero(dataHarry, condition3);
    for(let i = 0; i< resultGenero.length; i++){
        container.innerHTML += `<div class="card"><img class="imgPersonaje" src="${resultGenero[i].image}"><p class="namePersonaje"> ${resultGenero[i].name}</p></div>`;  
} 
});
 
//select filtrar por Especie
const select4 = document.getElementById('select4');
select4.addEventListener("change", () =>{
    document.getElementById('root').innerHTML = " ";
    let condition4 = select4.options[select4.selectedIndex].value;
    let resultEspecie = filterEspecie(dataHarry, condition4);
    for(let i= 0; i<resultEspecie.length; i++){
        container.innerHTML += `<div class="card"><img class="imgPersonaje" src="${resultEspecie[i].image}"><p class="namePersonaje"> ${resultEspecie[i].name}</p></div>`;  
    }
})

//ordenar por a-z y z-a



//buscar 
/* const buscador = document.querySelector('#buscador');
const boton = document.querySelector('btnbuscar');
const resultado = document.querySelector('root');

const filtrarPersonajes = () =>{
    document.getElementById('root').innerHTML = " ";
    const texto = buscador.value.toLowerCase();
    for (let data of dataHarry){
        let name = data.name.toLowerCase();
        if(name.indexOF(texto) !== -1){
           resultado.innerHTML += `<div class="card">${data.name}</div>`;
        }
    }
    if(resultado.innerHTML === ""){
        resultado.innerHTML += `<div>Personaje no está</div>` ;
    }
}
boton.addEventListener('click', filtrarPersonajes);
buscador.addEventListener ('keyup', filtrarPersonajes);
filtrarPersonajes(); */
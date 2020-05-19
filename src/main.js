import dataHarry from './data/potter/potter.js';
import { filterName, filterImagen,filterCasa,filterLinaje, filterGenero, filterEspecie, orderName, filterVarita,filterPatronus,buscarPersonaje } from './data.js';

//declaración secciones display     
//const pagPuerta = document.getElementById('pagPuerta');
const pagPersonajes = document.getElementById('pagPersonajes');
const pagBienvenida = document.getElementById('pagBienvenida');
//const pagInicio = document.getElementById('pagInicio');
const pagHistoria = document.getElementById('pagHistoria');
const pagHogwarts = document.getElementById('pagHogwarts');
const pagArtefactos = document.getElementById('pagArtefactos');
const pagHechizos = document.getElementById('pagHechizos');
const pagTGS = document.getElementById('pagTGS');


//menu principal id
const Historia = document.getElementById("Historia");
const Hogwarts = document.getElementById("Hogwarts");
const Artefactos = document.getElementById("Artefactos");
const Hechizos = document.getElementById("Hechizos");

//funcion para volver al inicio
const alternLogoMenu = document.querySelector('.logo');
alternLogoMenu.addEventListener('click', () => {
  window.location.reload();
});

//evento click en barra superior Quienes Somos
const quienesSomos = document.getElementById('quienesSomos');
quienesSomos.addEventListener("click", function(){
    pagBienvenida.style.display = "none";
    pagPersonajes.style.display = "none";
    pagHogwarts.style.display="none";
    pagHechizos.style.display="none"; 
    pagArtefactos.style.display="none";
    pagHistoria.style.display = "none";  
    pagTGS.style.display = "block";  
    contBuscar.innerHTML = " ";
}, false);

//evento click en el menu que muestra historia de la mágia
Historia.addEventListener("click", function(){
    pagBienvenida.style.display = "none";
    pagTGS.style.display = "none";  
    pagPersonajes.style.display = "none";
    pagHogwarts.style.display="none";
    pagHechizos.style.display="none"; 
    pagArtefactos.style.display="none";
    pagHistoria.style.display = "block"; 
    contBuscar.innerHTML = " ";  
}, false);

//evento click en el menu para mostrar Hogwarts
Hogwarts.addEventListener("click", function(){
    pagBienvenida.style.display = "none";
    pagTGS.style.display = "none";  
    pagPersonajes.style.display = "none";
    pagHistoria.style.display = "none";
    pagArtefactos.style.display="none"; 
    pagHechizos.style.display="none";
    pagHogwarts.style.display="block";
    contBuscar.innerHTML = " ";

}, false);

//div contenedor resultado filtro de varitas
const mostrarvaritas = document.getElementById('mostrarvaritas');
//evento click en el menu para mostrar artefactos (varitas)
Artefactos.addEventListener("click", function(){
    pagBienvenida.style.display = "none";
    pagTGS.style.display = "none";  
    pagPersonajes.style.display = "none";
    pagHogwarts.style.display="none";
    pagHistoria.style.display = "none";  
    pagHechizos.style.display="none"; 
    pagArtefactos.style.display="block";  
    document.getElementById('root').innerHTML = " ";//limpia div root
    contBuscar.innerHTML = " ";
    document.getElementById('mostrarvaritas').innerHTML = " ";//limpia div root
    let condition = Artefactos.value;
    let varitaMagica = filterVarita(dataHarry,condition);//arreglo que devuelve las varitas 
       for(let i = 0; i< varitaMagica.length; i++){
        mostrarvaritas.innerHTML += `<div class="cardvaritas" style="background-image: url(${varitaMagica[i].varita})">
            <div class="datoWand"><p id="nombrewand">${varitaMagica[i].name}</p>
            <p>Núcleo: ${varitaMagica[i].wand.core}</p>
            <p>Madera: ${varitaMagica[i].wand.wood}</p>
            <p>Longitud: ${varitaMagica[i].wand.length}</p></div>
    </div>`; 
      }
      modalGo(varitaMagica); //funcion que muestra el modal con la info de los personajes  
}, false);

//contenedor para mostrar los hechizos
const mostrarHechizos = document.getElementById('mostrarHechizos');
//evento click en el menu para mostar Hechizos
Hechizos.addEventListener("click", function(){
    pagBienvenida.style.display = "none";
    pagTGS.style.display = "none";  
    pagPersonajes.style.display = "none";
    pagHogwarts.style.display="none";
    pagHistoria.style.display = "none";
    pagArtefactos.style.display="none"; 
    pagHechizos.style.display="block";
    document.getElementById('mostrarHechizos').innerHTML = " ";//limpiar
    document.getElementById('root').innerHTML = " ";
    contBuscar.innerHTML = " ";
    let condition = Hechizos.value;
    let patronus = filterPatronus(dataHarry,condition);//arreglo con patronus
       for(let i = 0; i< patronus.length; i++){
        mostrarHechizos.innerHTML += `<div class="card" style="background-image: url(${patronus[i].hechizo})">
            <div class="textopatronus">
            <p class="namePersonaje">${patronus[i].name}</p>
            <p class="namePersonaje">Patronus: ${patronus[i].patronus}</p>
            </div>
    </div>`; 
      }
      modalGo(patronus); //funcion que muestra el modal con la info de los personajes  

}, false);

//boton para mostrar personajes con su nombre e imagen
const MuestraPersonajes = document.getElementById("MuestraPersonajes");
const container = document.getElementById("root");

//evento click en el menu para Mostrar personajes y realizar filtrados
MuestraPersonajes.addEventListener("click", function(){
    document.getElementById('root').innerHTML = " ";
    let condition = MuestraPersonajes.value;
    let traepersonajes = filterName(dataHarry,condition);
    let traeimg = filterImagen(dataHarry,condition);
    pagBienvenida.style.display = "none";
    pagTGS.style.display = "none";  
    pagHistoria.style.display = "none";
    pagHogwarts.style.display="none";
    pagArtefactos.style.display="none"; 
    pagHechizos.style.display="none";  
    pagPersonajes.style.display = "block";
    for(let i = 0; i< traepersonajes.length; i++){
   /*  container.innerHTML += `<div class="card ${traecasa}"><img class="imgPersonaje" src="${traeimg[i]}"><p class="namePersonaje"> ${traepersonajes[i]}</p></div>`; */
  container.innerHTML += `<div class="card" style="background-image: url(${dataHarry[i].card})")>
  <img class="imgPersonaje"  src="${traeimg[i]}">
  <div class="textoName"><p class="namePersonaje"> ${traepersonajes[i]}</p></div></div>`; 
      }
    modalGo(dataHarry); //funcion que muestra el modal con la info de los personajes 
}, false);

//select filtrar por casa
const select1 = document.getElementById('select1');
select1.addEventListener("change", () =>{
    document.getElementById("select2").value = "";
    document.getElementById("select3").value = "";
    document.getElementById("select4").value = "";
    document.getElementById("select5").value = "";
    document.getElementById('root').innerHTML = " ";
    let condition = select1.options[select1.selectedIndex].text;
    let resultCasa = filterCasa(dataHarry, condition);
    
    for(let i = 0; i< resultCasa.length; i++){
        container.innerHTML += `<div class="card" style="background-image: url(${resultCasa[i].card})">
        <img class="imgPersonaje"src="${resultCasa[i].image}">
        <div class="textoName"><p class="namePersonaje"> ${resultCasa[i].name}</p></div></div>`;  
        modalGo(resultCasa);// funcion que muestra el modal con la info de los personajes
}
});

//select filtrar por Linaje
const select2 = document.getElementById('select2');
select2.addEventListener("change", () =>{
    document.getElementById("select1").value = "";
    document.getElementById("select3").value = "";
    document.getElementById("select4").value = "";
    document.getElementById("select5").value = "";
    document.getElementById('root').innerHTML = " ";
    let condition2 = select2.options[select2.selectedIndex].value;
    let resultLinaje = filterLinaje(dataHarry, condition2);
    for(let i = 0; i< resultLinaje.length; i++){
        container.innerHTML += `<div class="card" style="background-image: url(${resultLinaje[i].card})">
        <img class="imgPersonaje" src="${resultLinaje[i].image}">
        <div class="textoName"><p class="namePersonaje"> ${resultLinaje[i].name}</p></div></div>`;  
       modalGo(resultLinaje); // funcion que muestra el modal con la info de los personajes
    } 
});

//select filtrar por Genero
const select3 = document.getElementById('select3');
select3.addEventListener("change", () =>{
    document.getElementById("select2").value = "";
    document.getElementById("select1").value = "";
    document.getElementById("select4").value = "";
    document.getElementById("select5").value = "";
    document.getElementById('root').innerHTML = " ";
    let condition3 = select3.options[select3.selectedIndex].value;
    let resultGenero = filterGenero(dataHarry, condition3);
    for(let i = 0; i< resultGenero.length; i++){
        container.innerHTML += `<div class="card" style="background-image: url(${resultGenero[i].card})">
        <img class="imgPersonaje" src="${resultGenero[i].image}">
        <div class="textoName"><p class="namePersonaje"> ${resultGenero[i].name}</p></div></div>`;  
        modalGo(resultGenero); //funcion que muestra el modal con la info de los personajes
    } 
});
 
//select filtrar por Especie
const select4 = document.getElementById('select4');
select4.addEventListener("change", () =>{
    document.getElementById("select2").value = "";
    document.getElementById("select3").value = "";
    document.getElementById("select1").value = "";
    document.getElementById("select5").value = "";
    document.getElementById('root').innerHTML = " ";
    let condition4 = select4.options[select4.selectedIndex].value;
    let resultEspecie = filterEspecie(dataHarry, condition4);
    for(let i=0;i<resultEspecie.length;i++){ 
        container.innerHTML += `<div class="card" style="background-image: url(${resultEspecie[i].card})">
         <img class="imgPersonaje"  src="${resultEspecie[i].image}">
        <div class="textoName"><p class="namePersonaje"> ${resultEspecie[i].name}</p></div></div>`;  
        modalGo(resultEspecie);// funcion que muestra el modal con la info de los personajes
    }
}, false);

  //ordenar de la a-z y z-a
 const select5 = document.getElementById("select5");
  select5.addEventListener("change", () =>{
    document.getElementById("select2").value = "";
    document.getElementById("select3").value = "";
    document.getElementById("select4").value = "";
    document.getElementById("select1").value = "";
      container.innerHTML = "";
      let condition = select5.options[select5.selectedIndex].index;
      let ordenados = orderName(dataHarry, condition);
      
      for(let i=0;i<ordenados.length;i++){    
          container.innerHTML += `<div class="card" style="background-image: url(${ordenados[i].card})">
          <img class="imgPersonaje"  src="${ordenados[i].image}">
          <div class="textoName"><p class="namePersonaje"> ${ordenados[i].name}</p></div></div>`;
          modalGo(ordenados);  
       }
  }, false); 

 

//buscar
const inputbuscar = document.getElementById('buscador');
const contBuscar = document.getElementById('resultadobuscar');
const botonBuscar = document.getElementById('btnaccio');
botonBuscar.addEventListener("click", function(){
    container.innerHTML = "";
    contBuscar.innerHTML = " ";
    pagBienvenida.style.display = "none";
    pagTGS.style.display = "none";  
    pagHistoria.style.display = "none";
    pagHogwarts.style.display="none";
    pagArtefactos.style.display="none"; 
    pagHechizos.style.display="none";  
    pagPersonajes.style.display = "none";
    let nombre = inputbuscar.value;
    let resultadobuscar = buscarPersonaje(dataHarry,nombre);
    
   for(let i=0; resultadobuscar.length; i++){
       contBuscar.innerHTML += `<div class="card" style="background-image: url(${resultadobuscar[i].card})">
        <img class="imgPersonaje"  src="${resultadobuscar[i].image}">
        <div class="textoName"><p class="namePersonaje"> ${resultadobuscar[i].name}</p></div></div>`;
        modalGo(resultadobuscar); 
    }
        
 
}, false);

  
 /*boton giratiempo para volver atras*/
/* const btnGiratiempo = document.getElementById('btnGiratiempo');
  btnGiratiempo.addEventListener('click', () => {
    window.location.reload();
  }); 
 */

//MODAL : muestra información de los personajes 
function modalGo (dataHarry) {
    let modal=document.getElementById("myModal"); 
    let modalContainer = document.getElementById("modalContent"); 
    let imgPersonaje=document.getElementsByClassName("imgPersonaje"); 
    modal.style.display = "none"; //mantiene oculto el modal

    for(let i=0; i<imgPersonaje.length; i++){ 
        let img=imgPersonaje[i]; 
        
        img.addEventListener ('click', ()=>{ 
            modalContainer.innerHTML="";//limpia modal
            modal.style.display = "block"; //muestra modal       
            //se inserta información de los personajes dinamicamente en html
            modalContainer.innerHTML += ` 
            <div class="frame" style="background-image: url(${dataHarry[i].modal})">
                 <div  class="modalinfopersonaje">
                    <div class="fotomodal">
                        <img src="${dataHarry[i].image}" alt="" class="imgPersonajeModal">
                    </div>
                    <div class="infomodal">
                        <h2>${dataHarry[i].name}</h2><br>
                        <p>Casa:${dataHarry[i].house}</p>
                        <p>Especie: ${dataHarry[i].species}</p>
                        <p>Género: ${dataHarry[i].gender}</p>
                        <p>Fecha nac.: ${dataHarry[i].dateOfBirth}</p>
                        <p>Ascendencia: ${dataHarry[i].ancestry}</p>
                        <p>Color de ojos: ${dataHarry[i].eyeColour}</p>
                        <p>Color de cabello: ${dataHarry[i].hairColour}</p>
                        <p>Actor/Actriz: ${dataHarry[i].actor}</p>
                    </div>
                </div>
            </div>`;
        }); 

        window.onclick = function(event) { //al hacer click fuera del modal se cierre
            if (event.target == modal) {
              modal.style.display = "none";//vuelve a ocultar el modal 
              modalContainer.innerHTML="";//Limpiamos el modal con la informacion
            }
        }
    }   
} 


import dataHarry from './data/potter/potter.js';
import { filterName, filterImagen,filterCasa,filterLinaje, filterGenero, filterEspecie, orderName, buscarPersonaje } from './data.js';

//declaración secciones display     
const pagPuerta = document.getElementById('pagPuerta');
const pagPersonajes = document.getElementById('pagPersonajes');
const pagBienvenida = document.getElementById('pagBienvenida');
const pagInicio = document.getElementById('pagInicio');
const pagHistoria = document.getElementById('pagHistoria');
const Historia = document.getElementById("Historia");

//evento boton alojomora para entrar a la página
const btnalojomora = document.getElementById("alohomora");
btnalojomora.addEventListener("click", function(){
    pagPuerta.style.display = "none";
    pagBienvenida.style.display = "block";
    pagInicio.style.display="block";

});

//evento del boton muestrapersonajes para mostrar los personajes
Historia.addEventListener("click", function(){
    pagPuerta.style.display = "none";
    pagBienvenida.style.display = "none";
    pagPersonajes.style.display = "none";
    pagHistoria.style.display = "block";
    
}, false);

//boton para mostrar personajes con su nombre e imagen
const MuestraPersonajes = document.getElementById("MuestraPersonajes");
const container = document.getElementById("root");

//evento del boton muestrapersonajes para visualizar los personajes
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
  container.innerHTML += `<div class="card" style="background-image: url("${traeimg[i].card}")><img class="imgPersonaje"  src="${traeimg[i]}"><p class="namePersonaje"> ${traepersonajes[i]}</p></div>`; 
      }
    modalGo(); //funcion que muestra el modal con la info de los personajes 
}, false);

//select filtrar por casa
const select1 = document.getElementById('select1');
select1.addEventListener("change", () =>{
    document.getElementById('root').innerHTML = " ";
    let condition = select1.options[select1.selectedIndex].text;
    let resultCasa = filterCasa(dataHarry, condition);
    for(let i = 0; i< resultCasa.length; i++){
        container.innerHTML += `<div class="card"><img class="imgPersonaje"src="${resultCasa[i].image}"><p class="namePersonaje"> ${resultCasa[i].name}</p></div>`;  
        //modalGo(); funcion que muestra el modal con la info de los personajes
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
       // modalGo(); funcion que muestra el modal con la info de los personajes
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
        modalGo(); //funcion que muestra el modal con la info de los personajes
    } 
});
 
//select filtrar por Especie
const select4 = document.getElementById('select4');
select4.addEventListener("change", () =>{
    document.getElementById('root').innerHTML = " ";
    let condition4 = select4.options[select4.selectedIndex].value;
    let resultEspecie = filterEspecie(dataHarry, condition4);
    for(let i= 0; i<resultEspecie.length; i++){
        container.innerHTML += `<div class="card"><img class="imgPersonaje" style="background-image: url(${dataHarry[i].card}) src="${resultEspecie[i].image}"><p class="namePersonaje"> ${resultEspecie[i].name}</p></div>`;  
        //modalGo(); funcion que muestra el modal con la info de los personajes
    }
})

  //ordenar de la a-z y z-a
  const select5 = document.getElementById("select5");
  select5.addEventListener("change", () =>{
      container.innerHTML = "";
      let condition = select5.options[select5.selectedIndex].index;
      let ordenados = orderName(dataHarry, condition);
      
      for(let i=0;i<ordenados.length;i++){    
          container.innerHTML += `<div class="card" style="background-image: url("${ordenados[i].card}")><img class="imgPersonaje"  src="${ordenados[i].image}"><p class="namePersonaje"> ${ordenados[i].name}</p></div>`;  
       }
  })

  // Función que muestra los resultados de búsqueda en tiempo real
  const resultadobuscar = document.getElementById('resultadobuscar');  
  const buscador = document.getElementById('buscador');
  console.log(buscador)
    buscador.addEventListener('keyup', () => {
    const buscaResult = buscarPersonaje(dataHarry, buscador.value);
    if (buscaResult.length > 0){
        resultadobuscar.innerHTML += `
        <div class="card">
        <p class="namePersonaje"> ${buscaResult.name}</p></div>`;  
        console.log(buscaResult)
    }else{
      resultadobuscar.innerHTML = '<h3>Personaje no se encuentra</h3>';
    }
      
  });
 

//MODAL : muestra información de los personajes 
function modalGo () {
    let modal=document.getElementById("myModal"); 
    let modalContainer = document.getElementById("modalContent"); 
    let imgPersonaje=document.getElementsByClassName("imgPersonaje"); 
    modal.style.display = "none"; //mantiene oculto el modal

    for(let i=0; i<imgPersonaje.length; i++){ 
        let img=imgPersonaje[i]; 
        
        img.addEventListener ('click', ()=>{ 
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
                        <p>Fecha de nacimiento: ${dataHarry[i].dateOfBirth}</p>
                        <p>Ascendencia: ${dataHarry[i].ancestry}</p>
                        <p>Color de ojos: ${dataHarry[i].eyeColour}</p>
                        <p>Color de cabello: ${dataHarry[i].hairColour}</p>
                        <p>Actor/Actriz: ${dataHarry[i].actor}</p>
                    </div>
                </div>
            </div>`;

/*             let span = document.getElementsByClassName("close")[0]; // X 
            span.addEventListener('click', ()=>{ 
                modal.style.display = "none"; 
                modalContainer.innerHTML=""; 
            });*/
        }); 

        window.onclick = function(event) { //al hacer click fuera del modal se cierre
            if (event.target == modal) {
              modal.style.display = "none";//vuelve a ocultar el modal 
              modalContainer.innerHTML="";//Limpiamos el modal con la informacion
            }
        }
    }   
} 

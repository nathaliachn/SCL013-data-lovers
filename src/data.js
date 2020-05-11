// funcion para filtrar nombres
 export const filterName = (data) =>{

 //arreglo para guardar los nombres de los personajes 
  let personajes= [];
  //for para recorrer la data e ir guardando los nombres en un nuevo array = img   
  for(let i = 0 ; i< data.length; i++){
    personajes.push(data[i].name)
  }
    return personajes;
}; 

//funcion para filtrar imagenes
  export const filterImagen = (data) =>{
     
   //arreglo para guardar los nombres de los personajes y enviarlos al main.js
    let img= [];
    //for para recorrer la data e ir guardando las imagenes en un nuevo array = img  
    for(let i = 0 ; i< data.length; i++){
      img.push(data[i].image)
    }
    return img;
    }; 

//filtro por casa 
export const filterCasa = (data, condition) =>{
  let house = data.filter((dato) => dato.house === condition);
  //let house4 = data.map((dato) => dato.house === condition);
  return house
};

//filtro por Linaje
 export const filterLinaje = (data, condition) =>{
  let ancestry = data.filter((dato) => dato.ancestry === condition);
  return ancestry
}; 

//filtro por Género
export const filterGenero = (data, condition) =>{
  let genero = data.filter((dato) => dato.gender === condition);
  return genero;
}; 


//filtro por Género
export const filterEspecie = (data, condition) =>{
  let especie = data.filter((dato) => dato.species === condition);
  return especie;
}; 


// Función que ordena personajes por orden a-z, z-a 
export const orderName = (dataArray, condition) => {
  let ordenados = dataArray; //Arreglo nuevo donde guarda personajes ordenados
  if(condition==0){
    return ordenados;
  }
  if(condition == 1){
    ordenados.sort((a, b) => a.name.localeCompare(b.name));
    return ordenados;
  }
  if(condition==2){
    ordenados.sort((a, b) => a.name.localeCompare(b.name));
    const filterOrderReverse=ordenados.reverse();
    return filterOrderReverse;
  }
 
}
/* export default orderName; */




  // Función que busca personajes
  /* export const buscarPersonaje = (array, string) => {
    const buscar = [array];
    const buscararray = buscar.filter((dato) => dato.name
      .indexOf(string[0].toUpperCase() + string.slice(1).toLowerCase()) > -1);
      console.log(buscararray)
    return buscararray;
  }; */
// Función que busca personajes
export const buscarPersonaje = (array, string) => {
  const buscar = [...array];
  const buscararray = buscar.filter((obj) => obj.name
    .indexOf(string[0].toUpperCase() + string.slice(1).toLowerCase()) > -1);
  return buscararray;
};
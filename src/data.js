// funcion para filtrar nombres
 export const filterName = (data) =>{
  let personajes= []; //arreglo para guardar los nombres de los personajes 
  for(let i = 0 ; i< data.length; i++){  //for para recorrer la data e ir guardando los nombres en un nuevo array = img   
    personajes.push(data[i].name)
  }
    return personajes;
}; 

//funcion para filtrar imagenes
  export const filterImagen = (data) =>{
     
    let img= [];//arreglo para guardar los nombres de los personajes y enviarlos al main.js
    for(let i = 0 ; i< data.length; i++){ //for para recorrer la data e ir guardando las imagenes en un nuevo array = img  
      img.push(data[i].image)
    }
    return img;
    }; 

//filtro por casa 
export const filterCasa = (data, condition) =>{
  let house = data.filter((dato) => dato.house === condition);
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

//filtro por Especie
export const filterEspecie = (data, condition) =>{
  let especie = data.filter((dato) => dato.species === condition);
  return especie;
}; 


// Función que ordena personajes por orden a-z, z-a 
export const orderName = (data, condition) => {
  let ordenados = data; //Arreglo nuevo donde guarda personajes ordenados
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

//filtro varita
 export const filterVarita = (data) => {
  let varita = data.filter((dato) => dato.wand.wood !== '' || dato.wand.core !== '' || dato.wand.length !== '');
  return varita

};

//filtro patronus
export const filterPatronus = (data) => {
  let patronus = data.filter((dato) => dato.patronus !== '');
  return patronus;
};

// Función que busca personajes
export const buscarPersonaje = (array, string) => {
  const arrOfSearch = [...array];
  const newArrOfSearch = arrOfSearch.filter((obj) => obj.name
    .indexOf(string[0].toUpperCase() + string.slice(1).toLowerCase()) > -1);
  return newArrOfSearch;
};
 



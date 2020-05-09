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


/* ordenar ya voy por ti
export const ordenarAZ = (data,condition)=>{
let especie= data.sort();
} */








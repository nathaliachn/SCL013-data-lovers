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
import { filterName, filterImagen,filterCasa,filterLinaje, filterGenero, filterEspecie, orderName, buscarPersonaje, filterVarita,filterPatronus} from '../src/data.js';

//test función FilterName
describe('filterName', () => {
  test('debería ser una function', () => {
    expect(typeof filterName).toBe('function');
  });
});

  test('función que filtra nombres de los personajes', () => {
    const data = [
      { name: 'Harry Potter' },
      { name: 'Hermione Granger' },
      { name: 'Ron Weasley' },
    ];
    const personajes = ['Harry Potter', 'Hermione Granger','Ron Weasley'];
    expect(filterName(data, 'Harry Potter')).toEqual(personajes);
  });

//test función FilterImagen
describe('filterImagen', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterImagen).toBe('function');
  });
}); 

test('función que filtra imagenes de los personajes', () => {
  const data = [
    { image: 'http://hp-api.herokuapp.com/images/harry.jpg' }, 
    { image: 'http://hp-api.herokuapp.com/images/hermione.jpeg' },
    { image: 'http://hp-api.herokuapp.com/images/ron.jpg' },
  ];
  const img = [
    "http://hp-api.herokuapp.com/images/harry.jpg", 
    "http://hp-api.herokuapp.com/images/hermione.jpeg", 
    "http://hp-api.herokuapp.com/images/ron.jpg"
  ];
  expect(filterImagen(data)).toEqual(img);
});


//test función FilterCasa
describe('filterCasa', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterCasa).toBe('function');
  });
}); 

/*   test('función que filtra por casa', () => {
    const data = [
      { house: 'Gryffindor' },
      { house: 'Gryffindor' },
      { house: 'Gryffindor' },
      { house: 'Slyntherin' },
    ];
    const house = [
      {house: 'Gryffindor'},
      {house: 'Gryffindor'},
      {house: 'Gryffindor'}];
    expect(filterCasa(data, 'Gryffindor')).toEqual(house);
  }); */

//test función Filtrar por Linaje
describe('filterLinaje', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterLinaje).toBe('function');
  });
}); 

//test función Filtrar por Género
describe('filterGenero', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterGenero).toBe('function');
  });
}); 


//test función Filtrar por Especie
describe('filterEspecie', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterEspecie).toBe('function');
  });
}); 

//test función Ordenar a-z/z-a 
describe('orderName', () =>{
  test('debería ser una function', ()=>{
  expect(typeof orderName).toBe('function');
  });
}); 

//test función filtrar varitas
describe('filterVarita', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterVarita).toBe('function');
  });
}); 

//test función filtrar patronus
describe('filterPatronus', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterPatronus).toBe('function');
  });
}); 


//test función buscarPersonaje
describe('buscarPersonaje', () =>{
  test('debería ser una function', ()=>{
  expect(typeof buscarPersonaje).toBe('function');
  });
}); 




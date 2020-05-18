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
}); 

//test función FilterCasa
describe('filterCasa', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterCasa).toBe('function');
  });
  it('función que filtra por casa', () => {
    const data = [
      { house: 'Gryffindor' },
      { house: 'Gryffindor' },
      { house: 'Gryffindor' },
      { house: 'Slyntherin' },
    ];
    const house = [
      {house: 'Gryffindor'},
      {house: 'Gryffindor'},
      {house: 'Gryffindor'},
    ];
    expect(filterCasa(data, 'Gryffindor'))===(house);
  }); 
}); 

//test función Filtrar por Linaje
describe('filterLinaje', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterLinaje).toBe('function');
  });
  it('función que filtra por Linaje', () => {
    const data = [
      { ancestry: 'half-blood' },
      { ancestry: 'muggleborn' },
      { ancestry: 'pure-blood' },
      { ancestry: 'half-blood' },
    ];
    const linaje = [
      {ancestry: 'half-blood'},
      {ancestry: 'half-blood'},
    
    ];
    expect(filterLinaje(data, 'half-blood'))===(linaje);
  });
});

 //test función Filtrar por Género
describe('filterGenero', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterGenero).toBe('function');
  });

  it('función que filtra por Genero', () => {
    const data = [
      { gender: 'male' },
      { gender: 'male' },
      { gender: 'female' },
      { gender: 'female' },
    ];
    const Genero = [
      {gender: 'female'},
      {gender: 'female'},
    
    ];
    expect(filterGenero(data, 'half-blood'))===(Genero);
  }); 
}); 

//test función Filtrar por Especie
describe('filterEspecie', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterEspecie).toBe('function');
  });
}); 

it('función que filtra por Especie', () => {
  const data = [
    { species: 'human' },
    { species: 'half-giant' },
    { species: 'werewolf' },
    { species: 'human' },
  ];
  const especie = [
    {species: 'human'},
    {species: 'human'},
  
  ];
  expect(filterEspecie(data, 'human'))===(especie);
}); 

//test función Ordenar a-z/z-a 
describe('orderName', () =>{
  test('debería ser una function', ()=>{
  expect(typeof orderName).toBe('function');
  });
  it('es una función que ordena a los personajes por nombre', () => {
  
    const array = ['Harry Potter','Hermione Granger','Ron Weasley'];
    const input0 = ['Harry Potter','Hermione Granger','Ron Weasley'];
    
    expect(orderName(array))===(input0);
  
    const order = [{name: 'Harry Potter' },{ name:'Hermione Granger' },{ name: 'Ron Weasley' },];
    const input1 = [{name: 'Harry Potter'},{name:'Hermione Granger'},{name:'Ron Weasley'},];
    
    expect(orderName(order))===(input1);
  
    const reverse = [{name: 'Ron Weasley' },{ name:'Draco Malfoy' },{ name: 'Minerva McGonagall' },]; 
    const input2 = [{name: 'Ron Weasley'},{name:'Minerva McGonagall'},{name:'Draco Malfoy'},];
   
    expect(orderName(reverse))===(input2);
   
  });

}); 


//test función filtrar varitas
describe('filterVarita', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterVarita).toBe('function');
  });
  it('es una función que filtra solo personajes con varita', () => {
    const input = [
      {
        wand: {wood: 'holly', core: 'phoenix feather', length: 11, },
      },
      { wand: {wood: '', core: '', length: '',},
      },
    ];
  
    const output = [
      {
        wand: {wood: 'holly', core: 'phoenix feather', length: 11, },
      },
    ];
    expect(filterVarita(input)).toEqual(output);
  });

}); 




//test función filtrar patronus
describe('filterPatronus', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterPatronus).toBe('function');
  });
  it('es una función que filtra solo personajes con patronus', () => {
    const input = [
      { patronus: 'stag' },
      { patronus: 'otter' },
      { patronus: '' },
    ];
  
    const output = [
      { patronus: 'stag' },
      { patronus: 'otter' },
    ];
  
    expect(filterPatronus(input)).toEqual(output);
  });
}); 



//test función buscarPersonaje
describe('buscarPersonaje', () =>{
  test('debería ser una function', ()=>{
  expect(typeof buscarPersonaje).toBe('function');
  });
  it('es una función que filtra personajes mediante un string ingresado', () => {
    const input1 = [
      { name: 'Luna Lovegood' },
      { name: 'Remus Lupin' },
      { name: 'Lucius Malfoy' },
      { name: 'Draco Malfoy' },
      { name: 'Ron Weasley' },
    ];
    const input2 = 'lu';
    const output = [
      { name: 'Luna Lovegood' },
      { name: 'Remus Lupin' },
      { name: 'Lucius Malfoy' },
    ];
    expect(buscarPersonaje(input1, input2)).toEqual(output);
  });

}); 


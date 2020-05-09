import { filterName, filterImagen} from '../src/data.js';


describe('filterName', () => {
  test('debería ser una function', () => {
    expect(typeof filterName).toBe('function');
  });
});

/* test('función que filtra nombres de los personajes', () => {
  let personajes = [
    { name: 'Harry Potter' },
    { name: 'Hermione Granger' },
    { name: 'Ron Weasley' },
    { name: 'Argus Filch' },
  ];
  expect(filterName(personajes)).toEqual(name);
}); */


describe('filterImagen', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterImagen).toBe('function');
  });
}); 


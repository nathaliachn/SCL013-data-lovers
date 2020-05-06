import { filterName, filterImagen} from '../src/data.js';


describe('filterName', () => {
  test('debería ser una function', () => {
    expect(typeof filterName).toBe('function');
  });
});

describe('filterImagen', () =>{
  test('debería ser una function', ()=>{
  expect(typeof filterImagen).toBe('function');
  });
}); 


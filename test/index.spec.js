import { validarRuta } from "../src/md-links/index.js";

// import { convertirAbsoluta } from '../src/md-links/main'

describe('validarRuta', () => {
  it('Debería ser una función', () => {
    expect(typeof validarRuta).toBe('function');
  })
  it('Deberia retornar true cuando la ruta es absoluta', () => {
    expect(validarRuta('C:/Users/USER T430/Documents/Project/LIM008-fe-md-links/test/index.spec.js')).toBe(true)
  })
  it('Deberia retornar false cuando la ruta es relativa', () => {
    expect(validarRuta('../test/index.spec.js')).toBe(false)
  })
})


// describe('convertirAbsoluta', () => {
//   it('Debería ser una función', () => {
//     expect(typeof convertirAbsoluta).toBe('function');
//   })
// })
import { extractLinks } from "../src/extract-links";
import { mdFilePathsArray } from "./extract-md.spec";



describe('extractLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof extractLinks).toBe('function')
  })
  it('Debería retornar un arreglo de links con las propiedades href, text, file; al ingresar un arreglo de archivos markdown', ()=>{
    expect(extractLinks(mdFilePathsArray)).toEqual()
  })
})
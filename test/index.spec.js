import { convertPathRelativeToAbsolute, readDirectory } from "..\\src\\index.js";

describe('convertPathRelativeToAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof convertPathRelativeToAbsolute).toBe('function');
  })
  it('Debería retornar una ruta absoluta a partir de una ruta relativa', () => {
    expect(convertPathRelativeToAbsolute('..\\LIM008-fe-md-links')).toBe('C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links');
  });
})

describe('readDirectory', () => {
  it('Debería ser una función', () => {
    expect(typeof readDirectory).toBe('function');
  })
})
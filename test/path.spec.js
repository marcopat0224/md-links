import {isPathAbsolute, convertPathRelativeToAbsolute, readDirectory } from "../src/path";

const relativePath = '..\\LIM008-fe-md-links\\test\\probando-mdlinks';
const absolutePath = `${process.cwd()}\\test\\probando-mdlinks`;
export const filePathsArray =
  [`${process.cwd()}\\test\\probando-mdlinks\\Creando una Red Social.docx`,
  `${process.cwd()}\\test\\probando-mdlinks\\eeevaaa.txt`,
  `${process.cwd()}\\test\\probando-mdlinks\\lalala.md`,
  `${process.cwd()}\\test\\probando-mdlinks\\more\\bookmarks_24_4_18.html`,
  `${process.cwd()}\\test\\probando-mdlinks\\more\\gallery-of-40-cine-backgrounds-wallpapers-wpbg-collection.jpg`,
  `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`,
  `${process.cwd()}\\test\\probando-mdlinks\\PROYECTO UX.txt`,
  `${process.cwd()}\\test\\probando-mdlinks\\README.md`];

describe('isPhatAbsolute', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isPathAbsolute).toBe('function');
  });
  it('deberia retornar true si es una ruta absoluta', () => {
    return expect(isPathAbsolute(absolutePath)).toBe(true);
  });
  it('deberia retornar false si no es una ruta absoluta', () => {
    return expect(isPathAbsolute(relativePath)).toBe(false);
  });
});

describe('convertPathRelativeToAbsolute', () => {
  it('Debería ser una función', () => {
    expect(typeof convertPathRelativeToAbsolute).toBe('function');
  })
  it('Debería retornar una ruta absoluta a partir de una ruta relativa', () => {
    expect(convertPathRelativeToAbsolute(relativePath)).toEqual(absolutePath);
  });
})

describe('readDirectory', () => {
  it('Debería ser una función', () => {
    expect(typeof readDirectory).toBe('function');
  })
  it('Debería retornar un arreglo de las rutas de todos los archivos al ingresar la ruta del directorio', () => {
    expect(readDirectory(absolutePath)).toEqual(filePathsArray);
  })
})
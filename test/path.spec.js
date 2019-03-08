import { convertPathRelativeToAbsolute, readDirectory } from "../src/path";
export {filePathsArray};

const relativePath = '..\\LIM008-fe-md-links\\test\\probando-mdlinks';
const absolutePath = 'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks';
const filePathsArray =
  ['C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\Creando una Red Social.docx',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\eeevaaa.txt',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\lalala.md',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\bookmarks_24_4_18.html',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\gallery-of-40-cine-backgrounds-wallpapers-wpbg-collection.jpg',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\PROYECTO UX.txt',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md'];

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
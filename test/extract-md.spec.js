import { filterMdFiles } from "../src/extract-md";
import { filePathsArray } from "./path.spec";
export {mdFilePathsArray};

const mdFilePathsArray =
  ['C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\lalala.md',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md',
    'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md'];

describe('filterMdFiles', () => {
  it('Debería ser una función', () => {
    expect(typeof filterMdFiles).toBe('function');
  })
  it('Debería retornar un arreglo de rutas de archivos markdown al ingresar un arreglo de rutas de archivos', () => {
    expect(filterMdFiles(filePathsArray)).toEqual(mdFilePathsArray);
  });
})
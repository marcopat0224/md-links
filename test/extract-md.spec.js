import { filterMdFiles } from "../src/extract-md";
import { filePathsArray } from "./path.spec";

export const mdFilePathsArray =
  [`${process.cwd()}\\test\\probando-mdlinks\\lalala.md`,
  `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`,
  `${process.cwd()}\\test\\probando-mdlinks\\README.md`];

describe('filterMdFiles', () => {
  it('Debería ser una función', () => {
    expect(typeof filterMdFiles).toBe('function');
  })
  it('Debería retornar un arreglo de rutas de archivos markdown al ingresar un arreglo de rutas de archivos', () => {
    expect(filterMdFiles(filePathsArray)).toEqual(mdFilePathsArray);
  });
})
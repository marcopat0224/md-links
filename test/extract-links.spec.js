import { extractLinks } from "../src/extract-links";
import { mdFilePathsArray } from "./extract-md.spec";
export { linkArray }

const linkArray =
  [{
    href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
    text: 'cifrado César',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\lalala.md'
  },
  {
    href: 'mailto:front@end.la',
    text: 'front@end.la',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md'
  },
  {
    href: 'https://github.com/soumak77/firebase-mock',
    text: 'firebase-mock',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md'
  },
  {
    href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
    text: 'mock-cloud-firestore',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md'
  },
  {
    href: 'https://github.com/mikkopaderes/test',
    text: 'mock-cloud-test',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md'
  },
  {
    href:
      'https://betsyvies.github.io/2018-2-SPA/src/template-string/#/',
    text: 'Aquí puedes ver la demo',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md'
  }]

describe('extractLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof extractLinks).toBe('function')
  })
  it('Debería retornar un arreglo de links con las propiedades href, text, file; al ingresar un arreglo de archivos markdown', () => {
    expect(extractLinks(mdFilePathsArray)).toEqual(linkArray)
  })
})
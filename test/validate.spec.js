import { validateLinks } from "../src/validate";
import { linkArray } from "./extract-links.spec";

const linksArrayValidator = [{
  href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
  text: 'cifrado César',
  file:
    `${process.cwd()}\\test\\probando-mdlinks\\lalala.md`,
  status: 200,
  statusText: 'OK'
},
{
  href: 'mailto:front@end.la',
  text: 'front@end.la',
  file:
    `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`,
  status: '',
  statusText: 'Not Found'
},
{
  href: 'https://github.com/soumak77/firebase-mock',
  text: 'firebase-mock',
  file:
    `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`,
  status: 200,
  statusText: 'OK'
},
{
  href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file:
    `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`,
  status: 200,
  statusText: 'OK'
},
{
  href: 'https://github.com/mikkopaderes/test',
  text: 'mock-cloud-test',
  file:
    `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`,
  status: 404,
  statusText: 'Fail'
},
{
  href:
    'https://betsyvies.github.io/2018-2-SPA/src/template-string/#/',
  text: 'Aquí puedes ver la demo',
  file:
    `${process.cwd()}\\test\\probando-mdlinks\\README.md`,
  status: 200,
  statusText: 'OK'
}]

describe('validate', () => {
  it('Debería ser una función', () => {
    expect(typeof validateLinks).toEqual('function')
  })
  it('Debería retornar el arreglo de links ingresado con las nuevas propiedades status y statusText', () => {
    return validateLinks(linkArray).then(linkArray => {
      expect(linkArray).toEqual(linksArrayValidator);
    });  
  })
})
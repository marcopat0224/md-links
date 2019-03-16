import { validateLink } from '../src/validate.js';
import { linkArray } from './extract-links.spec.js';

export const linksStatusArray = [
  {
    href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
    text: 'cifrado César',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\lalala.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'mailto:front@end.la',
    text: 'front@end.la',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md',
    status: '',
    statusText: 'Not Link'
  },
  {
    href: 'https://github.com/soumak77/firebase-mock',
    text: 'firebase-mock',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
    text: 'mock-cloud-firestore',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/mikkopaderes/test',
    text: 'mock-cloud-test',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md',
    status: 'Not Found',
    statusText: 'Not Fail'
  },
  {
    href:
      'https://betsyvies.github.io/2018-2-SPA/src/template-string/#/',
    text: 'Aquí puedes ver la demo',
    file:
      'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md',
    status: 200,
    statusText: 'OK'
  }
];

describe('validateLink', () => {
  it('Debería retornar una promesa array de objetos con todos los liks validados con propiedades haref,file,text,status,statusText', (done) => {
    return validateLink(linkArray)
      .then(res => {
        expect(linksStatusArray).toEqual(res);
        done();
      })
      .catch((err) => err);
  });
});
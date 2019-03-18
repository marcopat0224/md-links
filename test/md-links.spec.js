import { mdLinks } from '../src/md-links/md-links.js';
import { validateLink } from '../src/validate.js';
import { linkArray } from './extract-links.spec.js';

const relativePath = '..\\LIM008-fe-md-links\\test\\probando-mdlinks';
const absolutePath = `${process.cwd()}\\test\\probando-mdlinks`;

const validate = [
  {
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
  }];


const option = {
  validate: false,
  stats: false
};

describe('mdLinks', () => {
  it('Deberia retornar una promesa que resuelva a un array de links, donde cada link tiene las propiedades href,text, file, status y statusText', () => {
    return mdLinks(absolutePath, { validate: true })
      .then(res => {
        expect(res).toEqual(validate);
      })
  });

  it('Deberia retornar una promesa que resuelva a un array de links, donde cada link tiene las propiedades href,text y file', () => {
    return mdLinks(absolutePath, { validate: false })
      .then((res) => {
        expect(res).toEqual(linkArray);
      });
  });

  it('Deberia retornar una promesa que resuelva a un array de links, donde cada link tiene las propiedades href,text, file, status y statusText', () => {
    return mdLinks(relativePath, { validate: true })
      .then((res) => {
        expect(res).toEqual(validate);
      });
  });
  it('Deberia retornar una promesa que resuelva a un array de links, donde cada link tiene las propiedades href,text y file', () => {
    return mdLinks(relativePath, { validate: false })
      .then((res) => {
        expect(res).toEqual(linkArray);
      });
  });
});

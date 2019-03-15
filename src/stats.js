import {validateLinks} from './validate.js';

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

export const pathAbsMD = [
  { href: 'https://github.com/soumak77llll/firebase-mock',
    text: 'firebase-mock',
    file: `${process.cwd()}\\test\\pruebastest\\Readme.md`},
  { href: 'https://www.google.com',
    text: '1234567890-1234567890-1234567890-1234567890-123456',
    file: `${process.cwd()}\\test\\pruebastest\\Readme.md`},
  { href: 'https://www.google.com',
    text: '1234567890-1234567890-1234567890-1234567890-123456',
    file: `${process.cwd()}\\test\\pruebastest\\Readme.md`}
];

export const statsLinks = (arrObjLinks) => {
  const validate = validateLinks(arrObjLinks);
  return new Promise((res) => {
    validate.then((links) => {
      const total = links.length;
      const uniqueLinks = [...new Set(links.map(links => links.href))].length;
      res(`Total : ${total} \nUnique: ${uniqueLinks}`);
    });
  });
};

export const statLinksBroken = (arrObjLinks) => {
  const validate = validateLinks(arrObjLinks);
  return new Promise((res) => {
    validate.then((link) => {
      const filterBroken = link.filter(links => links.value === 'Fail');
      res(`Broken: ${filterBroken.length}`);
    });
  });
};

// statsLinks(pathAbsMD).then((result) => console.log(result));
// statLinksBroken(pathAbsMD).then((result) => console.log(result));
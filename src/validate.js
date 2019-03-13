const fetch = require('node-fetch');

export const validateLinks = linkArray => {
  const linksArrayValidator = linkArray.map(link => {
    return new Promise(resolve => {
      fetch(link.href)
        .then(response => {
          if (response.status >= 200 && response.status < 400) {
            link.status = response.status;
            link.statusText = 'OK';
            resolve(link);
          } else {
            link.status = response.status;
            link.statusText = 'Fail';
            resolve(link);
          }
        })
        .catch(error => {
          link.status = '';
          link.statusText = 'Not Found';
          resolve(link);
        });
    });
  });
  return Promise.all(linksArrayValidator);
};

// const linkArray =
//   [{
//     href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
//     text: 'cifrado César',
//     file:
//       'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\lalala.md'
//   },
//   {
//     href: 'mailto:front@end.la',
//     text: 'front@end.la',
//     file:
//       'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md'
//   },
//   {
//     href: 'https://github.com/soumak77/firebase-mock',
//     text: 'firebase-mock',
//     file:
//       'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md'
//   },
//   {
//     href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
//     text: 'mock-cloud-firestore',
//     file:
//       'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md'
//   },
//   {
//     href: 'https://github.com/mikkopaderes/test',
//     text: 'mock-cloud-test',
//     file:
//       'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md'
//   },
//   {
//     href:
//       'https://betsyvies.github.io/2018-2-SPA/src/template-string/#/',
//     text: 'Aquí puedes ver la demo',
//     file:
//       'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md'
//   }]

// validateLinks(linkArray)
//   .then(result => console.log(result))
//   .catch(err => err);
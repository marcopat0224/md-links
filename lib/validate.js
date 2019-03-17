"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLink = void 0;

var fetch = require('node-fetch');

var validateLink = function validateLink(arr) {
  var validatedLinksArray = arr.map(function (links) {
    return new Promise(function (resolve, reject) {
      return fetch(links.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.statusText = response.statusText;
          resolve(links);
        } else {
          links.status = response.statusText;
          links.statusText = 'Fail';
          resolve(links);
        }
      }).catch(function () {
        links.status = '';
        links.statusText = 'Not Found';
        resolve(links);
      });
    });
  });
  return Promise.all(validatedLinksArray);
}; // const linkArray =
//   [{
//     href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
//     text: 'cifrado César',
//     file:
//       `${process.cwd()}\\test\\probando-mdlinks\\lalala.md`
//   },
//   {
//     href: 'mailto:front@end.la',
//     text: 'front@end.la',
//     file:
//       `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`
//   },
//   {
//     href: 'https://github.com/soumak77/firebase-mock',
//     text: 'firebase-mock',
//     file:
//       `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`
//   },
//   {
//     href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
//     text: 'mock-cloud-firestore',
//     file:
//       `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`
//   },
//   {
//     href: 'https://github.com/mikkopaderes/test',
//     text: 'mock-cloud-test',
//     file:
//       `${process.cwd()}\\test\\probando-mdlinks\\more\\Readmetest.md`
//   },
//   {
//     href:
//       'https://betsyvies.github.io/2018-2-SPA/src/template-string/#/',
//     text: 'Aquí puedes ver la demo',
//     file:
//       `${process.cwd()}\\test\\probando-mdlinks\\README.md`
//   }]
// validateLink(linkArray)
//   .then(result => console.log(result))
//   .catch(err => err);


exports.validateLink = validateLink;
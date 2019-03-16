"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

var fetch = require('node-fetch');

var validateLinks = function validateLinks(arrObjec) {
  var resulArray = arrObjec.map(function (links) {
    return new Promise(function (resolve, reject) {
      fetch(links.href).then(function (stat) {
        if (stat.status >= 200 && stat.status < 400) {
          links.status = stat.status;
          links.value = 'OK';
          resolve(links);
        } else {
          links.status = stat.status;
          links.value = 'Fail';
          resolve(links);
        }
      }).catch(function (error) {
        links.status = '';
        links.value = 'No Found';
        resolve(links);
      });
    });
  });
  return Promise.all(resulArray);
};

exports.validateLinks = validateLinks;
var linkArray = [{
  href: 'https://en.wikipedia.org/wiki/Caesar_cipher',
  text: 'cifrado César',
  file: "C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\lalala.md"
}, {
  href: 'mailto:front@end.la',
  text: 'front@end.la',
  file: "C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md"
}, {
  href: 'https://github.com/soumak77/firebase-mock',
  text: 'firebase-mock',
  file: "C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md"
}, {
  href: 'https://github.com/mikkopaderes/mock-cloud-firestore',
  text: 'mock-cloud-firestore',
  file: "C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md"
}, {
  href: 'https://github.com/mikkopaderes/test',
  text: 'mock-cloud-test',
  file: "C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md"
}, {
  href: 'https://betsyvies.github.io/2018-2-SPA/src/template-string/#/',
  text: 'Aquí puedes ver la demo',
  file: "C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md"
}]; // validateLinks(linkArray)
//   .then(result => console.log(result))
//   .catch(err => err);
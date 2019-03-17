"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLink = void 0;

// import { linkArray } from '../test/extract-links.spec.js';
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
          links.status = response.status;
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
}; // validateLink(linkArray)
//   .then(result => console.log(result))
//   .catch(err => err);


exports.validateLink = validateLink;
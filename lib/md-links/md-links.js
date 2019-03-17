"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("../path.js");

var _extractMd = require("../extract-md.js");

var _extractLinks = require("../extract-links.js");

var _validate = require("../validate.js");

var _util = require("util");

// import { isPathAbsolute, convertPathAabsolute, openAdirectory } from '../functions/path.js';
// import { arrRoutesMd, extrackLinks } from '../functions/arr.js';
// import { validateLink} from '../functions/options.js';
var relativePath = '..\\test\\probando-mdlinks';

var mdLinks = function mdLinks(route, option) {
  return new Promise(function (resolve, reject) {
    var rutaAbsoluta;

    if ((0, _path.isPathAbsolute)(route) === false) {
      rutaAbsoluta = (0, _path.convertPathRelativeToAbsolute)(route);
    }

    var arrFiles = (0, _path.readDirectory)(route);
    var arrMd = (0, _extractMd.filterMdFiles)(arrFiles);
    var arrLinks = (0, _extractLinks.extractLinks)(arrMd);

    if (option.validate === true) {
      (0, _validate.validateLink)(arrLinks).then(function (response) {
        resolve(response);
      }).catch(function (err) {
        resolve(err);
      });
    } else {
      resolve(arrLinks);
    }
  });
}; // mdLinks(relativePath, true)
//   .then(result => console.log(result))
//   .catch(err => err);


exports.mdLinks = mdLinks;
mdLinks(relativePath, {
  validate: true
}).then(function (res) {
  return console.log(res);
});
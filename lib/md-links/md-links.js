"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("../path.js");

var _extractMd = require("../extract-md.js");

var _extractLinks = require("../extract-links.js");

var _validate = require("../validate.js");

var mdLinks = function mdLinks(path, options) {
  var pathAbs;

  if (!(0, _path.evaluatePath)(path)) {
    pathAbs = (0, _path.convertPathRelativeToAbsolute)(path);
  } else {
    pathAbs = path;
  }

  ;
  return new Promise(function (resolve) {
    if (!options.validate) {
      resolve((0, _extractLinks.extractLinks)((0, _extractMd.filterMdFiles)((0, _path.readDirectory)(pathAbs))));
    }

    if (options.validate) {
      resolve((0, _validate.validateLink)((0, _extractLinks.extractLinks)((0, _extractMd.filterMdFiles)((0, _path.readDirectory)(pathAbs)))));
    }
  });
}; // mdLinks('C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test',{validate:false}).then(resp=>console.log(resp))
// mdLinks('..\\..\\test\\probando-mdlinks', {validate: false})
//   .then(res => console.log(res));


exports.mdLinks = mdLinks;
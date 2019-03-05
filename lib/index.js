"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDirectory = exports.convertPathRelativeToAbsolute = void 0;

var path = require('path');

var fs = require('fs');

var convertPathRelativeToAbsolute = function convertPathRelativeToAbsolute(ruta) {
  return path.resolve(ruta);
};

exports.convertPathRelativeToAbsolute = convertPathRelativeToAbsolute;

var readDirectory = function readDirectory(ruta) {
  return fs.readdirSync(ruta);
};

exports.readDirectory = readDirectory;
console.log(convertPathRelativeToAbsolute('C:/Users/USER T430/Documents/Project/LIM008-fe-md-links'));
console.log(readDirectory('C:/Users/USER T430/Documents/Project/LIM008-fe-md-links'));
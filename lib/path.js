"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDirectory = exports.convertPathRelativeToAbsolute = exports.isPathAbsolute = void 0;
var relativePath = '..\\test\\probando-mdlinks';

var path = require('path');

var fs = require('fs');

var isPathAbsolute = function isPathAbsolute(route) {
  var isAbsolute = path.isAbsolute(route);
  return isAbsolute;
};

exports.isPathAbsolute = isPathAbsolute;
console.log(isPathAbsolute(relativePath));

var convertPathRelativeToAbsolute = function convertPathRelativeToAbsolute(ruta) {
  return path.resolve(ruta);
};

exports.convertPathRelativeToAbsolute = convertPathRelativeToAbsolute;
console.log(convertPathRelativeToAbsolute(relativePath));

var readDirectory = function readDirectory(ruta) {
  var filePathsArray = [];
  var fileNamesArray = fs.readdirSync(ruta); //me devuelve un arreglo de nombres de elementos del directorio

  fileNamesArray.forEach(function (fileName) {
    //recorro cada elemento del arreglo
    var absoluteFilePath = path.join(ruta, fileName); //obtiene ruta absoluta de cada elemento

    var stat = fs.statSync(absoluteFilePath); //devuelve propiedades de cada file

    if (stat.isDirectory()) {
      //si el elemento es un directorio
      filePathsArray = filePathsArray.concat(readDirectory(absoluteFilePath)); //volver a leer si es un directorio
    } else {
      filePathsArray.push(absoluteFilePath);
    }
  });
  return filePathsArray;
};

exports.readDirectory = readDirectory;
console.log(readDirectory(convertPathRelativeToAbsolute(relativePath)));
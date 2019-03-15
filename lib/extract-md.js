"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterMdFiles = void 0;

var path = require('path');

var filterMdFiles = function filterMdFiles(array) {
  var mdFilePathsArray = array.filter(function (elem) {
    return path.extname(elem) === '.md';
  });
  return mdFilePathsArray;
};

exports.filterMdFiles = filterMdFiles;
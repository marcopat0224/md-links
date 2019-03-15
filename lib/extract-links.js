"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = void 0;

var fs = require('fs');

var marked = require('marked');

var extractLinks = function extractLinks(array) {
  var linkArray = [];
  array.forEach(function (file) {
    var readFiles = fs.readFileSync(file, 'utf-8');
    var renderer = new marked.Renderer();

    renderer.link = function (href, __, text) {
      linkArray.push({
        href: href,
        text: text.substring(0, 50),
        file: file
      });
    };

    marked(readFiles, {
      renderer: renderer
    });
  });
  return linkArray;
}; // const mdFilePathsArray =
//   ['C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\lalala.md',
//     'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md',
// 		'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md'];
// console.log(extractLinks(mdFilePathsArray));


exports.extractLinks = extractLinks;
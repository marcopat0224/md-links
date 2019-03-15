"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _validate = require("../validate.js");

var _extractLinks = require("../extract-links.js");

var mdLinks = function mdLinks(route, options) {
  if (options.validate) {
    return (0, _validate.validateLinks)(route).then(function (resp) {
      return resp;
    }).catch(function (err) {
      return err;
    });
  } else if (options.validate === false) {
    return new Promise(function (resolve) {
      return resolve((0, _extractLinks.extractLinks)(route));
    });
  }
};

exports.mdLinks = mdLinks;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenLinksStats = exports.uniqueLinksStats = exports.totalLinksStats = exports.doStats = void 0;

var _validate = require("./validate");

var doStats = function doStats(resolver, route) {
  return new Promise(function (resolve, reject) {
    var linkStatus = (0, _validate.validateLinks)(route);
    linkStatus.then(function (response) {
      var result = resolver(response);
      resolve(result);
    }).catch(function (err) {
      return reject(err);
    });
  });
};

exports.doStats = doStats;

var totalLinksStats = function totalLinksStats(route) {
  var resolver = function resolver(response) {
    return "Total: ".concat(response.length);
  };

  return doStats(resolver, route);
};

exports.totalLinksStats = totalLinksStats;

var uniqueLinksStats = function uniqueLinksStats(route) {
  var resolver = function resolver(response) {
    return "Unique: ".concat(new Set(response.map(function (uniqueLinks) {
      return uniqueLinks.href;
    })).size);
  };

  return doStats(resolver, route);
};

exports.uniqueLinksStats = uniqueLinksStats;

var brokenLinksStats = function brokenLinksStats(route) {
  var resolver = function resolver(response) {
    return "Broken: ".concat(response.filter(function (statusText) {
      return statusText.message === 'Fail';
    }).length);
  };

  return doStats(resolver, route);
};

exports.brokenLinksStats = brokenLinksStats;
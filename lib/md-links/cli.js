#!/usr/bin/env node
// const mdLinks = require('./md-links.js');
// import {statsLinks, statLinksBroken} from './models/stats.js';
"use strict";

var _stats = require("../stats.js");

var _mdLinks = require("./md-links.js");

var path = process.argv[2];
var options = process.argv[3];
var status = process.argv[4];

if (options === '--validate' && status === '--stats' || status === '--stats' && options === '--validate' || options === '--s' && status === '--v' || options === '--v' && status === '--s') {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(function (res) {
    console.log("Total: ".concat((0, _stats.totalLinks)(res)));
    console.log("Unique: ".concat((0, _stats.uniqueLinks)(res)));
    console.log("Broken: ".concat((0, _stats.brokenLinks)(res)));
  }).catch(function (error) {
    return console.log(error);
  });
} else if (options === '--validate' || options === '--v') {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(function (res) {
    console.log(res);
  }).catch(function (error) {
    return console.log(error);
  });
} else if (options === '--stats' || options === '--s') {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(function (res) {
    console.log("Total: ".concat((0, _stats.totalLinks)(res)));
    console.log("Unique: ".concat((0, _stats.uniqueLinks)(res)));
  }).catch(function (error) {
    return console.log(error);
  });
} else {
  (0, _mdLinks.mdLinks)(path, {
    validate: false
  }).then(function (res) {
    console.log(res);
  }).catch(function (err) {
    return console.log(err);
  });
}
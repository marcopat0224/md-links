#!/usr/bin/env node
// const mdLinks = require('./md-links.js');
// import {statsLinks, statLinksBroken} from './models/stats.js';
import { totalLinks, brokenLinks, uniqueLinks } from '../stats.js';
import { mdLinks } from './md-links.js';

const path = process.argv[2];
const options = process.argv[3];
const status = process.argv[4];

if (options === '--validate' && status === '--stats' || status === '--stats' && options === '--validate' || options === '--s' && status === '--v' || options === '--v' && status === '--s') {
  mdLinks(path, { validate: true })
    .then(res => {
      console.log(`Total: ${totalLinks(res)}`);
      console.log(`Unique: ${uniqueLinks(res)}`);
      console.log(`Broken: ${brokenLinks(res)}`);
    })
    .catch(error => console.log(error));
} else if (options === '--validate' || options === '--v') {
  mdLinks(path, { validate: true })
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));
} else if (options === '--stats' || options === '--s') {
  mdLinks(path, { validate: true })
    .then(res => {
      console.log(`Total: ${totalLinks(res)}`);
      console.log(`Unique: ${uniqueLinks(res)}`);
    })
    .catch(error => console.log(error));
} else {
  mdLinks(path, { validate: false })
  .then(res => {
    console.log(res);
  })
    .catch(err => console.log(err));
}
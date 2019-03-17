import { isPathAbsolute, convertPathRelativeToAbsolute, readDirectory } from '../path.js';
import { filterMdFiles } from '../extract-md.js';
import { extractLinks } from '../extract-links.js';
import { validateLink } from '../validate.js';
import { log } from 'util';

const relativePath = '..\\test\\probando-mdlinks';

export const mdLinks = (route, option) => {
  return new Promise((resolve, reject) => {
    let rutaAbsoluta;
    if (isPathAbsolute(route) === false) {
      rutaAbsoluta = convertPathRelativeToAbsolute(route);
    }
    
    const arrFiles = readDirectory(route);
    const arrMd = filterMdFiles(arrFiles);
    const arrLinks = extractLinks(arrMd);
    if (option.validate === true) {
      validateLink(arrLinks)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          resolve(err);
        });
    } else {
      resolve(arrLinks);
    }
  });
};

// mdLinks(relativePath, true)
//   .then(result => console.log(result))
//   .catch(err => err);

// mdLinks(relativePath, { validate: true })
//   .then(res => console.log(res));
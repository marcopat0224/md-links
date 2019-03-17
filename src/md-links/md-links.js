import { isPathAbsolute, convertPathAabsolute, openAdirectory } from '../functions/path.js';
import { arrRoutesMd, extrackLinks } from '../functions/arr.js';
import { validateLink} from '../functions/options.js';

import { convertPathRelativeToAbsolute, readDirectory } from '../path.js';
import { filterMdFiles } from '../extract-md.js';
import { extractLinks } from '../extract-links.js';
validateLink

export const mdLinks = (route, option) => { 
  return new Promise((resolve, reject) => {              
    let rutaAbsoluta;
    if (isPathAbsolute(route) === false) {
      rutaAbsoluta = convertPathAabsolute(route);  
    }
    const arrFiles = openAdirectory(route);
    const arrMd = arrRoutesMd(arrFiles);
    const arrLinks = extrackLinks(arrMd);
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
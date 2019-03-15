import { validateLinks } from '../validate.js';
import { extractLinks } from '../extract-links.js';

export const mdLinks = (route, options) => {
  if (options.validate) {
    return validateLinks(route).then(resp => resp).catch(err => err);  
  } else if (options.validate === false) {
    return new Promise(resolve => resolve(extractLinks(route)));
  } 
};
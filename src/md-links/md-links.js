import { isPathAbsolute, convertPathRelativeToAbsolute, readDirectory } from '../path.js';
import { filterMdFiles } from '../extract-md.js';
import { extractLinks } from '../extract-links.js';
import { validateLink } from '../validate.js';

export const mdLinks = (path, options) => {
  let pathAbs;
  if (!isPathAbsolute(path)) {
    pathAbs = convertPathRelativeToAbsolute(path);
  } else {
    pathAbs = path;
  };
  return new Promise((resolve) => {
    if (!options.validate) {
      resolve(extractLinks(filterMdFiles(readDirectory(pathAbs))));
    } if (options.validate) {
      resolve(validateLink(extractLinks(filterMdFiles(readDirectory(pathAbs)))));
    } 
  });
};

// mdLinks('test\\pruebastest', {validate: true})
//   .then(res => console.log(res));
const path = require('path');

export const filterMdFiles = array => {
  const mdFilePathsArray = array.filter(elem => path.extname(elem) === '.md');
  return mdFilePathsArray;
};
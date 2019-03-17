
// import { linkArray } from '../test/extract-links.spec.js';

const fetch = require('node-fetch');

export const validateLink = (arr) => {
  const validatedLinksArray = arr.map(links => new Promise((resolve, reject) => {
    return fetch(links.href)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.statusText = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.statusText = 'Fail';
          resolve(links);
        }
      }).catch(() => {
        links.status = '';
        links.statusText = 'Not Found';
        resolve(links);
      });
  }));
  return Promise.all(validatedLinksArray);
};

// validateLink(linkArray)
//   .then(result => console.log(result))
//   .catch(err => err);
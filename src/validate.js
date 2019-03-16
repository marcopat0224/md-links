const fetch = require('node-fetch');

export const validateLink = (arr) => {
  const linkValidate = arr.map(links => new Promise((resolve, reject) => {
    return fetch(links.href)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.statusText = response.statusText;
          resolve(links);
        } else {
          links.status = response.statusText;
          links.statusText = 'Not Fail';
          resolve(links);
        }
      }).catch(() => {
        links.status = '';
        links.statusText = 'Not Link';
        resolve(links);
      });
  }));
  return Promise.all(linkValidate);
};
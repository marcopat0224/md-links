export const totalLinks = (array) => {
  const total = array.length;
  return total;
};

export const uniqueLinks = (array) => {
  const unique = [...new Set(array.map((link) => link.href))];
  return unique.length;
};

export const brokenLinks = (array) => {
  const broken = array.filter(link => link.status === '' || link.statusText === 'Fail');
  return broken.length;
};
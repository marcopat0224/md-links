export const totalLinks = (arr) => {
  const total = arr.length;
  return total;
};

export const uniqueLinks = (arr) => {
  const unique = [...new Set(arr.map((link) => link.href))];
  return unique.length;
};

export const brokenLinks = (arr) => {
  const broken = arr.filter(link => link.status === '' || link.status === 'Not Found');
  return broken.length;
};
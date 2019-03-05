const path = require('path');
const fs = require('fs');


export const convertPathRelativeToAbsolute = (ruta) => {  
  return path.resolve(ruta);
}

export const readDirectory = (ruta) => {
  return fs.readdirSync(ruta)
}

console.log(convertPathRelativeToAbsolute('C:/Users/USER T430/Documents/Project/LIM008-fe-md-links'));
console.log(readDirectory('C:/Users/USER T430/Documents/Project/LIM008-fe-md-links'));

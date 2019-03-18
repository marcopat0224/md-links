// const relativePath = '..\\LIM008-fe-md-links\\test\\probando-mdlinks';

const path = require('path');
const fs = require('fs');

export const evaluatePath = (route) => {
  const isAbsolute = path.isAbsolute(route);
  return isAbsolute;
};
// console.log(evaluatePath(relativePath));

export const convertPathRelativeToAbsolute = (ruta) => {
  return path.resolve(ruta);
}
// console.log(convertPathRelativeToAbsolute(relativePath));

export const readDirectory = ruta => {
  let filePathsArray = [];
  const fileNamesArray = fs.readdirSync(ruta); //me devuelve un arreglo de nombres de elementos del directorio
  fileNamesArray.forEach(fileName => { //recorro cada elemento del arreglo
    const absoluteFilePath = path.join(ruta, fileName); //obtiene ruta absoluta de cada elemento
    const stat = fs.statSync(absoluteFilePath); //devuelve propiedades de cada file
    if (stat.isDirectory()) { //si el elemento es un directorio
      filePathsArray = filePathsArray.concat(readDirectory(absoluteFilePath)); //volver a leer si es un directorio
    } else {
      filePathsArray.push(absoluteFilePath);
    }
  });
  return filePathsArray;
}
// console.log(readDirectory(convertPathRelativeToAbsolute(relativePath)));




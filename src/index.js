const path = require('path');
const fs = require('fs');


const convertPathRelativeToAbsolute = (ruta) => {
  return path.resolve(ruta);
}

const readDirectory = ruta => {
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
};

const filterMD = array => {
  const arrayFileMd = array.filter(elem => path.extname(elem) === '.md');
  return arrayFileMd;
};

// const readFiles = array =>{
//   array.forEach(elem=>{
//     return elem;    
//   })
// }

const console1 = convertPathRelativeToAbsolute('..\\test\\probando-mdlinks');
console.log(console1);

const console2 = readDirectory(console1);
console.log(console2);

const console3 = filterMD(console2);
console.log(console3);

// const console4 = readFiles(console3);
// console.log(console4);

const read = ruta => {
  const leerArchivo = fs.readFileSync(ruta);
  return leerArchivo;
}
console.log(read('C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md'));

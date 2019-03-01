const path = require('path');
// const fs = require('fs')

export const validarRuta=(ruta)=>{
  return path.isAbsolute(ruta); 
}



/*
*   Verifica  si la ruta es absoluta o relativa
*
* @param {}
*
*
*
*/

// const  mdLinks = require ('md-links');
// export const convertToAbsolute=path.resolve()
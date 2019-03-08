const path = require('path');
const fs = require('fs');

// export const readFile = ruta => {
//   const leerArchivo = fs.readFileSync(ruta).toString();
//   return leerArchivo;
// }

// export const readFiles = array => {
//   array.forEach(elem => {
//     const mdFileContent = readFile(elem);
//     return mdFileContent;
//   })
// }

export const extractLinks = (mdFilePathsArray) => {
	let linkArray = [];
	mdFilePathsArray.forEach((route) => {
		const readFiles = fs.readFileSync(route, 'utf-8');
		const renderer = new marked.Renderer();
		renderer.link = (href, __, text) => {
			linkArray.push({ href, text: text.substring(0, 50), route });
		};
		marked(readFiles, { renderer });
	});
	return linkArray;
};

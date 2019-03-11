const fs = require('fs');
const marked = require('marked');

export const extractLinks = (array) => {
	let linkArray = [];
	array.forEach((file) => {
		const readFiles = fs.readFileSync(file, 'utf-8');
		const renderer = new marked.Renderer();
		renderer.link = (href, __, text) => {
			linkArray.push({ href, text: text.substring(0, 50), file });
		};
		marked(readFiles, { renderer });
	});
	return linkArray;
};

// const mdFilePathsArray =
//   ['C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\lalala.md',
//     'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\more\\Readmetest.md',
// 		'C:\\Users\\USER T430\\Documents\\Project\\LIM008-fe-md-links\\test\\probando-mdlinks\\README.md'];
		
// console.log(extractLinks(mdFilePathsArray));


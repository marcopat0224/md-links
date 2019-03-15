"use strict";

var _mdLinks = require("./md-links");

var _stats = require("../stats.js");

var args = process.argv.slice(2);
var options = {
  validate: false
};
var path = args[0];

if (args.length === 0) {
  console.log('Ingresa una ruta, ejemplo: md-links ./some/example\n');
}

var helpMe = function helpMe() {
  console.log("\n Uso: \n\n$ md-links <path> <options> \n\n<path> es la ruta del archivo o carpeta a evaluar \n<options> tendr\xE1n los valores de:\n --stats o --s, muestra cantidad de links y cantidad de links \xFAnicos \n --validate o --v, muestra la ruta absoluta del archivo, texto de referencia, link, estado de link y mensaje de estado(Ok o fail) \n --stats --validate o --s --v, muestra cantidad de links, cantidad de links \xFAnicos y cantidad de links rotos\n");
}; // si solo ingresa la ruta


if (args.length === 1) {
  if (args[0] === '--help') {
    helpMe();
  } else {
    (0, _mdLinks.mdLinks)(path, options).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(" Path: ".concat(values.file, "\n Link: ").concat(values.href, "\n Text: ").concat(values.text, "\n"));
      });
    }).catch(function (err) {
      return console.log(err);
    });
  }
}

;

if (args.length === 2) {
  if (args[1] === '--validate' || args[1] === '--v') {
    options.validate = true;
    (0, _mdLinks.mdLinks)(path, options).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(" Path: ".concat(values.file, "\n Link: ").concat(values.href, "\n Status: ").concat(values.status, "\n StatusText: ").concat(values.message, "\n Text: ").concat(values.text, "\n"));
      });
    }).catch(function (err) {
      return err;
    });
  } else if (args[1] === '--stats' || args[1] === '--s') {
    Promise.all([(0, _stats.totalLinksStats)(path), (0, _stats.uniqueLinksStats)(path)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return console.log(err);
    });
  }
}

;

if (args.length === 3) {
  if ((args[1] === '--validate' || args[1] === '--v') && (args[2] === '--stats' || args[2] === '--s')) {
    Promise.all([(0, _stats.totalLinksStats)(path), (0, _stats.uniqueLinksStats)(path), (0, _stats.brokenLinksStats)(path)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return console.log(err);
    });
  } else if ((args[1] === '--stats' || args[1] === '--s') && (args[2] === '--validate' || args[2] === '--v')) {
    Promise.all([(0, _stats.totalLinksStats)(path), (0, _stats.uniqueLinksStats)(path), (0, _stats.brokenLinksStats)(path)]).then(function (resp) {
      return resp.forEach(function (values) {
        return console.log(values);
      });
    }).catch(function (err) {
      return console.log(err);
    });
  }
}

;
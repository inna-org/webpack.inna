var helloElement = require('./hello');
var numElement = require('./number');

// import helloElement from './hello';

document.body.appendChild(helloElement());
document.body.appendChild(numElement());
document.body.appendChild('<h2>some text</h2>');

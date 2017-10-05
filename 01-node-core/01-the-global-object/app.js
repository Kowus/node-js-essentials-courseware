/*
// The global namespace is assumed.
// Inclusion is not required.
// eg.
console.log("Hello World");

// Is the same as
global.console.log("Hello World");

var hello = "Hello World from Node js";

var justNode = hello.slice(17);

console.log(`Rock on World from ${justNode}`);
*/

/*
console.log(`directory path: ${__dirname}`);

console.log(`file path: ${__filename}`);
*/

var path = require('path');

console.log(`Rock on World from ${path.basename(__filename)}`);
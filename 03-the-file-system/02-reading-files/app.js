/*
var fs =require('fs');

// var contents = fs.readFileSync('./lib/sayings.md', "UTF-8");

// var contents = fs.readFileSync('./lib/sayings.md');
// console.log(contents);

fs.readFile("./lib/sayings.md", "UTF-8", function (err, contents) {
    if(err){
        console.error(err)
    }
    console.log(contents);
});
*/

var fs = require('fs');
var path = require('path');

fs.readdir("./lib", function (err, files) {
   files.forEach(function (filename) {
       var file = path.join(__dirname, "lib", filename);
       var stats = fs.statSync(file);
       if(stats.isFile() && filename !== ".DS_Store"){
           fs.readFile(file, "UTF-8", function (err, contents) {
               console.log(`${filename}\n===========\n\n${contents}\n\n`);
           });
       }
   }) ;
});
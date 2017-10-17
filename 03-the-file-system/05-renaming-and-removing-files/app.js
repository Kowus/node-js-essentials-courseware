var fs = require('fs');

// Renaming
/*
fs.renameSync('./lib/config.js', './lib/config.json');
console.log("config.js renamed to config.json");

fs.rename('./lib/notes.md', './notes.md', function (err) {
    if (err){
        console.log(err);
    }else {
        console.log('notes.md moved successfully');
    }
});
*/

// Remove
try {
    fs.unlinkSync('./lib/config.json');
}catch (err){
    console.log(err);
}

fs.unlink('./notes.md', function (err) {
    if (err){
        console.log(err)
    }else {
        console.log('notes.md removed');
    }
});
var fs = require('fs');

//rename
/*
fs.renameSync('./assets/logs', "./logs");
console.log("Directory moved");
*/

// remove
/*fs.rmdir('./assets', function (err) {
    if (err) {
        throw err;
    }
    console.log('assets directory removed')
});*/

fs.readdirSync('./logs').forEach(function (file) {
    fs.unlink(`./logs/${file}`);
})

fs.rmdir('./logs', function (err) {
    if (err) {
        throw err;
    }
    console.log('logs directory removed')
});


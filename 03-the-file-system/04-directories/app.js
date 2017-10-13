var fs = require('fs');

if(fs.existsSync('lib')) {
    console.log('Directory already exists.')
} else {
    fs.mkdir('lib', function (err) {
        if (err) console.error(err);
        else {
            console.log('Directory Created');
        }
    });
}
var fs = require('fs');

// Reading File Normal Async
/*
fs.readFile('./chat.log','UTF-8', function (err, chatlog) {
    console.log(`File Read ${chatlog.length}`);
});

console.log('Reading File');
*/
var stream = fs.createReadStream('./chat.log', 'UTF-8');

var data ='';

stream.once('data', function () {
    console.log('\n\n\n');
    console.log('Started reading file');
    console.log('\n\n\n');
});

stream.on('data', function (chunk) {
   process.stdout.write(`\tchunk: ${chunk.length} |`);
   data += chunk;
});

stream.on('end', function () {
    console.log('\n\n\n');
    console.log(`Finished reading file ${data.length}`);
    console.log('\n\n\n');
});
var readLine = require('readline');
var waitTime = 30000;
var currentTime = 0;
var waitInterval = 10;
var percentWaited = 0;
function writeWaitingPercent(p) {
    readLine.cursorTo(process.stdout, 0);
    process.stdout.write(`waiting ... ${p}%`)
}



var interval = setInterval(function () {
    currentTime += waitInterval;

    percentWaited = Math.floor((currentTime/waitTime)*100);
    writeWaitingPercent(percentWaited);
}, waitInterval);


setTimeout(function () {
    clearInterval(interval);
    // console.log(`I just wasted ${waitTime/1000} seconds of your life.`)
    writeWaitingPercent(100);
    console.log("\n\ndone\n\n");
}, waitTime);


process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
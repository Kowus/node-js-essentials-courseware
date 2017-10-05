// The process object allows us to work with instances of
// the current process
// It collects all the information from the application and the command line when the application starts

// The argv function returns the arguments passed in the terminal
// when the application started
// console.log(process.argv);

function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index + 1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
    console.log("You Blew it!");
} else {
    console.log(`Welcome ${user}, ${greeting}`)
}


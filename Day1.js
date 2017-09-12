// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// // Reads complete line from STDIN
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

var input_stdin_array = [12,4.0,"is the best place to learn and practice coding!"];

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    
    
    // Declare second integer, double, and String variables.
var i2, d2, s2;
    // Read and save an integer, double, and String to your variables.
// i2 = readLine();
// d2 = readLine();
// s2 = readLine();

i2 = input_stdin_array[0];
d2 = input_stdin_array[1];
s2 = input_stdin_array[2];

    // Print the sum of both integer variables on a new line.
console.log(i + parseInt(i2));
    // Print the sum of the double variables on a new line.
console.log((d + parseFloat(d2)).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
console.log(s + s2);    

}

main(input_stdin_array)
/*
https://www.hackerrank.com/challenges/30-loops

Day 5: Loops

Objective 
In this challenge, we're going to use loops to help us do some simple math. Check out the Tutorial tab to learn more.

Task 
Given an integer, n, print its first  multiples. Each multiple, n x i  (where 1 <= i <= 10) should be printed on a new line in the form: n x i = result.

Input Format

A single integer, .

Constraints

Output Format

Print  lines of output; each line  (where ) contains the  of  in the form: 
n x i = result.

Sample Input

2
Sample Output

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20

JavaScript (Node.js)

*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

// code above this line unchangeable
// my code submission below

function main() {
    var n = parseInt(readLine());
    
    for(i=1; i <= 10; i++){
         console.log(n + " x " + i + " = " + n * i);
    }
}


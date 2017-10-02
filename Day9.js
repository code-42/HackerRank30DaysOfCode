/*
Day 9 of HackerRank 30 Days of Code
https://www.hackerrank.com/challenges/30-recursion

Day 9: Recursion 
by AvmnuSng
Problem

Today, we're learning and practicing an algorithmic concept called Recursion. Check out the Tutorial tab for learning materials and an instructional video!

Recursive Method for Calculating Factorial 
Task 
Write a factorial function that takes a positive integer,  as a parameter and prints the result of  ( factorial).

Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of .

Input Format

A single integer,  (the argument to pass to factorial).

Constraints

Your submission must contain a recursive function named factorial.
Output Format

Print a single integer denoting .

Sample Input

3
Sample Output

6
Explanation

Consider the following steps:

From steps  and , we can say ; then when we apply the value from  to step , we get . Thus, we print  as our answer.

Solved score: 15.00pts
Submissions: 97435
Max Score: 30
Difficulty: Easy
Rate This Challenge:
    
More
Current Buffer (saved locally, editable)      
JavaScript (Node.js)

*/

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

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

/////////////// ignore above this line ////////////////////

module.exports = function factorial(n) {
    // Complete this function
    if (n <= 1){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// function main() {
//     var n = parseInt(readLine());
//     var result = factorial(n);
//     process.stdout.write("" + result + "\n");

// }

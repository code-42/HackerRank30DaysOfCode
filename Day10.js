/*

30 Days of Code  Day 10: Binary Numbers
https://www.hackerrank.com/challenges/30-binary-numbers

Day 10: Binary Numbers 
by AvmnuSng
Problem
Submissions
Leaderboard
Discussions
Editorial
Tutorial
Objective 
Today, we're working with binary numbers. Check out the Tutorial tab for learning materials and an instructional video!

Task 
Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation.

Input Format

A single integer, .

Constraints

Output Format

Print a single base- integer denoting the maximum number of consecutive 's in the binary representation of .

Sample Input 1

5
Sample Output 1

1
Sample Input 2

13
Sample Output 2

2
Explanation

Sample Case 1: 
The binary representation of  is , so the maximum number of consecutive 's is .

Sample Case 2: 
The binary representation of  is , so the maximum number of consecutive 's is .

Submissions: 77093
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

// module.exports = function main(val) {
function main(val) {
    // var n = parseInt(readLine());
    var arr = val.toString(2).split('');
    // console.log(val.toString(2));
    var ones = 0, maxOnes = 0;

    for(var i in arr){
        if(arr[i] === '1'){
            ones++;
        } else {
            ones = 0;
        }
    
        if (ones > maxOnes){
            maxOnes = ones;
        }
    }
    console.log(maxOnes);
    return val.toString(2);
    
}

main(6);

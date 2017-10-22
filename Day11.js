/*

HackerRank 30 Days of Code  Day 11: 2D Arrays

https://www.hackerrank.com/challenges/30-2d-arrays

Day 11: 2D Arrays 
by Shafaet
Problem
Submissions
Leaderboard
Discussions
Editorial
Tutorial
Objective 
Today, we're building on our knowledge of Arrays by adding another dimension. Check out the Tutorial tab for learning materials and an instructional video!

Context 
Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.

Task 
Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

Input Format

There are  lines of input, where each line contains  space-separated integers describing 2D Array ; every value in  will be in the inclusive range of  to .

Constraints

Output Format

Print the largest (maximum) hourglass sum found in .

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output

19
Explanation

 contains the following hourglasses:

1 1 1   1 1 0   1 0 0   0 0 0
  1       0       0       0
1 1 1   1 1 0   1 0 0   0 0 0

0 1 0   1 0 0   0 0 0   0 0 0
  1       1       0       0
0 0 2   0 2 4   2 4 4   4 4 0

1 1 1   1 1 0   1 0 0   0 0 0
  0       2       4       4
0 0 0   0 0 2   0 2 0   2 0 0

0 0 2   0 2 4   2 4 4   4 4 0
  0       0       2       0
0 0 1   0 1 2   1 2 4   2 4 0
The hourglass with the maximum sum () is:

2 4 4
  2
1 2 4
Submissions: 64022
Max Score: 30
Difficulty: Easy
Rate This Challenge:
    
More
Current Buffer (saved locally, editable)     
 
JavaScript (Node.js)

*/

/*
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

*/
/////////////// ignore above this line ////////////////////

// module.exprorts is used for testing with npm run test
// module.exports = function processData() {

// module.exports = 
function main() {
    
    // first simulate HackerRank data input with data file
    var fs = require('fs'), input = [];

    fs.readFile("Day11inputFile.txt", 'utf8', function(err, input){
        if(err){
            return console.log("err == ", err);
        };

    // look at the input
    // console.log("input == ", input);

    // second split input string into array of substrings
    var data = input.split('\n');
    
    // look at the data array
    console.log("data == \n", data);

    // var arr[][] = new int[6][6];
    // for(int i=0; i < 6; i++){
    //     for(int j=0; j < 6; j++){
    //         arr[i][j] = in.nextInt();
    //     }
    // }
    
    var max = -64, line; // if all -9
    var iMax = 6;
    var jMax = 6;
    var f = new Array();
    
    Array.matrix = function(nrows, ncols, init){
      var arr = [];
      
      for (var i = 0; i < nrows; i++){
        var cols = [];
        for (var j = 0; j < ncols; j++){
            cols[j] = init;
        // line = data[i].split(' ');
        // console.log(line);
        }
        arr[i] = cols;
      }
      return arr;
    }
    var nums = Array.matrix(6,6,0);
    console.log(nums[1][1]); // displays 0
    var names = Array.matrix(3,3,"");
    names[1][2] = "Joe";
    console.log(names[1][2]);
    
  // for( i = 0 ; i < 4 ; i ++)
  //       {
  //       for( j = 0 ; j < 4 ; j ++)
  //           {
  //           var sum = 
  //               arr[i][j] + 
  //               arr[i][j+1] + 
  //               arr[i][j+2] + 
  //               arr[i+1][j+1] + 
  //               arr[i+2][j] + 
  //               arr[i+2][j+1] + 
  //               arr[i+2][j+2];
  //           if( sum > count )           
  //               {
  //               count = sum ;
  //           }
  //       }
  //   }
  //   console.log(count);
    });

}

main();

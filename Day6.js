/*
Day 6 of HackerRank 30 Days of Code
https://www.hackerrank.com/challenges/30-review-loop

Day 6: Let's Review 
by AllisonP
Problem
Submissions
Leaderboard
Discussions
Editorial
Tutorial
Objective 
Today we're expanding our knowledge of Strings and combining it with what we've already learned about loops. Check out the Tutorial tab for learning materials and an instructional video!

Task 
Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

Note:  is considered to be an even index.

Input Format

The first line contains an integer,  (the number of test cases). 
Each line  of the  subsequent lines contain a String, .

Constraints

Output Format

For each String  (where ), print 's even-indexed characters, followed by a space, followed by 's odd-indexed characters.

Sample Input

2
Hacker
Rank
Sample Output

Hce akr
Rn ak
Explanation

Test Case 0:  
 
The even indices are , , and , and the odd indices are , , and . We then print a single line of  space-separated strings; the first string contains the ordered characters from 's even indices (), and the second string contains the ordered characters from 's odd indices ().

Test Case 1:  
 
The even indices are  and , and the odd indices are  and . We then print a single line of  space-separated strings; the first string contains the ordered characters from 's even indices (), and the second string contains the ordered characters from 's odd indices ().

Submissions: 104964
Max Score: 30
Difficulty: Easy
Rate This Challenge:
    
More
Current Buffer (saved locally, editable)     
 
JavaScript (Node.js)
*/


function processData(input) {
    //Enter your code here
    var argsArr = Array.from(arguments);
    console.log(argsArr);
    
    var argsArrLen = argsArr.length;
    console.log(argsArrLen);

    for (var i = 0; i < argsArr.length; i++){
        var splArr = [], evens = [], odds = [];
        splArr = Array.from(argsArr[i].split(''));

        console.log("splArr == " + splArr);
        
        var splArrLen = splArr.length;
        console.log(splArrLen)

        for(var j = 0; j < splArr.length; j++){
            j%2 == 0 ? evens.push(splArr[j]) : odds.push(splArr[j]);
        }
    
        console.log(evens.join('') + " " + odds.join(''))
        
    }
} 

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//   processData(_input);
// });

processData("Hacker", "Rank");
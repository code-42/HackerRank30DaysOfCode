/*
https://www.hackerrank.com/challenges/30-dictionaries-and-maps

HackerRank 30 Days of Code  
Day 8: Dictionaries and Maps 
by Shafaet
Problem
Submissions
Leaderboard
Discussions
Editorial
Tutorial
Objective 
Today, we're learning about Key-Value pair mappings using a Map or Dictionary data structure. Check out the Tutorial tab for learning materials and an instructional video!

Task 
Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

Input Format

The first line contains an integer, , denoting the number of entries in the phone book. 
Each of the  subsequent lines describes an entry in the form of  space-separated values on a single line. The first value is a friend's name, and the second value is an -digit phone number.

After the  lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a  to look up, and you must continue reading lines until there is no more input.

Note: Names consist of lowercase English alphabetic letters and are first names only.

Constraints

Output Format

On a new line for each query, print Not found if the name has no corresponding entry in the phone book; otherwise, print the full  and  in the format name=phoneNumber.

Sample Input

3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
Sample Output

sam=99912222
Not found
harry=12299933
Explanation

We add the following  (Key,Value) pairs to our map so it looks like this:


We then process each query and print key=value if the queried  is found in the map; otherwise, we print Not found.

Query 0: sam 
Sam is one of the keys in our dictionary, so we print sam=99912222.

Query 1: edward 
Edward is not one of the keys in our dictionary, so we print Not found.

Query 2: harry 
Harry is one of the keys in our dictionary, so we print harry=12299933.

Submissions: 84897
Max Score: 30
Difficulty: Easy
Rate This Challenge:
    
More
Current Buffer (saved locally, editable)     
 
JavaScript (Node.js)
*/


// function processData(input) {
// module.exports = function processData() {
function processData() {
    //Enter your code here
    var fs = require('fs'), input = [];

    fs.readFile("Day8inputFile.txt", 'utf8', function(err, input){
        if(err){
            return console.log("err == ", err);
        };

    // first split input string into array of substrings
    var data = input.split('\n');

    // n is the number of key/value pairs in input
    var n = parseInt(data[0]);
    
    // build phoneBook dictionary/associative array from data array
    var phoneBook = {}, line; 
    for(var i = 1; i <= n; i++) {
        line = data[i].split(' ');
        phoneBook[line[0]]=line[1];
    }

    // loop through data query lines and compare to phoneBook 
    var counter = 0;
    for (var i = n+1; i <= data.length-1; i++){
          var key = data[i];
        if(phoneBook[key]){
            console.log(key + '=' + phoneBook[key]); 
        } else {
            console.log('Not found'); 
        }   
    }  
    });
}

/*
correct output:
sam=99912222
Not found
harry=12299933
*/


processData();

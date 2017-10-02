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

// var phbk = [{"sam":"99912222"},{"tom": "11122222"},{"harry": "12299933"}];

function processData() {
    //Enter your code here
    
    var fs = require('fs');

    fs.readFile("inputFile.txt", 'utf8', function(err, data){
        if(err){
            return console.log("err == ", err);
        };
         
        // read the data file into an array
        var arr = data.toString().split("\n");
        console.log("arr[0] == ", arr[0])
        var pb = arr.map(function(name){
            console.log("name == " + arr)
        });
        
        var splArr = {};
        for (var i = 0; i < arr.length; i++){
            splArr = arr[i].split(' ');    
        }
        
        console.log("splArr1 == " + splArr);
        console.log("splArr2 == ", splArr);
        
        var result = [];
        result = arr.map(function(elem){
            return elem;
        });
        console.log("result == " + result)
        
        debugger;
        
        var obj = JSON.parse(data);
        console.log("obj == ", obj);
        
        var phbk = {};
        phbk.ed = 111;
        phbk.ted = 222;
        phbk.fred = 333;
        console.log("phbk1 == ", phbk);
        console.log("phbk2 == " + phbk.ed);
        console.log(Object.keys(phbk));
        // console.log(Object.values(phbk));
        var objKeysMap1 = Object.keys(phbk).map((k) => phbk[k]);
        var objKeysMap2 = Object.keys(phbk).map(function(phbk){
            return phbk;
        });
        var objKeysMap3 = Object.keys(phbk).map(function(k){
            return k;
        });
        console.log("objKeysMap1 == " + objKeysMap1);
        console.log("objKeysMap2 == " + objKeysMap2);
        console.log("objKeysMap3 == " + objKeysMap3);
    });
    
    var map = function(){
        this.collection = {};
        this.count = 0;
        this.size = function(){
            return this.count;
        };
        
        this.set = function(key, value){
            this.collection[key] = value;
            this.count++;
        };
        
        this.get = function(key){
            return (key in this.collection) ? this.collection[key] : null;
        };
        
        this.has = function(key){
            // returns true or false
            return (key in this.collection);
        };
        
        this.values = function(){
            var result = new Array();
            for (var key of Object.keys(this.collection)){
                result.push(this.collection[key]);
            };
            return (result.length > 0) ? result : null;
        };
    };

    var myMap = new map();
    myMap.set('sam2','99912222');
    myMap.set('tom2','11122222');
    myMap.set('harry2','12299933');
    
    console.log(myMap.get('tom2'));
    
    if(myMap.has('sam2')){
        console.log("values == ", myMap.values('sam2'));   
    }
    console.log("key == ", myMap.has('harry2'));
    
}

processData();

// var phbk = [{"sam":"99912222"},{"tom": "11122222"},{"harry": "12299933"}];

// processData([{"sam": "99912222"},{"tom": "11122222"},{"harry": "12299933"}]);

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//   processData(_input);
// });

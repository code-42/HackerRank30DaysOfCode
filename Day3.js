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
var input_stdin_array = [];

function readLine() {
    return input_stdin_array[3];
}

/////////////// ignore above this line ////////////////////

function main() {
    var N = parseInt(readLine());

    var ans = '';
    
    // if 'n' is NOT evenly divisible by 2 (i.e.: n is odd)
    if(N%2==1){
        ans = "Weird";
    }
    else{
        // Complete the code
        if (N >= 2 && N <= 5) {
            ans = "Not Weird";
        } else if (N >= 6 && N <= 20) {
            ans = "Weird";
        } else {
            ans = "Not Weird";
        }
    }
    console.log(ans); 
}

main(input_stdin_array)
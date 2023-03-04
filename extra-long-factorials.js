'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Initialize a variable to store the result, set to 1
    let result = BigInt(1);
    
    // Loop from n to 1, multiplying each iteration by the result variable
    for (let i = n; i > 0; i--) {
        result *= BigInt(i);
    }
    
    // Print the result as a string
    console.log(result.toString());
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
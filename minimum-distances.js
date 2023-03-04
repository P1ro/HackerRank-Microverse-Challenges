'use strict';

const fs = require('fs');

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
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function minimumDistances(a) {
    let minDist = Infinity; // initialize minimum distance with a large value

    // loop through the array
    for (let i = 0; i < a.length; i++) {
        // check if there is an equal element later in the array
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                // calculate distance between two equal elements
                const dist = j - i;
                // update minimum distance if necessary
                if (dist < minDist) {
                    minDist = dist;
                }
            }
        }
    }

    // if no minimum distance was found, return -1
    if (minDist === Infinity) {
        return -1;
    }

    // otherwise, return the minimum distance
    return minDist;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}
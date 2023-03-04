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
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
  let jumps = 0; // variable to keep track of the number of jumps
  let i = 0; // index of the current cloud

  while (i < c.length - 1) { // continue jumping until the last cloud is reached
    if (c[i + 2] === 0) { // if it is possible to jump 2 clouds, do so
      i += 2;
    } else { // otherwise, jump 1 cloud
      i++;
    }
    jumps++; // increment the number of jumps
  }

  return jumps; // return the total number of jumps
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    const result = jumpingOnClouds(c);

    ws.write(result + '\n');

    ws.end();
}

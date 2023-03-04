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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    // Initialize a variable to keep track of the maximum height of any character in the word
    let maxHeight = 0;
    
    // Loop through each character in the word
    for (let i = 0; i < word.length; i++) {
        // Get the ASCII code of the character and convert it to an index to access the corresponding height value from the h array
        const charCode = word.charCodeAt(i) - 97; // 97 is the ASCII code for 'a'
        const charHeight = h[charCode];
        
        // If the height of the current character is greater than the current maxHeight, update maxHeight
        if (charHeight > maxHeight) {
            maxHeight = charHeight;
        }
    }
    
    // Return the area of the highlighted word (height of tallest character times the length of the word)
    return maxHeight * word.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}

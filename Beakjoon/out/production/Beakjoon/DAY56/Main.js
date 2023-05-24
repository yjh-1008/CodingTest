const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input.shift());
const haveCards = input.shift().split(' ')
const M = Number(input.shift());
const selectCards = input.shift().split(' ');

haveCards.sort(function(a,b) {
    return a-b;
})

function binarySearch(haveCards, num) {
    let start = 0;
    let end = haveCards.length-1;

    while(start <= end) {
        let middle = Math.floor((start+end)) / 2;

    }
}


const answer = selectCards.map((data) => binarySearch(haveCards,data))
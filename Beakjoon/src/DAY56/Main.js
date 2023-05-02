const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle][0] < num) {
      start = middle + 1;
    } else if (arr[middle][0] > num) {
      end = middle - 1;
    } else {
      return arr[middle][1];
    }
  }
  return 0;
};

const haveCard = input[1]
  .split(' ')
  .sort((a, b) => a - b)
  .map(Number);

const isCard = input[3].split(' ').map(Number);

const arr = [[haveCard[0], 1]];

for (let i = 1; i < haveCard.length; i++) {
  if (haveCard[i - 1] === haveCard[i]) {
    arr[arr.length - 1][1]++;
  } else {
    arr.push([haveCard[i], 1]);
  }
}
const answer = isCard.map((v) => {
  return binarySearch(arr, v);
});

console.log(answer.join(' '));
/**
 * 각 케이스를 돌면서 최대값을 찾는 문제입니다.
 * DP문제이며, 
 */
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const T = parseInt(input[0]);
let idx = 1;


function Solution() {
  let ranges = [];
  let sum = 0;
  for(let t=0;t<T;t++) {
    const N = input[idx++];
    let arr = input[idx++].split(" ").map(Number);
    let start = 0, end = 0, max= arr[0], max_start=0, max_end=0;
    // console.log(arr)
    for(let i=1;i<N;i++) {
      if(arr[i] >= arr[i-1] + arr[i]) {
        start = end = i;
      } else {
        arr[i] = arr[i-1] + arr[i];
        end = i;
      }
      // console.log(max, arr[i], end);
      if(max < arr[i]) {
        max = arr[i];
        max_start = start;
        max_end = end;
      } else if(max == arr[i] && max_end - max_start > end-start) {
        max = arr[i];
        max_start = start;
        max_end = end;
      }
    }
    // console.log(max_end);
    sum += max;
    ranges.push([max_start+1, max_end+1]);

  }
  let str= `${sum}\n`
  ranges.forEach((item) => {
    str += item.join(" ")+"\n";
  })
  console.log(str.trim())
}

Solution();
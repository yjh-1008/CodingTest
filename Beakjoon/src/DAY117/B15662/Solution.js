const fs= require('fs');
const { arrayBuffer } = require('stream/consumers');
const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input.shift());
const arr = new Array(N);
for(let i=0;i<N;i++) {
  arr[i] = input.shift().split('').map(Number);
}


function Solution() {
  let M = parseInt(input.shift());
  let ret = 0;
  
  for(let i=0;i<M;i++) {
     const tmp = input.shift().split(' ').map(Number);
      let num = tmp[0]-1;
      let dir = tmp[1] === 1 ? true : false;

   
    let nowLeft = arr[num][6];
    let nowRight = arr[num][2];
    let left = num - 1;
    let right = num + 1;
    let leftClock = !dir
    let rightClock = !dir
     if(dir) {
      arr[num].unshift(arr[num].pop())
    }else {
      arr[num].push(arr[num].shift());
    }
    while (left > -1) {
      const prevRight = arr[left][2];
      if (prevRight === nowLeft) break;
      nowLeft = arr[left][6];
      if (leftClock) {
        arr[left].unshift(arr[left].pop())
      } else {
        arr[left].push(arr[left].shift())
      }
      leftClock = !leftClock
      left--;
    }
  
    while (right < N) {
      const nextLeft = arr[right][6];
      if (nextLeft === nowRight) break;
      nowRight = arr[right][2];
      if (rightClock) {
        arr[right].unshift(arr[right].pop())
      } else {
        arr[right].push(arr[right].shift())
      }
      rightClock = !rightClock
      right++;
    }
  }
  for(let i=0;i<N;i++) {
    if(arr[i][0] === 1) ret++
  }
  console.log(ret)
}

Solution();

const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
let arr = []
for(let i=1;i<=N;i++) {
  arr.push(input[i].split(' ').map(Number));
}

function get_distance(a,b) {
  return a>b ? a-b : b-a;
}

function Solution() {
  let ret = 0;

  arr.sort((a,b) => {
    if(a[0] === b[0]) return a[1]-b[1];
    else return a[0]-b[0];
  })
  let tmp = -Infinity
  for(let i=0;i<N;i++) {
    if(tmp <= arr[i][0]) {
      ret += get_distance(arr[i][0], arr[i][1]);
      tmp = arr[i][1];
      continue;
    }else {
      if(tmp < arr[i][1]) {
        ret += get_distance(arr[i][1], tmp);
        tmp = arr[i][1];
      }
      
    }

    
  }
  console.log(ret)
}

Solution();
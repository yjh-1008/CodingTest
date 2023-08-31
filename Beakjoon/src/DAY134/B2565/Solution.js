const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n').map(v=>v.split(' ').map(Number));
const N = input.shift();
const arr = input.sort((a,b)=>a[0] - b[0]);
function Solution() {
  const binarySearch = (lis, s, e, n) => {
    let mid;
    while(s < e) {
      mid = Math.floor((s+e)/2);
      if(lis[mid] < n) {
        s = mid+1
      }else {
        e = mid;
      }
    }
    return e;
  }

  const lis = [];
  let j=0;
  lis[0] = arr[0][1];
  for(let i=1;i<N;i++) {
    if(lis[j] < arr[i][1]) {
      lis[++j] = arr[i][1];
    } else {
      let idx = binarySearch(lis, 0, j, arr[i][1]);
      lis[idx] = arr[i][1];
    }
  }
  console.log(arr.length-lis.length)
}

Solution();
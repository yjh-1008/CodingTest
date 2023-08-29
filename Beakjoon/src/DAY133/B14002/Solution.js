const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>v.split(' ').map(Number));
const N = input.shift();
const arr = input.shift();
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
  const idxs = [];
  let j=0;
  lis[0] = arr[0];
  idxs[0] =  0;
  for(let i=1;i<N;i++) {
    if(lis[j] < arr[i]) {
      lis[++j] = arr[i];
      idxs[i] = j;
    } else {
      let idx = binarySearch(lis, 0, j, arr[i]);
      lis[idx] = arr[i];
      idxs[i] = idx;
    }
  }

  let max = Math.max(...idxs);
  let maxIdx = idxs.indexOf(max);
  let ret = [];
  for(let i=maxIdx; i>=0; i--) {
    if(idxs[i] === max) {
      ret.push(arr[i]);
      max--;
    } 
    if(max < 0) break;
  }
  console.log(ret.length)
  console.log(ret.reverse().join(' '))
}

Solution();
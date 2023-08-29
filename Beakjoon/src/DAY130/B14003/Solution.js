const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => v.split(' ').map(Number))
const [N] = input[0];
const arr = input[1];

function Solution() {

  const binarySearch = (lis, s, e, n) => {
    let mid;
    while(s<e) {
      
      mid = Math.floor((s+e)/2);
      // console.log(lis[mid], n)
      if(lis[mid] >= n) {
        e = mid;
      }else {
        s = mid+1;
      }
    }

    return e < 0 ? 0 : e;
  }

  let lis=[];
  let idxs=[];
  lis[0] = arr[0];
  idxs[0] = 0;
  let j = 0;
  for(let i=1; i<N; i++) {
    if(lis[j] < arr[i]) {
      lis[++j] = arr[i];
      idxs[i] = j;
    }else {
      let idx = binarySearch(lis, 0, j, arr[i]);
      
      lis[idx] = arr[i];
      idxs[i] = idx;
    }
  }
  
  let ret = [];
  let max = Math.max(...idxs), maxIdx = idxs.indexOf(max);
  for(let i=maxIdx;i>=0;i--) {
    if(max === idxs[i]) {
      ret.push(arr[i]);
      max--;
    }
    if(max < 0) break;
  }
  console.log(ret.length)
  console.log(ret.reverse().join(' '))
}


Solution();

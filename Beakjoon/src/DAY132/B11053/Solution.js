const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n').map((v)=>v.split(' ').map(Number));
const N = input.shift();
const arr = input.shift();
function Solution() {

  const binarySearch = (lis, s, e, n) => {
    let mid;
    while(s<e) {
      mid = Math.floor((s+e)/2);
      if(lis[mid] < n) {
        s = mid +1;
      } else {
        e = mid;
      }
    }
    return e;
  }

  let lis=[];
  let idxs=[];
  let j=0;
  lis[0] = arr[0];
  idxs[0] = 0;
  for(let i=1;i<N;i++) {
    if(lis[j] < arr[i]) {
      lis[++j] = arr[i];
    } else {
      let idx = binarySearch(lis, 0, j, arr[i]);
      lis[idx] = arr[i];
    }
  }
  console.log(lis.length)
}

Solution();
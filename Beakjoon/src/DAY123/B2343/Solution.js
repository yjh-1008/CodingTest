const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

const [N,M] = input.shift().split(' ').map(Number);
const arr = input[0].split(' ').map(Number);

function chk(mid,max) {
  let cnt = 0, tmp  =mid;
  if(max > mid ) return false;
  for(let i=0;i<N;i++) {
    if(mid - arr[i] < 0) {
      mid = tmp;
      cnt++;
    }
    mid -= arr[i];
  }
  if(tmp !== mid) cnt++;

  return M>=cnt;
}

function Solution() {
  let lt = 0, rt = 0, ret = Number.MAX_VALUE;
  let max = 0;
  arr.forEach((d) => {
    rt += d;
    max = Math.max(max, d);
  });
  
  while(lt<=rt) {
    let mid = Math.floor((lt+rt)/2);
    if(chk(mid, max)) {
      ret = Math.min(ret, mid);
      rt = mid-1;
    
    }else {
      lt = mid+1;
     
    }
  }
  console.log(ret)
}

Solution();
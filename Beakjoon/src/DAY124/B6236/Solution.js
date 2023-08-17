const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

function chk(mid) {
  let cnt = 0, tmp=0;
  for(let i=0;i<N;i++) {
    if(tmp+arr[i] > mid) {
      cnt++;
      tmp = arr[i]
    }else {
      tmp += arr[i];
    }
  }

  return M > cnt;
}

function Solution() {
  let lt=0, rt=0;
  let mv =0
  let ret = Number.MAX_VALUE;
  arr.forEach((d)=>mv = Math.max(d, mv));
  
  lt= mv, rt = mv * N+1
  while(lt<=rt) {
    let mid = Math.floor((lt+rt)/2);
    if(chk(mid)) {
      ret = Math.min(ret, mid);
      rt = mid-1;
    }else {
      lt = mid+1;
    } 
  }
  console.log(ret)
}

Solution();
const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

function chk(mid) {
  let cnt = 0;
  for(let i=0;i<M;i++) {
    cnt += parseInt(arr[i]/mid);
    if(arr[i]%mid) cnt++;
  }
  return N >= cnt;
}

function Solution() {
  let lt = 0, rt = 0;
  let ret = Number.MAX_VALUE;
  arr.sort((a, b)=> b-a);
  rt=arr[0]
  while(lt<=rt) {
    let mid = Math.floor((lt+rt)/2);
    // if(mid === 0) break;
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
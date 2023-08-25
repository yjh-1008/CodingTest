const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

const [N,M] = input.shift().split(' ').map(Number);
const arr = input[0].split(' ').map(Number);

function chk(mid) {
  let tmp = M;
  for(let i=0;i<M;i++) tmp += Math.floor(mid/arr[i]);
  return tmp >= N;
}

function Solution() {
  let lt = 0, rt= Number.MAX_VALUE, ret;
  while(lt<=rt) {
    let mid = Math.floor((lt+rt)/2);

    if(chk(mid)) {
      ret=mid;
      rt = mid-1;
    }else {
      lt = mid+1;
    }
  }
  let tmp = M;
  for(let i=0;i<M;i++ ) tmp += Math.floor((ret-1)/arr[i]);

  for(let i=0;i<M;i++) {
    if(ret % arr[i] === 0) tmp++;
    if(tmp === N) {
      console.log(i+1);
      break;
    }
  }
}

Solution();
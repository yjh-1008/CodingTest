const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

const [S, C] = input.shift().split(' ').map(Number);

const arr = input.map(Number)
let sum = 0;
arr.forEach((d) => sum += d);

function chk(mid) {
  let tmp =0, tmp2=0;;
  arr.forEach((v) => {
    let a = Math.floor(v/mid);
    tmp2 += v- (mid*a);
    tmp += a;
  });

  return [tmp, tmp2];
}

function Solution() {
  let lt = 0, rt = 1000000000;
  let ret = -1;
  while(lt<=rt) {
    let mid = Math.floor((lt+rt)/2);
  
    let [tmp, tmp2] = chk(mid);
    if(C <= tmp) {
      ret = mid
      lt = mid+1;
    }else {
      rt = mid-1;
    }

  }
  console.log(sum - ret * C)
}

Solution();
const fs = require('fs');
const arr = fs.readFileSync('./text.txt').toString().trim().split("\n").map(v=> v.split(" ").map(Number));
let dp = arr;
const items = new Array(5).fill(5);
let ret = Number.MAX_VALUE;
function rangeCheck(x, y,  t) {
  for(let i=x;i<=x+t;i++) {
    for(let j=y;j<=y+t;j++) {
      if(arr[i][j] === 0) return false;
    }
  }
  return true;
}


function fillRange(x, y, t, val) {
  for(let i=x;i<=x+t;i++) {
    for(let j=y;j<=y+t;j++) {
      arr[i][j] = val;
    }
  }
}

function Solution(cnt) {
  if(ret <= cnt) {
    return;
  }
  let chk = true;
  for(let i=0;i<10;i++) {
    for(let j=0;j<10;j++) {
      if(arr[i][j]) {
        chk = false;
        break;
      }
    }
  }

  if(chk) ret = Math.min(ret, cnt);

  for(let i=0;i<10;i++) {
    for(let j=0;j<10;j++) {
      if(arr[i][j]) {
        for(let t=4;t>=0;t--) {
          if(items[t] === 0) continue;
          if(i+t >= 10 || j+t >= 10) continue;
          if(rangeCheck(i, j, t)) {
            items[t] -= 1;
            fillRange(i, j, t, 0);

            Solution(cnt+1);

            items[t] +=1;
            fillRange(i, j, t, 1);
          }
        }
        return;
      }
    }
  }
}

Solution(0);

console.log(ret);

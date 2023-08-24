const fs = require('fs');
const [X,Y] = fs.readFileSync('./index.txt').toString().trim().split(' ').map(Number);

function Solution() {
  let z = Y*100/X;
  let ret = Number.MAX_VALUE;
  let lt =0, rt = 1000000000;
  while(lt<=rt) {
    let mid = Math.floor((lt+rt)/2);

    let tmp = Math.floor((Y+mid)*100 / (X+mid));
    if(tmp > z) {
      if(tmp > z){
        ret = Math.min(ret, mid);
      }
      rt = mid-1;
    }else {
      lt = mid+1;
    }
  }
  console.log(ret===Number.MAX_VALUE ? -1 : ret)
}

Solution();
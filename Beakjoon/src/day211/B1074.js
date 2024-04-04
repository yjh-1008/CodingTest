const fs = require('fs');
const [N, r, c]= fs.readFileSync('./text.txt').toString().trim().split(" ").map(Number);
const len = Math.pow(2, N);
let ans = 0;
const go =(x, y, size) => {
  if(x == c && y ==r) {
    console.log(ans);
    return;
  } else if(c<x+size && r < y+size && c >= x && r>=y) {
    const fl = Math.floor(size/2);
    go(x, y, fl);
    go(x+fl, y, fl);
    go(x, y+fl, fl);
    go(x+fl, y+fl, fl);
  }else {
    ans += size*size;
  }
}

const Solution =() => {
  go(0, 0, Math.pow(2, N));
}

Solution();
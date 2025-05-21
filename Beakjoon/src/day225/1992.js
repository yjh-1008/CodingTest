const { X509Certificate } = require('crypto');
const fs = require('fs');
const input = fs.readFileSync('./1992.txt').toString().trim().split("\n");

const N = input[0];
const arr = input.slice(1).map((str) => str.split(""));

(function Solution(){
  function go(y, x, size) {
    if(size === 1) return arr[y][x];
    const b = arr[y][x];
    let ret = "";
    for(let i=y;i<y+size;i++) {
      for(let j=x;j<x+size;j++) {
        if(b !== arr[i][j]) {
          const div = size/2;
          ret += '(';
          ret += go(y, x, div);
          ret += go(y, x+div, div);
          ret += go(y+div, x, div);
          ret += go(y+div, x+div, div);
          ret += ')';
          return ret;
        }
      }
    } 
    return arr[y][x]
  }
  console.log(go(0, 0, N));
}())
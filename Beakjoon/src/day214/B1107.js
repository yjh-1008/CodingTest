const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n")
const N = parseInt(input[0]);
const K = parseInt(input[1]);

// function bina
const broken_btn = new Array(11).fill(0);
function btn_set(i) {
  let tmp = i.split("");
  for(let j=0; j<tmp.length;j++) {
    if(broken_btn[tmp[j]]) {
      return false;
    }
  }
  return true;
}

function Solution() {
  if(N == 100) {
    console.log(0);
    return;
  }
  let arr;
  if(K ==0) {
    arr = [];
  } else {
    arr = input[2].split(" ").map(Number);
  }

  for(let i=0;i<arr.length;i++) {
    broken_btn[arr[i]] = 1;
  }
  let ret = Math.abs(N-100);
  for(let i=0;i<=1000000;i++) {
    if(btn_set(i.toString())) {
      let tmp = Math.abs(N-i) + i.toString().length;
      ret = Math.min(ret, tmp);
    }
  }
  console.log(ret)
}

Solution();
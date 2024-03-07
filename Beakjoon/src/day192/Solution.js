const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const r = parseInt(input[2]);
const tree =Array.from(new Array(54),()=> []);
let root;


function dfs(cur) {
  let ret = 0;
  let child = 0;
  for(let there of tree[cur]) {
    if(there  === r) continue;
    ret += dfs(there);
    child+=1;
  }
  if(child === 0) return 1;
  return ret;
}

function Solution() {
  for(let i=0;i<N;i++) {
    console.log(arr[i])
    if(arr[i] === -1) root = i;
    else tree[arr[i]].push(i);
  }
  if(root === r) return 0;
  return dfs(root);
}



console.log(Solution());
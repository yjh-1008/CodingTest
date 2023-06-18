const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
let N = parseInt(input.shift());
let arr = input.shift().split(' ').map(Number);
let r = parseInt(input.shift());
let adj = Array.from(new Array(54),()=> []);
let root;

function dfs(here) {
  let ret = 0;
  let child = 0;
  for(let there of adj[here]) {
    if(there === r) continue;
    ret += dfs(there);
    child++;
  }
  if(child === 0) return 1;
  return ret;
}

function Solution() {
  for(let i= 0;i<N;i++) {
    if(arr[i] === -1) root = i;
    else adj[arr[i]].push(i);
  }
  if(r === root) return 0;
  let ret = dfs(root);
  return ret;
}

console.log(Solution());
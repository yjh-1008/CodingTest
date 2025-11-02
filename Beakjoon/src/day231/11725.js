const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

const N = parseInt(input[0]);

const treeMap = new Map();

treeMap.set(1, null);

function find(x) {
  if(treeMap.get(x) === 1 || treeMap.get(x) === null) return true;
  else if(treeMap.get(x) === undefined) return false;
}
const tree = Array.from(Array(input.length+1), () => [])

for(let i=1;i<input.length;i++) {
  const [n, m] = input[i].split(" ").map(v=> parseInt(v));
  tree[n].push(m);
  tree[m].push(n);
}

let parentArr = Array(input.length+1).fill(0);
parentArr[1] = 1;


function dfs(cur) {
  for(let i=0;i<tree[cur].length;i++) {
    let child = tree[cur][i];

    if(parentArr[child]===0) {
      parentArr[child] = cur;
      dfs(child);
    }
  }
}

dfs(1);


console.log(parentArr.slice(2).join("\n").trim())
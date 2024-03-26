const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,V,E] = input[0].split(" ").map(Number);
const [K, C] = input[1].split(" ").map(Number);
const teams = input[2].split(" ").map(Number);
const location = input.slice(3).map(v => v.split(" ").map(Number));
let minKVal = Number.MAX_VALUE, minCVal = Number.MAX_VALUE;
function go(cur, arr, visited, sum) {
  if(cur == K) {
    minKVal = Math.min(minKVal, cur);
    return;
  }else if(cur == C) {
    minCVal = Math.min(minCVal, cur);
    return;
  }
  for(let i=0;i<=V;i++) {
    if(!visited[i] && arr[cur][i]) {
      visited[i] = true;
      go(i, arr,visited, sum+arr[cur][i]);
      visited[i] = false;
    }
  }
  return;
}


function Solution() {
  const arr = Array.from({length:1001},() => new Array(1001).fill(0));
  const visited = new Array(1001).fill(0);
  location.forEach((v) => {
    const [x,y, score] = v;
    arr[x][y] = score;
    arr[y][x] = score;
  })
  let ret = 0;
  
  teams.forEach((v) => {
    minKVal = Number.MAX_VALUE, minCVal = Number.MAX_VALUE;
    go(v,arr, visited,parseInt(0))
    if(minKVal === Number.MAX_VALUE) {
      ret += -1;
    } else {
      ret+= minKVal;
    }
    
    if(minCVal === Number.MAX_VALUE) {
      ret+= -1;
    } else {
      ret += minCVal
    }
  });
  console.log(ret);
}

Solution();
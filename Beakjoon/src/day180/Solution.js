const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,M,K] = input[0].split(" ").map(Number);
const jewels = input[1].split(" ").map(Number);
const dp = Array.from({length:12},() => Array.from({length:22},() => new Array(1<<13).fill(0)));

function dfs(bag, weight, visited) {
  if(bag === M) return 0;
  if(dp[bag][weight][visited]) {
    return dp[bag][weight][visited];
  }
  for(let i=0;i<N;i++) {
    //이미 방문했다면 x
    if(visited & (1<<i)) {
      continue;
    }
    if(weight < jewels[i]) {
      dp[bag][weight][visited] = Math.max(dp[bag][weight][visited], dfs(bag+1,K, visited ))
    } else {
      dp[bag][weight][visited] = Math.max(dp[bag][weight][visited], dfs(bag, weight-jewels[i], visited | (1<<i))+1);
    }
  }
  return dp[bag][weight][visited];
}

function Solution() {
  console.log(dfs(0, K,0));
}

Solution();
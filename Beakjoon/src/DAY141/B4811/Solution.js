const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n').map(Number);
// const N = parseInt(input.shift());
const dp = Array.from({ length: 31 }, () => Array.from({ length: 31 }).fill(0));
function Solution() {
  const go = (w, h) => {
    if(w === 0 && h===0) return 1;
    if(dp[w][h]) return dp[w][h];
    if(w) dp[w][h] += go(w-1, h+1);
    if(h) dp[w][h] += go(w, h-1);
    return dp[w][h];
  }
  input.forEach((day) => day && console.log(go(day, 0)));

}

Solution();
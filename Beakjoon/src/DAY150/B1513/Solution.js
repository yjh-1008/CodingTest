const fs = require('fs');
const input=  fs.readFileSync('./index.txt').toString().trim().split('\n');
let [N,M,C] = input[0].split(' ').map(Number);
const map = Array.from({length: 51}, ()=>new Array(51).fill(0));
const dp = Array.from({length: 51}, ()=> Array.from({length:51},()=> Array.from({length: 51},()=>new Array(51).fill(-1))));
const mod = 1000007;
function Solution() {
  for(let i=1;i<=C;i++) { //오락실이 기록이 됨.
    const [x,y] = input[i].split(' ').map(Number);
    map[x][y] = i;
  }
  let ret = [];
  const go = (x, y, cnt, prev) => {
    if(cnt < 0) return 0;
    if(x > N || y>M) return 0;
    if(x == N && y === M) {
      if(cnt === 0 && map[x][y] === 0) return 1;
      if(cnt === 1 && map[x][y] > prev) return 1;
      return 0;
    }
  
    if(dp[x][y][cnt][prev] != -1) return dp[x][y][cnt][prev];
    let answer;
    if(map[x][y] ===0) {
      answer = (go(x+1, y, cnt, prev)+ go(x, y+1, cnt, prev)) %mod;
      return   dp[x][y][cnt][prev]= answer;
    }
    if(map[x][y] >prev) {
      answer  = (go(x + 1, y, cnt - 1, map[x][y]) + go(x, y + 1, cnt - 1, map[x][y])) % mod;
      return dp[x][y][cnt][prev]= answer;
    }
    return  dp[x][y][cnt][prev] = 0;
  }

  for(let i=0;i<=C;i++) {
    ret.push(go(1,1,i, 0));
  }
  console.log(ret.join(' '));
}
Solution();
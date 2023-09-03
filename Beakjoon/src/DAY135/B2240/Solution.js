const fs = require('fs');
const [TW, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [T,W] = TW.split(' ').map(Number);
const input = inputs.map((el) => +el);
const dp = Array.from(Array(1004), ()=> Array.from(Array(2),()=>Array(34).fill(-1)));
function Solution() {
  const go = (idx,tree, cnt) => {
    //기저사례
    if(cnt < 0) return -1000000;
    if(idx === T) return cnt ===0 ? 0 :-1000000 
    //메모이제이션
    if (dp[idx][tree][cnt] !== -1) {
      return dp[idx][tree][cnt]
    }
    //로직
    dp[idx][tree][cnt] = Math.max(go(idx+1, tree, cnt), go(idx+1, tree? 0 : 1, cnt-1 )) + (tree == input[idx] -1 ? 1:0);
    
    return  dp[idx][tree][cnt]  
  }
   //초기화
  console.log(Math.max(go(0, 0, W), go(0,1, W-1)));
}

Solution()
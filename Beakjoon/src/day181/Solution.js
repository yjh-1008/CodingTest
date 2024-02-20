const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
let N = parseInt(input[0]);
let arr = input.slice(1, input.length).map(Number);
const sticks = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

const maxRet = [];

function get_min_str(a,b) {
  // console.log('a: ',a, 'b:',b);
  if(a.length === b.length) return a<b ? a :b;
  if(a.length < b.length) return a;
  return b;
}

function findMax(here) {
  let ret = "";
  if(here & 1) { ret += '7'; here-=3}
  while(here) {
    ret+='1';
    here-=2;
  };
  return ret;
}

// function to_string(n) {

// }

function Solution() {
  const T = N;
  let minRet = '1'.repeat(50)+'9';
  let dp = new Array(104).fill(minRet);
  // console.log(dp);
  dp[0] = ''
  for(let i=2;i<104;i++) {
    for(let j=0;j<=9;j++) {

      if(i-sticks[j] < 0) continue;
      if(j === 0 && dp[i-sticks[j]] === '') continue;

      // console.log(i);
      dp[i] = get_min_str(dp[i], dp[i-sticks[j]]+j.toString());
      // console.log(dp[i])
    }
  }
  for(let i=0;i<N;i++) {
    console.log(dp[arr[i]] +" "+findMax(arr[i]))
  }
  

}

Solution();
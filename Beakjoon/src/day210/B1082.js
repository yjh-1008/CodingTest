/**
 * 동전의 개수와 총 합으로 이루어진 2차원 배열을 만든다.
 * 동전의 개수만큼 배열을 순회하며 값을 비교, 가장 높은 값을 구한다.
 */
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
const max_sum = parseInt(input[2]);
const dp = Array.from({length: 51}).fill('');
let ret = '';
function bigger(str1, str2) {
  for(let i=0;i<str1.length;i++) {
    if(str1.charAt(i) > str2.charAt(i)) str1;
    else if(str1.charAt(i) < str2.charAt(i)) return str2;
  }
  return str1;
}

function Solution() {
  // '1'.char
  for(let i=0;i<=max_sum;i++) {
    for(let j=N-1;j>=0;j--) {
      if(i - arr[j] < 0) continue;

      for(let k=0; k<dp[i-arr[j]].length; k++) {

        // console.log(dp[i-arr[j]].charAt(k), j);
        if(dp[i-arr[j]].charAt(k) - '0' < j) {
          let tmp = dp[i-arr[j]].slice(0, k) + j.toString() + dp[i - arr[j]].slice(k);
          // console.log('before', dp[i-arr[j]], i, j)
          // console.log(tmp)
          if(tmp.length > dp[i].length) {
            dp[i] = tmp;
          } else if(dp[i].length == tmp.length){
            dp[i] = bigger(dp[i], tmp);
          }
        }
      }
      if (dp[i - arr[j]].length == 0 && j == 0)
          continue;
      let tmp = dp[i-arr[j]] + j.toString();
      if(tmp.length > dp[i].length) {
          dp[i] = tmp;
      } else if(dp[i].length == tmp.length){
        dp[i] = bigger(dp[i], tmp);
      }
    }
  }
  console.log(dp)
  if(dp[max_sum].length === 0) console.log(0);
  else console.log(dp[max_sum])
}

Solution();
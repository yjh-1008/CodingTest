const fs = require('fs');
const [A, B] = fs.readFileSync('./text.txt').toString().trim().split("\n");
const dp = Array.from({length:20}, () => Array.from({length: 20},  () => new Array(20).fill(0)));
const decimals = new Array(20).fill(false);
/*
* dp + 에라토스 테네스의 체 문제이다.
* 최대 넣을 수 있는 골은 18골의 배열로 이루어지고
* 상황을 정하는 변수는 18의 분기동안 골을 넣냐 안녛나의 문제.
* A가 골을 넣었다, B가 골을 넣었다, 둘다 골을 넣었다, 둘 다 골을 못넣었다.
*/

function Solution() {
  for(let i = 0; i < decimals.length; i++){
    decimals[i] = true; // boolean배열의 default값은 false이므로 true로 바꿔주기
  }
  decimals[0] = decimals[1] = false;
  for(let i = 2; i <= Math.sqrt(20); i++){ // 2부터 n의 제곱근까지의 모든 수를 확인
    if(decimals[i]){ // 해당수가 소수라면, 해당수를 제외한 배수들을 모두 false 처리하기
        for(let j = i*i; j<= 20; j += i){//그 이하의 수는 모두 검사했으므로 i*i부터 시작
          decimals[j] = false;
        }
    }
  }

  const percenA = A/100;
  const percenB = B/100;
  dp[0][0][0] = 1.0;
  for(let i=1;i<=18;i++) {
    for(let j=0;j<=i;j++) {
      for(let k=0;k<=i;k++) {
        if(j > 0) dp[i][j][k] += dp[i-1][j-1][k] * percenA * (1-percenB);
        if(k > 0) dp[i][j][k] += dp[i-1][j][k-1] * percenB * (1-percenA);
        if(j > 0 && k >0)  dp[i][j][k] += dp[i-1][j-1][k-1] * percenB * percenA;
        dp[i][j][k] += dp[i-1][j][k] * (1-percenA) * (1-percenB);
      }
    }
  }
  let ret = 0;
  // console.log(decimals[17]);
  for(let i=0;i<=18;i++) {
    for(let j=0;j<=18;j++) {
      if(decimals[i] || decimals[j]) ret += dp[18][i][j];
    }
  }
  console.log(ret)
}

Solution();
const fs = require('fs');
let N = parseInt(fs.readFileSync('./text.txt').toString().trim());
/**
 * DP + 완탐으로 진행
 * 0번 노드를 기준으로 순차적으로 연결.
 * 만약에 연결하려는 노드가 0번 노드에 연결되어 있는 노드보다 크다면 둘 다 커야함.
 * 반대로 작다면 둘 다 작아야함.
 */
const MOD = 987654321;
const Solution = () => {
  N /= 2;
  let arr = new Array(5001).fill(0);
  arr[0] = 1;
  for (let i = 1; i < N + 1; i++) {
    for (let j = 0; j < i; j++) {
        arr[i] += (arr[j] % MOD) * (arr[i - 1 - j] % MOD) % MOD;
        arr[i] %= MOD;
    }
    arr[i] %= MOD;
  }
  // console.log(arr);
  console.log(arr[N]);
}

Solution();
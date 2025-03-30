//3474
const fs = require('fs');

const input = fs.readFileSync('./text.txt').toString().trim().split("\n")
const N = input[0];

// function getFacto(n) {
//   if(n === 1) return 1;

//   return n * getFacto(n-1);
// }

function Solution() {
  const answer = [];
  for(let i=1;i<=N;i++) {
    const N = Number(input[i]);
    
    let facto = 0, num = 5;
    while(num <= N) {
      facto += Math.floor(N/num);
      num *= 5;
    }
    // console.log(facto);
    answer.push(facto);
  }

  console.log(answer.join("\n"))
}
Solution();
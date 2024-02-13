const fs = require('fs');
const input= fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = ['0', ...input[1].split(" ")];
const dp = Array.from({length:N+1}, () => new Array(N+1).fill(0));
const M = parseInt(input[2]);
const cmd = []
for(let i=3;i<input.length;i++) {
  cmd[i-3] = input[i].split(" ").map(Number);
}

// function isPalin(str, s, e) {
//   if(str === str[0].repeat(str.length)) {
//     return 1;
//   }
//   // if(dp[s][e-1] && str[s] )
//   let chk = 1;
//   let lt = 0, rt = str.length-1;
//   if(str.length %2 === 0) {
//     while(lt < rt) {
//       if(str[lt] !== str[rt]){
//         chk = 0;
//         break;
//       }
//       lt +=1 ;
//       rt-=1;
//     }
//   } else {
//     while(lt<=rt) {
//       if(str[lt] !== str[rt]){
//         chk = 0;
//         break;
//       }
//       lt +=1 ;
//       rt-=1;
//     }

//   }
//   return chk;
// }

function Solution() {
  for(let i=1;i<=N;i++) {
    dp[i][i] = 1;
    if(arr[i] === arr[i+1]) dp[i][i+1] = 1;
  }


  for(let i=2;i<=N;i++) {
    for(let j=1;j<=N-i;j++) {
      if(arr[j] === arr[j+i] && dp[j+1][j+i-1]) dp[j][j+i] =1;
    }
  }

  const ret = [];
  for(let i=0;i<M;i++) {
    const [s, e] = cmd[i];
    ret.push(dp[s][e])
  }
  console.log(ret.join("\n"));

}

Solution();
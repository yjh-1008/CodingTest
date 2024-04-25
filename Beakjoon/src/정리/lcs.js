const arr1="ABBBDAAA".split("");
const arr2="BADABBDBA".split("");
const dp = Array.from({length:arr1.length+1}, () => new Array(arr2.length+1).fill(0));



const lcs = () => {
  const N = arr1.length;
  const M = arr2.length;
  for(let i=1;i<=N;i++) {
    dp[i][0] = dp[i-1][0]+1;
  }

  for(let j=1;j<=M;j++) {
    dp[0][j] = dp[0][j-1]+1
  }
  // for(let i=0; i<M;i++) {
  //   if(arr1[0] === arr2[i]) {
  //     if(i==0) dp[0][0] = 1;
  //     else dp[0][i] = dp[0][i-1]+1;
  //   }
  // }


  for(let i=1;i<=N;i++) {
    for(let j=1;j<=M;j++) {
      if(arr1[i-1] === arr2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1])+1
      }
    }
  }
  console.log(dp[N][M]);
}

lcs()
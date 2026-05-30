function solution(triangle) {
    var answer = 0;
    
    const N = triangle.length;
    const dp = Array.from(new Array(N), () => new Array(triangle[N-1].length).fill(0));
    dp[0][0] = triangle[0][0]
    //7
    //10 15
    //18 16 16
    //20 25 20 20
    //24 30 27 26 25
    
    //dp[i][j] = Math.max(dp[i-1][j], dp[i][j]);

    for(let i=1;i<N;i++) {
        for(let j=0;j<triangle[i].length;j++) {
            const cur = triangle[i][j]
            if(j === 0) dp[i][j] = dp[i-1][j]+ cur;
            
            else dp[i][j] = Math.max(dp[i-1][j]+cur, dp[i-1][j-1]+cur);
        }
    }
    answer = Math.max(...dp[N-1])
    return answer;
}
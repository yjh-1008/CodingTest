package DAY10.뒤에있는큰수찾기;

import java.util.Stack;

public class Solution {
    static int answer = 0;

    public static int solution(int n) {
        int x = 1;
        int y = 2;
        int dp[] = new int[600001];
        dp[1] = 1;
        dp[2] = 2;
        for(int i=3;i<=n;i++) {
            dp[i] = (dp[i-1]+dp[i-2])%1000000007;
        }
        return dp[n];
    }


    public static void main(String[] args) {
        System.out.print(solution(4));
    }
}

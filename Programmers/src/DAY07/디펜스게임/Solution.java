package DAY07.디펜스게임;

public class Solution {
    static int answer = Integer.MAX_VALUE;
    public static void dp(int n, int k, int[] enemy, int round,int count) {
        System.out.println(n);
        if(n < enemy[count]) {
            if(k==0) {
                answer = Math.min(answer, round+1);
                return;
            }
            dp(n, k, enemy, round+1,count);
        }else{
            dp(n-enemy[round], k , enemy, round+1,count+1);
            dp(n, k-1, enemy, round+1,count);
        }
    }
    public static int solution(int n, int k, int[] enemy) {
        int answer = 0;
        long sum = 0;
        for(int s: enemy) {
            sum+=s;
        }
        if(k==enemy.length || n>=sum) return enemy.length;
        dp(n,k, enemy, 0,0);
        return answer;
    }
    public static void main(String args[]) {
        solution(7,3, new int[]{4,2,4,5,3,3,1});
    }
}

package DAY15.피로도;

import java.util.Arrays;

public class Solution {
    static int answer = -1;
    public static int dp(int k, int[][] dungeons, int count, boolean[] visited){

        if(k >= 0){
            answer = Math.max(answer, count);
        }
        for(int i=0;i< dungeons.length;i++) {
            if(visited[i]) continue;
            if(k - dungeons[i][0]  < 0) continue;
            visited[i] = true;
            dp(k-dungeons[i][1],dungeons, count+1, visited);
            visited[i] = false;
        }
        return 0;
    }

    public static int solution(int k, int[][] dungeons) {
        boolean[] visited = new boolean[dungeons.length];
        for(int i=0;i< dungeons.length;i++) {
            if(k-dungeons[i][1] <0) continue;
            if(k < k-dungeons[i][1]) continue;
            visited[i] = true;
            dp(k-dungeons[i][1], dungeons, 1, visited);
            visited[i] = false;
        }
        return answer;
    }
    public static void main(String[] args) {
        System.out.print(solution(
                80,
                new int[][]{
                        {80,20},
                        {50,40},
                        {30,10},
                }
                ));
    }
}

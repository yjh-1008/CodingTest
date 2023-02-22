package DAY25.B1103;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int toX[] = {0,0,-1,1}, toY[] = {1,-1,0,0};
    static int answer=0;
    static boolean flag = true;
    public static void dfs(String[][] arr, boolean[][] visited,int s, int e, int count,int[][] dp) {
        visited[s][e] = true;
        int mv = Integer.parseInt(arr[s][e]);
        dp[s][e] = count+1;
        for(int i=0;i<4;i++) {
            int mx = s+toX[i]*mv;
            int my = e+toY[i]*mv;
            if(mx <0 || mx>=arr.length || my<0 || my>=arr[0].length || arr[mx][my].equals("H")) {
                if(answer < count+1) answer = count+1;
            } else {
                if(visited[mx][my]){
                    flag = false;
                    return;
                }
                if(dp[mx][my] <= count+1){

                    dfs(arr, visited, mx,my, count+1,dp);
                }
            }
        }
        visited[s][e] = false;
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br =  new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int[][] dp = new int[n][m];
        String arr[][] = new String[n][m];
        boolean visited[][] = new boolean[n][m];
        String str[] = null;
        for(int i=0;i<n;i++) {
            str = br.readLine().split("");
            for(int j=0;j<m;j++) {
                arr[i][j] = str[j];
            }
        }

        dfs(arr, visited, 0,0,0,dp);
        System.out.println(flag?answer : -1);
    }
}

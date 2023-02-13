package DAY18.B2468;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int toX[] = {0,0,-1,1}, toY[] = {1,-1,0,0},answer=0,n;
    static boolean chk[][];
    public static void dfs(int[][] arr, int x, int y,int range) {
        chk[x][y] = true;
        for(int i=0; i<4; i++) {
            int mx = x+toX[i];
            int my = y+toY[i];
            if(mx >=0 && mx<n && my>=0 && my<n) {
                if(arr[mx][my] > range && !chk[mx][my]) {
                    dfs(arr, mx, my, range);
                }
            }
        }
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        n = Integer.parseInt(br.readLine());
        int arr[][] = new int[n][n];
        for(int i=0; i<n; i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<n;j++){
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        int area;
        for(int i=0;i<=100;i++) {
            area = 0;
            chk = new boolean[n][n];
            for(int j=0;j<n;j++) {
                for(int t=0; t<n; t++) {
                    if(arr[j][t] > i && !chk[j][t]) {
                        area++;
                        dfs(arr, j,t,i);
                    }
                }
            }
            answer = Math.max(area, answer);
        }

        System.out.print(answer);
    }
}

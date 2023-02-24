package DAY26.B9663;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    static int answer = 0;
    static int[][] mc = {{-1,1},{1,1},{1,-1},{-1,-1}};
    static boolean[][] chk;
    public static boolean attackQueen( int count, int i) {
        for(int j=0;j<chk.length;j++) {
            if(count !=j &&chk[j][i]) return false;
            if(i!=j && chk[count][j]) return false;
            for(int k[]: mc) {
                int mr = count+(k[0]*j);
                int mc = i+(k[1]*j);
                if(mr == count && i == mc) continue;
                if(mr < 0 || mr>=chk.length || mc<0 || mc>= chk.length) continue;
                if(chk[mr][mc]) return false;
            }
        }
        return true;
    }
    public static void dfs( int count, int n,int depth) {
        if(count == n){
            answer++;
            return;
        }
        for(int i=0;i<chk.length;i++) {
            if(chk[count][i]) continue;
            chk[count][i] = true;
            if(attackQueen(count, i)) dfs(count+1, n, depth+1);
            chk[count][i] = false;
        }

    }
    public static void main(String[] args)throws IOException {
        BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int arr[][] = new int[n][n];
        chk = new boolean[n][n];
        dfs (0,n,0);
        System.out.print(answer);
    }
}

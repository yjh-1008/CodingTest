package DAY27.B2580;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int[][] arr;
    static StringBuilder sb = new StringBuilder();
    public static boolean possible(int r, int c, int n) {
        for(int i=0;i<9;i++) {
            if(arr[r][i] == n) return false;
        }

        for(int i=0;i<9;i++) {
            if(arr[i][c] == n) return false;
        }

        int sr = (r/3) *3;
        int sc = (c/3)*3;

        for(int i=sr; i<sr+3;i++) {
            for(int j=sc; j<sc+3;j++) {
                if(arr[i][j] ==n) return false;
            }
        }

        return true;
    }
    public static void dfs( int r,int c) {
        if(c == 9) {
            dfs(r+1, 0);
            return;
        }

        if(r == 9) {
            for(int i=0;i<9;i++) {
                for(int j=0;j<9;j++) {
                    sb.append(arr[i][j]+" ");
                }
                sb.append("\n");
            }
            System.out.println(sb);
            System.exit(0);
            return;
        }

        if(arr[r][c] == 0) {
            for(int i=1;i<=9;i++) {
                if(possible(r,c,i)) {
                    arr[r][c] = i;
                    dfs(r, c+1);

                }
            }
            arr[r][c] = 0;
            return;
        }

        dfs(r, c+1);
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br =new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st ;
        arr = new int[9][9];
        for(int i=0;i<9;i++) {
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<9;j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        dfs(0,0);
    }
}

package DAY39.B1749;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static long prefix_sum(int i, int j, int x, int y,long[][] sum, long[][] arr) {
        return sum[x][y] - sum[i-1][y] - sum[x][j-1] + sum[i-1][j-1];
    }

    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        long arr[][] = new long[n+1][m+1];
        long sum[][] = new long[n+1][m+1];
        long answer = Long.MIN_VALUE;
        for(int i=1;i<=n;i++) {
            st = new StringTokenizer(br.readLine());
            for(int j=1;j<=m;j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
                sum[i][j] = sum[i-1][j]+sum[i][j-1]-sum[i-1][j-1]+arr[i][j];
            }
        }

        for(int i=1;i<=n;i++) {
            for(int j=1;j<=m;j++) {
                for(int x=i;x<=n;x++) {
                    for(int y=j;y<=m;y++) {
                        answer = Math.max(answer, prefix_sum(i,j,x,y, sum, arr));
                    }
                }
            }
        }

        System.out.print(answer);
    }
}

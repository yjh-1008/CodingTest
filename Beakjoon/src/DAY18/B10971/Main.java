package DAY18.B10971;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    static int arr[][];
    static int answer=Integer.MAX_VALUE;
    static int n;
    static boolean chk[];
    public static void solution(int start, int v, int count, int sum) {
        if(count == n-1 && arr[v][start] >0) {
            sum+= arr[v][start];
            answer = Math.min(answer, sum);
            return;
        }
        for(int i=1;i<=n;i++) {
            if(!chk[i] && arr[v][i] > 0) {
                chk[i] = true;
                solution(start, i, count+1, sum+arr[v][i]);
                chk[i] = false;
            }
        }
    }
    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
         n = Integer.parseInt(br.readLine());
        arr = new int[n+1][n+1];
        chk = new boolean[n+1];

        for(int i=1; i<=n;i++) {
            st = new StringTokenizer(br.readLine());
            for(int j=1; j<=n; j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        for(int i=1;i<=n;i++) {
            chk[i] = true;
            solution(i,i,0,0);
            chk[i] = false;
        }
        System.out.print(answer);
    }
}

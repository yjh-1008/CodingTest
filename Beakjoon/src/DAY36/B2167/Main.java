package DAY36.B2167;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {


    public static void main(String[] args)throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int [][] arr = new int[n+1][m+1];
        for(int i=1;i<=n;i++) {
            st = new StringTokenizer(br.readLine());
            for(int j = 1;j <=m;j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }





        int k = Integer.parseInt(br.readLine());

        for(int i=0;i<k;i++) {
            st = new StringTokenizer(br.readLine());
            int sx = Integer.parseInt(st.nextToken());
            int sy = Integer.parseInt(st.nextToken());
            int ex = Integer.parseInt(st.nextToken());
            int ey = Integer.parseInt(st.nextToken());
            int sum=0;
            for(int j=sx;j<=ex;j++) {
                for(int q=sy;q<=ey;q++) {
                    sum += arr[j][q];
                }
            }
            sb.append(sum).append("\n");
        }

        System.out.print(sb);
    }
}
